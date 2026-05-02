import heroImage from '../../../assets/hero-image.webp';
import CircularTextButton from '../../../global components/CircularTextButton';

export default function Hero() {
    return (
        <section className="
            bg-[#F8F5EF]
            pt-[4.5rem]
            px-[10rem]
            pb-[0rem]
            flex
            justify-around
            h-[100vh]
        ">
            <div className="
                flex
                flex-col
                gap-[1.5rem]
                w-[35%]
                pt-[4rem]
                pl-[2rem]
            ">
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
                    "
                >
                    Send Invite / Request
                </a>

            </div>
            <img src={heroImage} alt="" className="w-[75rem] h-[100vh]"/>
            <div className="
                absolute
                bottom-[15rem]
                left-[30rem]
            ">
                <CircularTextButton 
                    label="METOLO * LEARN MORE ABOUT * "
                    color="#3F2C06"
                />
            </div>
        </section>
    )
}