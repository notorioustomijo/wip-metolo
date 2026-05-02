import hero from '../../../assets/shop-hero.webp';
import CircularTextButton from '../../../global components/CircularTextButton';

export default function Hero() {

    return (
        <section className="
            py-[7.5rem]
            px-[12.5rem]
            flex
            gap-[5rem]
            justify-evenly
            items-end
            bg-[#5B3A29]
        ">
            <img 
                src={hero} 
                className="
                    w-[32.375rem]
                    h-[48.5rem]
                "
            />
            <div className="
                flex
                flex-col
                items-end
                gap-4
            ">
                <div className="
                    flex
                    flex-col
                    gap-10
                    w-[80%]
                ">
                    <h1 className="
                        font-heading
                        font-bold
                        leading-tight
                        text-[13.75rem]
                        text-[#f8f5ef]
                    ">
                        SHOP
                    </h1>
                    <p className="
                        font-body
                        leading-normal
                        text-[1rem]
                        text-[#F7E9E2]
                    ">
                        Metolo is a multidisciplinary artist whose practice
                        begun in 2006, and explores landscape as a space of 
                        memory, ecology, and relation. Working across traditional 
                        and digital media, her work bridges indigenous perspectives, 
                        environmental narratives, and technological futures, 
                        translating research and lived experience into semi-abstract 
                        visual storytelling.
                    </p>
                </div>
                <div className="
                    pl-4
                ">
                    <CircularTextButton 
                        label="* EXPLORE * MY ** SHOP"
                        color="#F8F5EF"
                    />
                </div>
            </div>
        </section>
    )
}