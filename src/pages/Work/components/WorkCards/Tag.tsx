interface TagProps {
    label: string
}

export default function Tag({ label }: TagProps) {

    const colorScheme = label === 'CONSERVATION' ? 'bg-[#F8F3F2] border-[#b15c3d] text-[#C26A4A]' : 'bg-[#f6faf7] border-[#20422a] text-[#20422A]'

    return (
        <div className={`
            p-[0.5rem]
            rounded
            border
            absolute
            top-[1.55rem]
            right-[1.5rem]
            ${colorScheme}
        `}>
            <p className={
                `
                text-[0.75rem]
                font-semibold
                leading-normal
                font-body
                `
            }>
                {label}
            </p>
        </div>
    )
}