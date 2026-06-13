import featuredArt from '../../../assets/feature.webp';
import type { Art } from './ArtWork';

const featureList:Art[] = [
    {
        id: "ancestral-link",
        img: featuredArt,
        title: "\“Ancestral Link\"",
        info: "Oil on Canvas, 2025",
        edition:"Limited Edition Print - 1 of 1",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: true,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/ancestral-link",
        yrCreated: "2025"
    },
]


export default function Featured() {
    return (
        <section className="
            flex
            flex-col
            gap-[1.5rem]
            pt-20
            pb-10
            px-[2rem]
            md:px-[5rem]
            xl:px-[7.5rem]
        ">
            <div className="
                flex
                items-center
                gap-1
            ">
                <div className="w-[15%] h-[2px] bg-[#5B3A29]" />
                <p className="
                    text-[#5B3A29]
                    text-[1.125rem]
                    leading-normal
                    tracking-[5%]
                    font-body
                    font-semibold
                    min-w-52
                ">
                    FEATURED ARTWORK
                </p>
                <div className="w-full h-[2px] bg-[#5B3A29]" />
            </div>
            {featureList.map(feat => (
                <div className="
                    flex
                    flex-col-reverse
                    gap-[2rem]
                    w-full
                    lg:flex-row
                    lg:justify-between
                    items-center
                " key={feat.id}>
                    <div className="
                        flex
                        flex-col
                        gap-[1.5rem]
                        w-full
                    ">
                        <div className="
                            flex
                            flex-col
                            gap-2
                        ">
                            <h3 className="
                                font-heading
                                text-[1.5rem]
                                leading-tight
                                text-[#5B3A29]
                                font-bold
                            ">
                                {feat.title}
                            </h3>
                            <p className="
                                text-[0.875rem]
                                leading-normal
                                text-[#535250]
                                font-body
                            ">
                                {feat.info}
                            </p>
                        </div>
                        {feat.edition && 
                            <p
                                className="
                                    font-body
                                    leading-normal
                                    text-[1rem]
                                    text-[#535250]
                                "
                            >
                                {feat.edition}
                            </p>
                        }
                        <p
                            className="
                                font-body
                                text-[1rem]
                                leading-normal
                                text-[#535250]
                                w-full
                                md:w-[80%]
                                line-clamp-3
                            "
                        >
                            {feat.artistStatement}
                        </p>

                        <p className="
                            font-heading
                            text-[1.5rem]
                            leading-tight
                            text-[#5b3a29]
                            font-bold
                        ">
                            ${feat.price}
                        </p>

                        <div className="
                            flex
                            gap-3
                        ">
                            <a 
                                href={feat.canvasUrl}
                                className="
                                    font-heading
                                    text-[1rem]
                                    text-[#f8f5ef]
                                    font-bold
                                    leading-tight
                                    bg-[#20422a]
                                    rounded-lg
                                    px-[1.5rem]
                                    py-[1rem]
                                    hover:bg-[#285836]
                                "
                            >
                                Buy Now
                            </a>
                            <a 
                                href={feat.viewUrl}
                                className="
                                    font-heading
                                    font-bold
                                    text-[1rem]
                                    text-[#20422a]
                                    bg-[#f8f5ef]
                                    leading-tight
                                    rounded-lg
                                    px-[1.5rem]
                                    py-[1rem]
                                    border-[#20422a]
                                    border-[0.0625rem]
                                    hover:bg-[#EFECE6]
                                "
                            >
                                View Details
                            </a>
                        </div>

                    </div>

                    <img 
                        src={feat.img} 
                        className='
                            w-full
                            h-[auto]
                            lg:w-[29.3125rem]                        
                        '
                    />
                </div>

            ))}
        </section>
    )
}