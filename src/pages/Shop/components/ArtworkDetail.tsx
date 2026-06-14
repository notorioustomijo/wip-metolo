import { useParams } from 'react-router-dom';
import { artList } from '../components/ArtWork';
import Cta from '../../../global components/Cta';
import artco from '../../../assets/art-commiss.webp';

export default function ArtworkDetail() {
    const { artworkId } = useParams();

    const art = artList.find(a => a.id === artworkId);

    if (!art) return <p>Artwork Not found.</p>

    const isLandscape = art.orientation === "landscape";


    return (
        <section className="
            bg-[#F8F5EF]
            flex
            flex-col
        ">
            <section className={`
                ${isLandscape 
                    ? 'flex flex-col items-center gap-[4rem] md:gap-[7rem]' 
                    : 'flex flex-col lg:flex-row lg:px-[2rem] items-start justify-center gap-[3rem] lg:gap-[4rem]'} 
                    px-[1.5rem] md:px-[7.5rem] py-[3rem] md:py-[7.5rem]
            `}>
                <img 
                    src={art.img} 
                    className={
                        `${isLandscape 
                            ? 'w-full md:w-[75rem] h-[16rem] md:h-[45rem]' 
                            : 'w-full lg:w-[32rem] h-[40rem] lg:h-[40rem]'} 
                            object-cover
                    `}
                    fetchPriority='high'
                />
                <div className="
                    flex
                    flex-col
                    gap-[2rem]
                    w-full
                    lg:w-[26rem]
                    xl:w-[34rem]
                    lg:shrink-0
                ">
                    <div className="
                        flex
                        justify-between
                        items-start
                    ">
                        <div className="
                            flex
                            flex-col
                            gap-4
                            w-full
                        ">
                            <div className="
                                flex
                                justify-between
                            ">
                                <div className="
                                    flex
                                    flex-col
                                    gap-2
                                ">
                                    <h1 className="
                                        font-heading
                                        font-bold
                                        text-[1.5rem]
                                        text-[#5B3A29]
                                        leading-tight
                                    ">
                                        {art.title}
                                    </h1>
                                    <p className="
                                        font-body
                                        text-[0.875rem]
                                        text-[#535250]
                                        leading-normal
                                    ">
                                        {art.info}
                                    </p>
                                </div>

                                <p className="
                                    font-heading
                                    font-bold
                                    leading-tight
                                    text-[#5B3A39]
                                    text-[1.75rem]
                                ">
                                    ${art.price}
                                </p>

                            </div>
                            <div className="
                                flex
                                gap-2
                                items-center
                                w-full
                            ">

                                <div className="
                                    bg-[hsla(20,38%,26%,0.1)]
                                    border
                                    border-[hsla(20,38%,26%,1)]
                                    rounded
                                    flex
                                    justify-center
                                    items-center
                                    py-1
                                    px-2
                                ">
                                    <p className="
                                        font-body
                                        text-[1rem]
                                        text-[#5B3A29]
                                        leading-normal
                                        font-medium
                                    ">
                                        {art.isCanvasAvailable ? 'ORIGINAL CANVAS AVAILABLE' : 'DIGITAL PRINT ONLY'}
                                    </p>
                                </div>
                                {art.edition && <p className="text-[#535250] text-[0.875rem] font-semibold leading-normal font-body w-[50%]"> • {art.edition}</p>}
                            </div>
                        </div>

                        
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-2
                    ">
                        <h3 className="
                            font-bold
                            font-heading
                            leading-tight
                            text-[#5B3A29]
                            text-[1.125rem]
                        ">
                            Artist Statement
                        </h3>

                        {art.artistStatement.map(statement => (
                            <p className="
                                font-body
                                text-[1rem]
                                text-[#535250]
                                leading-normal
                            ">
                                {statement}
                            </p>
                        ))}
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-2
                    ">
                        <h3 className="
                            font-bold
                            font-heading
                            leading-tight
                            text-[#5B3A29]
                            text-[1.125rem]
                        ">
                            Includes
                        </h3>
                        <ul className="
                            list-disc
                            ml-4
                        ">
                            {art.included.map(inc => (
                                <li className="
                                    font-body
                                    text-[#535250]
                                    text-[1rem]
                                    leading-normal
                                    mb-2
                                ">
                                    {inc}
                                </li>
                            ))}
                        </ul>
                    </div>
              
                    {art.isCanvasAvailable ? (
                        <div className="
                            flex
                            gap-3
                            items-center
                            w-full
                        ">
                            <a 
                                href={art.canvasUrl}
                                className="
                                    bg-[#20422a]
                                    text-[#f8f5ef]
                                    px-[1.5rem]
                                    py-[1rem]
                                    rounded-lg
                                    font-bold
                                    font-heading
                                    w-full
                                    text-center
                                    hover:bg-[#285836]
                                "
                            >
                                Buy Now
                            </a> 

                            <a 
                                href={art.printUrl}
                                className="
                                    bg-[#f8f5ef]
                                    text-[#20422a]
                                    px-[1.5rem]
                                    py-[1rem]
                                    rounded-lg
                                    font-heading
                                    font-bold
                                    border
                                    border-[#20422a]
                                    w-full
                                    text-center
                                    hover:bg-[#EFECE6]
                                "
                            >
                                Buy Print Only (${art.price})
                            </a>

                        </div>
                        
                    ) : (
                        <a 
                            href={art.printUrl}
                            className="
                                bg-[#20422a]
                                text-[#f8f5ef]
                                px-[1.5rem]
                                py-[1rem]
                                rounded-lg
                                font-bold
                                font-heading
                                w-full
                                text-center
                                hover:bg-[#285836]
                            "
                        >
                            Buy Print
                        </a> 
                    )}
                    
                </div>
            </section>

            <section className="
                flex
                flex-col
                gap-20
                px-[2rem]
                py-[4rem]
                md:px-[7.5rem]
                md:py-[5rem]
                bg-[#392318]
            ">
                <div className="
                    flex
                    flex-col
                    gap-6
                ">
                    <div className="
                        flex
                        items-center
                        gap-1
                    ">
                        <div className="w-[10%] h-[2px] bg-[#F8F5EF]"/>
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-52
                        ">
                            EXHIBITION HISTORY
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]"/>
                    </div>
                    <div className="
                        flex
                        flex-col
                        gap-[2.5rem]
                    ">
                        {art.exhibitHx.map(hist => (
                            <div className="
                                flex
                                flex-col
                                gap-[1rem]
                            ">
                                <h3 className="
                                    font-bold
                                    font-heading
                                    leading-tight
                                    text-[#f8f5ef]
                                    text-[1.5rem]
                                ">
                                    {hist.title}
                                </h3>
                                <p className="
                                    text-[#C5C1BA]
                                    text-[1rem]
                                    font-body
                                    leading-normal
                                ">
                                    {hist.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="
                    flex
                    flex-col
                    gap-6
                ">
                    <div className="
                        flex
                        items-center
                        gap-1
                    ">
                        <div className="w-[10%] h-[2px] bg-[#F8F5EF]"/>
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-52
                        ">
                            MEDIUM & PROCESS
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]"/>
                    </div>
                    <p className="
                        text-[#C5C1BA]
                        text-[1rem]
                        font-body
                        leading-normal
                    ">
                        {art.mediumProcess}
                    </p>
                </div>
            </section>
            <Cta 
                bg={artco}
                title="Commission an Artwork"
                desc="Interested in a custom piece exploring themes of indigenous knowledge, conservation or cultural heritage? Let’s collaborate."
                cta="Ask About Commissions"
                url="#"
            />
        </section>
    )
}