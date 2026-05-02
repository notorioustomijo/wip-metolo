interface FeaturedWorkProps {
    img: string
    title: string
    desc: string
    label: string
}

export default function FeaturedWork({
    img,
    title,
    desc,
    label
}:FeaturedWorkProps) {
    return (
        <div className="
            bg-[#FBFAF8]
            rounded-lg
            [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
            w-[35rem]
            px-6
            py-10
        ">
            <img src={img} className="mb-6"/>
            <div className="
                flex
                flex-col
                gap-3
            ">
                <p className="
                    font-body
                    leading-normal
                    text-[#535250]
                    text-[0.875rem]
                ">
                    {label}
                </p>
                <div className="
                    flex
                    flex-col
                    gap-2
                ">
                    <h3 className="
                        font-heading
                        font-bold
                        leading-tight
                        text-[#5b3a29]
                        text-[1.125rem]
                    ">
                        {title}
                    </h3>
                    <p className="
                        font-body
                        leading-normal
                        text-[#535250]
                        text-[0.875rem]
                    ">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )

}