import { useState, useEffect } from "react";

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
            className={`fixed bottom-6 right-1 w-6 h-6 flex items-center justify-center text-slate-50 text-base bg-gradient-to-r from-rose-800 via-indigo-800 to-yellow-600 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-amber-400 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            } animate-bounce-once`}
            style={{
                backgroundSize: "200% 200%",
                animation: "gradientAnimation 5s ease infinite, bounce 1s ease infinite",
            }}
        >
            &uarr;
        </button>
    );
};

export default ScrollToTopButton;
