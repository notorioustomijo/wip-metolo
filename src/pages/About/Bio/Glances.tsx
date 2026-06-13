import { useHeroAnimation } from "../../../hooks/useHeroAnimation";
import GlanceCard from "./GlanceCard";
import { glanceMetrics } from "./GlanceMetrics";

export default function Glances() {
    const animClass = useHeroAnimation('glances');

    return (
        <section className="
            bg-[#392318]
            py-12 lg:py-[5rem]
            px-6 md:px-12 lg:px-[7.5rem]
            flex
            flex-col
            items-center
            gap-10 lg:gap-[2.5rem]
        ">
            <div className={`flex flex-col items-center text-center gap-3 ${animClass}`}>
                <h2 className="
                    font-heading
                    font-bold
                    text-[2rem] md:text-[2.5rem]
                    text-[#f8f5ef]
                    leading-tight
                ">
                    At a Glance
                </h2>
                <p className="
                    font-body
                    text-[1rem] md:text-[1.125rem]
                    text-[#c5c1ba]
                    leading-normal
                ">
                    Numbers that tell a story of soil, satellites,
                    and everything in between.
                </p>
            </div>

            <div className={`
                grid
                grid-cols-2 md:grid-cols-3
                gap-3
                w-full
                ${animClass}
            `}>
                {glanceMetrics.map(glance => (
                    <GlanceCard
                        key={glance.label}
                        value={glance.value}
                        label={glance.label}
                    />
                ))}
            </div>
        </section>
    )
}