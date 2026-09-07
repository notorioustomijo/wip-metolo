export default function Candid({
    id,
    img,
    label,
    desc,
    url
}) {

    return (
            <a
                href={url}
                className="w-full"
                rel="noopener noreferrer"
                target="_blank"
            >
                <div className="
                    flex
                    flex-col
                    items-center
                    gap-6
                    [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
                    rounded-lg
                    bg-[#fff]
                    relative 
                "
                    key={id}
                >
                    <img src={img} className="w-full h-[15rem] object-cover object-top rounded-t-lg" />
                    <div className='
                        flex
                        flex-col
                        items-start
                        gap-2
                        mx-[1.5rem]
                    '>
                        <h3 className='
                            font-heading
                            text-[1.5rem]
                            leading-tight
                            text-[#5b3a29]
                            font-bold
                        '>
                            {label}
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

                    <a
                        href={url}
                        className="font-heading mx-[1.5rem] mb-[1.5rem] bg-[#F8F5EF] border border-[#20422a] no-underline font-bold py-[1rem] px-[1.5rem] rounded-lg text-[#20422a] text-[1rem] self-start hover:bg-[#EFECE6]"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        View Shots
                    </a>
                </div>
            </a>
    )
}