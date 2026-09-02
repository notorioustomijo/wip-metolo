import Hero from "./components/Hero";
import Featured from "./components/Featured";
import AllArtworks from "./components/AllArtworks";
import Cta from "../../global components/Cta";
import artco from '../../assets/art-commiss.webp';

export default function Shop() {
    

    return(
        <>
            <title>Shop | Dr. Metolo Foyet</title>
            <meta name="description" content="Original artwork by Dr. Metolo Foyet — AI-assisted traditional paintings exploring landscape, memory, ecology, and indigenous perspectives. Oil on canvas and prints available." />
            <section className="
                bg-[#F8F5EF]
                flex
                flex-col
            ">
                <Hero />
                <Featured />
                <AllArtworks />
                <Cta 
                    bg={artco}
                    title="Commission an Artwork"
                    desc="Interested in a custom piece? Let’s collaborate."
                    cta="Ask About Commissions"
                    url="#"
                />
            </section>
        </>
    )
}