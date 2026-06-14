interface WorkCard3Props {
    id: number
    title: string
    author: string
    yr: string
    imgSrc: string
    url: string
}

export default function WorkCard3({
    id,
    title,
    author,
    yr,
    imgSrc,
    url
}:WorkCard3Props) {

    return (
        <a 
            href={url} 
            className={`no-underline w-full`}
            key={id}
            rel="noopener noreferrer"
            target="_blank"
        >
            <div className="
                flex
                flex-col
                gap-[1.5rem]
                p-[1rem]
                rounded-lg
                [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
                bg-[#fff]
                w-full
                hover:bg-[#FCFBF8]
            ">
                <img 
                    src={imgSrc} 
                    className="
                        h-[11.5rem]
                        w-full
                        rounded
                        object-cover
                    " 
                    loading="lazy"
                />

                <div className="
                    flex
                    flex-col
                    gap-2
                    w-full
                ">
                    <h4 className="
                        font-heading
                        font-bold
                        text-[1.125rem]
                        text-[#5b3a29]
                        leading-tight
                        w-full
                        break-words
                    ">
                        {title}
                    </h4>
                    <p className="
                        font-body
                        text-[1rem]
                        text-[#535250]
                        leading-normal
                    ">
                        {author}
                    </p>
                    <p className="
                       font-body
                       text-[0.875rem] 
                       text-[#535250]
                       leading-normal
                    ">
                        {yr}
                    </p>
                </div>
            </div>
        </a>
    )
}