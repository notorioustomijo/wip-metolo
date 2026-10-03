import { useHeroAnimation } from '../../../hooks/useHeroAnimation';
import BoardMemberCard from './BoardMemberCard';
import springecoLogo from '../../../assets/springeco.svg';
import alteraLogo from '../../../assets/altera.svg';

export default function FoundingBoard() {
    const animClass = useHeroAnimation('founding-board');

    return (
        <section className="
            bg-[#F8F5EF]
            px-6 md:px-12 lg:px-[7.5rem]
            py-12 lg:py-[5rem]
            flex flex-col
            items-center
            gap-10
        ">
            <h2 className={`
                font-bold font-heading
                leading-tight
                text-[1.75rem] md:text-[2.5rem]
                text-[#5b3a29]
                ${animClass}
            `}>
                Founding Board Member
            </h2>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl ${animClass}`}>
                <BoardMemberCard
                    name="SpringEco"
                    logoSrc={springecoLogo}
                    desc="Turning plastic waste into opportunity"
                    url="https://springeco.bi/"
                />
                <BoardMemberCard
                    name="Altéra"
                    logoSrc={alteraLogo}
                    desc="Neurodiversity in Francophone Africa"
                />
            </div>
        </section>
    );
}