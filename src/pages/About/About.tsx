import aboutHero from '../../assets/about-hero.webp';

export default function About() {
    return (
        <section className="
            bg-[#392318]
            flex
            flex-col
            gap-[2.5rem]
            justify-center
            items-center
            h-[100vh]
        ">
            <img 
                src={aboutHero} 
                className="
                   w-[21.8125rem] 
                   h-[17.875rem]
                "
            />
            <div className="
                flex
                flex-col
                gap-4
                w-[30%]
                text-center
            ">
                <h1 className="
                    font-heading
                    font-bold
                    leading-tight
                    text-[#F8F5EF]
                    text-[2.5rem]
                ">
                    About Metolo
                </h1>
                <p className="
                    font-body
                    text-[#CAC0BB]
                    text-[0.875rem]
                    leading-normal
                ">
                    This is my journey—told as I lived it, 
                    across continents and identities. If 
                    you're here for the facts only , click 
                    'Read Her Full Bio’. If you're here for 
                    the story, click “Experience Her Story”.
                </p>
            </div>
            <div className="
                flex
                gap-[1.5rem]
            ">
                <a 
                    href="/about/story" 
                    className="
                        bg-[#20422a]
                        no-underline
                        rounded
                        px-[1.5rem]
                        py-[1rem]
                        flex
                        flex-col
                        gap-2
                    "
                >
                    <p className="
                        font-heading
                        font-bold
                        leading-tight
                        text-[#F8F5EF]
                        text-[1rem]
                    ">
                        Experience Her Story
                    </p>
                    <p className="
                        font-body
                        leading-normal
                        text-[#bfcfc4]
                        text-[0.75rem]
                    ">
                        5 min journey
                    </p>
                </a>
                <a 
                    href="/about/bio" 
                    className="
                        flex
                        flex-col
                        gap-2
                        bg-[#F8F5EF]
                        border
                        border-[#20422A]
                        rounded
                        px-[1.5rem]
                        py-[1rem]
                    "
                >
                    <p className="
                       font-heading
                       font-bold
                       leading-tight
                       text-[#20422a] 
                       text-[1rem]
                    ">
                        Read Her Full Bio
                    </p>
                    <p className="
                        font-body
                        leading-normal
                        text-[#20422a]
                        text-[0.75rem]
                    ">
                        Scrolls down
                    </p>
                </a>
            </div>
        </section>
    )
}