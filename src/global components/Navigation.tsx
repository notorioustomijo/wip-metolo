import metologo from '../assets/metologo.svg';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="
            fixed
            inset-0
            pointer-events-none
            z-30
        ">
            <NavLink to="/" className="
                absolute
                top-[1rem]
                left-[40%]
                right-[40%]
                lg:left-[45%]
                lg:right-[45%]
                pointer-events-auto
                border
                border-[1.5px]
                border-[#20422A]
                bg-[#F8F5EF]
                p-[0.625rem]
                rounded
                flex
                justify-center
                hover:bg-[#EFECE6]
                w-[6rem]
                sm:w-[10rem]
            ">
                <img src={metologo} alt="Home" className="h-[1.5rem] self-center" />
            </NavLink>

            <NavLink 
                to="/work" 
                className={({ isActive }) => `
                    absolute
                    pointer-events-auto
                    py-[0.5rem]
                    px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.9rem]
                    font-medium
                    [transition: background-color_0.2s,color_0.2s]
                    top-[1.5rem]
                    left-[1.75rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : 'bg-[#F8F5EF] hover:bg-[#EFECE6]'
                    }
                `}
            >
                Work
            </NavLink>
            
            <NavLink 
                to="/about" 
                className={({ isActive }) => `
                    absolute
                    pointer-events-auto
                    py-[0.5rem]
                    px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.9rem]
                    font-medium
                    [transition: background-color_0.2s,color_0.2s]
                    bottom-[1.75rem]
                    right-[1.75rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : 'bg-[#F8F5EF] hover:bg-[#EFECE6]'
                    }
                `}
            >
                About
            </NavLink>


            <NavLink 
                to="/shop" 
                className={({ isActive }) => `
                    absolute
                    pointer-events-auto
                    py-[0.5rem]
                    px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.9rem]
                    font-medium
                    [transition: background-color_0.2s,color_0.2s]
                    bottom-[1.75rem]
                    left-[1.75rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : 'bg-[#F8F5EF] hover:bg-[#EFECE6]'
                    }
                `}
            >
                Shop
            </NavLink>

            <NavLink 
                to="/contact" 
                className={({ isActive }) => `
                    absolute
                    pointer-events-auto
                    py-[0.5rem]
                    px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.9rem]
                    font-medium
                    [transition: background-color_0.2s,color_0.2s]
                    top-[1.5rem]
                    right-[1.5rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : 'bg-[#F8F5EF] hover:bg-[#EFECE6]'
                    }
                `}
            >
                Contact
            </NavLink>
           
        </nav>
    )
}