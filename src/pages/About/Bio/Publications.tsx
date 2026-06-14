import acad from '../../../assets/acad-books.svg';
import cultur from '../../../assets/cultur-books.svg';
import wef from '../../../assets/wef.svg';
import cwealth from '../../../assets/newspaper.svg';
import civil from '../../../assets/civil.svg';
import wefMeet from '../../../assets/wef-meet.webp';
import { acadBooks, culturBooks } from './Acad';
import { publications, features, media } from './Publix';

export default function Publications() {
    return (
        <section className="
            bg-[#f8f5ef]
            flex flex-col
            gap-12 lg:gap-[5rem]
            py-12 lg:py-[5rem]
            px-6 md:px-12 xl:px-[12.5rem]
        ">
            <div className="flex flex-col items-center gap-3">
                <h3 className="
                    text-center text-[#5b3a29]
                    text-[1.75rem] md:text-[2.5rem]
                    leading-tight font-heading font-bold
                ">
                    Publications & Media
                </h3>
                <p className="text-center text-[#535250] leading-normal text-[1rem] font-body">
                    7 books | 100+ publications | 25+ op-eds.
                </p>
            </div>

            {/* Books */}
            <div className="flex flex-col gap-6">
                <SectionDivider label="BOOKS (7)" />
                <div className="flex flex-col gap-8 lg:gap-[2rem]">
                    <BookGroup icon={acad} title="Academic Books" books={acadBooks} />
                    <BookGroup icon={cultur} title="Cultural & Creative Books" books={culturBooks} />
                    <OutlineButton href="/work?tab=Books#all-work">View All Books</OutlineButton>
                </div>
            </div>

            {/* Peer-reviewed */}
            <div className="flex flex-col gap-6">
                <SectionDivider label="PEER-REVIEWED PUBLICATIONS (7)" />
                <div className="flex flex-col gap-8 lg:gap-[2rem]">
                    <LinkList items={publications} />
                    <OutlineButton href="/work?tab=Research#all-work">View All Publications</OutlineButton>
                </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-6">
                <SectionDivider label="BOOKS & PUBLICATIONS FEATURES (3)" />
                <LinkList items={features} />
            </div>

            {/* Media */}
            <div className="flex flex-col gap-6">
                <SectionDivider label="MEDIA APPEARANCES (7)" />
                <LinkList items={media} />
            </div>

            {/* Other Writing */}
            <div className="flex flex-col gap-6">
                <SectionDivider label="OTHER WRITING, & MEDIA (25+)" />
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[4rem] justify-between">
                    <div className="flex flex-col gap-8 lg:gap-[2rem]">
                        <WritingGroup
                            icon={wef}
                            title="World Economic Forum Agenda Contributor"
                            items={[
                                "AI in conservation: Where we came from and heading",
                                "Climate finance community success stories",
                            ]}
                        />
                        <WritingGroup
                            icon={cwealth}
                            title="Commonwealth Secretariat (25 Op-Eds, 3 Blogs)"
                            items={[
                                "Correspondent of the Month (Jan 2020, Jan & Aug 2024)",
                                "Topics: Climate action, democracy, technology, youth",
                            ]}
                        />
                        <WritingGroup
                            icon={civil}
                            title="Civil Society Advocate - WACSI (6 Papers)"
                            items={[
                                "Guidebook on Alternative Funding Models for CSOs",
                                "Youth Leadership in Public Service in Africa",
                            ]}
                        />
                        <OutlineButton href="/work">View Her Work</OutlineButton>
                    </div>

                    <img
                        src={wefMeet}
                        alt="WEF Meeting"
                        className="
                            w-full lg:w-[34.1875rem]
                            lg:shrink-0
                            h-auto lg:h-[27.8125rem]
                            object-cover
                        "
                    />
                </div>
            </div>
        </section>
    );
}

// --- Helper components ---

function SectionDivider({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-1">
            <div className="w-[5%] md:w-[15%] shrink-0 h-[2px] bg-[#5B3A29]" />
            <p className="
                text-[#5B3A29]
                text-[0.875rem] 
                md:text-[1.125rem] 
                leading-normal
                tracking-[5%] font-body font-semibold
                whitespace-nowrap px-1
            ">
                {label}
            </p>
            <div className="w-full h-[2px] bg-[#5B3A29]" />
        </div>
    );
}

function BookGroup({ icon, title, books }: { icon: string, title: string, books: { title: string, url: string }[] }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
                <img src={icon} className="w-6 h-6" />
                <h4 className="text-[1.5rem] font-heading font-bold text-[#5b3a29] leading-tight">{title}</h4>
            </div>
            <LinkList items={books} />
        </div>
    );
}

function LinkList({ items }: { items: { title: string, url: string }[] }) {
    return (
        <ul className="list-disc ml-4">
            {items.map(item => (
                <li key={item.title} className="mb-3 text-[1rem] font-body text-[#535250] leading-normal hover:text-[#5b3a29]">
                    <a href={item.url} className="underline" rel="noopener noreferrer" target="_blank">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

function WritingGroup({ icon, title, items }: { icon: string, title: string, items: string[] }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
                <img src={icon} className="w-6 h-6 shrink-0" />
                <h4 className="text-[1.5rem] font-heading font-bold text-[#5b3a29] leading-tight">{title}</h4>
            </div>
            <ul className="list-disc ml-4">
                {items.map(item => (
                    <li key={item} className="mb-3 text-[1rem] font-body text-[#535250] leading-normal">{item}</li>
                ))}
            </ul>
        </div>
    );
}

function OutlineButton({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="
                no-underline
                bg-[#F8F5EF] text-[#20422A]
                border border-[#20422A]
                rounded-lg
                font-heading text-[1.125rem] leading-tight font-bold
                px-6 py-4
                self-start
                hover:bg-[#EFECE6]
            "
        >
            {children}
        </a>
    );
}