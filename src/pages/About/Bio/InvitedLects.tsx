import InvitedLecture from "./Lecture";
import { lectures } from "./Lectures";

export default function InvitedLects() {
    return (
        <section className="
            bg-[#F8F5EF]
            px-6 md:px-12 lg:px-[7.5rem]
            py-12 lg:py-[5rem]
            flex flex-col
            gap-10 lg:gap-[2.5rem]
            items-center
        ">
            <div className="flex flex-col items-center gap-3">
                <h3 className="
                    font-heading font-bold
                    text-[#5b3a29]
                    text-[1.75rem] md:text-[2.5rem]
                    leading-tight
                    text-center
                ">
                    Presentations & Invited Lectures
                </h3>
                <p className="font-body text-[1rem] text-[#535250] leading-normal text-center">
                    Selected talks, panels and invited lectures.
                </p>
            </div>

            <div className="
                flex flex-col
                gap-6 lg:gap-[1.5rem]
                border-t-2 border-[#5b3a29]
                pt-6 lg:pt-[1.5rem]
                w-full
            ">
                {lectures.map((lect, index) => (
                    <InvitedLecture
                        key={index}
                        yr={lect.yr}
                        location={lect.location}
                        label={lect.label}
                    />
                ))}
            </div>
        </section>
    );
}