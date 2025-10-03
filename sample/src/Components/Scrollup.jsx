import { useState, useEffect } from "react";
import { FaRocket } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white bg-gradient-to-r from-cosmic-pink via-cosmic-purple to-cosmic-blue rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-cosmic ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
                backgroundSize: "200% 200%",
                animation: "gradientAnimation 6s ease infinite",
            }}
        >
            <FaRocket className="text-lg sm:text-xl animate-bounce" />
        </button>
    );
};

export default ScrollToTopButton;
