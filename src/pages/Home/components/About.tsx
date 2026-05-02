import aboutImage1 from '../../../assets/about-image1.webp';
import aboutImage2 from '../../../assets/about-image2.webp';
import aboutImage3 from '../../../assets/about-image3.webp';
import aboutImage4 from '../../../assets/about-image4.webp';
import quote from '../../../assets/quote-icon.svg';
import sign from '../../../assets/metolo signature.svg';

export default function About() {
    return (
      <section className="
            relative 
            bg-[#392318] 
            min-h-screen 
            pb-[4rem] 
            flex 
            justify-center
            gap-16"
        >
            <img 
                src={aboutImage1} 
                className="
                    h-[162px]
                    absolute
                    top-0
                    left-0
                "
            />

            <img 
                src={aboutImage2}
                className="
                    absolute
                    top-0
                    left-[16rem]
                    w-[50%]
                "
            />
            
            <img 
                src={aboutImage3}
                className="
                    absolute
                    top-[7rem]
                    right-0
                    h-[16.625rem]
                "
            />
            
            <img 
                src={aboutImage4}
                className="
                    absolute
                    bottom-[4rem]
                    right-[10rem]
                    h-[6.25rem]
                "
            />

            <div className="
                pt-[40rem]
                flex
                gap-[10rem]
                items-start
                w-[70%]
                pl-[10rem]
            ">
                <div className="
                    flex
                    flex-col
                    gap-[1.5rem]
                    pt-[4.5rem]
                    w-[45%]
                ">
                    <div className="
                        flex
                        flex-col
                        gap-[1rem]
                    ">
                        <h2 className="
                            font-heading
                            font-bold
                            text-[#F8F5EF]
                            text-[2rem]
                            leading-tight
                        ">
                            A Name. A Lineage. A Mission.
                        </h2>
                        <p 
                            className="
                                font-body
                                leading-normal
                                text-[#CAC0BB]
                                text-[0.875rem]
                            "
                        >
                            Her early years in rural Cameroon taught Metolo that knowledge 
                            lives in landscapes, in oral traditions, in the hands that shape 
                            clay and weave raffia. Later, formal education taught her different 
                            languages— GIS, institutional analysis, computational social science.
                        </p>
                        <p 
                            className="
                                font-body
                                leading-normal
                                text-[#CAC0BB]
                                text-[0.875rem]
                            "
                        >
                            Now, her work refuses to choose. She is a scholar who paints. A digital 
                            ecologist who honors ancestral wisdom. A policy advisor who writes fiction. 
                            She moves between soil and satellites, forest and algorithm, mourning and 
                            making.
                        </p>
                    </div>
                    <a 
                        href="/about"
                        className="
                            px-[1.5rem]
                            py-[1rem]
                            rounded
                            bg-[#20422a]
                            text-[#f8f5ef]
                            font-heading
                            font-bold
                            text-[1.125rem]
                            leading-tight
                            self-start
                        "
                    >
                        Learn More About Her
                    </a>
                </div>
                <div className="
                    flex
                    flex-col
                    gap-[0.75rem]
                    items-end
                    bg-[#fff]
                    p-[1.5rem]
                    border-t-3
                    border-[#C8A968]
                    w-[20rem]
                    rounded-lg
                ">
                    <div className="
                        flex
                        flex-col
                        items-start
                        gap-[0.75rem]
                    ">
                        <img src={quote} className="h-[2rem]" />
                        <p className="
                            font-heading
                            italic
                            text-[1.125rem]
                            leading-normal
                            text-[#5b3a29]
                        ">
                            Both of my grandmothers are princesses. 
                            My grandfathers fought in World War II. 
                            I carry their strength, and the dreams 
                            they entrusted to their future.
                        </p>
                    </div>
                    <img src={sign} className="h-[3.5rem]" />
                </div>
            </div>
  
      </section>
    )
  }