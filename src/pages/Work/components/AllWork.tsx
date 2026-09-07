import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import WorkCard1 from './WorkCards/WorkCard1';
import WorkCard2 from './WorkCards/WorkCard2';
import WorkCard3 from './WorkCards/WorkCard3';
import WorkCard4 from './WorkCards/WorkCard4';
import Candid from './WorkCards/Candid';
import { projects } from './WorkCards/Projects';
import { researchList } from './WorkCards/Research';
import { opedsList } from './WorkCards/Opeds';
import { editorials } from './WorkCards/Editorial';
import { conserveBooks, storyBooks } from './WorkCards/Books';
import { exhibits } from './WorkCards/Exhibit';
import { featureList } from './WorkCards/Featured';
import { collabs } from './WorkCards/Collabs';
import { media } from './WorkCards/Mediafeature';
import { interviewList } from './WorkCards/Interviews';
import { films } from './WorkCards/Films';
import { presentations } from './WorkCards/Presents';
import { candidList } from './WorkCards/CandidList';
import Pagination from './WorkCards/Pagination';
import { usePagination } from '../hooks/usePagination';
import poetes from '../../../assets/poetes.svg';
import riverborn from '../../../assets/river-born.svg';
import lancaster from '../../../assets/lancaster (1).svg';
import blogger from '../../../assets/blogger.svg';
import infographic1 from '../../../assets/infographic1.webp';
import infographic2 from '../../../assets/infographic2.webp';
import infographic3 from '../../../assets/infographic3.webp';
import infographic4 from '../../../assets/infographic4.webp';

const tabs = ["Projects", "Research", "Op-Eds", "Writing", "Books", "Exhibitions", "Candid Shots", "Infographics", "Footprints"];

const infographics = [infographic1, infographic2, infographic3, infographic4];

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="font-heading font-bold leading-tight text-[1.5rem] md:text-[2rem] text-[#5b3a29]">
                {title}
            </h3>
            {children}
        </div>
    );
}

