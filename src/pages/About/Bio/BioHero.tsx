import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import about from '../../../assets/about-hero2.webp';
import email from '../../../assets/email.svg';
import pin from '../../../assets/location.svg';
import resume from '../../../assets/resume.svg';
import linkedin from '../../../assets/linkedin.svg';
import link from '../../../assets/link.svg';

export default function BioHero() {
    const animClass = useHeroAnimation('bio-hero');

    return (
        <section className="
            flex
            flex-col xl:flex-row
            gap-10 xl:gap-[6.25rem]
            px-6 md:px-12 xl:px-[12.5rem]
            py-10 xl:py-[6.25rem]
            items-start
        ">
            {/* Left content */}
            <div className={`flex flex-col gap-8 xl:gap-[2.5rem] w-full ${animClass}`}>
                <h1 className="
                    font-heading
                    font-bold
                    text-[2rem] md:text-[2.75rem] lg:text-[4rem]
                    text-[#5B3A29]
                    leading-tight
                ">
                    About Dr. Metolo Foyet
                </h1>

                <div className="flex flex-col gap-4 xl:gap-[1.5rem]">
                    <h2 className="
                        font-heading
                        font-bold
                        leading-tight
                        text-[#5B3A29]
                        text-[1.75rem] lg:text-[2.5rem]
                    ">
                        Professional Summary
                    </h2>
                    <div className="flex flex-col gap-4 xl:gap-[1rem]">
                        <p className="
                            text-[1rem] md:text-[1.125rem]
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
                            text-[1rem] md:text-[1.125rem]
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

                <div className="flex flex-col gap-3">
                    <h3 className="
                        font-heading
                        font-bold
                        leading-tight
                        text-[#5b3a29]
                        text-[1.5rem]
                    ">
                        Contact Info
                    </h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        <a
                            href="mailto:metolof@gmail.com"
                            className="flex items-center gap-1 underline text-[#535250] hover:text-[#5b3a29]"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={email} alt="" />
                            <p className="text-[1rem] leading-normal">metolof@gmail.com</p>
                        </a>

                        <div className="flex items-center gap-1">
                            <img src={pin} alt="" />
                            <p className="text-[1rem] text-[#535250] leading-normal">Gainesville, FL | Remote</p>
                        </div>

                        <a
                            href="https://geog.ufl.edu/wp-content/uploads/sites/60/Foyet_CV.pdf"
                            className="flex items-center gap-1 underline text-[#535250] hover:text-[#5b3a29]"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={resume} alt="" />
                            <p className="text-[1rem] leading-normal">Resume</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/metolo-foyet-ph-d-86a47420b/"
                            className="flex items-center gap-1 underline text-[#535250] hover:text-[#5b3a29]"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={linkedin} alt="" />
                            <p className="text-[1rem] leading-normal">LinkedIn</p>
                        </a>

                        <div className="flex flex-wrap gap-2 items-center">
                            <a
                                href="https://orcid.org/0009-0006-8054-2281"
                                className="flex items-center gap-1 underline text-[#535250] hover:text-[#5b3a29]"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img src={link} alt="" />
                                <p className="text-[1rem] leading-normal">ORCID</p>
                            </a>
                            <span className="text-[#535250]">|</span>
                            <a
                                href="https://scholar.google.com/citations?user=QEuzpF8AAAAJ&hl=en"
                                className="flex items-center gap-1 underline text-[#535250] hover:text-[#5b3a29]"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img src={link} alt="" />
                                <p className="text-[1rem] leading-normal">Google Scholar</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Photo */}
            <img
                src={about}
                alt="Dr. Metolo Foyet"
                className={`
                    w-full xl:w-[28.4375rem]
                    xl:shrink-0
                    max-h-[24rem] md:max-h-[36rem] xl:max-h-none xl:h-[35.375rem]
                    object-cover
                    object-top
                    order-first xl:order-last
                    ${animClass}
                `}
            />
        </section>
    )
}