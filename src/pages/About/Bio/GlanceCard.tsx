interface GlanceCardProps {
    value: string
    label: string
}

export default function GlanceCard({
    value,
    label
}:GlanceCardProps) {

    return (
        <div className="
            bg-[#FFFEFC]
            [box-shadow:0_4px_14px_rgba(0,0,0,0.05)]
            flex
            flex-col
            justify-center
            items-center
            gap-2
            py-[2.5rem]
            px-[1.5rem]
            rounded-lg
        ">
            <h3 className="
                font-heading
                font-bold
                text-[2.5rem]
                text-[#5b3a29]
                leading-tight
                text-center
            ">
                {value}
            </h3>
            <p className="
                font-body
                text-[#535250]
                text-[1rem]
                leading-normal
                text-center
            ">
                {label}
            </p>
        </div>
    )
}