interface BookProps {
    img: string
    title: string
    authors: string
    year: string
}

export default function Book({ 
    img,
    title,
    authors,
    year
}:BookProps) {
    return (
        <div className="
            flex
            flex-col
            gap-[1.5rem]
            p-[1.5rem]
            bg-[#fff]
            [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
            relative
            rounded-lg
            w-full
            hover:bg-[#FCFBF8]
        ">  
            <img src={img} alt="" />
            <div className="
                flex
                flex-col
                gap-1
            ">
                <h3 className="
                    text-[#5B3A29]
                    font-bold
                    font-heading
                    leading-tight
                    text-[1.125rem]
                ">
                    {title}
                </h3>
                <p className="
                    text-[#535250]
                    font-body
                    text-[1rem]
                    leading-normal
                ">
                    {authors}
                </p>
                <p className="
                    text-[0.875rem]
                    font-body
                    leading-normal
                    text-[#535250]
                ">
                    {year}
                </p>
            </div>
        </div>
    )
}