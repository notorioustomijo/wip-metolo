import { NavLink } from 'react-router-dom';

const metologo = '/metologo.svg';

export default function Navigation() {
    return (
        <nav className="
            fixed
            top-0
            left-0
            right-0
            pointer-events-none
            z-30
            h-[100dvh]
        ">
            <NavLink to="/" className="
                absolute
                top-[1rem]
                left-[38%]
                right-[38%]
                lg:left-[45%]
                lg:right-[45%]
                pointer-events-auto
                border
                border-[1.5px]
                border-[#20422A]
                bg-[#F8F5EF]
                p-[0.3125rem]
                lg:p-[0.625rem]
                rounded
                flex
                justify-center
                hover:bg-[#EFECE6]
                w-[6rem]
                sm:w-[10rem]
            ">
                <img src={metologo} alt="Home" className="h-[1.5rem] w-auto self-center" />
            </NavLink>

            <NavLink 
                to="/work" 
                className={({ isActive }) => `
                    absolute
                    pointer-events-auto
                    py-[0.25rem]
                    px-[0.875rem]
                    md:py-[0.5rem]
                    md:px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.875rem]
                    md:text-[0.9rem]
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
                    py-[0.25rem]
                    px-[0.875rem]
                    md:py-[0.5rem]
                    md:px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.875rem]
                    md:text-[0.9rem]
                    font-medium
                    [transition: background-color_0.2s,color_0.2s]
                    bottom-[calc(1.75rem+env(safe-area-inset-bottom))]
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
                    py-[0.25rem]
                    px-[0.875rem]
                    md:py-[0.5rem]
                    md:px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.875rem]
                    md:text-[0.9rem]
                    font-medium
                    [transition: background-color_0.2s,color_0.2s]
                    bottom-[calc(1.75rem+env(safe-area-inset-bottom))]
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
                    py-[0.25rem]
                    px-[0.875rem]
                    md:py-[0.5rem]
                    md:px-[1.25rem]
                    border
                    border-[1.5px]
                    border-[#20422A]
                    rounded-[0.375rem]
                    text-[#20422A]
                    no-underline
                    font-heading
                    text-[0.875rem]
                    md:text-[0.9rem]
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