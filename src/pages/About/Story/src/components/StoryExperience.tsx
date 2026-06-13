import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useStoryNavigation } from '../hooks/useStoryNavigation';
import { WorldCanvas } from './WorldCanvas';
import { GroundLine } from './GroundLine';
import { ChapterFrame } from './ChapterFrame';
import { chapters } from '../data/chapters';

import avatarCh1 from '../assets/avatars/toddler.svg';
import avatarCh2 from '../assets/avatars/preschooler.svg';
import avatarCh3 from '../assets/avatars/schooler.svg';
import avatarCh4 from '../assets/avatars/uni-student.svg';
import avatarCh5a from '../assets/avatars/scholar.svg';
import avatarCh5b from '../assets/avatars/safeguardian.svg';
import avatarCh5c from '../assets/avatars/artist.svg';
import avatarCh6 from '../assets/avatars/bigQuestion.svg';

const avatarMap: Record<string, string> = {
  ch1: avatarCh1, ch2: avatarCh2, ch3: avatarCh3, ch4: avatarCh4,
  ch5a: avatarCh5a, ch5b: avatarCh5b, ch5c: avatarCh5c,
  ch6: avatarCh6, ch7: avatarCh6,
};

const avatarHeightMap: Record<string, number> = {
  ch1: 52, ch2: 62, ch3: 72, ch4: 80,
  ch5a: 88, ch5b: 88, ch5c: 88, ch6: 88, ch7: 88,
};

const GROUND_HEIGHT = 140;
const AVATAR_GROUND_OFFSET = 60;

interface StoryExperienceProps {
  onExit?: () => void;
}

export function StoryExperience({ onExit }: StoryExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [vpWidth, setVpWidth] = useState(window.innerWidth);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setVpWidth(entry.contentRect.width);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const {
    currentChapter, phase, direction, isRewinding,
    isLast, canAdvance, canRetreat,
    advance, retreat, restart, onWorldTransitionDone,
  } = useStoryNavigation({ totalChapters: chapters.length });

  const chapterWidth = vpWidth;
  const totalWidth = chapters.length * chapterWidth;

  // Avatar position — computed inline so Framer Motion always gets the right
  // target on the same render. Handles forward, backward, and rewind.
  const avatarViewportX = (() => {
    if (phase === 'walking') {
      if (direction === 'backward') {
        // currentChapter already decremented — target its anchor
        return chapters[currentChapter].avatarAnchorX * vpWidth;
      }
      if (currentChapter === 0) return vpWidth;
      const next = chapters[currentChapter + 1];
      return next
        ? next.avatarAnchorX * vpWidth
        : chapters[currentChapter].avatarAnchorX * vpWidth;
    }
    return chapters[currentChapter].avatarAnchorX * vpWidth;
  })();

  const panTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phase === 'walking') {
      if (panTimerRef.current) clearTimeout(panTimerRef.current);
      // Rewind steps are faster so the reverse journey feels snappy
      const delay = isRewinding ? 500 : 800;
      panTimerRef.current = setTimeout(() => {
        onWorldTransitionDone();
      }, delay);
    }
    return () => {
      if (panTimerRef.current) clearTimeout(panTimerRef.current);
    };
  }, [phase, currentChapter, isRewinding]);

  if (vpWidth < 768) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-3 bg-[#F5F0E8] px-8 text-center">
        <p className="font-heading font-bold text-[1.5rem] text-[#5b3a29] leading-tight">
          This experience is best in landscape
        </p>
        <p className="font-body text-[#535250] text-[1rem] leading-normal">
          Rotate your device or open on a wider screen.
        </p>
        <a href="/about/bio" className="font-heading font-bold text-[#20422a] underline text-[1rem]">
          Read the bio instead →
        </a>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#F5F0E8]"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <WorldCanvas
        currentChapter={currentChapter}
        chapterWidth={chapterWidth}
        phase={phase}
        onPanComplete={() => {}}
      >
        {chapters.map((chapter, i) => (
          <ChapterFrame
            key={chapter.id}
            chapter={chapter}
            phase={i === currentChapter ? phase : 'idle'}
            onAdvance={advance}
            onRetreat={retreat}
            onRestart={restart}
            onExit={() => onExit?.()}
            canAdvance={canAdvance}
            canRetreat={canRetreat}
            isLast={isLast}
          />
        ))}
      </WorldCanvas>

      {currentChapter !== 0 && (
        <motion.div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{ width: totalWidth }}
          animate={{ x: -(currentChapter * chapterWidth) }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <GroundLine
            chapters={chapters}
            chapterWidth={chapterWidth}
            height={GROUND_HEIGHT}
          />
        </motion.div>
      )}

      <motion.div
        className="absolute z-20 pointer-events-none"
        style={{ bottom: AVATAR_GROUND_OFFSET }}
        animate={{ x: avatarViewportX }}
        transition={{ duration: isRewinding ? 0.4 : 4.0, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src={avatarMap[chapters[currentChapter].id]}
          alt=""
          style={{
            height: `${avatarHeightMap[chapters[currentChapter].id]}px`,
            width: 'auto',
          }}
        />
      </motion.div>

      {phase === 'arrived' && !isLast && (
        <motion.div
          className="absolute bottom-4 left-6 flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
            <span className="text-[1rem] text-[#535250] font-body">Press</span>
            <kbd className="px-1.5 py-0.5 border border-stone-300 rounded text-[16px] font-medium font-body bg-white text-[#535250]">←</kbd>
            <span className="text-[1rem] text-[#535250] font-body">to go back</span>
        </motion.div>
      )}
      {phase === 'arrived' && !isLast && (
        <motion.div
          className="absolute bottom-4 right-6 flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
            <span className="text-[1rem] text-[#535250] font-body">Press</span>
            <kbd className="px-1.5 py-0.5 border border-stone-300 rounded text-[16px] font-medium font-body bg-white text-[#535250]">→</kbd>
            <span className="text-[1rem] text-[#535250] font-body">to continue</span>
        </motion.div>
      )}
    </div>
  );
}