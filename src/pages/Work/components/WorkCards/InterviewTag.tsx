import podcast from '../../../../assets/podcast.svg';
import radio from '../../../../assets/radio.svg';
import tv from '../../../../assets/tv.svg';
import article from '../../../../assets/article.svg';

interface InterviewTagProps {
    label: string
}

export default function InterviewTag({ label }: InterviewTagProps) {

    const imgSrc = label === "PODCAST" ? podcast
                : label === "RADIO" ? radio 
                : label === "TV" ? tv
                : label === "ARTICLE" ? article
                : ""

    return (
        <div className={`
            p-[0.5rem]
            rounded
            border
            bg-[#FBF0EA]
            border-[#5B3A29]
            text-[#5B3A29]
            flex
            items-center
            self-start
            gap-2
        `}>
            <img src={imgSrc} className="h-6" loading="lazy"/>
            <p className={
                `
                text-[0.75rem]
                font-semibold
                leading-normal
                font-body
                `
            }>
                {label}
            </p>
        </div>
    )
}