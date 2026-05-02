import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../global components/ScrollToTop";
import Navigation from "../global components/Navigation";
import Footer from "../global components/Footer";

export default function MainLayout() {
    const location = useLocation();
    const hideFooter = ['/about'].includes(location.pathname);

    return (
        <>
            <ScrollToTop />
            <Navigation />
            <main>
                <Outlet />
            </main>
            {!hideFooter && <Footer />}
        </>
    )
}