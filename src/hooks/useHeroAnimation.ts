import { useEffect, useState } from 'react';

export function useHeroAnimation(key: string, delay = 150) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem(key)) {
            setVisible(true);
            return;
        }
        const timer = setTimeout(() => {
            setVisible(true);
            sessionStorage.setItem(key, 'true');
        }, delay);
        return () => clearTimeout(timer);
    }, [key, delay]);

    const animClass = `transition-all duration-[400ms] ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'
    }`

    return animClass;
}