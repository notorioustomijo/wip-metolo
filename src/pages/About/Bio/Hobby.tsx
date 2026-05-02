export default function Hobby() {
    return (
        <section className="
            flex
            flex-col
            items-center
            gap-[2.5rem]
            px-[7.5rem]
            py-[5rem]
        ">
            <h3 className="
                font-heading
                font-bold
                leading-tight
                text-[#5b3a29]
                text-[2.5rem]
                text-center
            ">
                Hobbies & Interests
            </h3>
            <ul className="
                border-t-2
                pt-[1.5rem]
                list-disc
                w-[75%]
            ">
                <li className="
                    font-body
                    text-[#535250]
                    text-[1rem]
                    leading-normal
                    mb-[0.75rem]
                    ml-4
                ">
                    Globetrotting, Reading, Creative Writing, Tennis, Swimming
                </li>
                <li className="
                    font-body
                    text-[#535250]
                    text-[1rem]
                    leading-normal
                    mb-[0.75rem]
                    ml-4
                ">
                    Painting (Oil/Watercolor/Pastel), Crafting
                </li>
                <li className="
                    font-body
                    text-[#535250]
                    text-[1rem]
                    leading-normal
                    mb-[0.75rem]
                    ml-4
                ">
                    Movies: Psychological Thrillers, Sci-Fi, Literary Nonsense, True Stories, Autobiographies
                </li>
                <li className="
                    font-body
                    text-[#535250]
                    text-[1rem]
                    leading-normal
                    mb-[0.75rem]
                    ml-4
                ">
                    Socio-Cultural Documentaries
                </li>
            </ul>
        </section>
    )
}