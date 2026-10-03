import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import { logos } from './logos';


// Duplicated so the track can loop seamlessly at -50%
const track = [...logos, ...logos];

export default function TrustedBy() {
    const animClass = useHeroAnimation('trusted-by');

    return (
        <section className={`
            bg-[#392318]
            py-10
            flex
            flex-col
            justify-center
            items-center
            group
            ${animClass}
        `}>
            <p className="
                text-center
                font-heading
                text-[0.8125rem]
                text-[#C9B8AC]
                uppercase
                tracking-[0.08em]
                mb-6
                font-bold
            ">
                Trusted By
            </p>

            {/* Viewport: fixed contained width, clips + masks the track */}
            <div
                className="relative w-full max-w-3xl overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 95%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 95%, transparent 100%)',
                }}
            >
                {/* Track: scrolls freely, width determined by content */}
                <div className="
                    flex
                    w-max
                    gap-16
                    [animation:marquee_30s_linear_infinite]
                    group-hover:[animation-play-state:paused]
                ">
                    {track.map((logo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 h-12 flex items-center justify-center"
                        >
                            {logo.src
                                ? <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain" loading="lazy" />
                                : <div className="h-8 w-20 bg-[#F8F5EF] rounded flex items-center justify-center text-[0.625rem] text-[#888780]">Logo</div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}