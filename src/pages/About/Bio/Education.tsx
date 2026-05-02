import { degrees } from './Degrees';
import { featTrainings } from './FeatTrainings';
import { advTrainings } from './AdvTrainings';
import AdvTrainingCard from './AdvTrainingCard';

export default function Education() {

    return (
        <section className="
            flex
            flex-col
            gap-[2.5rem]
            bg-[#392318]
            px-[18.75rem]
            py-[5rem]
            items-center
        ">
            <div className="
                flex
                flex-col
                items-center
                gap-[0.75rem]
            ">
                <h3 className="text-center text-[#f8f5ef] text-[2.5rem] leading-tight font-heading font-bold">
                    Education & Training
                </h3>
                <p className="text-center text-[#C5C1BA] leading-normal text-[1rem] font-body">
                    3 degrees across 3 continents, 30+ specialized certifications
                </p>
            </div>

            <div className="
                flex
                flex-col
                gap-[5rem]
            ">
                <div className="
                    flex
                    flex-col
                    gap-[1.5rem]
                ">
                    <div className="
                        flex
                        items-center
                        gap-1
                    ">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-24
                        ">
                            DEGREES
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[2rem]
                    ">
                        {degrees.map(degree => (
                            <div className="
                                flex
                                items-start
                                gap-[2rem]
                            ">
                                <img
                                    src={degree.img}
                                    className="
                                       w-[6.25rem] 
                                    "
                                />

                                <div className="
                                    flex
                                    flex-col
                                    gap-4
                                ">
                                    <div className="
                                        flex
                                        flex-col
                                        gap-2
                                    ">
                                        <h4 className="
                                            font-heading
                                            font-bold
                                            leading-tight
                                            text-[1.5rem]
                                            text-[#f8f5ef]
                                        ">
                                            {degree.title}
                                        </h4>
                                        <p className="
                                            font-body
                                            leading-normal
                                            text-[1rem]
                                            text-[#c5c1ba]
                                        ">
                                            {degree.school}
                                        </p>
                                        <p className="
                                            font-body
                                            leading-normal
                                            text-[1rem]
                                            text-[#c5c1ba]
                                        ">
                                            {degree.yr}
                                        </p>
                                    </div>
                                    <p className="
                                        font-body
                                        leading-normal
                                        text-[1rem]
                                        text-[#c5c1ba]
                                    ">
                                        {degree.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>

                <div className="
                    flex
                    flex-col
                    gap-[1.5rem]
                ">
                    <div className="
                        flex
                        items-center
                        gap-1
                    ">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-54
                        ">
                            FEATURED TRAININGS
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[2rem]
                    ">
                        {featTrainings.map(train => (
                            <div className="
                                flex
                                gap-[2rem]
                                items-center
                            ">
                                <img
                                    src={train.img}
                                    className="
                                    w-[6.25rem] 
                                    "
                                />

                                <div className="
                                    flex
                                    flex-col
                                    gap-2
                                ">
                                    <h4 className="
                                        font-heading
                                        font-bold
                                        leading-tight
                                        text-[1.5rem]
                                        text-[#f8f5ef]
                                    ">
                                        {train.title}
                                    </h4>
                                    <p className="
                                        font-body
                                        leading-normal
                                        text-[1rem]
                                        text-[#c5c1ba]
                                    ">
                                        {train.school}
                                    </p>
                                    <p className="
                                        font-body
                                        leading-normal
                                        text-[1rem]
                                        text-[#c5c1ba]
                                    ">
                                        {train.yr}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-[1.5rem]
                ">
                    <div className="
                        flex
                        items-center
                        gap-1
                    ">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF]
                            text-[1.125rem]
                            leading-normal
                            tracking-[5%]
                            font-body
                            font-semibold
                            min-w-46
                        ">
                            OTHER TRAININGS
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="
                        flex
                        flex-wrap
                        w-[100%]
                        gap-[4rem]
                    ">
                        {advTrainings.map(train => (
                            <AdvTrainingCard 
                                key={train.title}
                                img={train.img}
                                title={train.title}
                                trainings={train.trainings}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <a 
                href="" 
                className="
                    no-underline
                    bg-[#20422a]
                    text-[#f8f5ef]
                    font-heading
                    font-bold
                    text-[1.125rem]
                    leading-tight
                    px-[1.5rem]
                    py-[1rem]
                    rounded
                    self-center
                "
            >
                View Resume
            </a>
        </section>
    )
}