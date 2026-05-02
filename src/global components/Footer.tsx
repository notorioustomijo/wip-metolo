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
                h-[36.9375rem]
                flex
                flex-col
                pt-[7.5rem]
                px-[3.125rem]
                pb-[2.5rem]
                gap-[4rem]
                bg-no-repeat
                bg-auto
            "
        >
            <section
                className="
                    flex
                    justify-between
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        gap-[0.75rem]
                        w-[35%]
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
                        Interdisciplinary scholar-practitioner bridging conservation 
                        equity, digital ecology, and indigenous advocacy across Africa’s 
                        rural landscapes. 
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
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover:text-[#f6eeeb]
                            hover:underline
                           "
                        >
                            About
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Journals
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Articles
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Poems
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Books
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
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
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Speaking Engagements
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Email
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            LinkedIn
                        </a>
                        <a href=""
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
                        RESOURCES
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
                            no-underline
                            leading-normal
                            font-body
                            hover: text-[#f6eeeb]
                           "
                        >
                            Media Kit
                        </a>
                        <a href=""
                           className="
                            text-[#CAC0BB]
                            text-[0.875rem]
                            no-underline
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