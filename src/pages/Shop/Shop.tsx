import Hero from "./components/Hero";
import Featured from "./components/Featured";
import AllArtworks from "./components/AllArtworks";
import Cta from "../../global components/Cta";
import artco from '../../assets/art-commiss.webp';

export default function Shop() {
    

    return(
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
                desc="Interested in a custom piece exploring themes of indigenous knowledge, conservation or cultural heritage? Let’s collaborate."
                cta="Ask About Commissions"
                url="#"
            />
        </section>
    )
}