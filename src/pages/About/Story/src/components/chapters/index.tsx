import { type ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import type {
  NameRevealContent,
  KingdomsContent,
  TimelineContent,
  EducationContent,
  PublicationsContent,
  ProjectsContent,
  ArtContent,
  BigQuestionContent,
  ClosingContent,
  ChapterContent,
} from '../../types';

// Assets
import trees from '../../assets/trees.svg';
import huts from '../../assets/huts.svg';
import quote from '../../../../../../assets/quote-icon.svg';
import sign from '../../../../../../assets/metolo signature.svg';
import queshun from '../../assets/queshun.svg';
import shkola from '../../assets/shkola.svg';
import hiskul from '../../assets/high school.svg';
import cloud from '../../assets/cloud.svg';
import gallery from '../../assets/image-gallery.webp';
import lancuni from '../../assets/lanc-u.svg';
import kaiptc from '../../assets/kaiptc.svg';
import uflo from '../../assets/uflo.svg';
import phd from '../../assets/phd.webp';
import office from '../../assets/office.svg';
import tent from '../../assets/tent.svg';
import wild from '../../assets/wild.svg';

// ─── Chapter 1: Name Reveal ───────────────────────────────────────────────────

export function NameRevealChapter({
  content,
  nextButton,
  phase
}: {
  content: NameRevealContent;
  nextButton: ReactNode;
  phase: string
}) {
  const isExiting = phase === 'walking';

  return (
    <div className="relative w-[100vw] h-[90vh] flex justify-center items-center">

      {/* Growing ground line - starts at 0, animates to 45% width */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[8px] bg-[#20422A]"
        style={{ bottom: '32px' }}
        initial={{ width: 0 }}
        animate={{ width: isExiting ? '100vw' : '46%'}}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0}}
      />
      <div className="max-w-md flex flex-col gap-[2.5rem]">
        <div className="flex flex-col gap-1">
          <h1 className="text-[2rem] lg:text-[2.5rem] font-heading leading-tight font-bold text-[#5B3A29]">
            {content.name}
          </h1>
          <p className="font-body text-[1.125rem] leading-normal text-[#535250] italic">{content.pronunciation}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[1.125rem] font-heading leading-tight font-bold text-[#5B3A29]">{content.meaning}</p>
          <p className="text-4 text-[#535250] font-body leading-normal">{content.bio}</p>
        </div>
        {nextButton}
      </div>
    </div>
  );
}

// ─── Chapter 2: Kingdoms ──────────────────────────────────────────────────────

export function KingdomsChapter({
  content,
  nextButton,
}: {
  content: KingdomsContent;
  nextButton: ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-50 items-start">
      <div className="flex flex-col gap-4 w-[50%] lg:w-[80%] lg:max-w-lg">
        <h2 className="text-[2rem] lg:text-[2.5rem] font-heading font-bold text-[#5B3A29] leading-tight">
          {content.title}
        </h2>
        <p className="text-[1rem] text-[#535250] font-body leading-normal mb-2">{content.body}</p>
        {nextButton}
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lg:gap-32 w-full mt-6 lg:mt-0">
        {content.imageUrl && (
          <img
            src={content.imageUrl}
            alt="Kingdom crest"
            className="mt-10 w-[12rem] lg:w-[17.75rem] h-auto lg:h-[22.9375rem] object-cover rounded shadow-md flex-shrink-0"
          />
        )}

        <div className="
          flex flex-col gap-[0.75rem] items-end
          bg-[#fff] p-[1.5rem]
          border-t-3 border-[#C8A968]
          w-[50%] lg:w-[20rem]
          flex-shrink-0 rounded-lg self-start
          ml-[40%] lg:ml-0
          z-15 mt-1 xl:mt-100 
        ">
          <div className="flex flex-col items-start gap-[0.75rem]">
            <img src={quote} className="h-[2rem]" />
            <p className="font-heading italic text-[1.125rem] leading-normal text-[#5b3a29]">
              {content.quote}
            </p>
          </div>
          <img src={sign} className="h-[3.5rem]" />
        </div>
      </div>

      <img src={trees} className="absolute bottom-20 left-4 hidden lg:block" />
      <img src={huts} className="absolute bottom-18 right-4 hidden lg:block" />
    </div>
  );
}

// ─── Chapter 3: Timeline ──────────────────────────────────────────────────────

export function TimelineChapter({
  content,
  nextButton,
}: {
  content: TimelineContent;
  nextButton: ReactNode;
}) {
  return (
    <div className="h-[80vh] w-[100vw] flex justify-center">
      <div>
        <img src={queshun} alt="" className="hidden lg:block absolute top-8 right-250 z-0" />
        <img src={queshun} alt="" className="hidden lg:block absolute top-40 z-0" />
        <img src={queshun} alt="" className="hidden lg:block absolute top-56 right-180 z-0" />
      </div>
      <div className="max-w-xl pt-10 flex flex-col gap-[2.5rem] z-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-heading leading-tight font-bold text-[#3B2315] mb-2">{content.title}</h2>
          <p className="text-4 text-[#535250] font-body leading-normal">{content.subtitle}</p>
        </div>

        <div className="space-y-6">
          {content.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/70 bg-white rounded-lg p-6 border-l-[3px] border-[#c8a968] shadow-[0_4px_20px_rgba(32,66,42,0.06)] font-body text-[#5b3a29] text-[1.125rem] leading-normal"
            >
              <span>{i === 0 ? '✏️' : i === 1 ? '🥉' : '📖'}</span>
              <span>
                <strong>{item.age}:</strong> {item.text}
              </span>
            </div>
          ))}
        </div>

        <img src={shkola} alt="" className="hidden md:block absolute bottom-16 left-12" />
        <img src={hiskul} alt="" className="hidden md:block absolute bottom-20 right-10" />

        {nextButton}
      </div>
    </div>
  );
}

// ─── Chapter 4: Education ─────────────────────────────────────────────────────

export function EducationChapter({
  content,
  nextButton,
}: {
  content: EducationContent;
  nextButton: ReactNode;
}) {
  return (
    <div className="h-[80vh] w-[100vw] flex justify-center">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[2rem] lg:text-[2.5rem] text-[#5b3a29] leading-tight font-heading font-bold">
              {content.title}
            </h2>
            <p className="text-[1rem] text-[#535250] leading-normal font-body">
              {content.subtitle}
            </p>
          </div>

          <div className="flex gap-[1.5rem]">
            <a
              href="/resume"
              className="text-[#20422a] font-heading font-bold text-[1rem] leading-tight px-[1.5rem] py-[1rem] border border-[#20422a] rounded-lg bg-[#f8f5ef] hover:bg-[#EFECE6] transition-colors"
            >
              View All Certificates
            </a>
            {nextButton}
          </div>
        </div>

        <div className="flex gap-[2.5rem] lg:gap-[5rem] min-w-[800px]">
          <div className="flex flex-col items-center gap-3 max-w-sm mt-80">
            <img src={lancuni} alt="" className="w-[17.5rem] h-[6.875rem]" />
            <div className="flex flex-col gap-2 w-[70%] lg:w-full">
              <h3 className="font-heading font-bold text-[1rem] lg:text-[1.125rem] text-center text-[#5b3a29] leading-tight">
                {content.degrees[0].degree}
              </h3>
              <p className="font-body text-[#535250] text-[0.875rem] lg:text-[1rem] text-center leading-normal">
                {content.degrees[0].focus}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 max-w-sm mt-50">
            <img src={kaiptc} alt="" className="w-[17.5rem] h-[6.875rem]" />
            <div className="flex flex-col gap-2 w-[70%] lg:w-full">
              <h3 className="font-heading font-bold text-[1rem] lg:text-[1.125rem] text-center text-[#5b3a29] leading-tight">
                {content.degrees[1].degree}
              </h3>
              <p className="font-body text-[#535250] text-[0.875rem] lg:text-[1rem] text-center leading-normal">
                {content.degrees[1].focus}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 max-w-sm">
            <img src={uflo} alt="" className="w-[17.5rem] h-[6.875rem]" />
            <div className="flex flex-col gap-2 w-[70%] lg:w-full">
              <h3 className="font-heading font-bold text-[1rem] lg:text-[1.125rem] text-center text-[#5b3a29] leading-tight">
                {content.degrees[2].degree}
              </h3>
              <p className="font-body text-[#535250] text-[0.875rem] lg:text-[1rem] text-center leading-normal">
                {content.degrees[2].focus}
              </p>
            </div>
            <img src={phd} alt="" className="w-[20rem]" />
          </div>
        </div>


      </div>
    </div>
  );
}

// ─── Chapter 5a: Publications ─────────────────────────────────────────────────

export function PublicationsChapter({
  content,
  nextButton,
}: {
  content: PublicationsContent;
  nextButton: ReactNode;
}) {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] gap-10 items-center">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="font-heading font-bold leading-tight text-[#5b3a29] text-[2rem] lg:text-[2.5rem]">
          {content.title}
        </h2>
        <p className="text-[#535250] text-[1rem] font-body leading-normal">
          {content.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 w-[90vw]">
        {content.items.map(item => (
          <a href={item.url} key={item.title}>
            <div className="flex flex-col gap-[0.5rem] p-[1rem] rounded-lg shadow-[0_4px_18px_rgba(0,0,0,0.15)] bg-[#fff] hover:bg-[#FCFBF8] h-full">
              <p className="font-body text-[0.75rem] text-[#5b3a29] leading-normal">{item.kind}</p>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-[1rem] text-[#5b3a29] leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-[#535250] text-[0.75rem] leading-normal">{item.author}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex gap-[1.5rem]">
        <a
          href="/work?tab=Research#all-work"
          className="font-heading font-bold leading-tight text-[#20422a] text-[1rem] border border-[#20422a] rounded-lg px-[1.5rem] py-[1rem] bg-[#f8f5ef] hover:bg-[#EFECE6] transition-colors"
        >
          View All Publications
        </a>
        {nextButton}
      </div>
    </div>
  );
}

// ─── Chapter 5b: Projects ─────────────────────────────────────────────────────

export function ProjectsChapter({
  content,
  nextButton,
}: {
  content: ProjectsContent;
  nextButton: ReactNode;
}) {
  const [activeNode, setActiveNode] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-[4rem] lg:gap-[8rem] items-center h-[100vh] w-[100vw]">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="font-heading font-bold text-[2.5rem] leading-tight text-[#5b3a29]">
          {content.title}
        </h2>
        <div className="flex gap-10">
          {content.stats.map((stat, i) => (
            <div key={i} className="flex gap-1 items-baseline">
              <p className="font-bold font-heading text-[1.5rem] text-[#5b3a29] leading-tight">{stat.value}</p>
              <p className="font-body text-[0.875rem] text-[#535250] leading-normal">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative w-[80%] flex flex-col gap-0">

        {/* Labels row — same column widths as nodes */}
        <div className="flex w-full mb-4">
          {content.nodes.map((_node, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1"
              style={{ width: `${100 / content.nodes.length}%` }}
            >
              <span className="font-heading font-bold text-[1rem] text-[#5b3a29] leading-tight text-center">
                {node.name}
              </span>
              <span className="font-body text-[0.75rem] text-[#535250] text-center">
                {node.location}
              </span>
            </div>
          ))}
        </div>

        {/* Track pill */}
        <div className="relative bg-[#F1EADB] rounded-full flex items-center" style={{ height: '3.5rem' }}>
          {/* Track line */}
          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-[2px] bg-[#c8a968] rounded-full" />

          {/* Nodes — same column widths as labels */}
          <div className="relative w-full flex">
            {content.nodes.map((node, i) => (
              <button
                key={i}
                onClick={() => setActiveNode(activeNode === i ? null : i)}
                className="relative z-10 flex items-center justify-center cursor-pointer"
                style={{ width: `${100 / content.nodes.length}%` }}
              >
                <div className={`
                  w-4 h-4 rounded-full border-2 border-[#c8a968] transition-all duration-200
                  ${activeNode === i
                    ? 'bg-[#c8a968] scale-125'
                    : 'bg-[#F1EADB] hover:bg-[#c8a968]/40'
                  }
                `} />
              </button>
            ))}
          </div>
        </div>

        {/* Detail card */}
        <div className="min-h-[7rem] mt-4">
          {activeNode !== null && (
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg p-5 shadow-[0_4px_20px_rgba(32,66,42,0.08)] border-l-[3px] border-[#c8a968] max-w-xs"
              style={{
                marginLeft: `clamp(0px, calc(${(activeNode / (content.nodes.length - 1)) * 100}% - 8rem), calc(100% - 16rem))`,
              }}
            >
              <p className="font-heading font-bold text-[1rem] text-[#5b3a29] leading-tight mb-1">
                {content.nodes[activeNode].title}
              </p>
              <p className="font-body text-[0.75rem] text-[#535250] leading-normal mb-3">
                {content.nodes[activeNode].location}
              </p>
              <a
                href={content.nodes[activeNode].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold underline text-[0.875rem] text-[#20422a] leading-tight hover:text-[#285836] transition-colors"
              >
                View Project
              </a>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex gap-[1.5rem]">
        <a
          href="/work?tab=Projects#all-work"
          className="font-heading font-bold leading-tight text-[#20422a] text-[1rem] border border-[#20422a] rounded-lg px-[1.5rem] py-[1rem] bg-[#f8f5ef] hover:bg-[#EFECE6] transition-colors"
        >
          View All Projects
        </a>
        {nextButton}
      </div>

      <img src={office} alt="" className="hidden lg:block absolute bottom-20 left-50" />
      <img src={tent} alt="" className="hidden lg:block absolute bottom-32" />
      <img src={wild} alt="" className="hidden lg:block absolute bottom-16 right-6" />
    </div>
  );
}

// ─── Chapter 5c: Artist ───────────────────────────────────────────────────────

export function ArtistChapter({
  content,
  nextButton,
}: {
  content: ArtContent;
  nextButton: ReactNode;
}) {
  return (
    <div className="flex flex-col items-end h-[100vh] w-[100vw] gap-[3.5rem]">
      <img src={gallery} alt="" className="w-full max-w-[67.5rem] h-[13.75rem] object-cover" />

      <div className="flex flex-col gap-10 w-full lg:max-w-[50%] px-8 lg:px-0">
        <div className="flex flex-col gap-4">
          <p className="text-[1rem] text-[#535250] leading-normal font-body">{content.title}</p>
          <h2 className="font-heading font-bold text-[2.5rem] text-[#5b3a29] leading-tight">
            {content.description}
          </h2>
        </div>

        <div className="flex gap-6">
          <a
            href={content.shopUrl}
            className="font-heading font-bold text-[#20422a] text-[1rem] leading-tight px-[1.5rem] py-[1rem] border border-[#20422a] rounded-lg bg-[#f8f5ef] hover:bg-[#EFECE6]"
          >
            View All Artwork
          </a>
          {nextButton}
        </div>
      </div>
    </div>
  );
}

// ─── Chapter 6: Big Question ──────────────────────────────────────────────────

export function BigQuestionChapter({
  content,
  nextButton,
}: {
  content: BigQuestionContent;
  nextButton: ReactNode;
}) {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <img src={cloud} alt="" className="hidden lg:block absolute top-40 left-80" />
      <img src={cloud} alt="" className="absolute top-[30%] left-[10%]" />
      <img src={cloud} alt="" className="hidden lg:block absolute top-65 right-[180px]" />
      <img src={cloud} alt="" className="absolute top-[20%] right-[10%]" />
      <img src={cloud} alt="" className="absolute top-4 left-[40%]" />

      <div className="flex flex-col gap-10 max-w-lg z-10">
        <div className="flex flex-col gap-4">
          <p className="text-[1rem] text-[#535250] leading-normal font-body">{content.preamble}</p>
          <h2 className="font-heading font-bold text-[2.5rem] text-[#5b3a29] leading-tight">
            {content.question}
          </h2>
        </div>
        {nextButton}
      </div>
    </div>
  );
}

// ─── Chapter 7: Closing ───────────────────────────────────────────────────────

export function ClosingChapter({
  content,
  onRestart,
}: {
  content: ClosingContent;
  onRestart: () => void;
}) {
  return (
    <div className="flex justify-center items-center h-[80vh] w-[100vw]">
      <div className="flex flex-col items-center text-center w-full max-w-full mx-auto">
        <div className="flex flex-col gap-2">
          <h2 className="text-[2.5rem] font-heading font-bold leading-tight text-[#5b3a29]">{content.title}</h2>
          <p className="text-[1rem] text-[#535250] font-body leading-normal">{content.subtitle}</p>
        </div>

        {content.photoUrl && (
          <img src={content.photoUrl} alt="Profile" className="w-full max-w-[32rem] h-auto max-h-[38rem] object-cover" />
        )}

        <div className="flex justify-center items-center gap-6 w-full">
          {content.ctas.map((cta, i) => {
            if (cta.action === 'restart') {
              return (
                <button
                  key={i}
                  onClick={onRestart}
                  className="text-[1rem] cursor-pointer underline text-[#20422a] font-heading font-bold leading-tight hover:text-[#285836] transition-colors"
                >
                  {cta.label}
                </button>
              );
            }

            if (cta.variant === 'primary') {
              return (
                <a
                  key={i}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-[1.5rem] py-[1rem] bg-[#20422a] text-[#f8f5ef] text-[1rem] leading-tight font-heading font-bold rounded hover:bg-[#285836] transition-colors"
                >
                  {cta.label}
                </a>
              );
            }

            return (
              <a
                key={i}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-[1rem] border border-[#20422a] bg-[#f8f5ef] rounded-lg text-[#20422a] hover:bg-[#EFECE6] transition-colors font-heading font-bold leading-tight"
              >
                {cta.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Generic fallback ─────────────────────────────────────────────────────────

export function GenericChapter({
  content,
  nextButton,
}: {
  content: ChapterContent;
  nextButton: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <pre className="text-xs text-stone-400 mb-4">{JSON.stringify(content, null, 2)}</pre>
      {nextButton}
    </div>
  );
}