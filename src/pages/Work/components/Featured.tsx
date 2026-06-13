import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import lhi from '../../../assets/left-handshake-feature.webp';
import brics from '../../../assets/brics-feature.webp';
import resources from '../../../assets/resources-feature.webp';
import wr from '../../../assets/world-report-feature.webp';
import FeaturedWork from './FeaturedWork';

export default function Featured() {
    const animClass = useHeroAnimation('feat-work');

    return (
        <section className="
            bg-[#392318]
            px-6 md:px-12 lg:px-[7.5rem]
            py-12 lg:py-[7.5rem]
            flex flex-col
            items-center
            gap-10
        ">
            <h2 className={`
                font-bold font-heading
                leading-tight
                text-[1.75rem] md:text-[2.5rem]
                text-[#f8f5ef]
                ${animClass}
            `}>
                Featured Work
            </h2>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full ${animClass}`}>
                <a href="https://www.un-ilibrary.org/content/books/9789211543612" className="no-underline" rel="noopener noreferrer" target="_blank">
                    <FeaturedWork
                        img={wr}
                        title="UN World Youth Report 2025"
                        desc="Contributed to the World Youth Report by the United Nations Department of Economic and Social Affairs, focusing on youth mental health and well-being."
                        label="Publication"
                    />
                </a>
                <a href="https://drive.google.com/drive/folders/1247z4he3D57nphTs8pa-mAOgqWcyttr1?usp=sharing" className="no-underline" rel="noopener noreferrer" target="_blank">
                    <FeaturedWork
                        img={lhi}
                        title="Left Handshake International"
                        desc="Mobilizing youth to clean neglected neighbourhoods and repurpose recycled bottles into community libraries."
                        label="Project"
                    />
                </a>
                <a href="https://www.amazon.sg/Natural-Resources-Liberia-Metolo-Foyet/dp/6203306312" className="no-underline" rel="noopener noreferrer" target="_blank">
                    <FeaturedWork
                        img={resources}
                        title="The UN and Natural Resources in Liberia: Exploring the Nexus between Natural Resources, Conflict, the Environment and Peace Support Operations"
                        desc=""
                        label="Publication"
                    />
                </a>
                <a href="https://news.mongabay.com/2025/12/brics-offers-indigenous-local-communities-ways-to-advance-environmental-and-social-goals-analysis/" className="no-underline" rel="noopener noreferrer" target="_blank">
                    <FeaturedWork
                        img={brics}
                        title="BRICS+ offers Indigenous & local communities ways to advance environmental and social goals (analysis)"
                        desc=""
                        label="Publication"
                    />
                </a>
            </div>
        </section>
    );
}