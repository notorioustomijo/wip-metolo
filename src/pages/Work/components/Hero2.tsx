import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import CircularTextButton from '../../../global components/CircularTextButton';
import heroImage from '../../../assets/hero-image (1).webp';

export default function Hero() {

    const animClass = useHeroAnimation('home-hero');

    return (
        <section className="
            bg-[#F8F5EF]
            pt-[4.5rem]
            px-[1.5rem]
            sm:px-[4rem]
            lg:px-[10rem]
            pb-0
            flex
            flex-col
            lg:flex-row
            justify-center
            lg:justify-around
            gap-8
            lg:gap-0
            overflow-hidden
        ">
            <div className={`
                flex
                flex-col
                gap-[1.5rem]
                w-full
                lg:w-[40%]
                pt-[4rem]
                pl-[2rem]
                justify-center
                ${animClass}
            `}>
                <p className="
                    text-[2rem]
                    leading-normal
                    text-[#5B3A29]
                    font-heading
                    leading-tight
                    font-bold
                    w-full max-w-xl
                    px-6 lg:px-0
                ">
                    From soil to satellites, poetry to policy,
                    bridging environmental science, lived realities and 
                    policy making through research, art and technology.
                </p>

                <div className={`
                    ml-[15rem]
                    ${animClass}
                `}>
                    <CircularTextButton 
                        label="WORK * SEE MY * "
                        color="#3F2C06"
                        url="#all-work"
                        scrollToId="all-work"
                    />
                </div>

            </div>
            <img 
                src={heroImage} 
                alt="" 
                className={`
                    w-full
                    lg:w-[75rem] 
                    h-[51.25rem]
                    sm:h-[55vh]
                    lg:h-[100vh]
                    object-cover
                    object-top
                    ${animClass}
                `}
                fetchPriority='high'
            />
        </section>
    )
}