import workImg from '../../../assets/work-image.webp';
import work1 from '../../../assets/work_1.svg';
import work2 from '../../../assets/work_2.svg';


export default function Hero() {
    return (
        <section className="
            bg-[#F8F5EF]
            pt-[10rem]
            pb-[3.5rem]
            flex
            flex-col
            items-center
            gap-16
        ">
            <div className="
                flex
                items-center
                gap-[-1.25rem]
            ">
                <img 
                    src={work1}  
                    className="
                        z-20
                        w-[34.375rem]
                    "
                />
                <img 
                    src={workImg} 
                    className="
                        z-10
                        w-[25rem]
                    "
                />
                <img 
                    src={work2} 
                    className="
                        z-0
                        w-[28.125rem]
                    "
                />
            </div>
            <p className="
                text-[#535250]
                text-[1.125rem]
                font-body
                text-center
                leading-normal
                w-[40%]
            ">
                From soil to satellites, policy to poetry, 
                bridging conservation science, IT, human 
                rights and indigenous advocacy through 
                research, writing, art and action. 
            </p>
        </section>
    )
}
