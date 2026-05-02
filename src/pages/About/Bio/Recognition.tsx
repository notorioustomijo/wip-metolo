import { fellowships } from "./Fellowships";
import { awards } from "./Awards";
import { exhibits } from "./Exhibitions";
import editorial from '../../../assets/edit-serve.svg';
import teamlead from '../../../assets/teamlead.svg';

export default function Recognition() {

    return (
        <div className="
            flex
            flex-col
            gap-[2.5rem]
            bg-[#392318]
            px-[18.75rem]
            py-[5rem]
        ">
            <div className="
                flex
                flex-col
                items-center
                gap-[0.75rem]
            ">
                <h3 className="text-center text-[#f8f5ef] text-[2.5rem] leading-tight font-heading font-bold">
                    Recognition & Impact
                </h3>
                <p className="text-center text-[#C5C1BA] leading-normal text-[1rem] font-body">
                    Recognition for work at the intersection of art, science and community.
                </p>
            </div>
            <div className="
                flex
                flex-col
                gap-[5rem]
            ">
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
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-88
                        ">
                            FELLOWSHIPS & SCHOLARSHIPS (11)
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[2rem]
                    ">
                        {fellowships.map(fellow => (
                            <div className="
                                flex
                                flex-col
                                gap-3
                            ">
                                <p className="
                                    font-body
                                    text-[#c5c1ba]
                                    text-[0.875rem]
                                    font-semibold
                                    leading-normal
                                ">
                                    {fellow.yr}
                                </p>
                                <div className="
                                    flex
                                    flex-col
                                    gap-2
                                ">
                                    <h4 className="
                                        font-heading
                                        font-bold
                                        text-[#f8f5ef]
                                        text-[1.5rem]
                                        leading-tight
                                    ">
                                        {fellow.title}
                                    </h4>
                                    <p className="
                                        font-body
                                        text-[1rem]
                                        text-[#c5c1ba]
                                        leading-normal
                                    ">
                                        {fellow.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-48
                        ">
                            HONORS & AWARDS
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[2rem]
                    ">
                        {awards.map(award => (
                            <div className="
                                flex
                                flex-col
                                gap-3
                            ">
                                <p className="
                                    font-body
                                    text-[#c5c1ba]
                                    text-[0.875rem]
                                    font-semibold
                                    leading-normal
                                ">
                                    {award.yr}
                                </p>
                                <div className="
                                    flex
                                    flex-col
                                    gap-2
                                ">
                                    <h4 className="
                                        font-heading
                                        font-bold
                                        text-[#f8f5ef]
                                        text-[1.5rem]
                                        leading-tight
                                    ">
                                        {award.title}
                                    </h4>
                                    <p className="
                                        font-body
                                        text-[1rem]
                                        text-[#c5c1ba]
                                        leading-normal
                                    ">
                                        {award.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-52
                        ">
                            ART EXHIBITIONS (5)
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <ul className="
                        list-disc
                        ml-2
                    ">
                        {exhibits.map(ex => (
                            <li className="
                                mb-[0.75rem]
                                text-[1rem]
                                text-[#c5c1ba]
                                leading-normal
                                font-body
                            ">
                                <a href={ex.url} className="underline">
                                    {ex.label}
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
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-86
                        ">
                            ACADEMIC & COMMUNITY SERVICE
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
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
                                gap-1
                                items-center
                            ">
                                <img 
                                    src={editorial} 
                                    className="
                                        w-[24px]
                                        h-[24px]
                                    "
                                />
                                <h4 className="
                                   font-heading
                                   font-bold
                                   text-[1.5rem] 
                                   leading-tight
                                   text-[#f8f5ef]
                                ">
                                    Editorial Service
                                </h4>
                            </div>
                            <ul className="
                                list-disc
                                ml-2
                            ">
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                    font-body
                                ">
                                    Review Editor | New Florida Journal of Anthropology
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                    font-body
                                ">
                                    Internal Reviewer | African Studies Quarterly
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                    font-body
                                ">
                                    External Reviewer | Journal Tourism Culture & Communication
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
                                gap-1
                                items-center
                            ">
                                <img 
                                    src={teamlead} 
                                    className="
                                        w-[24px]
                                        h-[24px]
                                    "
                                />
                                <h4 className="
                                   font-heading
                                   font-bold
                                   text-[1.5rem] 
                                   leading-tight
                                   text-[#f8f5ef]
                                ">
                                    Leadership Roles
                                </h4>
                            </div>
                            <ul className="
                                list-disc
                                ml-2
                            ">
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                    font-body
                                ">
                                    Founding Curator | Global Shapers (WEF), Gainesville
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                    font-body
                                ">
                                    Senator & Co-Chair | UF Student Government
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                    font-body
                                ">
                                    Founding Member | UF International Student Council
                                </li>
                                <li className="
                                    mb-[0.75rem]
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                    font-body
                                ">
                                    Facilitator | Digital Africa Working Group
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

