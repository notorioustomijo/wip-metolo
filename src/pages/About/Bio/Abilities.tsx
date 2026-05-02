import Technicals from "./Technicals";
import { languages } from "./Language";
import { affiliations } from "./Affiliations";

export default function Abilities() {

    return (
        <div className="
            flex
            flex-col
            gap-[2.5rem]
            bg-[#392318]
            px-[12.5rem]
            py-[5rem]
        ">
            <div className="
                flex
                flex-col
                items-center
                gap-[0.75rem]
            ">
                <h3 className="text-center text-[#f8f5ef] text-[2.5rem] leading-tight font-heading font-bold">
                    Technical Skills, Languages & Affiliations
                </h3>
                <p className="text-center text-[#C5C1BA] leading-normal text-[1rem] font-body">
                    Tools and platforms, languages, and professional affiliations
                </p>
            </div>
            <div className="
                flex
                flex-col
                gap-[4rem]
            ">
                <Technicals />

                <div className="
                    flex
                    flex-col
                    gap-6
                ">
                    <div className="
                        flex
                        items-center
                        gap-2
                    ">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-30
                        ">
                            LANGUAGES
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="
                        flex
                        flex-wrap
                        gap-[3.5rem]
                    ">
                        {languages.map(lang => (
                            <div className="
                                flex
                                flex-col
                                gap-2
                                w-[25%]
                            ">
                                <h4 className="
                                    font-heading
                                    font-bold
                                    text-[#f8f5ef]
                                    text-[1.5rem]
                                    leading-tight
                                ">
                                    {lang.lang}
                                </h4>
                                <p className="
                                    font-body
                                    text-[1rem]
                                    text-[#c5c1ba]
                                    leading-normal
                                ">
                                    {lang.level}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-6
                ">
                    <div className="
                        flex
                        items-center
                        gap-2
                    ">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-72
                        ">
                            PROFESSIONAL AFFILIATIONS
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>
                    <ul className="list-disc ml-4">
                        {affiliations.map(a => (
                            <li className="
                                text-[#C5C1BA]
                                text-[1rem]
                                leading-normal
                                font-body
                                mb-3
                            ">
                                {a}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

