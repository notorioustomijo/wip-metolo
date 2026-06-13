import { Outlet, useLocation, Link } from "react-router-dom";
import ScrollToTop from "../global components/ScrollToTop";
import Navigation from "../global components/Navigation";
import Footer from "../global components/Footer";
import { PageLoader} from "../global components/Loader";
import { useNavigationLoader } from "../hooks/useNavigationLoader";

export default function MainLayout() {
    const location = useLocation();
    const hideFooter = ['/about', '/about/story'].includes(location.pathname);
    const isArtworkDetail = location.pathname.startsWith('/shop/');
    const isStory = location.pathname === '/about/story';
    const isLoading = useNavigationLoader(400);

    return (
        <>
            <ScrollToTop />

            {isLoading && (
                <div className="
                    fixed
                    inset-0
                    z-50
                    flex
                    items-center
                    justify-center
                    bg-[#f8f5ef]
                ">
                    <PageLoader />
                </div>
            )}

            {isArtworkDetail 
                ? (
                    <Link
                        to="/shop"
                        className="
                            fixed
                            top-[2rem]
                            left-[2rem]
                            z-30
                            flex
                            items-center
                            gap-2
                            py-[0.5rem]
                            px-[1.25rem]
                            border
                            border-[1.5px]
                            border-[#20422a]
                            rounded
                            bg-[#F8F5EF]
                            font-heading
                            font-medium
                            [transition: backgorund-color_0.2s,color_0.2s]
                            hover: bg-[#F8EAD0]
                            text-[0.9rem]
                            hover:bg-[#EFECE6]
                        "
                    >
                        Back to Shop
                    </Link>
                ) 
                : isStory
                ? null 
                : <Navigation />

            }
            <main>
                <Outlet />
            </main>
            {!hideFooter && <Footer />}
        </>
    )
}