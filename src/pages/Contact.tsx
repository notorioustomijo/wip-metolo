import contactMetolo from '../assets/contact-metolo.webp';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import link from '../assets/link.svg';

export default function Contact() {
    return (
        <section className="
            bg-[#f8f5ef]
            pt-[7.5rem]
            px-[7.5rem]
            pb-[0rem]
            flex
            justify-end
        ">
            <div className="
                absolute
                top-[7.5rem]
                left-[7.5rem]
                flex
                flex-col
                gap-[1.5rem]
            ">
                <div className="
                    flex
                    flex-col
                    gap-[1.5rem]
                    w-[40%]
                ">
                    <div className="
                        flex
                        flex-col
                        gap-[0.75rem]
                    ">
                        <h1 className="
                            text-[4rem]
                            leading-tight
                            font-bold
                            text-[#5B3A29]
                            font-heading
                        ">
                            Let's Connect
                        </h1>
                        <p className='
                            text-[1.25rem]
                            leading-normal
                            text-[#535250]
                            font-body
                        '>
                            Whether you’re seeking collaboration on conservation/IT projects, 
                            speaking engagements, research partnerships, or simply want to begin 
                            a conversation, I’d love to hear from you.
                        </p>
                    </div>
                    <a 
                        href="/calendly-link"  
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
                            w-[80%]
                        "
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
                    <div className="h-[1px] bg-[#5B3A29] w-[27.5rem]"/>
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
                    w-[37.5rem]
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
                        |
                        <a href="" className="
                            flex
                            items-center
                            gap-[0.25rem]
                            underline
                            text-[#5B3A29]
                        ">
                            <img src={link} alt="" />
                            <p className="text-[1rem] leading-normal">Download Resume</p>
                        </a>
                    </div>
                </div>
            </div>
            <img src={contactMetolo} className="w-[90%]" />
        </section>
    )
}