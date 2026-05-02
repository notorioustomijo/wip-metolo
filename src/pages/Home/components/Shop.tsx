import rtArrow from '../../../assets/rt-arrow-white.svg';
import shop1 from '../../../assets/shop-1.webp';
import shop2 from '../../../assets/shop-2.webp';
import shop3 from '../../../assets/shop-3.webp';
import shop4 from '../../../assets/shop-4.webp';
import shop5 from '../../../assets/shop-5.webp';
import shop6 from '../../../assets/shop-6.webp';
import shopDisplay from '../../../assets/SHOP.svg';

export default function Shop() {
    return (
        <section className="
            bg-[#5B3A29]
            py-[10rem]
            px-[3.5rem]
            flex
            justify-around
        ">
            <div className="
                flex
                flex-col
                gap-3
                w-[40rem]
            ">
                <div className='
                    flex
                    justify-between
                    items-center
                    w-[100%]
                '>
                    <p className="
                        font-body
                        text-[1.125rem] 
                        leading-normal
                        text-[#F8F5EF]
                    ">
                        Art
                    </p>
                    <a 
                        href=""
                        className="
                            font-body 
                            text-[0.875rem] 
                            text-[#F8F5EF] 
                            leading-normal
                            flex
                            gap-2
                            items-center
                            no-underline
                            hover:underline
                        "
                    >
                        Visit Her Shop
                        <img src={rtArrow} className="w-4 h-4" />
                    </a>
                </div>
                <div className="
                    grid
                    grid-cols-3
                    gap-2
                ">
                    <div className="
                        col-span-2 
                        row-span-2
                        grid
                        grid-cols-2
                        grid-row-3
                        gap-2
                    ">
                        <img 
                            src={shop1} alt="" 
                            className="
                                col-span-2
                                row-span-2
                                w-full 
                                h-full 
                                object-cover
                            " 
                        />   
                        <div className="
                            col-span-1
                            row-span-1
                            flex
                            gap-2
                            w-full
                            h-full
                        ">
                            <img src={shop2} alt="" />
                            <img src={shop3} alt="" />
                        </div>
                    </div>
                    <div className="
                        flex
                        flex-col
                        gap-2
                    ">
                        <img src={shop4} alt="" />
                        <img src={shop5} alt="" />
                        <img src={shop6} alt="" />
                    </div>
                </div>
            </div>
            <div className="
                flex
                flex-col
                gap-10
                w-160
            ">
                <p className="
                    text-[0.875rem]
                    font-body
                    text-[#F7E9E2]
                    leading-normal
                ">
                    Metolo’s artwork translates memory, ecology, 
                    and heritage into collectible visual stories. 
                    Each piece is rooted in Indigenous knowledge 
                    and the landscapes that shaped her research. 
                    Explore limited editions, originals, and prints — 
                    each carrying its own statement and story.
                </p>
                <img src={shopDisplay} alt="" className="w-full"/>
            </div>
        </section>
    )
}