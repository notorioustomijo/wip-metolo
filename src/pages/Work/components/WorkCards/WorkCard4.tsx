import InterviewTag from "./InterviewTag"

interface WorkCard4Props {
    id?: number
    title: string
    yr: string
    tagLabel: string
    width: number
    url: string
}

export default function WorkCard4({
    id,
    title,
    yr,
    tagLabel,
    width,
    url
}:WorkCard4Props) {

    return (
        <a
            href={url}
            className={`no-underline w-[${width}%]`}
        >
            <div className="
                p-[1.5rem]
                flex
                flex-col
                p-[1.5rem]
                gap-6
                [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
                rounded-lg
                bg-[#FBFAF8]
                relative 
            "
                key={id}
            >   
                <InterviewTag 
                    label={tagLabel}
                />
                <div className='
                    flex
                    flex-col
                    gap-2
                '>
                    <h3 className='
                        font-heading
                        text-[1.125rem]
                        leading-tight
                        text-[#5b3a29]
                        font-bold
                    '>
                        {title}
                    </h3>
                    <p className='
                        font-body
                        text-[0.875rem] 
                        leading-normal
                        text-[#535250]
                    '>
                        {yr}
                    </p>
                </div>
            </div>
        </a>

    )
}