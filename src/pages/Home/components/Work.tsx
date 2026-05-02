import workdisplay from '../../../assets/work-display.svg';
import yali from '../../../assets/yali.svg';
import yale from '../../../assets/yale.svg';
import rtArrow from '../../../assets/rt-arrow.svg';
import greenRoots from '../../../assets/green-roots.webp';
import unNatural from '../../../assets/un-natural resources.webp';
import Project from './Project';
import Publication from './Publication';
import Book from './Book';
import Exhibit from './Exhibit';
import exhibit1 from '../../../assets/exhibition1.webp';
import exhibit2 from '../../../assets/exhibition2.webp';

export default function Work() {

    return (
        <section
            className="
                bg-[#F8F5EF]
                py-[7.5rem]
                px-[5rem]
                flex
                gap-[10rem]
            "
        >
            {/* Left Info Block */}
            <div className="
                w-[35%]
                flex
                flex-col
                gap-[3.5rem]
                sticky
                top-[5rem]
                self-start
            ">
                <div className="
                    flex
                    flex-col
                    gap-[1.5rem]
                ">
                    <h3 className="
                        font-heading
                        text-[#5b3a29]
                        leading-tight
                        font-bold
                        text-[1.5rem]
                    ">
                        Metolo’s work spans conservation research, 
                        indigenous knowledge systems, and global 
                        human-rights advocacy.
                    </h3>
                    <a 
                        href="/about"
                        className="
                            px-[1.5rem]
                            py-[1rem]
                            rounded
                            bg-[#20422a]
                            text-[#f8f5ef]
                            font-heading
                            font-bold
                            text-[1.125rem]
                            leading-tight
                            self-start
                        "
                    >
                        See Her Work
                    </a>
                </div>
                <img src={workdisplay} className="w-[37.5rem]" />
            </div>

            {/* Featured */}
            <div className="
                w-[70%]
                flex
                flex-col
                gap-[10rem]
            ">
                {/* Featured Projects */}
                <div className="
                    flex
                    flex-col
                    gap-10
                ">
                    <div className='
                        flex
                        justify-between
                        items-center
                        w-[100%]
                    '>
                        <h3 className="
                           font-heading
                           font-bold
                           text-[1.125rem] 
                           leading-tight
                           text-[#5B3A29]
                        ">
                            Featured Projects
                        </h3>
                        <a 
                            href=""
                            className="
                                font-body 
                                text-[0.875rem] 
                                text-[#535250] 
                                leading-normal
                                flex
                                gap-2
                                items-center
                                no-underline
                                hover:underline
                            "
                        >
                            View All
                            <img src={rtArrow} className="w-4 h-4" />
                        </a>
                    </div>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                        <Project 
                            img={yali}
                            title="Youth Social-Economic Development in Ghana"
                            desc="A YALI-recognized youth empowerment initiative through Left Handshake International, an NGO I founded at 18, delivering vocational training, and community development to marginalized rural communities across Ghana."
                            tag="CONSERVATION"
                        />
                    </a>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                        <Project 
                            img={yale}
                            title="Yale Capstone Project: Fotouni Forward"
                            desc="A community-driven conservation project in Cameroon’s Fotouni Kingdom aimed at restoring declining raffia palm groves, protecting biodiversity, and empowering locals to preserve their cultural and ecological heritage."
                            tag="CONSERVATION"
                        />
                    </a>
                </div>

                {/* Featured Publications */}
                <div className="
                    flex
                    flex-col
                    gap-10
                ">
                    <div className='
                        flex
                        justify-between
                        items-center
                        w-[100%]
                    '>
                        <h3 className="
                           font-heading
                           font-bold
                           text-[1.125rem] 
                           leading-tight
                           text-[#5B3A29]
                        ">
                            Featured Publications
                        </h3>
                        <a 
                            href=""
                            className="
                                font-body 
                                text-[0.875rem] 
                                text-[#535250] 
                                leading-normal
                                flex
                                gap-2
                                items-center
                                no-underline
                                hover:underline
                            "
                        >
                            View All
                            <img src={rtArrow} className="w-4 h-4" />
                        </a>
                    </div>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                        <Publication 
                            name="MONGABAY"
                            title="BRICS+ offers Indigenous & local communities ways to advance environmental and social goals (analysis)"
                            authors="Foyet, M. (2025)"
                        />
                    </a>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                        <Publication 
                            name="OPEN ACCESS GOVERNMENT"
                            title="Rare earth, critical minerals, and bio-molecules: Centering African IPLCs in the new resource economy"
                            authors="Foyet, M. (2025)"
                        />
                    </a>
                </div>

                {/* Featured Op-Eds */}
                <div className="
                    flex
                    flex-col
                    gap-10
                ">
                    <div className='
                        flex
                        justify-between
                        items-center
                        w-[100%]
                    '>
                        <h3 className="
                           font-heading
                           font-bold
                           text-[1.125rem] 
                           leading-tight
                           text-[#5B3A29]
                        ">
                            Featured Op-Eds
                        </h3>
                        <a 
                            href=""
                            className="
                                font-body 
                                text-[0.875rem] 
                                text-[#535250] 
                                leading-normal
                                flex
                                gap-2
                                items-center
                                no-underline
                                hover:underline
                            "
                        >
                            View All
                            <img src={rtArrow} className="w-4 h-4" />
                        </a>
                    </div>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                        <Publication 
                            name="ISS | AFRICAN FUTURES WITH AUDA-NEPAD"
                            title="Data Sovereignty for Security in Mineral Economies"
                            authors="Foyet, M., Baum, J., Kepe, T. (2025)"
                        />
                    </a>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                       <Publication 
                            name="ISS | AFRICAN FUTURES WITH AUDA-NEPAD"
                            title="Ecologies of Wealth in the Congo Basin"
                            authors="Foyet, M., Baum, J. (2025)"
                        />
                    </a>
                </div>

                {/* Featured Books */}
                <div className="
                    flex
                    flex-col
                    gap-10
                ">
                    <div className='
                        flex
                        justify-between
                        items-center
                        w-[100%]
                    '>
                        <h3 className="
                           font-heading
                           font-bold
                           text-[1.125rem] 
                           leading-tight
                           text-[#5B3A29]
                        ">
                            Featured Books
                        </h3>
                        <a 
                            href=""
                            className="
                                font-body 
                                text-[0.875rem] 
                                text-[#535250] 
                                leading-normal
                                flex
                                gap-2
                                items-center
                                no-underline
                                hover:underline
                            "
                        >
                            View All
                            <img src={rtArrow} className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="
                        flex
                        gap-[2.5rem]
                    ">
                        <a 
                            href="" 
                            className="
                                no-underline
                            "
                        >
                            <Book
                                img={greenRoots}
                                title="Green Roots: Grassroots Environmentalism and Legal Reform in Cameroon"
                                authors="by Tahle Itoe Mukete & Metolo Foyet"
                                year="2025"
                            />
                        </a>
                        <a 
                            href="" 
                            className="
                                no-underline
                            "
                        >
                            <Book
                                img={unNatural}
                                title="The UN and Natural Resources in Liberia: Exploring the Nexus between Natural Resources, Conflict, the Environment and Peace support Operations"
                                authors="by Metolo Foyet"
                                year="2021"
                            />
                        </a>
                    </div>
                </div>

                {/* Featured Exhibitions */}
                <div className="
                    flex
                    flex-col
                    gap-10
                ">
                    <div className='
                        flex
                        justify-between
                        items-center
                        w-[100%]
                    '>
                        <h3 className="
                           font-heading
                           font-bold
                           text-[1.125rem] 
                           leading-tight
                           text-[#5B3A29]
                        ">
                            Featured Exhibitions
                        </h3>
                        <a 
                            href=""
                            className="
                                font-body 
                                text-[0.875rem] 
                                text-[#535250] 
                                leading-normal
                                flex
                                gap-2
                                items-center
                                no-underline
                                hover:underline
                            "
                        >
                            View All
                            <img src={rtArrow} className="w-4 h-4" />
                        </a>
                    </div>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                        <Exhibit 
                            img={exhibit1}
                            title="Black Cosmologies, World-building, Storytelling and Imagination (2026)"
                            desc="An Afrofuturist art project selected for Afrofuturism Week 2026 (Florida), featuring two Neuralnauts works with works available for sale and future expansion into animation."
                        />
                    </a>
                    <a 
                        href="" 
                        className="
                            no-underline
                        "
                    >
                        <Exhibit
                            img={exhibit2}
                            title="Hidden Histories - GFAA Gallery, Gainesville, FL. (April 23 - May 23, 2025)"
                            desc="My artwork Ancestral Link was featured in the Hidden Histories exhibition at GFAA Gallery (Gainesville, FL), paired with a short story by Sue Blythe; running until May 23, 2025."
                        />
                    </a>
                    
                </div>
            </div>

        </section>
    )
}