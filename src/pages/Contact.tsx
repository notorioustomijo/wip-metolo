import { useHeroAnimation } from '../hooks/useHeroAnimation';
import contactMetolo from '../assets/contact-metolo.webp';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import link from '../assets/link.svg';

export default function Contact() {
    const animClass = useHeroAnimation('contact-hero');

    return (
        <>
            <title>Contact | Dr. Metolo Foyet </title>
            <meta name="description" content="Get in touch with Dr. Metolo Foyet for speaking engagements, consulting, collaborations, or media inquiries." />
            <section className="
                bg-[#f8f5ef]
                pt-[7.5rem]
                px-[1.5rem]
                md:px-[5rem]
                pb-[5rem]
                lg:pb-[0rem]
                flex
                justify-center
                lg:justify-end
            ">
                <div className={`
                    lg:absolute
                    relative
                    lg:top-[5rem]
                    xl:top-[7.5rem]
                    lg:left-[5rem]
                    xl:left-[7.5rem]
                    flex
                    flex-col
                    gap-[1rem]
                    xl:gap-[1.5rem]
                    z-2
                    ${animClass}
                `}>
                    <div className="
                        flex
                        flex-col
                        gap-[1.5rem]
                        w-full
                        lg:w-[50%]
                    ">
                        <div className="
                            flex
                            flex-col
                            gap-[0.75rem]
                        ">
                            <h1 className="
                                text-[3rem]
                                sm:text-[4rem]
                                leading-tight
                                font-bold
                                text-[#5B3A29]
                                font-heading
                            ">
                                Let's Connect
                            </h1>
                            <p className='
                                text-[0.875rem]
                                sm:text-[1.25rem]
                                leading-normal
                                text-[#535250]
                                font-body
                            '>
                                Whether you’re seeking collaboration on conservation / value chain projects, 
                                speaking engagements, research / publication partnerships, or simply want to begin 
                                a conversation, I’d love to hear from you.
                            </p>
                        </div>
                        <a 
                            href="https://calendly.com/foyetmetolo/30min"  
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
                                bg-[#20422A]
                                rounded
                                w-full
                                sm:w-[50%]
                                hover:bg-[#285836]
                                self-st
                            "
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Send Invite/Request
                        </a>
                    </div>
                    <div className="
                        flex
                        items-center
                        w-[100%]
                        text-[#5B3A29]
                    ">
                        <div className="h-[1px] bg-[#5B3A29] w-[7.5rem]"/>
                            <p> OR </p>
                        <div className="h-[1px] bg-[#5B3A29] sm:w-[38%]"/>
                    </div>
                    <div className="
                        flex
                        flex-col
                        gap-[1rem]
                        bg-[#FFF]
                        border
                        border-[#5B3A29]
                        border-t-4
                        rounded-b-[0.75rem]
                        [box-shadow:0_14px_64px_0px_rgba(0,0,0,0.10)]
                        p-[2.5rem]
                        w-full
                        sm:w-[37.5rem]
                    ">
                        <a 
                            href="mailto:metolo.foyet@utoronto.ca" 
                            className="
                                flex
                                items-center
                                gap-[0.25rem]
                                underline
                                text-[#5B3A29]
                            "
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={email} alt="" fetchPriority='high'/>
                            <p className="text-[1rem] leading-normal">metolo.foyet@utoronto.ca</p>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/metolo-foyet-ph-d-86a47420b/" 
                            className="
                            flex
                            items-center
                            gap-[0.25rem]
                            underline
                            text-[#5B3A29]
                            "
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={linkedin} alt="" />
                            <p className="text-[1rem] leading-normal">LinkedIn</p>
                        </a>
                        <div className="
                            flex
                            flex-wrap
                            items-center
                            gap-[0.5rem]
                        ">
                            <a 
                                href="https://orcid.org/0009-0006-8054-2281" 
                                className="
                                    flex
                                    items-center
                                    gap-[0.25rem]
                                    underline
                                    text-[#5B3A29]
                                "
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img src={link} alt="" />
                                <p className="text-[1rem] leading-normal">ORCID</p>
                            </a>
                            |
                            <a 
                                href="https://scholar.google.com/citations?user=QEuzpF8AAAAJ&hl=en" 
                                className="
                                    flex
                                    items-center
                                    gap-[0.25rem]
                                    underline
                                    text-[#5B3A29]
                                "
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img src={link} alt="" />
                                <p className="text-[1rem] leading-normal">Google Scholar</p>
                            </a>
                            |
                            <a 
                                href="https://drive.google.com/drive/folders/1ZiU0OOk29rRuBOEYOfJVHEVkPOykULo2" 
                                className="
                                    flex
                                    items-center
                                    gap-[0.25rem]
                                    underline
                                    text-[#5B3A29]
                                "
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img src={link} alt="" />
                                <p className="text-[1rem] leading-normal">Resume</p>
                            </a>
                        </div>
                    </div>
                </div>
                <img src={contactMetolo} className={`hidden lg:block lg:w-[90%] ${animClass} z-1`}/>
            </section>
        </>
    )
}
