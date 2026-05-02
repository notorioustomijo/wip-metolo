import lhi from '../../../assets/left-handshake-feature.webp';
import brics from '../../../assets/brics-feature.webp';
import resources from '../../../assets/resources-feature.webp';
import wr from '../../../assets/world-report-feature.webp';
import FeaturedWork from './FeaturedWork';

export default function Featured() {
    return (
        <section className="
            bg-[#392318]
            p-[7.5rem]
            flex
            flex-col
            items-center
            gap-10
        ">
            <h2 className="
                font-bold
                font-heading
                leading-tight
                text-[2.5rem]
                text-[#f8f5ef]
            ">
                Featured Work
            </h2>
            <div className="
                grid
                grid-cols-2
                gap-12
            ">
                <a 
                    href=""
                    className="
                        no-underline
                    "
                >
                    <FeaturedWork 
                        img={wr}
                        title="UN World Youth Report 2025"
                        desc="Contributed to the World Youth Report by the United Nations Department of Economic and Social Affairs, focusing on youth mental health and well-being."
                        label="Publication"
                    />
                </a>

                <a 
                    href=""
                    className="
                        no-underline
                    "
                >
                    <FeaturedWork 
                        img={lhi}
                        title="Left Handshake International"
                        desc="A YALI-recognized youth empowerment initiative through Left Handshake International, an NGO I founded at 18, in Ghana."
                        label="Project"
                    />
                </a>

                <a 
                    href=""
                    className="
                        no-underline
                    "
                >
                    <FeaturedWork 
                        img={resources}
                        title="The UN and Natural Resources in Liberia:  Exploring the Nexus between Natural Resources, Conflict, the Environment and Peace Support Operations"
                        desc=""
                        label="Publication"
                    />
                </a>

                <a 
                    href=""
                    className="
                        no-underline
                    "
                >
                    <FeaturedWork 
                        img={brics}
                        title="BRICS+ offers Indigenous & local communities ways to advance environmental and social goals (analysis)"
                        desc=""
                        label="Publication"
                    />
                </a>
            </div>

        </section>
    )
}