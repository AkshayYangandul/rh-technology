import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo1.webp";
import { Link, useLocation } from "react-router-dom";
// 1. ADDED: Import motion and AnimatePresence for the icon animation
import { motion, AnimatePresence } from "framer-motion"; 

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 120) setIsScrolled(true);
            else setIsScrolled(false);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 2. FIXED: The closing brace for the Header function was missing.
    // The component's return statement must be inside the function body.

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-md transition-all duration-500">

            {/* ===== TOPBAR (HIDDEN ON MOBILE) ===== */}
            <div
                className={`
                    hidden md:flex w-full justify-end transition-all duration-500
                    ${isScrolled ? "opacity-0 -translate-y-6" : "opacity-100 translate-y-0"}
                `}
            >
                <div className="flex items-center text-white text-sm">
                    <div className="flex items-center gap-2 bg-[#e44a24] px-6 py-2 border-r border-[#ffffff40]">
                        <FaPhoneAlt className="text-lg" />
                        <span className="font-semibold">+91-8983839143</span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#e44a24] px-6 py-2">
                        <FaLocationDot className="text-lg" />
                        <span className="font-semibold">Solapur, Maharashtra</span>
                    </div>
                </div>
            </div>

            {/* ===== MINI TOPBAR ON SCROLL (HIDDEN ON MOBILE) ===== */}
            <div
                className={`
                    hidden md:flex justify-end items-center gap-6 pr-6 transition-all duration-500 text-sm
                    ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
                `}
            >
                <div className="flex items-center gap-2 text-[#e44a24] font-semibold">
                    <FaPhoneAlt className="text-base" />
                    <span>+91-8983839143</span>
                </div>
                <div className="flex items-center gap-2 text-[#e44a24] font-semibold">
                    <FaLocationDot className="text-base" />
                    <span>Solapur, MH</span>
                </div>
            </div>

            {/* ===== NAVBAR AREA ===== */}
            <div
                className={`
                    max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 transition-all duration-500
                    ${isScrolled ? "h-[55px] md:h-[40px]" : "h-[70px] md:h-[80px]"}
                `}
            >

                {/* LOGO */}
                <img
                    src={logo}
                    alt="RH Technology"
                    className={`
                        transition-all duration-500 -mt-0 sm:-mt-10
                        ${isScrolled ? "h-10 sm:h-12 md:h-14" : "h-12 sm:h-14 md:h-16"}
                    `}
                />

                {/* ===== DESKTOP MENU ===== */}
                <nav className="hidden md:block">
                    <ul className="flex items-end gap-10 text-[15px] font-bold text-[#1c1c1c]">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/about" },
                            { name: "Services", path: "/services" },
                            { name: "Portfolio", path: "/portfolio/1" },
                            { name: "Faqs", path: "/faqs" },
                            { name: "Contact Us", path: "/contact" },
                        ].map((item) => (
                            <li key={item.path} className="group relative cursor-pointer">
                                <Link
                                    to={item.path}
                                    className="transition"
                                >
                                    {item.name}
                                </Link>

                                <span
                                    className={`
                                        absolute left-0 bottom-[-9px] h-[3px] transition-all duration-300
                                        ${location.pathname === item.path
                                            ? "w-full bg-[#65C7F7]"
                                            : "w-0 bg-[#65C7F7] group-hover:w-full"}
                                    `}
                                ></span>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ===== MOBILE HAMBURGER (with Framer Motion animation) ===== */}
                <div className="md:hidden z-[60]"> {/* ADDED: z-[60] to ensure the icon stays on top */}
    <button onClick={() => setMobileMenu(!mobileMenu)}>
        <AnimatePresence mode="wait" initial={false}> 
            <motion.div
                key={mobileMenu ? "close" : "open"}
                initial={{ opacity: 0, rotate: mobileMenu ? -90 : 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: mobileMenu ? 90 : -90, scale: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                {mobileMenu ? (
                    <HiX size={32} className="text-[#1c1c1c]" />
                ) : (
                    <HiMenu size={32} className="text-[#1c1c1c]" />
                )}
            </motion.div>
        </AnimatePresence>
    </button>
</div>

{/* ===== MOBILE MENU (SIDE DRAWER OVERLAY) ===== */}
                <AnimatePresence>
                    {mobileMenu && (
                        <motion.div
                            className="md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white shadow-2xl z-40 p-6 pt-20"
                            initial={{ x: '100%' }} // Start off-screen to the right
                            animate={{ x: 0 }}     // Slide in to zero position
                            exit={{ x: '100%' }}   // Slide out to the right
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="flex flex-col gap-6 text-lg font-semibold text-[#1c1c1c]">

                                {/* NOTE: You need to move the Close Button logic outside the Navbar Area Div */}
                                {/* if you want the 'X' icon to be part of the side menu content, but */}
                                {/* based on your screenshot, the X icon remains fixed on the left. */}
                                {/* For the menu content itself: */}
                                
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About Us", path: "/about" },
                                    { name: "Services", path: "/services" },
                                    { name: "Portfolio", path: "/portfolio/1" },
                                    { name: "Faqs", path: "/faqs" },
                                    { name: "Contact Us", path: "/contact" },
                                ].map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setMobileMenu(false)}
                                            className={`block py-1 ${location.pathname === item.path
                                                    ? "text-[#65C7F7]"
                                                    : "text-[#1c1c1c]"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}

                                {/* MOBILE PHONE + LOCATION */}
                                <div className="mt-4 pt-4 border-t border-gray-300">
                                    <p className="flex items-center gap-2 text-[#e44a24] font-semibold">
                                        <FaPhoneAlt /> +91-8983839143
                                    </p>
                                    <p className="flex items-center gap-2 text-[#e44a24] font-semibold mt-2">
                                        <FaLocationDot /> Solapur, MH
                                    </p>
                                </div>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            </header>
            
        );
};

export default Header;