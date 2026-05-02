export interface Lecture {
    yr: string
    location: string
    label: string
}

export default function InvitedLecture({
    yr,
    location,
    label
}:Lecture) {
    return (
        <div className="
            flex
            flex-col
            gap-2
            w-full
        ">
            <p className="
                font-body
                text-[1rem]
                text-[#535250]
                leading-normal
            ">
                {yr}{location}
            </p>
            <p className="
                font-heading
                font-bold
                text-[1.5rem]
                text-[#5b3a29]
                leading-tight
            ">
                {label}
            </p>
        </div>
    )
}