interface ProjectProps {
    img: string
    title: string
    desc: string
    tag: string
}

export default function Project({ 
    img,
    title,
    desc,
    tag
}:ProjectProps) {
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
            <img 
                src={img} 
                alt="project logo" 
                className="
                    w-[5rem]
                    h-[5rem]
                    rounded-[50%]
                "
                loading="lazy"
            />
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
                text-[0.875rem]
                font-body
                leading-normal
                text-[#535250]
            ">
                {desc}
            </p>
            <div className="
                flex
                justify-center
                items-center
                px-2
                py-2
                bg-[#F8F3F2]
                border
                border-[#B15C3D]
                absolute
                top-6
                right-6
                rounded
            ">
                <p className="
                    text-[#C26A4A]
                    leading-normal
                    text-[0.75rem]
                    font-body
                    font-semibold
                ">
                    {tag}
                </p>
            </div>
        </div>
    )
}