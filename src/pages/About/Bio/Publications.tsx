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
            flex
            flex-col
            gap-[5rem]
            py-[5rem]
            px-[12.5rem]
        ">
            <div className="
                flex
                flex-col
                items-center
                gap-[0.75rem]
            ">
                <h3 className="text-center text-[#5b3a29] text-[2.5rem] leading-tight font-heading font-bold">
                    Publications & Media
                </h3>
                <p className="text-center text-[#535250] leading-normal text-[1rem] font-body">
                    7 books | 100+ publications | 25+ op-eds.
                </p>
            </div>

            <div className="
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
                        min-w-26
                    ">
                        BOOKS (7)
                    </p>
                    <div className="w-full h-[2px] bg-[#5B3A29]" />
                </div>

                <div className="
                    flex
                    flex-col
                    gap-[2rem]
                ">
                    <div className="
                        flex
                        flex-col
                        gap-[0.75rem]
                    ">
                        <div className="
                            flex
                            gap-2
                            items-center
                        ">
                            <img
                                src={acad}
                                className="w-[24px] h-[24px]"
                            />
                            <h4 className="
                                text-[1.5rem]
                                font-heading
                                font-bold
                                text-[#5b3a29]
                                leading-tight
                            ">
                                Academic Books
                            </h4>
                        </div>
                        <ul className="
                            list-disc
                            ml-2
                        ">
                            {acadBooks.map(book => (
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    <a href={book.url} className="underline">
                                        {book.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="
                        flex
                        flex-col
                        gap-[0.75rem]
                    ">
                        <div className="
                            flex
                            gap-2
                            items-center
                        ">
                            <img
                                src={cultur}
                                className="w-[24px] h-[24px]"
                            />
                            <h4 className="
                                text-[1.5rem]
                                font-heading
                                font-bold
                                text-[#5b3a29]
                                leading-tight
                            ">
                                Cultural & Creative Books
                            </h4>
                        </div>
                        <ul className="
                            list-disc
                            ml-2
                        ">
                            {culturBooks.map(book => (
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    <a href={book.url} className="underline">
                                        {book.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a 
                        href=""
                        className="
                            no-underline
                            bg-[#F8F5EF]
                            text-[#20422A]
                            border
                            border-[#20422A]
                            rounded-lg
                            font-heading
                            text-[1.125rem]
                            leading-tight
                            font-bold
                            px-[1.5rem]
                            py-[1rem]
                            self-start
                        "
                    >
                        View All Books
                    </a>
                    
                </div>
            </div>

            <div className="
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
                        min-w-86
                    ">
                        PEER-REVIEWED PUBLICATIONS (7)
                    </p>
                    <div className="w-full h-[2px] bg-[#5B3A29]" />
                </div>

                <div className="
                    flex
                    flex-col
                    gap-[2rem]
                ">
                    <ul className="
                        list-disc
                        ml-2
                    ">
                        {publications.map(publication => (
                            <li className="
                                mb-[0.75rem]
                                text-[1rem]
                                font-body
                                text-[#535250]
                                leading-normal
                            ">
                                <a href={publication.url} className="underline">
                                    {publication.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a 
                        href=""
                        className="
                            no-underline
                            bg-[#F8F5EF]
                            text-[#20422A]
                            border
                            border-[#20422A]
                            rounded-lg
                            font-heading
                            text-[1.125rem]
                            leading-tight
                            font-bold
                            px-[1.5rem]
                            py-[1rem]
                            self-start
                        "
                    >
                        View All Publications
                    </a>
                    
                </div>
            </div>
            
            <div className="
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
                        min-w-94
                    ">
                        BOOKS & PUBLICATIONS FEATURES (3)
                    </p>
                    <div className="w-full h-[2px] bg-[#5B3A29]" />
                </div>

                <ul className="
                    list-disc
                    ml-2
                ">
                    {features.map(feat => (
                        <li className="
                            mb-[0.75rem]
                            text-[1rem]
                            font-body
                            text-[#535250]
                            leading-normal
                        ">
                            <a href={feat.url} className="underline">
                                {feat.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="
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
                        min-w-62
                    ">
                        MEDIA APPEARANCES (7)
                    </p>
                    <div className="w-full h-[2px] bg-[#5B3A29]" />
                </div>

                <ul className="
                    list-disc
                    ml-2
                ">
                    {media.map(m => (
                        <li className="
                            mb-[0.75rem]
                            text-[1rem]
                            font-body
                            text-[#535250]
                            leading-normal
                        ">
                            <a href={m.url} className="underline">
                                {m.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="
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
                        min-w-106
                    ">
                        OTHER WRITING, MEDIA & ADVOCACY (25+)
                    </p>
                    <div className="w-full h-[2px] bg-[#5B3A29]" />
                </div>

                <div className="
                    flex
                    gap-[4rem]
                    justify-between
                ">
                    <div className="
                        flex
                        flex-col
                        gap-[2rem]
                    ">
                        <div className="
                            flex
                            flex-col
                            gap-[0.75rem]
                        ">
                            <div className="
                                flex
                                gap-2
                                items-center
                            ">
                                <img
                                    src={wef}
                                    className="w-[24px] h-[24px]"
                                />
                                <h4 className="
                                    text-[1.5rem]
                                    font-heading
                                    font-bold
                                    text-[#5b3a29]
                                    leading-tight
                                ">
                                    World Economic Forum Agenda Contributor
                                </h4>
                            </div>
                            <ul className="
                                list-disc
                                ml-2
                            ">
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    AI in conservation: Where we came from and heading
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    Climate finance community success stories
                                </li>
                            </ul>
                        </div>
                        
                        <div className="
                            flex
                            flex-col
                            gap-[0.75rem]
                        ">
                            <div className="
                                flex
                                gap-2
                                items-center
                            ">
                                <img
                                    src={cwealth}
                                    className="w-[24px] h-[24px]"
                                />
                                <h4 className="
                                    text-[1.5rem]
                                    font-heading
                                    font-bold
                                    text-[#5b3a29]
                                    leading-tight
                                ">
                                   Commonwealth Secretariat (25 Op-Eds, 3 Blogs) 
                                </h4>
                            </div>
                            <ul className="
                                list-disc
                                ml-2
                            ">
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    Correspondent of the Month (Jan 2020, Jan & Aug 2024)
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    Topics: Climate action, democracy, technology, youth
                                </li>
                            </ul>
                        </div>
                        
                        <div className="
                            flex
                            flex-col
                            gap-[0.75rem]
                        ">
                            <div className="
                                flex
                                gap-2
                                items-center
                            ">
                                <img
                                    src={civil}
                                    className="w-[24px] h-[24px]"
                                />
                                <h4 className="
                                    text-[1.5rem]
                                    font-heading
                                    font-bold
                                    text-[#5b3a29]
                                    leading-tight
                                ">
                                    Civil Society Advocate - WACSI (6 Papers)
                                </h4>
                            </div>
                            <ul className="
                                list-disc
                                ml-2
                            ">
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    Guidebook on Alternative Funding Models for CSOs
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    font-body
                                    text-[#535250]
                                    leading-normal
                                ">
                                    Youth Leadership in Public Service in Africa
                                </li>
                            </ul>
                        </div>
                        
                        
                        <a 
                            href=""
                            className="
                                no-underline
                                bg-[#F8F5EF]
                                text-[#20422A]
                                border
                                border-[#20422A]
                                rounded-lg
                                font-heading
                                text-[1.125rem]
                                leading-tight
                                font-bold
                                px-[1.5rem]
                                py-[1rem]
                                self-start
                            "
                        >
                            View Her Work
                        </a>
                        
                    </div>

                    <img 
                        src={wefMeet}
                        className="
                            w-[34.1875rem]
                            h-[27.8125rem]
                        "
                    />
                </div>
                
            </div>

        </section>
    )
}