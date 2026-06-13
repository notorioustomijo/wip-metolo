import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import hero from '../../../assets/shop-hero.webp';
import CircularTextButton from '../../../global components/CircularTextButton';

export default function Hero() {
    const animClass = useHeroAnimation('shop-hero');

    return (
        <section className="
            py-12 
            xl:py-[7.5rem]
            px-6 
            xl:px-[12.5rem]
            flex
            flex-col 
            xl:flex-row
            gap-10 
            xl:gap-[4rem]
            justify-center 
            items-center 
            xl:items-end
            bg-[#5B3A29]
            overflow-hidden
        ">
            <img
                src={hero}
                className={`
                    w-full 
                    xl:w-[30rem]
                    xl:shrink-0
                    max-h-[24rem] 
                    sm:max-h-[36rem] 
                    xl:max-h-none xl:h-[48.5rem]
                    object-cover
                    object-center
                    ${animClass}
                `}
            />
            <div className={`
                flex
                flex-col
                items-center
                gap-4
                w-full
                min-w-0
                ${animClass}
            `}>
                <div className="
                    flex
                    flex-col
                    gap-6 xl:gap-10
                    w-full
                ">
                    <h1 className="
                        font-heading
                        font-bold
                        leading-none
                        text-[5rem] sm:text-[9rem] xl:text-[13.75rem]
                        text-[#f8f5ef]
                    ">
                        SHOP
                    </h1>
                    <p className="
                        font-body
                        leading-normal
                        text-[1rem]
                        text-[#F7E9E2]
                        max-w-prose
                    ">
                        Metolo is a multidisciplinary artist whose practice
                        begun in 2006, and explores landscape as a space of
                        memory, ecology, and relation. Working across traditional
                        and digital media, her work bridges indigenous perspectives,
                        environmental narratives, and technological futures,
                        translating research and lived experience into semi-abstract
                        visual storytelling.
                    </p>
                </div>
                <div className="mt-2">
                    <CircularTextButton
                        label="* EXPLORE * MY ** SHOP"
                        color="#F8F5EF"
                        url="#all-artwork"
                        scrollToId="all-artwork"
                    />
                </div>
            </div>
        </section>
    )
}