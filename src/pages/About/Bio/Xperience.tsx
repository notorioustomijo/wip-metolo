import { useState, useEffect, useRef } from 'react';
import XpCard from "./Xpcard";
import Timeline from './Timeline';
import { xpList } from "./XPList";
import chill from '../../../assets/chill-metolo.webp';
import about2 from '../../../assets/about2 (1).webp';
import about3 from '../../../assets/about3.webp';
import about4 from '../../../assets/about4.webp';
import about5 from '../../../assets/about5.webp';

const imageMap: Record<string, string> = {
    "2026": chill,
    "2025": about2,
    "2021": about3,
    "2019": about4,
    "2016": about5,
};

export default function Xperience() {
    const [activeYr, setActiveYr] = useState(xpList[0].yr);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const allExperiences = xpList.flatMap(group =>
        group.experiences.map(exp => ({ ...exp, yr: group.yr }))
    );

    const years = xpList.map(group => group.yr);

    const bottomImgRef = useRef<HTMLImageElement>(null);
    const topImgRef = useRef<HTMLImageElement>(null);
    const currentImageRef = useRef<string>(imageMap[xpList[0].yr] ?? chill);
    const animatingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const prevYrIndexRef = useRef(0);

    useEffect(() => {
        if (bottomImgRef.current) bottomImgRef.current.src = currentImageRef.current;
        if (topImgRef.current) {
            topImgRef.current.src = currentImageRef.current;
            topImgRef.current.style.transform = 'translateY(100%)';
            topImgRef.current.style.transition = 'none';
        }
    }, []);

    useEffect(() => {
        const observers = cardRefs.current.map((ref) => {
            if (!ref) return null;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveYr(ref.dataset.yr!);
                },
                { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
            );
            observer.observe(ref);
            return observer;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, []);

    useEffect(() => {
        const nextYrIndex = years.indexOf(activeYr);
        const direction = nextYrIndex > prevYrIndexRef.current ? 1 : -1; // 1 = down, -1 = up
        prevYrIndexRef.current = nextYrIndex;

        const nextImage = imageMap[activeYr];
        if (!nextImage || nextImage === currentImageRef.current) return;

        const top = topImgRef.current;
        const bottom = bottomImgRef.current;
        if (!top || !bottom) return;

        if (animatingTimer.current) clearTimeout(animatingTimer.current);

        top.src = nextImage;
        top.style.transition = 'none';
        top.style.transform = `translateY(${direction * 100}%)`;

        void top.offsetHeight;

        top.style.transition = 'transform 700ms cubic-bezier(0.76, 0, 0.24, 1)';
        top.style.transform = 'translateY(0%)';

        animatingTimer.current = setTimeout(() => {
            bottom.src = nextImage;
            top.style.transition = 'none';
            top.style.transform = `translateY(${direction * 100}%)`;
            currentImageRef.current = nextImage;
        }, 700);
    }, [activeYr]);

    return (
        <section className="
            bg-[#F8F5EF]
            px-6 md:px-12 xl:px-[7.5rem]
            py-12 xl:py-[7.5rem]
            flex
            flex-col xl:flex-row
            gap-10 xl:gap-[10rem]
        ">
            <div className="
                xl:sticky
                xl:top-[2rem]
                xl:self-start
                flex
                flex-col xl:flex-row
                gap-9 
            ">
                <div className="
                    flex
                    flex-col
                    gap-6 xl:gap-[2.5rem]
                    w-full xl:w-[27.875rem]
                ">
                    <div className="flex flex-col gap-2 xl:gap-[0.75rem]">
                        <h2 className="
                            font-heading
                            font-bold
                            leading-tight
                            text-[2rem] lg:text-[2.5rem]
                            text-[#5b3a29]
                        ">
                            Professional Experience
                        </h2>
                        <p className="
                            font-body
                            leading-normal
                            text-[1rem]
                            text-[#535250]
                        ">
                            14 years bridging conservation, governance, and innovation from
                            rural and urban fieldworks to global institutions across 70 countries.
                        </p>
                    </div>

                    {/* Image container */}
                    <div className="hidden xl:block relative w-[27.875rem] h-[22.375rem] overflow-hidden">
                        <img
                            ref={bottomImgRef}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                        <img
                            ref={topImgRef}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="hidden xl:block xl:sticky xl:top-[5rem] xl:ml-4 xl:self-start">
                    <Timeline years={years} activeYr={activeYr} />
                </div>
            </div>

            <div className="flex flex-col gap-6 xl:gap-[3rem] flex-1">
                {allExperiences.map((exp, index) => (
                    <div
                        key={index}
                        ref={el => { cardRefs.current[index] = el }}
                        data-yr={exp.yr}
                    >
                        <XpCard
                            duration={exp.duration}
                            role={exp.role}
                            company={exp.company}
                            worktags={exp.worktags}
                            desc={exp.desc}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}