import Navbar from "../components/Navbar/Navbar.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import Blog from "../components/Blog/Blog.jsx";
import SocialResponsibility from "../components/SocialResponsibility/SocialResponsibility.jsx";
import Products from "../components/Products/Products.jsx";
import ParallaxSection from "../components/ParallaxSection/ParallaxSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function App() {

    return (
        <>
            <Navbar/>
            <HeroSection />
            <AboutUs />
            <Products />
            <ParallaxSection />
            <Blog />
            <SocialResponsibility />
            <Footer />
        </>
    );
}
