import { useMemo, useState } from 'react';
import { artList, artSubtitle, originalBadge, originalPriceLabel } from './ArtWork';
import { Link } from 'react-router-dom';
import { viewPath } from './ArtWork';
import ArtActions from './Artactions';
import Pagination from '../../Work/components/WorkCards/Pagination';
import { usePagination } from '../../Work/hooks/usePagination';

type Tab = 'all' | number;

// Tabs come from the data, so no year can be orphaned and empty years never show
const years = [...new Set(artList.map(a => a.yrCreated))].sort((a, b) => b - a);
const tabs: Tab[] = ['all', ...years];

export default function AllArtworks() {
    const [activeTab, setActiveTab] = useState<Tab>('all');

    const filteredArtworks = useMemo(() => {
        const list = activeTab === 'all'
            ? artList
            : artList.filter(a => a.yrCreated === activeTab);
        // newest first; sort is stable so original order is kept within a year
        return [...list].sort((a, b) => b.yrCreated - a.yrCreated);
    }, [activeTab]);

    const artWorkPagination = usePagination(filteredArtworks, 9);

    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        artWorkPagination.setCurrentPage(1);
    };

    return (
        <section id="all-artwork" className="
            px-6 md:px-[5rem] xl:px-[7.5rem]
            py-16 md:py-20
            flex
            flex-col
            gap-16
        ">
            <div className="flex flex-col gap-6">

                {/* Section header */}
                <div className="flex items-center gap-1">
                    <div className="w-[10%] h-[2px] bg-[#5B3A29]" />
                    <p className="
                        text-[#5B3A29]
                        text-[1.125rem]
                        leading-normal
                        tracking-[5%]
                        font-body
                        font-semibold
                        min-w-40
                    ">
                        ALL ARTWORKS
                    </p>
                    <div className="w-full h-[2px] bg-[#5B3A29]" />
                </div>

                {/* Tabs */}
                <div className="
                    px-2 py-3
                    flex
                    flex-wrap
                    gap-2
                    bg-[#EEE9E7]
                    rounded-2xl
                    w-full
                " role="tablist">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            role="tab"
                            aria-selected={activeTab === tab}
                            onClick={() => handleTabChange(tab)}
                            className={`
                                px-4 md:px-6
                                py-2 md:py-3
                                rounded-lg
                                font-heading
                                font-bold
                                text-[1rem] md:text-[1.25rem]
                                leading-tight
                                cursor-pointer
                                transition-colors
                                border
                                ${activeTab === tab
                                    ? 'bg-[#20422a] text-[#f8f5ef] shadow-sm border-transparent'
                                    : 'border-transparent text-[#5b3a29] hover:border-[#20422a]'
                                }
                            `}
                        >
                            {tab === 'all' ? 'All' : tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Empty state */}
            {filteredArtworks.length === 0 && (
                <p className="font-body text-[1rem] text-[#535250]">
                    No artworks to show here yet.
                </p>
            )}

            {/* Artwork grid */}
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                gap-10
                w-full
            ">
                {artWorkPagination.paginatedItems.map(art => {
                    const badge = originalBadge(art);
                    const priceLabel = originalPriceLabel(art);
                    const subtitle = artSubtitle(art);

                    return (
                        <div key={art.id} className="flex flex-col gap-4 relative">
                            {badge && (
                                <div className="
                                    absolute top-[16px] left-[16px]
                                    px-3 py-1
                                    bg-white/20
                                    border
                                    border-[#fefefe]
                                    rounded
                                    backdrop-blur-md
                                    z-10
                                ">
                                    <p className="
                                        font-body font-semibold
                                        text-[#fff] text-[1rem]
                                        leading-normal
                                    ">
                                        {badge}
                                    </p>
                                </div>
                            )}

                            <Link to={viewPath(art.id)} className="overflow-hidden rounded">
                                <img
                                    src={art.img}
                                    alt={art.title}
                                    className="w-full h-64 md:h-80 object-cover object-top
                                        transition-transform
                                        duration-500 ease-in-out hover:scale-110
                                    "
                                    loading="lazy"
                                />
                            </Link>

                            <div className="flex flex-col gap-1">
                                <div className="w-full flex justify-between items-start gap-4">
                                    <h3 className="
                                        font-heading
                                        font-bold
                                        text-[1.5rem]
                                        leading-tight
                                        text-[#5B3A29]
                                    ">
                                        {art.title}
                                    </h3>
                                    {priceLabel && (
                                        <p className={`
                                            font-heading
                                            font-bold
                                            leading-tight
                                            text-[#5B3A29]
                                            text-right
                                            shrink-0
                                            ${priceLabel.startsWith('$') ? 'text-[1.75rem]' : 'text-[1rem] pt-1'}
                                        `}>
                                            {priceLabel}
                                        </p>
                                    )}
                                </div>
                                <p className="
                                    font-body
                                    text-[0.875rem]
                                    leading-normal
                                    text-[#535250]
                                ">
                                    {subtitle}
                                </p>
                                {art.dedication && (
                                    <p className="
                                        font-body
                                        text-[0.875rem]
                                        leading-normal
                                        text-[#535250]
                                        italic
                                    ">
                                        {art.dedication}
                                    </p>
                                )}
                            </div>

                            <ArtActions art={art} compact />
                        </div>
                    );
                })}
            </div>

            {artWorkPagination.showPagination && (
                <Pagination
                    currentPage={artWorkPagination.currentPage}
                    totalPages={artWorkPagination.totalPages}
                    onPageChange={artWorkPagination.setCurrentPage}
                />
            )}
        </section>
    );
}