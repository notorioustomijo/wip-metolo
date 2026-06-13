interface ExhibitProps {
    img: string
    title: string
    desc: string
}

export default function Exhibit({ 
    img,
    title,
    desc
}:ExhibitProps) {
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
            hover:bg-[#FCFBF8]
        ">  
            <img src={img} alt="" />
            <div className="
                flex
                flex-col
                gap-2
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
                    text-[0.875rem]
                    leading-normal
                ">
                    {desc}
                </p>
            </div>
        </div>
    )
}