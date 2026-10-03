import Img from "./Img"

interface ExhibitCardProps {
    id?: number
    title: string
    desc: string
    imgSrc?: string
    imgType?: string
    driveUrl?: string
    linkedinUrl: string
}

export default function ExhibitCard({
    id,
    title,
    desc,
    imgSrc,
    imgType,
    driveUrl,
    linkedinUrl
}:ExhibitCardProps) {

    return (
            <div key={id} className={`
                p-[1.5rem]
                flex
                flex-col
                items-start
                gap-6
                [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
                rounded-lg
                bg-[#fff]
                relative
                w-full
                hover:bg-[#FCFBF8]
            `}>
                {imgSrc && <Img src={imgSrc} type={imgType ?? 'rect'} />}
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
                        {desc}
                    </p>
                </div>
                <div
                    className="flex gap-6"
                >
                    {driveUrl && <a
                        href={driveUrl} 
                        rel="noopener noreferrer"
                        target="_blank"
                        className='no-underline font-heading text-[#F8F5EF] bg-[#20422a] no-underline font-bold py-[1rem] px-[1.5rem] rounded-lg text-[1rem] self-start hover:bg-[#EFECE6]'
                    >
                        View Photos
                    </a>}
                    <a
                        href={linkedinUrl} 
                        rel="noopener noreferrer"
                        target="_blank"
                        className='no-underline font-heading bg-[#F8F5EF] border border-[#20422a] no-underline font-bold py-[1rem] px-[1.5rem] rounded-lg text-[#20422a] text-[1rem] self-start hover:bg-[#EFECE6]'
                    >
                        View on LinkedIn
                    </a>

                </div>
            </div>
    )
}