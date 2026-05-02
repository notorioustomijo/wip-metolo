import GlanceCard from "./GlanceCard";
import { glanceMetrics } from "./GlanceMetrics";

export default function Glances() {
    return(
        <section className="
            bg-[#392318]
            py-[5rem]
            px-[7.5rem]
            flex
            flex-col
            items-center
            gap-[2.5rem]
        ">
            <div className="
                flex
                flex-col
                items-center
                text-center
                gap-[0.75rem]
            ">
                <h2 className="
                    font-heading
                    font-bold
                    text-[2.5rem]
                    text-[#f8f5ef]
                    leading-tight
                ">
                    At a Glance
                </h2>
                <p className="
                    font-body
                    text-[1.125rem]
                    text-[#c5c1ba]
                    leading-normal
                ">
                    Numbers that tell a story of soil, satellites, 
                    and everything in between.
                </p>
            </div>
            <div className="
                grid
                grid-cols-3
                gap-[0.75rem]
                w-[80%]
            ">
                {glanceMetrics.map(glance => (
                    <GlanceCard 
                        value={glance.value}
                        label={glance.label}
                    />
                ))}
            </div>
        </section>
    )
}