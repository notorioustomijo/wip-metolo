import Tag from "./Tag"
import Img from "./Img"

interface WorkCard1Props {
    id?: number
    title: string
    desc: string
    imgSrc?: string
    imgType?: string
    label?: string 
    tag?: string
    type: string
    url: string
    width: number
}

export default function WorkCard1({
    id,
    title,
    desc,
    imgSrc,
    imgType,
    label,
    tag,
    type,
    url,
    width
}:WorkCard1Props) {

    const ctaLabel = type === 'project' ? 'View Project' 
                    : type === 'research' ? 'Read'
                    : type === 'exhibition' ? 'View Details'
                    : type === 'film' ? 'View'
                    : ''

    return (
        <a href={url} className={`no-underline w-[${width}%]`} key={id}>
            <div className={`
                p-[1.5rem]
                flex
                flex-col
                items-start
                gap-6
                [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
                rounded-lg
                bg-[#FBFAF8]
                relative
                w-full
            `}>
                {imgSrc && <Img src={imgSrc} type={imgType}/>}
                <div className='
                    flex
                    flex-col
                    gap-2
                '>
                    {label 
                        && <p className='font-body font-medium text-[0.875rem] text-[#5b3a29] leading-normal'>
                                {label}
                            </p>
                    }
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
                <a href="#" className='font-heading bg-[#F8F5EF] border border-[#20422a] no-underline font-bold py-[1rem] px-[1.5rem] rounded-lg text-[#20422a] text-[1rem] self-start'>
                    {ctaLabel}
                </a>
                {tag && <Tag label={tag}/>}
            </div>
        </a>
    )
}