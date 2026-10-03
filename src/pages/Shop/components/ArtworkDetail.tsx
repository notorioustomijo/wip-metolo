import { Link, useParams } from 'react-router-dom';
import { artList, artSubtitle, originalPriceLabel } from '../components/ArtWork';
import type { Art } from './ArtWork';
import ArtActions from './Artactions';
import Cta from '../../../global components/Cta';
import artco from '../../../assets/art-commiss.webp';

// Short availability tag shown under the title
function statusTag(art: Art): string | null {
    switch (art.original.status) {
        case 'available': return 'ORIGINAL AVAILABLE';
        case 'make-offer': return 'OPEN TO OFFERS';
        case 'sold': return 'ORIGINAL SOLD';
        case 'gifted': return 'PRIVATE COLLECTION';
        case 'not-for-sale': return 'NOT FOR SALE';
        default: return null; // unlisted: display only
    }
}

function SectionHeader({ children }: { children: string }) {
    return (
        <div className="flex items-center gap-1">
            <div className="w-[10%] h-[2px] bg-[#F8F5EF]" />
            <p className="
                text-[#F8F5EF]
                text-[1.125rem]
                leading-normal
                tracking-[5%]
                font-body
                font-semibold
                min-w-52
            ">
                {children}
            </p>
            <div className="w-full h-[2px] bg-[#F8F5EF]" />
        </div>
    );
}

export default function ArtworkDetail() {
    const { artworkId } = useParams();
    const art = artList.find(a => a.id === artworkId);

    if (!art) {
        return (
            <section className="bg-[#F8F5EF] px-6 md:px-[7.5rem] py-[7.5rem] flex flex-col gap-4 items-start">
                <h1 className="font-heading font-bold text-[1.5rem] text-[#5B3A29]">
                    Artwork not found
                </h1>
                <Link to="/shop" className="font-heading font-bold text-[#20422a] underline">
                    Back to the shop
                </Link>
            </section>
        );
    }

    const isLandscape = art.orientation === 'landscape';
    const priceLabel = originalPriceLabel(art);
    const tag = statusTag(art);
    const subtitle = artSubtitle(art);
    const processText = art.process;
    const hasIncluded = !!art.included?.length;
    const hasExhibitions = !!art.exhibitHx?.length;
    const showDarkSection = hasExhibitions || !!processText;

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
                    alt={art.title}
                    className={
                        `${isLandscape
                            ? 'w-full md:w-[75rem] h-[16rem] md:h-[45rem] object-cover'
                            : 'w-full lg:w-[32rem] h-auto object-center'}
                    `}
                    fetchPriority="high"
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
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="
                                    font-heading
                                    font-bold
                                    text-[1.5rem]
                                    text-[#5B3A29]
                                    leading-tight
                                ">
                                    {art.title}
                                </h1>
                                {subtitle && (
                                    <p className="
                                        font-body
                                        text-[0.875rem]
                                        text-[#535250]
                                        leading-normal
                                    ">
                                        {subtitle}
                                    </p>
                                )}
                                {art.dedication && (
                                    <p className="
                                        font-body
                                        text-[0.875rem]
                                        text-[#535250]
                                        leading-normal
                                        italic
                                    ">
                                        {art.dedication}
                                    </p>
                                )}
                            </div>

                            {priceLabel && (
                                <p className={`
                                    font-heading
                                    font-bold
                                    leading-tight
                                    text-[#5B3A39]
                                    text-right
                                    shrink-0
                                    ${priceLabel.startsWith('$') ? 'text-[1.75rem]' : 'text-[1rem] pt-1'}
                                `}>
                                    {priceLabel}
                                </p>
                            )}
                        </div>

                        {(tag || art.edition) && (
                            <div className="flex gap-2 items-center w-full flex-wrap">
                                {tag && (
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
                                            {tag}
                                        </p>
                                    </div>
                                )}
                                {art.edition && (
                                    <p className="text-[#535250] text-[0.875rem] font-semibold leading-normal font-body">
                                        • {art.edition}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {art.artistStatement.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <h3 className="
                                font-bold
                                font-heading
                                leading-tight
                                text-[#5B3A29]
                                text-[1.125rem]
                            ">
                                Artist Statement
                            </h3>
                            {art.artistStatement.map((statement, i) => (
                                <p key={i} className="
                                    font-body
                                    text-[1rem]
                                    text-[#535250]
                                    leading-normal
                                ">
                                    {statement}
                                </p>
                            ))}
                        </div>
                    )}

                    {hasIncluded && (
                        <div className="flex flex-col gap-2">
                            <h3 className="
                                font-bold
                                font-heading
                                leading-tight
                                text-[#5B3A29]
                                text-[1.125rem]
                            ">
                                Includes
                            </h3>
                            <ul className="list-disc ml-4">
                                {art.included!.map(inc => (
                                    <li key={inc} className="
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
                    )}

                    {/* Buttons are decided by original.status and which print variants exist */}
                    <ArtActions art={art} showDetails={false} />
                </div>
            </section>

            {showDarkSection && (
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
                    {hasExhibitions && (
                        <div className="flex flex-col gap-6">
                            <SectionHeader>EXHIBITION HISTORY</SectionHeader>
                            <div className="flex flex-col gap-[2.5rem]">
                                {art.exhibitHx!.map(hist => (
                                    <div key={hist.title} className="flex flex-col gap-[1rem]">
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
                    )}

                    {processText && (
                        <div className="flex flex-col gap-6">
                            <SectionHeader>MEDIUM & PROCESS</SectionHeader>
                            <p className="
                                text-[#C5C1BA]
                                text-[1rem]
                                font-body
                                leading-normal
                            ">
                                {processText}
                            </p>
                        </div>
                    )}
                </section>
            )}

            <Cta
                bg={artco}
                title="Commission an Artwork"
                desc="Interested in a custom piece exploring themes of indigenous knowledge, conservation or cultural heritage? Let’s collaborate."
                cta="Ask About Commissions"
                url="#"
            />
        </section>
    );
}