export default function AllWork() {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState("Projects");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && tabs.includes(tab)) {
            setActiveTab(tab);
            document.getElementById('all-work')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchParams]);

    const researchPagination = usePagination(researchList);
    const opedsPagination = usePagination(opedsList);

    const closeModal = useCallback(() => setSelectedIndex(null), []);

    const showPrev = useCallback(() => {
        setSelectedIndex((prev) => {
            if (prev === null) return prev;
            return (prev - 1 + infographics.length) % infographics.length;
        });
    }, []);

    const showNext = useCallback(() => {
        setSelectedIndex((prev) => {
            if (prev === null) return prev;
            return (prev + 1) % infographics.length;
        });
    }, []);

    // Keyboard navigation while modal is open
    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, closeModal, showPrev, showNext]);

    return (
        <section
            id="all-work"
            className="
                px-6 md:px-12 lg:px-[7.5rem]
                py-16 lg:py-20
                bg-[#f8f5ef]
                flex flex-col
                gap-16
            "
        >
            <div className="flex flex-col items-center gap-10 w-full">
                <h2 className="font-bold font-heading leading-tight text-[1.75rem] md:text-[2.5rem] text-[#5b3a29]">
                    All Work
                </h2>

                {/* Tabs */}
                <div className="
                    px-2 py-3
                    flex flex-wrap
                    gap-2
                    bg-[#EEE9E7]
                    rounded-2xl
                    w-full
                    xl:w-[55%]
                ">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                px-4 md:px-6
                                py-2 md:py-3
                                rounded-lg
                                font-heading font-bold
                                text-[0.875rem] md:text-[1rem]
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
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects */}
                {activeTab === 'Projects' &&
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {projects.map((project) => (
                            <WorkCard1
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                desc={project.desc}
                                imgSrc={project.imgSrc}
                                imgType={project.imgType}
                                tag={project.tag}
                                type={project.type}
                                url={project.url}
                            />
                        ))}
                    </div>
                }

                {/* Research */}
                {activeTab === 'Research' &&
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {researchPagination.paginatedItems.map((research) => (
                            <WorkCard1
                                key={research.id}
                                id={research.id}
                                label={research.label}
                                title={research.title}
                                desc={research.desc}
                                type={research.type}
                                url={research.url}
                            />
                        ))}
                        {researchPagination.showPagination && (
                            <div className="col-span-full">
                                <Pagination
                                    currentPage={researchPagination.currentPage}
                                    totalPages={researchPagination.totalPages}
                                    onPageChange={researchPagination.setCurrentPage}
                                />
                            </div>
                        )}
                    </div>
                }

                {/* Op-Eds */}
                {activeTab === 'Op-Eds' &&
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {opedsPagination.paginatedItems.map((oped) => (
                            <WorkCard1
                                key={oped.id}
                                id={oped.id}
                                label={oped.label}
                                title={oped.title}
                                desc={oped.desc}
                                type={oped.type}
                                url={oped.url}
                            />
                        ))}
                        {opedsPagination.showPagination && (
                            <div className="col-span-full">
                                <Pagination
                                    currentPage={opedsPagination.currentPage}
                                    totalPages={opedsPagination.totalPages}
                                    onPageChange={opedsPagination.setCurrentPage}
                                />
                            </div>
                        )}
                    </div>
                }

                {/* Writing */}
                {activeTab === 'Writing' &&
                    <div className="flex flex-col gap-12 lg:gap-[5rem] w-full">
                        <SubSection title="Poetry">
                            <p className="font-body leading-normal text-[0.875rem] text-[#535250]">
                                My poems were chosen from over 1,000 submissions for a published anthology of young writers.
                            </p>
                            <div className="flex sm:flex-col md:flex-row gap-6 ">
                                <WorkCard1
                                    title="Poètes Du Monde Pour Le Français Et La Francophonie: Volume 3, Pages 170-176"
                                    desc="Third volume of poems written by hundreds of poets from all continents as part of a poetry competition organized by AFFOImonde in preparation for the Dakar Summit (November 2014)."
                                    imgSrc={poetes}
                                    imgType="round"
                                    type="research"
                                    url="https://www.agora-francophone.org/FRANCOPHONIE-Poetes-du-monde-pour-le-francais-et-la-francophonie"
                                />
                                <WorkCard1
                                    title="River born"
                                    desc="One of my poems featured in Current Conservation about an ancestral homeland whose river has sustained generations of a family, and about the tension between the intimate, cultural meaning of that land to its people and the detached environmental value the wider world assigns to it in the future."
                                    imgSrc={riverborn}
                                    imgType="round"
                                    type="research"
                                    url="https://www.currentconservation.org/river-born/"
                                />
                            </div>
                        </SubSection>

                        <SubSection title="Editorial/Review Work">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {editorials.map(e => (
                                    <WorkCard2
                                        key={e.id}
                                        id={e.id}
                                        title={e.title}
                                        yr={e.yr}
                                        imgSrc={e.imgSrc}
                                        imgType="round"
                                    />
                                ))}
                            </div>
                        </SubSection>

                        <SubSection title="Early Blogs">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <WorkCard1
                                    title="From Accra to Lancaster: An Exchange Story"
                                    desc="A reflective blog project documenting the inaugural Lancaster University Ghana–UK exchange, capturing cultural immersion, student experiences, and cross-campus integration."
                                    imgSrc={lancaster}
                                    imgType="round"
                                    type="research"
                                    url="https://lugsummertripuk2014.wordpress.com/about/"
                                />
                                <WorkCard1
                                    title="Weekly Met"
                                    desc="A reflective, philosophy-driven blog exploring education, life, identity, morality, and personal growth through essays that blend lived experience, social critique, and African-centered perspectives."
                                    imgSrc={blogger}
                                    imgType="round"
                                    type="research"
                                    url="http://weekly-met.blogspot.com/"
                                />
                            </div>
                        </SubSection>
                    </div>
                }

                {/* Books */}
                {activeTab === 'Books' &&
                    <div className="flex flex-col gap-12 lg:gap-[4rem] w-full">
                        <SubSection title="Conservation Books">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {conserveBooks.map(book => (
                                    <WorkCard3
                                        key={book.id}
                                        id={book.id}
                                        title={book.title}
                                        author={book.author}
                                        yr={book.yr}
                                        imgSrc={book.imgSrc}
                                        url={book.url}
                                    />
                                ))}
                            </div>
                        </SubSection>
                        <SubSection title="Story Books">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {storyBooks.map(book => (
                                    <WorkCard3
                                        key={book.id}
                                        id={book.id}
                                        title={book.title}
                                        author={book.author}
                                        yr={book.yr}
                                        imgSrc={book.imgSrc}
                                        url={book.url}
                                    />
                                ))}
                            </div>
                        </SubSection>
                    </div>
                }

                {/* Exhibitions */}
                {activeTab === 'Exhibitions' &&
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {exhibits.map((e) => (
                            <WorkCard1
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                desc={e.desc}
                                imgSrc={e.imgSrc}
                                imgType="rect"
                                type="exhibition"
                                url={e.url}
                            />
                        ))}
                    </div>
                }

                {/* Candid Shots */}
                {activeTab === 'Candid Shots' &&
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-16 w-full">
                        {candidList.map((shot) => (
                            <Candid
                                key={shot.id}
                                id={shot.id}
                                img={shot.img}
                                label={shot.label}
                                desc={shot.desc}
                                url={shot.url}
                            />
                        ))}
                    </div>
                }

                {/* Infographics */}
                {activeTab === 'Infographics' &&
                    <div className="flex justify-center flex-wrap gap-8 w-full">
                        {infographics.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedIndex(i)}
                                className="
                                    border border-[#e0dad2]
                                    rounded-xl
                                    overflow-hidden
                                    w-[15rem] max-w-full
                                    cursor-pointer
                                    transition-transform
                                    hover:scale-[1.02]
                                    focus:outline-none
                                    focus:ring-2 focus:ring-[#20422a]
                                "
                            >
                                <img
                                    src={img}
                                    alt={`Infographic ${i + 1}`}
                                    className="w-full h-auto block"
                                />
                            </button>
                        ))}
                    </div>
                }

                {/* Footprints */}
                {activeTab === 'Footprints' &&
                    <div className="flex flex-col gap-12 lg:gap-[5rem] w-full">
                        <SubSection title="Books & Publications Features">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featureList.map((feature) => (
                                    <WorkCard1
                                        key={feature.id}
                                        id={feature.id}
                                        imgSrc={feature.imgSrc}
                                        imgType="round"
                                        title={feature.title}
                                        desc={feature.desc}
                                        type="research"
                                        url={feature.url}
                                    />
                                ))}
                            </div>
                        </SubSection>

                        <SubSection title="Collaborations">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {collabs.map((collab) => (
                                    <WorkCard1
                                        key={collab.id}
                                        id={collab.id}
                                        imgSrc={collab.imgSrc}
                                        imgType="rect"
                                        title={collab.title}
                                        desc={collab.desc}
                                        type="exhibition"
                                        url={collab.url}
                                    />
                                ))}
                            </div>
                        </SubSection>

                        <SubSection title="Press & Media Features">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {media.map((m) => (
                                    <WorkCard2
                                        key={m.id}
                                        id={m.id}
                                        title={m.title}
                                        yr={m.yr}
                                        imgSrc={m.imgSrc}
                                        imgType="round"
                                        url={m.url}
                                    />
                                ))}
                            </div>
                        </SubSection>

                        <SubSection title="Interviews">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {interviewList.map((interview) => (
                                    <WorkCard4
                                        key={interview.id}
                                        id={interview.id}
                                        title={interview.title}
                                        yr={interview.yr}
                                        tagLabel={interview.type}
                                        url={interview.url}
                                    />
                                ))}
                            </div>
                        </SubSection>

                        <SubSection title="Documentaries, Short Film & Cinema">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {films.map((film) => (
                                    <WorkCard1
                                        key={film.id}
                                        id={film.id}
                                        imgSrc={film.img}
                                        title={film.title}
                                        desc={film.desc}
                                        type="film"
                                        url={film.url}
                                    />
                                ))}
                            </div>
                        </SubSection>

                        <SubSection title="Presentations & Invited Lectures">
                            <ul className="flex flex-col gap-3 list-disc ml-4">
                                {presentations.map((p) => (
                                    <li key={p} className="text-[#535250] leading-normal text-[1rem] font-body">
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </SubSection>
                    </div>
                }
            </div>

            {/* Infographics Modal */}
            {selectedIndex !== null && (
                <div
                    className="
                        fixed inset-0 z-50
                        flex items-center justify-center
                        bg-black/70
                        px-4 py-8
                    "
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="
                            absolute top-6 right-6
                            text-[#f8f5ef] text-3xl
                            leading-none
                            cursor-pointer
                            hover:opacity-70
                            transition-opacity
                        "
                        aria-label="Close"
                    >
                        ×
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        className="
                            absolute left-4 md:left-8
                            top-1/2 -translate-y-1/2
                            text-[#f8f5ef] text-4xl
                            leading-none
                            cursor-pointer
                            hover:opacity-70
                            transition-opacity
                        "
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <img
                        src={infographics[selectedIndex]}
                        alt={`Infographic ${selectedIndex + 1}`}
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        className="
                            absolute right-4 md:right-8
                            top-1/2 -translate-y-1/2
                            text-[#f8f5ef] text-4xl
                            leading-none
                            cursor-pointer
                            hover:opacity-70
                            transition-opacity
                        "
                        aria-label="Next image"
                    >
                        ›
                    </button>

                    <div className="
                        absolute bottom-6
                        text-[#f8f5ef] text-sm
                        font-body
                    ">
                        {selectedIndex + 1} / {infographics.length}
                    </div>
                </div>
            )}
        </section>
    );
}