// Chapter Content Variants

export interface NameRevealContent {
    type: 'name-reveal'
    name: string
    pronunciation: string
    meaning: string
    bio: string
}

export interface KingdomsContent {
    type: 'kingdoms'
    title: string
    body: string
    quote: string
    imageUrl: string
}

export interface TimelineContent {
    type: 'timeline'
    title: string
    subtitle: string
    items: {
        age: string
        text: string
    }[]
}

export interface EducationContent {
    type: 'education'
    title: string
    subtitle: string
    degrees: {
        institution: string
        degree: string
        year: string
        focus: string
    }[]
}

export interface PublicationsContent {
    type: 'publications'
    title: string
    subtitle: string
    items: {
        kind: string
        title: string
        author: string
        url: string
    }[]
}

export interface ProjectsContent {
    type: 'projects'
    title: string
    stats: {
        label: string
        value: string
    }[]
    nodes: {
        name: string
        location: string
        url: string
        title: string
    }[]
}

export interface ArtContent {
    type: 'art'
    title: string
    subtitle: string
    description: string
    shopUrl?: string
}

export interface BigQuestionContent {
    type: 'big-question'
    preamble: string
    question: string
}

export interface ClosingContent {
    type: 'closing'
    title: string
    subtitle: string
    photoUrl: string
    ctas: {
        label: string
        href?: string
        action?: 'restart' | 'external'
        variant: 'primary' | 'secondary' | 'link'
    }[]
}

export type ChapterContent = 
    | NameRevealContent
    | KingdomsContent
    | TimelineContent
    | EducationContent
    | PublicationsContent
    | ProjectsContent
    | ArtContent
    | BigQuestionContent
    | ClosingContent


// —————— Ground Line Variants ———————————————————
export type GroundVariant = 
    | 'flat'  // straight horizontal
    | 'rising' // slopes upward left -> right
    | 'hill'    // rises then falls
    | 'valley'  // falls then rises
    | 'descending'  // slopes downwards
    | 'sky';        // no ground (clouds chapter)


// ————— Chapter Definition ————————————————————————
export interface Chapter {
    id: string
    chapterLabel: string    // e.g. "CHAPTER 1: THE NAME"
    subLabel?: string       // e.g. "-> SUBCHAPTER A: THE SCHOLAR"
    content: ChapterContent
    avatarAnchorX: number       // 0 - 1, where in this chapter the avatar stops
    groundVariant: GroundVariant
    bgDecorations?: string[]        // optional list of decoration keys (trees, huts, etc)
}


// ————— Story State Machine ————————————————————————
export type StoryPhase = 
    | 'idle'        // at start, nothing happening
    | 'walking'     // avatar is in motion, world is panning
    | 'arrived'     // avatar reached anchor, content is visible
    | 'transitioning'   // brief lockout between chapters

export interface StoryState {
    currentChapter: number
    phase: StoryPhase
}

export type StoryAction =
    | { type: 'ADVANCE' }
    | { type: 'RETREAT' }
    | { type: 'AVATAR_ARRIVED' }
    | { type: 'TRANSITION_DONE' }
    | { type: 'RESTART' }
    | { type: 'JUMP_TO'; chapterIndex: number}