import about from '../../../assets/about-hero2.webp';
import email from '../../../assets/email.svg';
import pin from '../../../assets/location.svg';
import resume from '../../../assets/resume.svg';
import linkedin from '../../../assets/linkedin.svg';
import link from '../../../assets/link.svg';

export default function BioHero() {
    return (
        <section className="
            flex
            gap-[6.25rem]
            px-[12.5rem]
            py-[6.25rem]
        ">
            <div className="
                flex
                flex-col
                gap-[2.5rem]
            ">
                <h1 className="
                    font-heading
                    font-bold
                    text-[4rem]
                    text-[#5B3A29]
                    leading-tight
                ">
                    About Dr. Metolo Foyet
                </h1>

                <div className="
                    flex
                    flex-col
                    gap-[1.5rem]
                ">
                    <h2 className="
                        font-heading
                        font-bold
                        leading-tight
                        text-[#5B3A29]
                        text-[2.5rem]
                    ">
                        Professional Summary
                    </h2>
                    <div className="
                        flex
                        flex-col
                        gap-[1rem]
                    ">
                        <p className="
                            text-[1.125rem]
                            text-[#535250]
                            font-body
                            leading-normal
                        ">
                            I am a boundary-spanning leader who operates at the 
                            interface of local realities and systems-level 
                            structures. With over 13 years of experience spanning 
                            global conservation, education, the startup world, and 
                            institutional innovation across 4 continents, my work 
                            is defined by inclusion and impact.
                        </p>
                        <p className="
                            text-[1.125rem]
                            text-[#535250]
                            font-body
                            leading-normal
                        ">
                            I translate interdisciplinary research and digital innovation 
                            into actionable, equitable global development outcomes that 
                            support both prosperity and planetary health-uniting cultural 
                            perspectives and scientific insights to create inclusive solutions.
                        </p>
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-[0.75rem]
                ">
                    <h3 className="
                        font-heading
                        font-bold
                        leading-tight
                        text-[#5b3a29]
                        text-[1.5rem]
                    ">
                        Contact Info
                    </h3>
                    <div className="
                        w-[100%]
                        flex
                        flex-wrap
                        gap-[1.5rem]
                    ">
                        <a href="" className="
                            flex
                            items-center
                            gap-[0.25rem]
                            underline
                            text-[#5B3A29]
                        ">
                            <img src={email} alt="" />
                            <p className="text-[1rem] leading-normal">metolof@gmail.com</p>
                        </a>
                        
                        <a href="" className="
                            flex
                            items-center
                            gap-[0.25rem]
                            underline
                            text-[#5B3A29]
                        ">
                            <img src={pin} alt="" />
                            <p className="text-[1rem] leading-normal">Gainesville, FL | Remote</p>
                        </a>
                        
                        <a href="" className="
                            flex
                            items-center
                            gap-[0.25rem]
                            underline
                            text-[#5B3A29]
                        ">
                            <img src={resume} alt="" />
                            <p className="text-[1rem] leading-normal">Resume</p>
                        </a>

                        <a href="" className="
                            flex
                            items-center
                            gap-[0.25rem]
                            underline
                            text-[#5B3A29]
                        ">
                            <img src={linkedin} alt="" />
                            <p className="text-[1rem] leading-normal">LinkedIn</p>
                        </a>

                        <div className="
                            flex
                            gap-[0.5rem]
                        ">
                            <a href="" className="
                                flex
                                items-center
                                gap-[0.25rem]
                                underline
                                text-[#5B3A29]
                            ">
                                <img src={link} alt="" />
                                <p className="text-[1rem] leading-normal">ORCID</p>
                            </a>
                            |
                            <a href="" className="
                                flex
                                items-center
                                gap-[0.25rem]
                                underline
                                text-[#5B3A29]
                            ">
                                <img src={link} alt="" />
                                <p className="text-[1rem] leading-normal">Google Scholar</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <img 
                src={about} 
                className="
                    w-[28.4375rem]
                    h-[35.375rem]
                "
            />
        </section>
    )
}
