import { useReducer, useEffect, useCallback } from 'react';
import type { StoryState, StoryAction, StoryPhase } from '../types';

function storyReducer(state: StoryState, action: StoryAction): StoryState {
  switch (action.type) {
    case 'ADVANCE':
      if (state.phase !== 'arrived') return state;
      return { ...state, phase: 'walking', direction: 'forward', isRewinding: false };

    case 'RETREAT':
      if (state.phase !== 'arrived' || state.currentChapter === 0) return state;
      return {
        currentChapter: state.currentChapter - 1,
        phase: 'walking',
        direction: 'backward',
        isRewinding: false,
      };

    case 'AVATAR_ARRIVED':
      if (state.phase !== 'walking') return state;
      return { ...state, phase: 'arrived' };

    case 'TRANSITION_DONE':
      if (state.phase !== 'walking') return state;
      if (state.direction === 'forward') {
        return { ...state, currentChapter: state.currentChapter + 1, phase: 'arrived' };
      }
      // backward — RETREAT already decremented, just arrive
      return { ...state, phase: 'arrived' };

    case 'REWIND_STEP': {
      if (!state.isRewinding) return state;
      const prev = state.currentChapter - 1;
      if (prev < 0) {
        return { ...state, currentChapter: 0, phase: 'arrived', isRewinding: false };
      }
      return { ...state, currentChapter: prev, phase: 'walking', direction: 'backward' };
    }

    case 'RESTART':
      return {
        currentChapter: action.totalChapters - 1,
        phase: 'walking',
        direction: 'backward',
        isRewinding: true,
      };

    case 'JUMP_TO':
      return { currentChapter: action.chapterIndex, phase: 'arrived', direction: 'forward', isRewinding: false };

    default:
      return state;
  }
}

interface UseStoryNavigationOptions {
  totalChapters: number;
}

export function useStoryNavigation({ totalChapters }: UseStoryNavigationOptions) {
  const [state, dispatch] = useReducer(storyReducer, {
    currentChapter: 0,
    phase: 'arrived',
    direction: 'forward',
    isRewinding: false,
  });

  const { currentChapter, phase, direction, isRewinding } = state;

  const isFirst = currentChapter === 0;
  const isLast = currentChapter === totalChapters - 1;
  const canAdvance = phase === 'arrived' && !isLast;
  const canRetreat = phase === 'arrived' && !isFirst;

  const advance = useCallback(() => {
    if (canAdvance) dispatch({ type: 'ADVANCE' });
  }, [canAdvance]);

  const retreat = useCallback(() => {
    if (canRetreat) dispatch({ type: 'RETREAT' });
  }, [canRetreat]);

  const onAvatarArrived = useCallback(() => {
    dispatch({ type: 'AVATAR_ARRIVED' });
  }, []);

  const onWorldTransitionDone = useCallback(() => {
    if (isRewinding) {
      dispatch({ type: 'REWIND_STEP' });
    } else {
      dispatch({ type: 'TRANSITION_DONE' });
    }
  }, [isRewinding]);

  const restart = useCallback(() => {
    dispatch({ type: 'RESTART', totalChapters });
  }, [totalChapters]);

  const jumpTo = useCallback((index: number) => {
    dispatch({ type: 'JUMP_TO', chapterIndex: index });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) return;
      if (e.key === 'ArrowRight' || e.key === 'Enter') advance();
      if (e.key === 'ArrowLeft') retreat();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [advance, retreat]);

  return {
    currentChapter, phase, direction, isRewinding,
    isFirst, isLast, canAdvance, canRetreat,
    advance, retreat, restart, jumpTo,
    onAvatarArrived, onWorldTransitionDone,
  };
}

export type { StoryPhase };