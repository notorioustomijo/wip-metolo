import { motion, AnimatePresence } from 'framer-motion';
import type { Chapter } from '../types';
import type { StoryPhase } from '../hooks/useStoryNavigation';

// Chapter content renderers — import them as you build each one
import { OnceUponATimeChapter } from './chapters/OnceUponATime';
import { NameRevealChapter } from './chapters/NameReveal';
import { KingdomsChapter } from './chapters/Kingdoms';
import { TimelineChapter } from './chapters/Timeline';
import { EducationChapter } from './chapters/Education';
import { PublicationsChapter } from './chapters';
import { ProjectsChapter } from './chapters';
import { ArtistChapter } from './chapters/Artist';
import { BigQuestionChapter } from './chapters/BigQuestion';
import { FamilyChapter } from './chapters/Family';
import { ClosingChapter } from './chapters/Closing';
import { GenericChapter } from './chapters/Generic';

interface ChapterFrameProps {
  chapter: Chapter;
  phase: StoryPhase;
  onAdvance: () => void;
  onRetreat: () => void;
  onRestart: () => void;
  onExit: () => void;
  canAdvance: boolean;
  canRetreat: boolean;
}

export function ChapterFrame({
  chapter,
  phase,
  onAdvance,
  onRetreat: _onRetreat,
  onRestart,
  onExit,
  canAdvance,
  canRetreat: _canRetreat,
}: ChapterFrameProps) {
  const isVisible = phase === 'arrived' || phase === 'walking';

  return (
    <div
      className="relative flex-shrink-0 h-full"
      style={{ width: '100vw' }}
    >
      {/* ── Chapter header ─────────────────────────────────────────── */}
      <div className="absolute top-5 left-6 z-10">
        <span className="text-[0.875rem] font-body font-semibold tracking-widest text-[#5b3a29] uppercase">
          {chapter.chapterLabel}
        </span>
        {chapter.subLabel && (
          <p className="text-[0.875rem] text-[#535250] leading-normal tracking-widest font-body uppercase mt-1">{chapter.subLabel}</p>
        )}
      </div>

      {/* ── Exit button ────────────────────────────────────────────── */}
      <button
        onClick={onExit}
        className="absolute cursor-pointer top-4 right-5 z-10 px-6 py-3 text-[1rem] border border-[#20422a] bg-[#f8f5ef] rounded-lg text-[#20422a] hover:bg-[#EFECE6] transition-colors font-heading font-bold text-[#20422a] leading-tight"
      >
        Exit
      </button>

      {/* ── Main content (fades in when arrived) ───────────────────── */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={chapter.id}
            className="absolute inset-0 flex items-start justify-start pt-16 lg:pt-20 px-6 lg:px-12"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ChapterContent
              chapter={chapter}
              onAdvance={onAdvance}
              onRestart={onRestart}
              canAdvance={canAdvance}
              phase={phase}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Content Router ───────────────────────────────────────────────────────────

interface ChapterContentProps {
  chapter: Chapter;
  onAdvance: () => void;
  onRestart: () => void;
  canAdvance: boolean;
  phase: StoryPhase; 
}

function ChapterContent({ chapter, onAdvance, onRestart, canAdvance, phase }: ChapterContentProps) {
  const nextButton = canAdvance ? (
    <button
      onClick={onAdvance}
      className="px-[1.5rem] py-[1rem] cursor-pointer bg-[#20422a] text-[#f8f5ef] text-[1rem] leading-tight font-heading font-bold rounded hover:bg-[#285836] transition-colors"
    >
      Next &gt;&gt;
    </button>
  ) : null;

  switch (chapter.content.type) {
    case 'once-upon-a-time':
      return <OnceUponATimeChapter content={chapter.content} nextButton={nextButton} />;

    case 'name-reveal':
      return <NameRevealChapter content={chapter.content} nextButton={nextButton} phase={phase}/>;

    case 'kingdoms':
      return <KingdomsChapter content={chapter.content} nextButton={nextButton} />;

    case 'timeline':
      return <TimelineChapter content={chapter.content} nextButton={nextButton} />;

    case 'education':
      return <EducationChapter content={chapter.content} nextButton={nextButton} />;

    case 'projects':
      return <ProjectsChapter content={chapter.content} nextButton={nextButton} />;

    case 'publications':
      return <PublicationsChapter content={chapter.content} nextButton={nextButton} />;

    case 'art':
      return <ArtistChapter content={chapter.content} nextButton={nextButton} />;
    
    case 'big-question':
      return <BigQuestionChapter content={chapter.content} nextButton={nextButton} />;

    case 'family':
      return <FamilyChapter content={chapter.content} nextButton={nextButton} />;

    case 'closing':
      return (
        <ClosingChapter
          content={chapter.content}
          onRestart={onRestart}
        />
      );

    default:
      return <GenericChapter content={chapter.content} nextButton={nextButton} />;
  }
}