import featuredArt from '../../../assets/feature.webp';

interface Feature {
    img: string
    title: string
    medium: string
    edition: string
    desc: string
    price: string
    buyURL: string
    viewURL: string
}

const featureList:Feature[] = [
    {
        img:featuredArt,
        title:"\“Ancestral Link\"",
        medium:"Oil on Canvas, 2025",
        edition:"Limited Edition Print - 1 of 1",
        desc:"\"Ancestral Link\" bridges traditional Bamiléké knowledge systems with contemporary conservation advocacy. Using AI-assisted composition and classical oil painting, this work reimagines ndop textile patterns as pathways connecting Indigenous ecological wisdom with modern environmental stewardship.",
        price:"$150",
        buyURL:"",
        viewURL:""
    }
]

export default function Featured() {
    return (
        <section className="
            flex
            flex-col
            gap-[1.5rem]
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
                    min-w-64
                ">
                    FEATURED ARTWORK
                </p>
                <div className="w-full h-[2px] bg-[#5B3A29]" />
            </div>
        </section>
    )
}