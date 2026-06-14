import Hero from "./components/Hero";
import About from "./components/About";
import Work from './components/Work';
import Shop from './components/Shop';
import Cta from "../../global components/Cta";
import collabe from '../../assets/collabe.webp';

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
                    bg={collabe}
                    title="Looking to Collaborate?"
                    desc="I’m currently available for select projects in conservation research, IT projects, speaking engagements, and advisory work starting Q2 2026."
                    cta="Send Invite / Request"
                    url="#"
                />
            </section>
        
        </>
    )
}