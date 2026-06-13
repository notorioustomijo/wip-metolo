interface PublicationProps {
    title: string
    name: string
    authors: string
}

export default function Publication({ 
    title,
    name,
    authors
}:PublicationProps) {
    return (
        <div className="
            flex
            flex-col
            gap-[0.75rem]
            p-[1.5rem]
            bg-[#fff]
            [box-shadow:0_4px_18px_rgba(0,0,0,0.15)]
            relative
            rounded-lg
            hover:bg-[#FCFBF8]
        ">  
            <div className="
                flex
                flex-col
                gap-2
            ">
                <p className="
                    font-medium
                    text-[#5b3a29]
                    font-body
                    text-[0.875rem]
                    leading-normal
                ">
                    {name}
                </p>
                <h3 className="
                    text-[#5B3A29]
                    font-bold
                    font-heading
                    leading-tight
                    text-[1.125rem]
                ">
                    {title}
                </h3>
            </div>
            <p className="
                text-[0.875rem]
                font-body
                leading-normal
                text-[#535250]
            ">
                {authors}
            </p>
        </div>
    )
}