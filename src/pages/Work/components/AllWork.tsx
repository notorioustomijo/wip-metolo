import { useState } from 'react';
import WorkCard1 from './WorkCards/WorkCard1';
import WorkCard2 from './WorkCards/WorkCard2';
import WorkCard3 from './WorkCards/WorkCard3';
import WorkCard4 from './WorkCards/WorkCard4';
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
import Pagination from './WorkCards/Pagination';
import { usePagination } from '../hooks/usePagination';
import poetes from '../../../assets/poetes.svg';
import lancaster from '../../../assets/lancaster (1).svg';
import blogger from '../../../assets/blogger.svg';

const tabs = [ "Projects", "Research", "Op-Eds", "Writing", "Books", "Exhibitions", "Footprints" ]

export default function AllWork() {
    const [activeTab, setActiveTab] = useState("Projects");

    const researchPagination = usePagination(researchList);
    const opedsPagination = usePagination(opedsList);

    return (
        <section className="
            px-30
            py-20
            bg-[#f8f5ef]
            flex
            flex-col
            justify-center
            gap-16
        ">
            <div className="
                flex
                flex-col
                items-center
                gap-10
                w-[100%]
            ">
                <h2 className="
                    font-bold
                    font-heading
                    leading-tight
                    text-[2.5rem]
                    text-[#5b3a29]
                ">
                    All Work
                </h2>

                {/* Tab Buttons */}
                <div className="
                    px-[0.625rem]
                    py-3
                    flex
                    gap-2
                    bg-[#EEE9E7]
                    rounded-2xl
                ">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                px-[1.5rem]
                                py-[0.75rem]
                                rounded-lg
                                font-heading
                                font-bold
                                text-[1.5rem]
                                leading-tight

                                ${activeTab === tab 
                                    ? "bg-[#20422a] text-[#f8f5ef] [box-shadow:0_4px_8px_rgba(0,0,0,0.08)]"
                                    : "text-[#5b3a29] hover:bg-[transparent] hover:border hover:border-[#20422a] cursor-pointer"
                                }    
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Sections */}

                {/* Projects */}
                {activeTab === 'Projects' && 
                    <div className='
                        flex
                        flex-row
                        justify-center
                        flex-wrap
                        gap-[2.5rem]
                        w-[100%]
                        px-[12.5rem]
                    '>
                        {projects.map((project) => (
                            <WorkCard1 
                                id={project.id}
                                title={project.title}
                                desc={project.desc}
                                imgSrc={project.imgSrc}
                                imgType={project.imgType}
                                tag={project.tag}
                                type={project.type}
                                url={project.url}
                                width={project.width}
                            />
                        ))}
                    </div>
                }
                
                {/* Research */}
                {activeTab === 'Research' && 
                    <div className='
                        flex
                        flex-row
                        justify-center
                        flex-wrap
                        gap-[2.5rem]
                        w-[100%]
                        px-[12.5rem]
                    '>
                        {researchPagination.paginatedItems.map((research) => (
                            <WorkCard1 
                                id={research.id}
                                label={research.label}
                                title={research.title}
                                desc={research.desc}
                                type={research.type}
                                url={research.url}
                                width={research.width}
                            />
                        ))}
                        {researchPagination.showPagination && (
                            <Pagination 
                                currentPage={researchPagination.currentPage}
                                totalPages={researchPagination.totalPages}
                                onPageChange={researchPagination.setCurrentPage}
                            />
                        )}
                    </div>
                }
                
                
                {/* Op-Eds */}
                {activeTab === 'Op-Eds' && 
                    <div className='
                        flex
                        flex-row
                        justify-center
                        flex-wrap
                        gap-[2.5rem]
                        w-[100%]
                        px-[12.5rem]
                    '>
                        {opedsPagination.paginatedItems.map((oped) => (
                            <WorkCard1 
                                id={oped.id}
                                label={oped.label}
                                title={oped.title}
                                desc={oped.desc}
                                type={oped.type}
                                url={oped.url}
                                width={oped.width}
                            />
                        ))}
                        {opedsPagination.showPagination && (
                            <Pagination 
                                currentPage={opedsPagination.currentPage}
                                totalPages={opedsPagination.totalPages}
                                onPageChange={opedsPagination.setCurrentPage}
                            />
                        )}
                    </div>
                }
                
                {/* Writing */}
                {activeTab === 'Writing' && 
                    <div className='
                        flex
                        flex-col
                        gap-[5rem]
                        w-[100%]
                        px-[12.5rem]
                    '>
                        <div className="
                           flex
                           flex-col
                           gap-[1.5rem] 
                        ">
                            <div className="
                                flex
                                flex-col
                                gap-2
                            ">
                                <h3 className="
                                    font-heading
                                    font-bold
                                    leading-tight
                                    text-[2rem]
                                    text-[#5b3a29]
                                ">
                                    Poetry
                                </h3>
                                <p className="
                                    font-body
                                    leading-normal
                                    text-[0.875rem]
                                    text-[#535250]
                                ">
                                    My poems were chosen from over 1,000 submissions for a published anthology of young writers.
                                </p>
                            </div>
                            <WorkCard1 
                                title="Poètes Du Monde Pour Le Français Et La Francophonie: Volume 3, Pages 170-176"
                                desc="Third volume of poems written by hundreds of poets from all continents as part of a poetry competition organized by AFFOImonde in preparation for the Dakar Summit (November 2014). The competition focused on the French language and Francophonie, with the subject being a painting specially created for the occasion by the artist Cobra Christian Wind."
                                imgSrc={poetes}
                                imgType="round"
                                type="research"
                                url=""
                                width={100}
                            />
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                text-[2rem]
                                leading-tight
                                text-[#5b3a29]
                            ">
                                Editorial/Review Work
                            </h3>
                            <div className="
                                flex
                                gap-[2.5rem]
                                h-[14.0625rem]
                            ">
                                {editorials.map(e => (
                                    <WorkCard2 
                                        id={e.id}
                                        title={e.title}
                                        yr={e.yr}
                                        imgSrc={e.imgSrc}
                                        imgType="round"
                                        width={e.width}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                text-[2rem]
                                leading-tight
                                text-[#5b3a29]
                            ">
                                Early Blogs
                            </h3>
                            <div className="
                                flex
                                gap-[2.5rem]
                            ">
                                <WorkCard1 
                                    title="From Accra to Lancaster: An Exchange Story"
                                    desc="A reflective blog project documenting the inaugural Lancaster University Ghana–UK exchange, capturing cultural immersion, student experiences, and cross-campus integration."
                                    imgSrc={lancaster}
                                    imgType="round"
                                    type="research"
                                    url=""
                                    width={45}
                                />
                                <WorkCard1 
                                    title="Weekly Met"
                                    desc="A reflective, philosophy-driven blog exploring education, life, identity, morality, and personal growth through essays that blend lived experience, social critique, and African-centered perspectives."
                                    imgSrc={blogger}
                                    imgType="round"
                                    type="research"
                                    url=""
                                    width={45}
                                />
                            </div>
                        </div>
                    </div>
                }

                {/* Books */}
                {activeTab === 'Books' && 
                    <div className='
                        flex
                        flex-col
                        gap-[4rem]
                        w-[100%]
                        items-center
                    '>
                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                text-[#5b3a29]
                                text-[2rem]
                                leading-tight
                            ">
                                Conservation Books
                            </h3>
                            <div className="
                                flex
                                gap-[2.5rem]
                            ">
                                {conserveBooks.map(book => (
                                    <WorkCard3 
                                        id={book.id}
                                        title={book.title}
                                        author={book.author}
                                        yr={book.yr}
                                        imgSrc={book.imgSrc}
                                        url={book.url}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                text-[#5b3a29]
                                text-[2rem]
                                leading-tight
                            ">
                                Story Books
                            </h3>
                            <div className="
                                flex
                                gap-[2.5rem]
                                self-start
                            ">
                                {storyBooks.map(book => (
                                    <WorkCard3 
                                        id={book.id}
                                        title={book.title}
                                        author={book.author}
                                        yr={book.yr}
                                        imgSrc={book.imgSrc}
                                        url={book.url}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                }

                {/* Exibitions */}
                {activeTab === 'Exhibitions' && 
                    <div className='
                        flex
                        flex-row
                        justify-center
                        flex-wrap
                        gap-[2.5rem]
                        w-[100%]
                        px-[6.25rem]
                    '>
                        {exhibits.map((e) => (
                            <WorkCard1 
                                id={e.id}
                                title={e.title}
                                desc={e.desc}
                                imgSrc={e.imgSrc}
                                imgType="rect"
                                type="exhibition"
                                url={e.url}
                                width={45}
                            />
                        ))}
                    </div>
                }
                
                
                {/* Footprints */}
                {activeTab === 'Footprints' && 
                    <div className='
                        flex
                        flex-col
                        gap-[5rem]
                        w-[100%]
                        px-[9.375rem]
                    '>
                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                leading-tight
                                text-[2rem]
                                text-[#5b3a29]
                            ">
                                Books & Publications Features
                            </h3>
                            <div className="
                                flex
                                gap-[1.5rem]
                            ">
                                {featureList.map((feature) => (
                                    <WorkCard1 
                                        id={feature.id}
                                        imgSrc={feature.imgSrc}
                                        imgType="round"
                                        title={feature.title}
                                        desc={feature.desc}
                                        type="research"
                                        url={feature.url}
                                        width={45}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                leading-tight
                                text-[2rem]
                                text-[#5b3a29]
                            ">
                                Collaborations
                            </h3>
                            <div className="
                                flex
                                gap-[1.5rem]
                            ">
                                {collabs.map((collab) => (
                                    <WorkCard1 
                                        id={collab.id}
                                        imgSrc={collab.imgSrc}
                                        imgType="rect"
                                        title={collab.title}
                                        desc={collab.desc}
                                        type="exhibition"
                                        url={collab.url}
                                        width={45}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                leading-tight
                                text-[2rem]
                                text-[#5b3a29]
                            ">
                                Press & Media Features
                            </h3>
                            <div className="
                                flex
                                gap-[1.5rem]
                            ">
                                {media.map((m) => (
                                    <WorkCard2 
                                        id={m.id}
                                        title={m.title}
                                        yr={m.yr}
                                        imgSrc={m.imgSrc}
                                        imgType="round"
                                        width={30}
                                        url={m.url}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                leading-tight
                                text-[2rem]
                                text-[#5b3a29]
                            ">
                                Interviews
                            </h3>
                            <div className="
                                flex
                                flex-wrap
                                gap-[1.5rem]
                            ">
                                {interviewList.map((interview) => (
                                    <WorkCard4 
                                        id={interview.id}
                                        title={interview.title}
                                        yr={interview.yr}
                                        tagLabel={interview.type}
                                        width={30}
                                        url={interview.url}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                leading-tight
                                text-[2rem]
                                text-[#5b3a29]
                            ">
                                Documentaries, Short Film & Cinema
                            </h3>
                            <div className="
                                flex
                                gap-[1.5rem]
                            ">
                                {films.map((film) => (
                                    <WorkCard1 
                                        id={film.id}
                                        imgSrc={film.img}
                                        title={film.title}
                                        desc={film.desc}
                                        type="film"
                                        url={film.url}
                                        width={45}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[1.5rem]
                        ">
                            <h3 className="
                                font-heading
                                font-bold
                                leading-tight
                                text-[2rem]
                                text-[#5b3a29]
                            ">
                                Presentations & Invited Lectures
                            </h3>
                            <ul className="
                                flex
                                flex-col
                                gap-[0.75rem]
                            ">
                                {presentations.map((p) => (
                                    <li>
                                        <a
                                            href={p.url}
                                            className="
                                                underline
                                                text-[#535250]
                                                leading-normal
                                                text-[1rem]
                                            "
                                        >
                                            {p.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}