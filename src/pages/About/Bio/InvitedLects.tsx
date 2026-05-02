import InvitedLecture from "./Lecture";
import { lectures } from "./Lectures";

export default function InvitedLects() {
    return (
        <section className="
            bg-[#F8F5EF]
            px-[7.5rem]
            py-[5rem]
            flex
            flex-col
            gap-[2.5rem]
            items-center
        ">
            <div className="
                flex
                flex-col
                items-center
                gap-[0.75rem]
            ">
                <h3 className="
                    font-heading
                    font-bold
                    text-[#5b3a29]
                    text-[2.5rem]
                    leading-tight
                ">
                    Presentations & Invited Lectures
                </h3>
                <p className="
                    font-body
                    text-[1rem]
                    text-[#535250]
                    leading-normal
                ">
                    Selected talks, panels and invited lectures.
                </p>
            </div>
            <div className="
                flex
                flex-col
                gap-[1.5rem]
                border-t-2
                border-[#5b3a29]
                pt-[1.5rem]
            ">
                {lectures.map(lect => (
                    <InvitedLecture 
                        yr={lect.yr}
                        location={lect.location}
                        label={lect.label}
                    />
                ))}
            </div>
        </section>
    )
}