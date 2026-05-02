interface CircularTextButtonProps {
    label: string
    color: string
}

export default function CircularTextButton({ label, color }: CircularTextButtonProps) {
    const text = label
    const characters = text.split("")
    const totalChars = characters.length
    const radius = 80

    return (
        <a 
            href=""
            className="
                relative
                w-48
                h-48
                flex
                items-center
                justify-center
                group
                cursor-pointer
                no-underline
            "
        >
            {/* Circular Text */}
            <svg
                style={{ animationDuration: "10s" }}
                viewBox="0 0 200 200"
                className="
                    absolute 
                    inset-0
                    w-full
                    h-full
                    animate-spin
                "
            >
                {characters.map((char, i) => {
                    const angle = (i / totalChars) * 360
                    const angleRad = (angle-90) * (Math.PI / 180)
                    const x = 100 + radius * Math.cos(angleRad)
                    const y = 100 + radius * Math.sin(angleRad)

                    return (
                        <text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="14"
                            fontWeight="700"
                            fill={color}
                            fontFamily="sans-serif"
                            transform={`rotate(${angle}, ${x}, ${y})`}
                        >
                            {char}
                        </text>
                    )
                })}
            </svg>

            {/* Center arrow */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`
                    w-15
                    h-15
                    text-${color}
                    group-hover:translate-y-1
                    transition-transform
                    duration-300
                `}
            >
                <line x1="12" y1="4" x2="12" y2="20" />
                <polyline points="6 14 12 20 18 14" />
            </svg>

        </a>
    )

}