import { useEffect, useState } from 'react';
import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import CircularTextButton from '../../../global components/CircularTextButton';
import heroImage from '../../../assets/shopHeronew.webp';
import heroImage2 from '../../../assets/shopHero2.webp';
import heroImage3 from '../../../assets/shopHero3.webp';
import heroImage4 from '../../../assets/shopHero4.webp';
import heroImage5 from '../../../assets/shop-hero.webp';

const heroImages = [heroImage, heroImage2, heroImage3, heroImage4, heroImage5];
const ROTATE_INTERVAL_MS = 5000;

export default function Hero() {

    const animClass = useHeroAnimation('home-hero');
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % heroImages.length);
        }, ROTATE_INTERVAL_MS);

        return () => clearInterval(id);
    }, []);

    return (
        <section className="
            bg-[#5B3A29]
            pt-[4.5rem]
            px-[1.5rem]
            sm:px-[4rem]
            lg:px-[6rem]
            pb-0
            flex
            flex-col
            xl:flex-row
            justify-center
            lg:justify-around
            min-h-[100vh]
            gap-2
            xl:gap-80
            overflow-hidden
        ">
            <div className={`
                flex
                flex-col
                gap-[1.5rem]
                w-full
                xl:w-[35%]
                pt-[4rem]
                pl-[2rem]
                ${animClass}
            `}>
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
                <div className={`
                    sm:block
                    sm:left-[2rem]
                    sm:bottom-[12rem]
                    bottom-[15rem]
                    xl:left-[30rem]
                    ${animClass}
                `}>
                    <CircularTextButton
                        label="* EXPLORE * MY ** SHOP"
                        color="#F8F5EF"
                        url="#all-artwork"
                        scrollToId="all-artwork"
                    />
                </div>

            </div>
            <div className={`
                relative
                w-full
                h-[51.125rem]
                sm:h-[80vh]
                lg:h-[80vh]
                overflow-hidden
                ${animClass}
            `}>
                {heroImages.map((img, i) => (
                    <img
                        key={img}
                        src={img}
                        alt=""
                        className={`
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            object-top
                            transition-opacity
                            duration-1000
                            ease-in-out
                            ${i === activeIndex ? 'opacity-100' : 'opacity-0'}
                        `}
                        fetchPriority={i === 0 ? 'high' : 'auto'}
                    />
                ))}
            </div>
        </section>
    )
}