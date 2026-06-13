import { degrees } from './Degrees';
import { featTrainings } from './FeatTrainings';
import { advTrainings } from './AdvTrainings';
import AdvTrainingCard from './AdvTrainingCard';

export default function Education() {
    return (
        <section className="
            flex
            flex-col
            gap-10 lg:gap-[2.5rem]
            bg-[#392318]
            px-6 md:px-12 lg:px-[7.5rem] xl:px-[18.75rem]
            py-12 lg:py-[5rem]
            items-center
        ">
            <div className="flex flex-col items-center gap-3">
                <h3 className="
                    text-center text-[#f8f5ef]
                    text-[1.75rem] md:text-[2.5rem]
                    leading-tight font-heading font-bold
                ">
                    Education & Training
                </h3>
                <p className="text-center text-[#C5C1BA] leading-normal text-[1rem] font-body">
                    3 degrees across 3 continents, 30+ specialized certifications
                </p>
            </div>

            <div className="flex flex-col gap-12 lg:gap-[5rem] w-full">

                {/* Degrees */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-1">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF] text-[1.125rem] leading-normal
                            tracking-[5%] font-body font-semibold min-w-24
                        ">
                            DEGREES
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="flex flex-col gap-8 lg:gap-[2rem]">
                        {degrees.map(degree => (
                            <div key={degree.title} className="
                                flex
                                flex-col sm:flex-row
                                items-start
                                gap-4 sm:gap-[2rem]
                            ">
                                <img
                                    src={degree.img}
                                    className="w-[4rem] sm:w-[6.25rem] shrink-0"
                                />
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-heading font-bold leading-tight text-[1.25rem] md:text-[1.5rem] text-[#f8f5ef]">
                                            {degree.title}
                                        </h4>
                                        <p className="font-body leading-normal text-[1rem] text-[#c5c1ba]">{degree.school}</p>
                                        <p className="font-body leading-normal text-[1rem] text-[#c5c1ba]">{degree.yr}</p>
                                    </div>
                                    <p className="font-body leading-normal text-[1rem] text-[#c5c1ba]">{degree.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Trainings */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-1">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF] text-[1.125rem] leading-normal
                            tracking-[5%] font-body font-semibold min-w-54
                        ">
                            FEATURED TRAININGS
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="flex flex-col gap-8 lg:gap-[2rem]">
                        {featTrainings.map(train => (
                            <div key={train.title} className="
                                flex
                                flex-col sm:flex-row
                                items-start
                                gap-4 sm:gap-[2rem]
                            ">
                                <img
                                    src={train.img}
                                    className="w-[4rem] sm:w-[6.25rem] shrink-0"
                                />
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-heading font-bold leading-tight text-[1.25rem] md:text-[1.5rem] text-[#f8f5ef]">
                                        {train.title}
                                    </h4>
                                    <p className="font-body leading-normal text-[1rem] text-[#c5c1ba]">{train.school}</p>
                                    <p className="font-body leading-normal text-[1rem] text-[#c5c1ba]">{train.yr}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Trainings */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-1">
                        <div className="w-[15%] h-[2px] bg-[#F8F5EF]" />
                        <p className="
                            text-[#F8F5EF] text-[1.125rem] leading-normal
                            tracking-[5%] font-body font-semibold min-w-46
                        ">
                            OTHER TRAININGS
                        </p>
                        <div className="w-full h-[2px] bg-[#F8F5EF]" />
                    </div>

                    <div className="flex flex-col md:flex md:flex-row md:flex-wrap gap-8 lg:gap-[4rem] w-full">
                        {advTrainings.map(train => (
                            <AdvTrainingCard
                                id={train.id}
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
                href="https://geog.ufl.edu/wp-content/uploads/sites/60/Foyet_CV.pdf"
                className="
                    no-underline
                    bg-[#20422a] text-[#f8f5ef]
                    font-heading font-bold
                    text-[1.125rem] leading-tight
                    px-6 py-4
                    rounded
                    self-center
                    hover:bg-[#285836]
                "
                rel="noopener noreferrer"
                target="_blank"
            >
                View Resume
            </a>
        </section>
    );
}