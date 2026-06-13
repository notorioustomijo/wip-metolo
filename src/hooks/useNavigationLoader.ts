import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavigationLoader(minDuration = 400) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const prevPath = useRef(location.pathname);

    useEffect(() => {
        if (prevPath.current === location.pathname) return;
        prevPath.current = location.pathname;
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), minDuration);
        return () => clearTimeout(timer);
    }, [location.pathname, minDuration]);

    return loading;
}