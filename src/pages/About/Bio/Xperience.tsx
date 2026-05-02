import { useState, useEffect, useRef } from 'react';
import XpCard from "./Xpcard";
import Timeline from './Timeline';
import { xpList } from "./XPList"
import time from '../../../assets/time-metolo.webp';

export default function Xperience() {
    const [activeYr, setActiveYr] = useState(xpList[0].yr);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Flatten all experiences, keeping yr attached
    const allExperiences = xpList.flatMap(group => group.experiences.map(
        exp => ({ ...exp, yr: group.yr })
    ));

    const years = xpList.map(group => group.yr);

    useEffect(() => {
        const observers = cardRefs.current.map((ref) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveYr(ref.dataset.yr!);
                    }
                },
                { rootMargin: '-10% 0px -80% 0px', threshold: 0}
            );

            observer.observe(ref);
            return observer;
        });

        return () => observers.forEach(o => o?.disconnect());

    }, []);


    return (
        <section className="
            bg-[#F8F5EF]
            px-[7.5rem]
            py-[5rem]
            flex
            gap-[10rem]
        ">
            <div className="
                sticky
                top-[2rem]
                self-start
                flex
                gap-[10rem]
            ">

                {/* Left info block */}
                <div className="
                    flex
                    flex-col
                    gap-[2.5rem]
                    w-[27.875rem]
                ">
                    <div className="
                        flex
                        flex-col
                        gap-[0.75rem]
                    ">
                        <h2 className="
                            font-heading
                            font-bold
                            leading-tight
                            text-[2.5rem]
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
                            village fieldwork to global institutions across 70 countries.
                        </p>
                    </div>
                    <img
                        src={time}
                        className="
                            w-[27.875rem]
                            h-[22.375rem]
                        "
                    />
                </div>

                {/* Timeline */}
                <div className="
                    sticky
                    top-[5rem]
                    self-start
                ">
                    <Timeline years={years} activeYr={activeYr} />
                </div>
            </div>

            {/* Experience Cards */}
            <div className="
                flex
                flex-col
                gap-[3rem]
                flex-1
            ">
                {allExperiences.map((exp, index) => (
                    <div
                        key={index}
                        ref={el => {cardRefs.current[index] = el}}
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
    )
}