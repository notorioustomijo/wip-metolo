interface BoardMemberCardProps {
    name: string
    desc?: string
    logoSrc?: string
    url?: string
}

export default function BoardMemberCard({ name, desc, logoSrc, url }: BoardMemberCardProps) {

    const card = (
        <div className="
            bg-[#fff]
            rounded-lg
            [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
            w-full
            h-full
            px-6
            py-10
            flex
            flex-col
            items-center
            gap-4
            text-center
            hover:bg-[#FCFBF8]
        ">
            <div className="
                w-16
                h-16
                rounded-lg
                flex
                items-center
                justify-center
                overflow-hidden
            ">
                {logoSrc
                    ? <img src={logoSrc} alt={name} className="w-full h-full object-contain" loading="lazy"/>
                    : <span className="font-body text-[0.6875rem] text-[#888780]">Logo</span>
                }
            </div>
            <h3 className="font-heading font-bold leading-tight text-[#5b3a29] text-[1.125rem]">
                {name}
            </h3>
            {desc && (
                <p className="font-body leading-normal text-[#535250] text-[0.875rem]">
                    {desc}
                </p>
            )}
        </div>
    );

    return url
        ? (
            <a href={url} className="no-underline w-full h-full" rel="noopener noreferrer" target="_blank">
                {card}
            </a>
        )
        : card;
}