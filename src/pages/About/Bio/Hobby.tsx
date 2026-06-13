export default function Hobby() {
    return (
        <section className="
            flex flex-col
            items-center
            gap-10 lg:gap-[2.5rem]
            px-6 md:px-12 lg:px-[7.5rem]
            py-12 lg:py-[5rem]
        ">
            <h3 className="
                font-heading font-bold
                leading-tight
                text-[#5b3a29]
                text-[1.75rem] md:text-[2.5rem]
                text-center
            ">
                Hobbies & Interests
            </h3>
            <ul className="border-t-2 pt-6 list-disc w-full max-w-3xl">
                <li className="font-body text-[#535250] text-[1rem] leading-normal mb-3 ml-4">
                    Globetrotting, Reading, Creative Writing, Tennis, Swimming
                </li>
                <li className="font-body text-[#535250] text-[1rem] leading-normal mb-3 ml-4">
                    Painting (Oil/Watercolor/Pastel), Crafting
                </li>
                <li className="font-body text-[#535250] text-[1rem] leading-normal mb-3 ml-4">
                    Movies: Psychological Thrillers, Sci-Fi, Literary Nonsense, True Stories, Autobiographies
                </li>
                <li className="font-body text-[#535250] text-[1rem] leading-normal mb-3 ml-4">
                    Socio-Cultural Documentaries
                </li>
            </ul>
        </section>
    );
}