import BioHero from "./BioHero";
import Glances from "./Glances";
import Xperience from "./Xperience";
import InvitedLects from "./InvitedLects";
import Recognition from "./Recognition";
import Publications from "./Publications";
import Abilities from "./Abilities";
import Education from "./Education";
import Hobby from "./Hobby";
import Cta from "../../../global components/Cta";
import collabo from '../../../assets/collabe.webp';

export default function Bio() {
    return (
        <>
            <title>Full Bio | Dr. Metolo Foyet</title>
            <meta name="description" content="Read the full biography of Dr. Metolo Foyet — PhD geographer, author, artist, and multidisciplinary safeguardian with 14 years of experience across conservation, education, and global governance." />
            <section className="
                bg-[#F8F5EF]
                flex
                flex-col
            ">
                <BioHero />
                <Glances />
                <Xperience />
                <Education />
                <Publications />
                <Recognition />
                <InvitedLects />
                <Abilities />
                <Hobby />
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