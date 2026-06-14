import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import heroImage from '../../../assets/hero-image (1).webp';
import CircularTextButton from '../../../global components/CircularTextButton';

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
            min-h-[100vh]
            gap-8
            lg:gap-0
            overflow-hidden
        ">
            <div className={`
                flex
                flex-col
                gap-[1.5rem]
                w-full
                lg:w-[35%]
                pt-[4rem]
                pl-[2rem]
                ${animClass}
            `}>
                <h1 className="
                    text-[2.5rem]
                    leading-tight
                    font-bold
                    text-[#5B3A29]
                    font-heading
                ">
                    Scholar. <br /> Storyteller. <br/> Safeguardian.
                </h1>
                <p className="
                    text-[0.875rem]
                    leading-normal
                    text-[#535250]
                    font-body
                ">
                    From herding goats in the Kingdom of Fotouni to leading 
                    human rights due diligence for conservation projects in 
                    70 countries, Dr. Metolo’s journey moves between soil and 
                    satellites, forest and algorithm, policy and art.
                </p>
                <a 
                    href="" 
                    className="
                        flex
                        justify-center
                        py-[1rem]
                        px-[1.5rem]
                        text-[#f8f5ef]
                        font-heading
                        font-bold
                        text-[1.125rem]
                        no-underline
                        bg-[#20422a]
                        rounded
                        self-start
                        hover:bg-[#285836]
                    "
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Send Invite / Request
                </a>

            </div>
            <img 
                src={heroImage} 
                alt="" 
                className={`
                    w-full
                    lg:w-[75rem] 
                    h-[40vh]
                    sm:h-[55vh]
                    lg:h-[100vh]
                    object-cover
                    object-top
                    ${animClass}
                `}
                fetchPriority='high'
            />
            <div className={`
                absolute
                hidden
                sm:block
                sm:left-[2rem]
                sm:bottom-[12rem]
                bottom-[15rem]
                xl:left-[30rem]
                ${animClass}
            `}>
                <CircularTextButton 
                    label="METOLO * LEARN MORE ABOUT * "
                    color="#3F2C06"
                    url="#about"
                    scrollToId="about"
                />
            </div>
        </section>
    )
}