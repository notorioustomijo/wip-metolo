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
                left-[50%]
                pointer-events-auto
                border
                border-[1.5px]
                border-[#20422A]
                bg-[#F8F5EF]
                p-[0.625rem]
                rounded
                flex
                justify-center
            ">
                <img src={metologo} alt="Home" className="h-[1.5rem] self-center" />
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
                    bg-[#F8F5EF]
                    [transition: backgorund-color_0.2s,color_0.2s]
                    hover: bg-[#F8EAD0]
                    top-[1.5rem]
                    left-[1.75rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : ''
                    }
                `}
            >
                About
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
                    bg-[#F8F5EF]
                    [transition: backgorund-color_0.2s,color_0.2s]
                    hover: bg-[#F8EAD0]
                    top-[1.5rem]
                    right-[1.5rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : ''
                    }
                `}
            >
                Work
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
                    bg-[#F8F5EF]
                    [transition: backgorund-color_0.2s,color_0.2s]
                    hover: bg-[#F8EAD0]
                    bottom-[1.75rem]
                    left-[1.75rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : ''
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
                    bg-[#F8F5EF]
                    [transition: backgorund-color_0.2s,color_0.2s]
                    hover: bg-[#F8EAD0]
                    bottom-[1.75rem]
                    right-[1.75rem]
                    
                    ${isActive 
                        ? 'bg-[#D4C6AA] border divide-dashed cursor-not-allowed' 
                        : ''
                    }
                `}
            >
                Contact
            </NavLink>
           
        </nav>
    )
}