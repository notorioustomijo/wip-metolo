import { useState } from 'react';
import { artList } from './ArtWork';
import Pagination from '../../Work/components/WorkCards/Pagination';
import { usePagination } from '../../Work/hooks/usePagination';

const yrTabs = [
    '2025',
    '2021',
    '2019',
    '2018',
    '2017',
    '2013 - 2016',
    '2006 - 2007'
]

export default function AllArtworks() {
    const [activeTab, setActiveTab] = useState("2025");

    const filteredArtworks = artList.filter(art => {
        if (activeTab.includes(' - ')) {
            const [start, end] = activeTab.split(' - ').map(Number);
            const yr = Number(art.yrCreated);
            return yr >= start && yr <= end;
        }
        return art.yrCreated === activeTab;
    });

    const artWorkPagination = usePagination(filteredArtworks, 9);

    const handleTabChange = (tab: string) => {
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
                ">
                    {yrTabs.map(tab => (
                        <button
                            key={tab}
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
                                ${activeTab === tab
                                    ? 'bg-[#20422a] text-[#f8f5ef] shadow-sm'
                                    : 'text-[#5b3a29] hover:border hover:border-[#20422a]'
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Artwork grid */}
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                gap-10
                w-full
            ">
                {artWorkPagination.paginatedItems.map(art => (
                    <div key={art.id} className="flex flex-col gap-4 relative">
                        {!art.isCanvasAvailable && (<div className="
                            absolute top-[16px] left-[16px]
                            px-3 py-1
                            bg-white/20
                            border
                            border-[#fefefe]
                            rounded
                            backdrop-blur-md
                            z-10
                        "
                    >
                            <p className="
                                font-body font-semibold
                                text-[#fff] text-[1rem]
                                leading-normal
                            ">
                                SOLD
                            </p>
                        </div>)}
                        <a href={art.viewUrl} className="overflow-hidden rounded">
                            <img
                                src={art.img}
                                className="w-full h-64 md:h-80 object-cover object-top
                                    transition-transform 
                                    duration-500 ease-in-out hover:scale-110
                                "
                                loading="lazy"
                                onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100' )}
                            />
                        </a>
                        <div className="flex flex-col gap-1">
                            <div className="w-full flex justify-between items-start">
                                <h3 className="
                                    font-heading
                                    font-bold
                                    text-[1.5rem]
                                    leading-tight
                                    text-[#5B3A29]
                                ">
                                    {art.title}
                                </h3>
                                <p className="
                                    font-heading
                                    font-bold
                                    leading-tight
                                    text-[#5B3A29]
                                    text-[1.75rem]
                                    shrink-0
                                ">
                                    ${art.price}
                                </p>
                            </div>
                            <p className="
                                font-body
                                text-[0.875rem]
                                leading-normal
                                text-[#535250]
                            ">
                                {art.info}
                            </p>
                        </div>
                        <div className="flex gap-3 items-center w-full">
                            {art.isCanvasAvailable ? (
                                <a
                                    href={art.canvasUrl}
                                    className="
                                        bg-[#20422a] text-[#f8f5ef]
                                        px-6 py-4
                                        rounded-lg
                                        font-bold font-heading
                                        w-full text-center
                                        hover:bg-[#285836]
                                    "
                                >
                                    Buy Now
                                </a>
                            ) : (
                                <a
                                    href={art.printUrl}
                                    className="
                                        bg-[#20422a] text-[#f8f5ef]
                                        px-6 py-4
                                        rounded-lg
                                        font-heading font-bold
                                        w-full text-center
                                        hover:bg-[#285836]
                                    "
                                >
                                    Buy Print
                                </a>
                            )}
                            <a
                                href={art.viewUrl}
                                className="
                                    bg-[#f8f5ef] text-[#20422a]
                                    px-6 py-4
                                    rounded-lg
                                    font-heading font-bold
                                    border border-[#20422a]
                                    w-full text-center
                                    hover:bg-[#EFECE6]
                                "
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
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