import data from '../../../assets/data-collect.svg';
import code from '../../../assets/code.svg';
import sensing from '../../../assets/sensing.svg';
import office from '../../../assets/office.svg';

const skills = [
    {
        icon: data,
        title: "Social Listening & Data Collection",
        items: ["Octoparse", "Hootsuite", "CrowdTangle", "Radian6 + Social Status", "Google Analytics", "Open Databases"]
    },
    {
        icon: code,
        title: "Programming & Web",
        items: ["R", "C++", "CSS", "Web Design"]
    },
    {
        icon: sensing,
        title: "GIS, Sensing, Mapping & Visualization",
        items: ["ArcGIS Pro", "ArcMap", "ENVI", "Gephi", "Carto", "ESRI StoryMaps"]
    },
    {
        icon: office,
        title: "Office Automation & Digital Arts",
        items: ["Office Suite", "Arts & Crafts"]
    },
]

export default function Technicals() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
                <div className="w-[15%] shrink-0 h-[2px] bg-[#F8F5EF]" />
                <p className="text-[#F8F5EF] text-[1.125rem] leading-normal tracking-[5%] font-body font-semibold whitespace-nowrap px-1">
                    TECHNICAL SKILLS
                </p>
                <div className="w-full h-[2px] bg-[#F8F5EF]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[2.5rem]">
                {skills.map(skill => (
                    <div key={skill.title} className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <img src={skill.icon} className="w-6 h-6 shrink-0" />
                            <h3 className="font-heading font-bold text-[1.25rem] md:text-[1.5rem] text-[#f8f5ef] leading-tight">
                                {skill.title}
                            </h3>
                        </div>
                        <ul className="list-disc ml-5">
                            {skill.items.map(item => (
                                <li key={item} className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}