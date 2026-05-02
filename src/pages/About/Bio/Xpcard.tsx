import WorkTag from "./WorkTag"

interface XpCardProps {
    duration: string
    role: string
    company: string
    worktags: string[]
    desc: string
}

export default function XpCard({
    duration,
    role,
    company,
    worktags,
    desc
}:XpCardProps) {

    const topBorders:Record<string, string> = {
        FIELDWORK: 'border-[#7F5B10]',
        'DATA COLLECTION': 'border-[#7D2779]',
        ANALYTICS: 'border-[#16354A]',
        RESEARCH: 'border-[#F9B061]',
        CONSULTANCY: 'border-[#7F8F39]',
        WRITING: 'border-[#6969D8]',
        OPERATIONS: 'border-[#03897C]',
        EDUCATION: 'border-[#F8E284]',
    }

    const topBorder = topBorders[worktags[1]] ?? 'border-[#535250]';

    return (
        <div className={
            `
            flex
            flex-col
            p-6
            gap-[1rem]
            border-t-4
            ${topBorder}
            rounded-b-[0.75rem]
            bg-white
            [box-shadow:0_4px_16px_rgba(0,0,0,0.07)]
            `
        }
        >
            <div className="
                flex
                flex-col
                gap-2
            ">
                <p className="
                    font-body
                    text-[0.875rem]
                    leading-normal
                    text-[#535250]
                ">
                    {duration}
                </p>
                <h4 className="
                    font-heading
                    font-bold
                    text-[1.5rem]
                    text-[#5b3a29]
                    leading-tight
                ">
                    {role}
                </h4>
                <p className="
                    font-body
                    text-[#535250]
                    leading-normal
                    text-[1rem]
                ">
                    {company}
                </p>
            </div>
            <div className="
                flex
                gap-2
            ">
                {worktags.map(tag => (
                    <WorkTag 
                        label={tag}
                    />
                ))}
            </div>
            <p className="
                font-body
                leading-normal
                text-[1rem]
                text-[#535250]
            ">
                {desc}
            </p>
        </div>
    )
}