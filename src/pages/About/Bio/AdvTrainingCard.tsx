import { useState, useEffect, useRef } from 'react';

interface AdvTrainingCardProps {
    id: string
    img: string
    title: string
    trainings: string[]
}

const VISIBLE_COUNT = 3;

export default function AdvTrainingCard({
    id,
    img,
    title,
    trainings
}:AdvTrainingCardProps) {
    const [expanded, setExpanded] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function handleSeeMore() {
        setExpanded(true);
        timerRef.current = setTimeout(() => {
            setExpanded(false);
        }, 8000);
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, []);

    const visibleTrainings = expanded ? trainings : trainings.slice(0, VISIBLE_COUNT);

    return (
        <div className="
            flex
            flex-col
            gap-[0.75rem]
            w-[100%]
            md:w-[45%]
            items-start
        ">
            <div className="
                flex
                gap-2
                items-center  
            ">
                <img
                    src={img}
                    className="
                        h-6
                        w-6
                    "
                />
                <h4 className="
                    font-heading
                    font-bold
                    leading-tight
                    text-[1.5rem]
                    text-[#f8f5ef]
                ">
                    {title}
                </h4>
            </div>
            <ul className={`
                list-disc
                ml-2
                pl-4
                overflow-hidden
                transition-all
                duration-500
                ease-in-out
                ${expanded ? 'max-h-[1000px]' : 'max-h-[240px]'}
            `}>
                {visibleTrainings.map(train => (
                    <li className="
                        font-body
                        leading-normal
                        text-[#c5c1ba]
                        text-[1rem]
                        mb-2
                    " key={train}>
                        {train}
                    </li>
                ))}
            </ul>
            {!expanded && trainings.length > VISIBLE_COUNT && (<button
                onClick={handleSeeMore}
                className={`
                    font-heading
                    underline
                    text-[1rem]
                    text-[#f8f5ef]
                    font-bold
                    leading-tight
                    cursor-pointer
                    transition-opacity
                    duration-300
                    ${expanded ? 'opacity-0' : 'opacity-100'}
                `}>
                [See more...]
            </button>)}
        </div>
    )
}