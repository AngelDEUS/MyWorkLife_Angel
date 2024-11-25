import { Routes, Route } from "react-router-dom";
import Home from "./../pages/home/mainHome";
import About from "./../pages/aboutme/mainAboutMe";
import Portfolio from "./../pages/portfolio/mainPortfolio";
import NotFound from "./../pages/notfound/mainNotFoud";
import Blog from "./../pages/blog/mainBlog";
import Contact from "./../pages/contactMe/mainContactMe.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;