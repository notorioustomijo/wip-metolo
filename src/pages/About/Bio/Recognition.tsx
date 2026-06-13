import { fellowships } from "./Fellowships";
import { awards } from "./Awards";
import { exhibits } from "./Exhibitions";
import editorial from '../../../assets/edit-serve.svg';
import teamlead from '../../../assets/teamlead.svg';

function SectionDivider({ label, light = false }: { label: string, light?: boolean }) {
    const color = light ? 'bg-[#F8F5EF]' : 'bg-[#5B3A29]';
    const textColor = light ? 'text-[#F8F5EF]' : 'text-[#5B3A29]';
    return (
        <div className="flex items-center gap-1">
            <div className={`w-[15%] shrink-0 h-[2px] ${color}`} />
            <p className={`${textColor} text-[0.875rem] sm:text-[1.125rem] leading-normal tracking-[5%] font-body font-semibold whitespace-nowrap px-1`}>
                {label}
            </p>
            <div className={`w-full h-[2px] ${color}`} />
        </div>
    );
}

export default function Recognition() {
    return (
        <div className="
            flex flex-col
            gap-10 lg:gap-[2.5rem]
            bg-[#392318]
            px-6 md:px-12 lg:px-[7.5rem] xl:px-[18.75rem]
            py-12 lg:py-[5rem]
        ">
            <div className="flex flex-col items-center gap-3">
                <h3 className="
                    text-center text-[#f8f5ef]
                    text-[1.75rem] md:text-[2.5rem]
                    leading-tight font-heading font-bold
                ">
                    Recognition & Impact
                </h3>
                <p className="text-center text-[#C5C1BA] leading-normal text-[1rem] font-body">
                    Recognition for work at the intersection of art, science and community.
                </p>
            </div>

            <div className="flex flex-col gap-12 lg:gap-[5rem]">

                {/* Fellowships */}
                <div className="flex flex-col gap-6">
                    <SectionDivider label="FELLOWSHIPS & SCHOLARSHIPS (11)" light />
                    <div className="flex flex-col gap-8 lg:gap-[2rem]">
                        {fellowships.map(fellow => (
                            <div key={fellow.title} className="flex flex-col gap-2">
                                <p className="font-body text-[#c5c1ba] text-[0.875rem] font-semibold leading-normal">
                                    {fellow.yr}
                                </p>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-heading font-bold text-[#f8f5ef] text-[1.25rem] md:text-[1.5rem] leading-tight">
                                        {fellow.title}
                                    </h4>
                                    <p className="font-body text-[1rem] text-[#c5c1ba] leading-normal">
                                        {fellow.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards */}
                <div className="flex flex-col gap-6">
                    <SectionDivider label="HONORS & AWARDS" light />
                    <div className="flex flex-col gap-8 lg:gap-[2rem]">
                        {awards.map(award => (
                            <div key={award.title} className="flex flex-col gap-2">
                                <p className="font-body text-[#c5c1ba] text-[0.875rem] font-semibold leading-normal">
                                    {award.yr}
                                </p>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-heading font-bold text-[#f8f5ef] text-[1.25rem] md:text-[1.5rem] leading-tight">
                                        {award.title}
                                    </h4>
                                    <p className="font-body text-[1rem] text-[#c5c1ba] leading-normal">
                                        {award.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exhibitions */}
                <div className="flex flex-col gap-6">
                    <SectionDivider label="ART EXHIBITIONS (5)" light />
                    <ul className="list-disc ml-4">
                        {exhibits.map(ex => (
                            <li key={ex.label} className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body hover:text-[#fff]">
                                <a href={ex.url} className="underline">{ex.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Academic & Community Service */}
                <div className="flex flex-col gap-6">
                    <SectionDivider label="ACADEMIC & COMMUNITY SERVICE" light />
                    <div className="flex flex-col gap-8 lg:gap-[2rem]">

                        {/* Editorial */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-center">
                                <img src={editorial} className="w-6 h-6 shrink-0" />
                                <h4 className="font-heading font-bold text-[1.25rem] md:text-[1.5rem] leading-tight text-[#f8f5ef]">
                                    Editorial Service
                                </h4>
                            </div>
                            <ul className="list-disc ml-4">
                                <li className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body">Review Editor | New Florida Journal of Anthropology</li>
                                <li className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body">Internal Reviewer | African Studies Quarterly</li>
                                <li className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body">External Reviewer | Journal Tourism Culture & Communication</li>
                            </ul>
                        </div>

                        {/* Leadership */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-center">
                                <img src={teamlead} className="w-6 h-6 shrink-0" />
                                <h4 className="font-heading font-bold text-[1.25rem] md:text-[1.5rem] leading-tight text-[#f8f5ef]">
                                    Leadership Roles
                                </h4>
                            </div>
                            <ul className="list-disc ml-4">
                                <li className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body">Founding Curator | Global Shapers (WEF), Gainesville</li>
                                <li className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body">Senator & Co-Chair | UF Student Government</li>
                                <li className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body">Founding Member | UF International Student Council</li>
                                <li className="mb-3 text-[1rem] text-[#c5c1ba] leading-normal font-body">Facilitator | Digital Africa Working Group</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}