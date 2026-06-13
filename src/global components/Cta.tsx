interface CtaProps {
    bg: string
    title: string
    desc: string
    cta: string
    url: string
}

export default function Cta({
    bg,
    title,
    desc,
    cta,
    url,
}:CtaProps) {
    return (
        <section 
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "top"
            }}
            className="
                flex
                flex-col
                justify-end
                items-center
                pt-[20rem]
                px-[2.5rem]
                md:px-[5rem]
                pb-[4rem]
                h-[37rem]
                bg-no-repeat
                bg-auto
                bg-cover
            "
        >
            <div className="
                flex
                flex-col
                items-center
                text-center
                gap-6
                w-[20rem]
                sm:w-[25rem]
                md:w-[37.5rem]
                border-t-8
                border-[#C8A968]
                rounded-[0.75rem]
                p-[2.5rem]
                bg-[#fff]
            ">
                <div className="
                    flex
                    flex-col
                    gap-3
                ">
                    <h2 className="
                        text-[2.5rem]
                        text-[#5b3a29]
                        leading-tight
                        font-bold
                        font-heading
                    ">
                        {title}
                    </h2>
                    <p className="
                        font-body
                        leading-normal
                        text-[#535250]
                        text-[0.875rem]
                    ">
                        {desc}
                    </p>
                </div>
                <a 
                    href={url} 
                    className="
                       no-underline
                       bg-[#20422a] 
                       text-[#f8f5ef]
                       px-6
                       py-4
                       rounded
                       font-heading
                       font-bold
                       text-[1.125rem]
                       leading-tight
                       hover:bg-[#285836]
                    "
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {cta}
                </a>
            </div>
        </section>
    )
}