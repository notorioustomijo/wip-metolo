import aboutImage1 from '../../../assets/about-image1.webp';
import aboutImage3 from '../../../assets/about-image3.webp';
import aboutImage4 from '../../../assets/about-image4.webp';
import quote from '../../../assets/quote-icon.svg';
import sign from '../../../assets/metolo signature.svg';

const aboutImage2 = '/about-image2 (1).webp';

export default function About() {
    return (
      <section id="about" className="
            relative 
            bg-[#392318] 
            min-h-screen 
            pb-[4rem] 
            flex 
            justify-center
            gap-16
            overflow-hidden
        ">
            <img 
                src={aboutImage1} 
                className="
                    h-[80px] sm:h-[120px] lg:h-[162px]
                    absolute top-0 left-0
                "
                loading="lazy"
            />
            <img 
                src={aboutImage2}
                className="
                    absolute top-0
                    left-[6rem] sm:left-[10rem] lg:left-[16rem]
                    w-[65%] sm:w-[55%] lg:w-[50%]
                "
                loading="lazy"
            />
            <img 
                src={aboutImage3}
                className="
                    hidden sm:block
                    absolute top-[7rem] right-0
                    h-[10rem] lg:h-[16.625rem]
                "
                loading="lazy"
            />
            <img 
                src={aboutImage4}
                className="
                    hidden sm:block
                    absolute bottom-[4rem]
                    right-[2rem] lg:right-[10rem]
                    h-[4rem] lg:h-[6.25rem]
                "
                loading="lazy"
            />

            <div className="
                pt-[55vw] sm:pt-[42vw] lg:pt-[32rem] xl:pt-[42rem]
                flex
                flex-col
                xl:flex-row
                gap-[2rem] xl:gap-[10rem]
                items-start
                w-full
                lg:w-[80%]
                px-[1.5rem] sm:px-[3rem] lg:px-[6rem] xl:pl-[14rem] xl:pr-[4rem]
            ">
                <div className="
                    flex flex-col gap-[1.5rem]
                    w-full xl:w-[55%]
                    flex-shrink-0
                ">
                    <div className="flex flex-col gap-[1rem]">
                        <h2 className="
                            font-heading font-bold
                            text-[#F8F5EF]
                            text-[1.5rem] sm:text-[2rem]
                            leading-tight
                        ">
                            A Name. A Lineage. A Mission.
                        </h2>
                        <p className="font-body leading-normal text-[#CAC0BB] text-[0.875rem]">
                            Her early years in rural Cameroon taught Metolo that knowledge 
                            lives in landscapes, in oral traditions, in the hands that shape 
                            clay and weave raffia. Later, formal education taught her different 
                            languages— GIS, institutional analysis, computational social science.
                        </p>
                        <p className="font-body leading-normal text-[#CAC0BB] text-[0.875rem]">
                            Now, her work refuses to choose. She is a scholar who paints. A digital 
                            ecologist who honors ancestral wisdom. A policy advisor who writes fiction. 
                            She moves between soil and satellites, forest and algorithm, mourning and making.
                        </p>
                    </div>
                    <a 
                        href="/about"
                        className="
                            px-[1.5rem] py-[1rem] rounded bg-[#20422a]
                            text-[#f8f5ef] font-heading font-bold text-[1.125rem]
                            leading-tight self-start hover:bg-[#285836]
                        "
                    >
                        Learn More About Her
                    </a>
                </div>

                <div className="
                    flex flex-col gap-[0.75rem] items-end
                    bg-[#fff] p-[1.5rem]
                    border-t-3 border-[#C8A968]
                    w-full sm:w-[24rem] xl:w-[20rem]
                    flex-shrink-0
                    rounded-lg self-start
                    sm:ml-[24%]
                    md:ml-[40%]
                    xl:ml-0
                    z-15
                ">
                    <div className="flex flex-col items-start gap-[0.75rem]">
                        <img src={quote} className="h-[2rem]" />
                        <p className="
                            font-heading italic text-[1.125rem]
                            leading-normal text-[#5b3a29]
                        ">
                            Both of my grandmothers are princesses. 
                            My grandfathers fought in World War II. 
                            I carry their strength, and the dreams 
                            they entrusted to their future.
                        </p>
                    </div>
                    <img src={sign} className="h-[3.5rem]" loading="lazy"/>
                </div>
            </div>
      </section>
    )
}