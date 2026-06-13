import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { StoryPhase } from '../hooks/useStoryNavigation';

interface WorldCanvasProps {
    currentChapter: number
    chapterWidth: number //px = 100vw
    phase: StoryPhase
    onPanComplete: () => void
    children: ReactNode
}

/**
 * The wide horizontal canvas that pans left as chapters advance.
 * Width = totalChapters x 100vw.
 */
export function WorldCanvas({
    currentChapter,
    chapterWidth,
    phase,
    onPanComplete,
    children
}: WorldCanvasProps) {
    const targetX = -(currentChapter * chapterWidth);

    return (
        <motion.div
            className="absolute top-0 left-0 h-full flex"
            style={{ willChange: 'transform'}}
            animate={{ x: targetX}}
            transition={{
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1],
            }}
            onAnimationComplete={() => {
                // Only fire the callback during a walking transition, not on mount
                if (phase === 'walking') onPanComplete();
            }}
        >
            {children}
        </motion.div>
    )
}