import Hero from "./components/Hero";
import Featured from "./components/Featured";
import AllWork from "./components/AllWork";
import Cta from "../../global components/Cta";
import collabe from '../../assets/collabe.webp';

export default function Work() {
    return (
        <section
            className="
                flex
                flex-col
                gap-0
            "
        >
            <Hero />
            <Featured />
            <AllWork />
            <Cta 
                bg={collabe}
                title="Looking to Collaborate?"
                desc="I’m currently available for select projects in conservation research, IT projects, speaking engagements, and advisory work starting Q2 2026."
                cta="Send Invite / Request"
                url="#"
            />
        </section>
    )
}