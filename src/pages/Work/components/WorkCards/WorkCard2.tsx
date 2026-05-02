import Img from "./Img"

interface WorkCard2Props {
    id?: number
    title: string
    yr: string
    imgSrc: string
    imgType: string
    width: number
    url?: string
}

export default function WorkCard2({
    id,
    title,
    yr,
    imgSrc,
    imgType,
    width,
    url
}:WorkCard2Props) {

    return (
            <a
                href={url}
                className={`w-[${width}%]`}
            >
                <div className="
                    p-[1.5rem]
                    flex
                    flex-col
                    items-center
                    p-[1.5rem]
                    gap-6
                    [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
                    rounded-lg
                    bg-[#FBFAF8]
                    relative 
                "
                    key={id}
                >
                    {imgSrc && <Img src={imgSrc} type={imgType}/>}
                    <div className='
                        flex
                        flex-col
                        items-center
                        gap-2
                    '>
                        <h3 className='
                            font-heading
                            text-[1.125rem]
                            text-center
                            leading-tight
                            text-[#5b3a29]
                            font-bold
                        '>
                            {title}
                        </h3>
                        <p className='
                            font-body
                            text-[0.875rem]
                            text-center  
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