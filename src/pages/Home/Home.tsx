import Hero from "./components/Hero";
import About from "./components/About";
import Work from './components/Work';
import Shop from './components/Shop';
import Cta from "../../global components/Cta";
import collabo from '../../assets/collabe.webp';

export default function Home() {
    return (
        <>
            <title>
                Dr. Metolo Foyet | Scholar. Storyteller. Safeguardian
            </title>
            <meta name="description" content="The official website of Dr. Metolo Foyet — boundary-spanning scholar, storyteller, and safeguardian working at the intersection of conservation, governance, and innovation across 70 countries." />
            <section
                className="
                    flex
                    flex-col
                    gap-0
                "
            >
                <Hero />
                <About />
                <Work />
                <Shop />
                <Cta 
                    bg={collabo}
                    title="Looking to Collaborate?"
                    desc="I'm available for select projects in environmental governance, bioprospection, geoAI and indigenous data sovereignty research and practice, speaking engagements, Congo Basin related work and advisory services. Kindly contact me for art-related commissions separately. Thank you."
                    cta="Send Invite / Request"
                    url="#"
                />
            </section>
        
        </>
    )
}