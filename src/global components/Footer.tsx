import footerBg from '../assets/footer-bg.webp';

export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}

            className="
                w-[100%]
                flex
                flex-col
                pt-[7.5rem]
                px-[1.5rem]
                md:px-[2.5rem]
                lg:px-[3.125rem]
                pb-[2.5rem]
                gap-[4rem]
                bg-no-repeat
                bg-auto
            "
        >
            <section
                className="
                    grid
                    grid-cols-2
                    md:flex
                    md:justify-between
                    gap-[2.5rem]
                    md:gap-0
                "
            >
                <div
                    className="
                        col-span-2
                        md:col-span-1
                        flex
                        flex-col
                        gap-[0.75rem]
                        md:w-[35%]
                    "
                >
                    <h3 className="
                        text-[2rem]
                        leading-tight
                        font-bold
                        text-[#C8A968]
                        font-heading
                    ">
                        Metolo Foyet, Ph.D.
                    </h3>
                    <p className="text-[#CAC0BB] text-[0.875rem] leading-normal font-body">
                        Interdisciplinary scholar-practitioner advancing just transition and 
                        ecological futures through policy, public narratives, innovation and 
                        shared value across rural and global landscapes.
                    </p>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-[1rem]
                ">
                    <p className="text-[1.125rem] font-bold font-body leading-tight text-[#C8A968]">
                        EXPLORE
                    </p>
                    <div className="
                        flex
                        flex-col
                        gap-[0.5rem]
                    ">
                        <a href="/about"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover:text-[#f6eeeb]
                            hover:underline
                           "
                        >
                            About
                        </a>
                        <a href="/work?tab=Projects#all-work"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Projects
                        </a>
                        <a href="/work?tab=Research#all-work"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Publications
                        </a>
                        <a href="/work?tab=Op-Eds#all-work"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Op-Eds
                        </a>
                        <a href="/work?tab=Books#all-work"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Books
                        </a>
                        <a href="/work?tab=Exhibitions#all-work"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Art
                        </a>
                    </div>
                </div>

                <div
                    className="
                    flex
                    flex-col
                    gap-[1rem]
                "
                >
                    <p className="text-[1.125rem] font-bold font-body leading-tight text-[#C8A968]">
                        CONTACT
                    </p>
                    <div
                        className="
                        flex
                        flex-col
                        gap-[0.5rem]
                    "
                    >
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                            Send Invite/Request
                        </a>
                        <a href="mailto:metolof@gmail.com"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                            Email
                        </a>
                        <a href="https://www.linkedin.com/in/metolo-foyet-ph-d-86a47420b/"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                            LinkedIn
                        </a>
                        {/* <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            X/Twitter
                        </a> */}
                    </div>
                </div>

                <div
                    className="
                    flex
                    flex-col
                    gap-[1rem]
                "
                >
                    <p className="text-[1.125rem] font-bold font-body leading-tight text-[#C8A968]">
                        RESOURCES
                    </p>
                    <div
                        className="
                        flex
                        flex-col
                        gap-[0.5rem]
                    "
                    >
                        {/* <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Media Kit
                        </a> */}
                        <a href="/shop"
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Shop
                        </a>
                    </div>
                </div>
            </section>
            <div className="
                flex
                justify-center
                pt-10
            ">
                <p className="
                    text-center
                    text-[0.875rem]
                    text-[#848B82]
                    leading-normal
                    font-body
                ">
                    ©2026, Metolo Foyet. All rights reserved.
                </p>
            </div>
        </footer>
    )
}