import Hero from "./components/Hero";
import Featured from "./components/Featured";
import AllWork from "./components/AllWork";
import Cta from "../../global components/Cta";
import collabe from '../../assets/collabe.webp';

export default function Work() {
    return (
        <>
            <title>Work | Dr. Metolo Foyet </title>
            <meta name="description" content="Explore Dr. Metolo Foyet's professional portfolio — research publications, conservation projects, fellowships, and consulting work spanning 70 countries and 14 years." />
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
                    desc="I'm available for select projects in environmental governance, bioprospection, geoAI and indigenous data sovereignty research and practice, speaking engagements, Congo Basin related work and advisory services. Kindly contact me for art-related commissions separately. Thank you."
                    cta="Send Invite / Request"
                    url="#"
                />
            </section>
        </>
    )
}