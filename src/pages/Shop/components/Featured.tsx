import { artList, artSubtitle, originalPriceLabel } from './ArtWork';
import ArtActions from './Artactions';

// Featured works are just artList entries with `featured: true`.
// No duplicated data to keep in sync.
const featureList = artList.filter(a => a.featured);

export default function Featured() {
    if (featureList.length === 0) return null;

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

            {featureList.map(feat => {
                const priceLabel = originalPriceLabel(feat);
                const subtitle = artSubtitle(feat);

                return (
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
                            <div className="flex flex-col gap-2">
                                <h3 className="
                                    font-heading
                                    text-[1.5rem]
                                    leading-tight
                                    text-[#5B3A29]
                                    font-bold
                                ">
                                    {feat.title}
                                </h3>
                                {subtitle && (
                                    <p className="
                                        text-[0.875rem]
                                        leading-normal
                                        text-[#535250]
                                        font-body
                                    ">
                                        {subtitle}
                                    </p>
                                )}
                            </div>

                            {feat.edition && (
                                <p className="
                                    font-body
                                    leading-normal
                                    text-[1rem]
                                    text-[#535250]
                                ">
                                    {feat.edition}
                                </p>
                            )}

                            {feat.artistStatement[0] && (
                                <p className="
                                    font-body
                                    text-[1rem]
                                    leading-normal
                                    text-[#535250]
                                    w-full
                                    md:w-[80%]
                                    line-clamp-3
                                ">
                                    {feat.artistStatement[0]}
                                </p>
                            )}

                            {priceLabel && (
                                <p className="
                                    font-heading
                                    text-[1.5rem]
                                    leading-tight
                                    text-[#5b3a29]
                                    font-bold
                                ">
                                    {priceLabel}
                                </p>
                            )}

                            <ArtActions art={feat} />
                        </div>

                        <img
                            src={feat.featuredImg ?? feat.img}
                            alt={feat.title}
                            className="
                                w-full
                                h-[auto]
                                lg:w-[29.3125rem]
                            "
                            loading="lazy"
                        />
                    </div>
                );
            })}
        </section>
    );
}