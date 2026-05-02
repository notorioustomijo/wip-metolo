interface TimelineProps {
    years: string[]
    activeYr: string
}

export default function Timeline({ 
    years,
    activeYr
}:TimelineProps) {
    return(
        <div className="
            relative
            flex
            flex-col
            items-center
        ">
            {/* Vertical line */}
            <div className="
                absolute
                top-0
                bottom-0
                w-[8px]
                bg-[#20422a]
            " />

            {years.map((yr) => (
                <div 
                    key={yr}
                    className="
                        relative
                        flex
                        items-center
                        py-[3rem]
                    "
                >
                    {/* Dot */}
                    <div className="
                        w-6
                        h-6
                        bg-[#20422a]
                        z-10
                    "/>

                    {/* Year label-only visible when active */}
                    <span className={`
                        absolute
                        ml-4
                        left-5
                        font-heading
                        font-bold
                        text-[1.5rem]
                        text-[#20422a]
                        transition-opacity
                        duration-300
                        ${activeYr === yr ? 'opacity-100' : 'opacity-0'}
                    `}>
                        {yr}
                    </span>
                </div>
            ))}
        </div>
    )
}