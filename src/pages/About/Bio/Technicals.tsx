import data from '../../../assets/data-collect.svg';
import code from '../../../assets/code.svg';
import sensing from '../../../assets/sensing.svg';
import office from '../../../assets/office.svg';

export default function Technicals() {
    return (
        <div className="
            flex
            flex-col
            gap-[1.5rem]
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
                    min-w-46
                ">
                    TECHNICAL SKILLS
                </p>
                <div className="w-full h-[2px] bg-[#F8F5EF]" />
            </div>

            <div className="
                flex
                flex-col
                gap-[2.5rem]
            ">
                <div className="
                    flex
                    justify-between
                    w-full
                ">
                    <div className="
                        w-[40%]
                        flex
                        flex-col
                        gap-[1rem]
                    ">
                        <div className="
                            flex
                            gap-2
                            items-center
                        ">
                            <img src={data} />
                            <h3 className="
                                font-heading
                                font-bold
                                text-[1.5rem]
                                text-[#f8f5ef]
                                leading-tight
                            ">
                                Social Listening & Data Collection
                            </h3>
                        </div>
                        <ul className="
                            list-disc
                            ml-5
                        ">
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Octoparse</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Hootsuite</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">CrowdTangle</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Radian6 + Social Status</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Google Analytics</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Open Databases</li>
                        </ul>
                    </div>
                    
                    <div className="
                        w-[40%]
                        flex
                        flex-col
                        gap-[1rem]
                    ">
                        <div className="
                            flex
                            gap-2
                            items-center
                        ">
                            <img src={code} />
                            <h3 className="
                                font-heading
                                font-bold
                                text-[1.5rem]
                                text-[#f8f5ef]
                                leading-tight
                            ">
                                Programming & Web
                            </h3>
                        </div>
                        <ul className="
                            list-disc
                            ml-5
                        ">
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">R</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">C++</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">CSS</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Web Design</li>
                        </ul>
                    </div>
                </div>
                
                <div className="
                    flex
                    justify-between
                    w-full
                ">
                    <div className="
                        w-[40%]
                        flex
                        flex-col
                        gap-[1rem]
                    ">
                        <div className="
                            flex
                            gap-2
                            items-center
                        ">
                            <img src={sensing} />
                            <h3 className="
                                font-heading
                                font-bold
                                text-[1.5rem]
                                text-[#f8f5ef]
                                leading-tight
                            ">
                                GIS, Sensing, Mapping & Visualization
                            </h3>
                        </div>
                        <ul className="
                            list-disc
                            ml-5
                        ">
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">ArcGIS Pro</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">ArcMap</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">ENVI</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Gephi</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Carto</li>
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">ESRI StoryMaps</li>
                        </ul>
                    </div>
                    
                    <div className="
                        w-[40%]
                        flex
                        flex-col
                        gap-[1rem]
                    ">
                        <div className="
                            flex
                            gap-2
                            items-center
                        ">
                            <img src={office} />
                            <h3 className="
                                font-heading
                                font-bold
                                text-[1.5rem]
                                text-[#f8f5ef]
                                leading-tight
                            ">
                                Office Automation & Digital Arts
                            </h3>
                        </div>
                        <ul className="
                            list-disc
                            ml-5
                        ">
                            <li className="mb-2 text-[1rem] leading-normal text-[#c5c1ba] font-body">Office Suite</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}