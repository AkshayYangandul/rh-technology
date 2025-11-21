import React, { useEffect, useMemo, useState } from "react";

// Your 5 Home-6 images (correct order)
import monitor from "../assets/images/h6-slider-img1.png";
import lockImg from "../assets/images/h6-slider-img2.png";
import listImg from "../assets/images/h6-slider-img3.png";
import diamondImg from "../assets/images/h6-slider-img4.png";
import orangeImg from "../assets/images/h6-slider-img5.png";

// Icons
import { PiShieldCheckBold, PiCpuBold, PiLockKeyBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Subscribe from "./Subscribe";
import FunFacts from "./FunFacts";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";


const serviceTiles = [
    { label: "Professional Services", icon: PiShieldCheckBold },
    { label: "Managed IT Solution", icon: PiCpuBold },
    { label: "Cyber & IT Security", icon: PiLockKeyBold }
];

const heroSlides = [
    {
        id: "01",
        title1: "You will get",
        title2: "100% Satisfaction",
        description:
            "Technology Services Provider built for your unique needs. We help position your business for future innovation."
    },
    {
        id: "02",
        title1: "Think Big. We",
        title2: "make IT Solution.",
        description:
            "Technology Services Provider built for your unique needs. We help position your business for future innovation."
    },
    {
        id: "03",
        title1: "Best IT Solution",
        title2: "Company Market",
        description:
            "Technology Services Provider built for your unique needs. We help position your business for future innovation."
    }
];

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const current = useMemo(() => heroSlides[activeSlide], [activeSlide]);

    const slideUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };


    return (
        <>
            <Helmet>
                <title>Home | R H Technology</title>
            </Helmet>
            <section className="relative overflow-hidden bg-[#f5f7ff] pb-12 pt-14 sm:pb-16 md:pt-20">

                <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10 sm:gap-16 px-4 sm:px-6">

                    {/* LEFT SIDE */}
                    <div key={activeSlide} className="w-full lg:w-1/2 space-y-10 md:space-y-14 relative">

                        {/* ID LINE */}
                        <div className="flex items-center gap-4 text-base font-semibold uppercase tracking-[0.4em] text-[#2f80ed]">
                            <span>{current.id}.</span>
                            <span className="h-[2px] w-14 bg-current"></span>
                        </div>

                        {/* TITLES */}
                        <div className="relative">
                            <motion.h1
                                variants={slideUp}
                                initial="hidden"
                                animate="visible"
                                className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0f0f1b] leading-tight pr-28 sm:pr-0"
                            >
                                <motion.span
                                    variants={slideUp}
                                    className="block"
                                >
                                    {current.title1}
                                </motion.span>

                                <motion.span
                                    variants={slideUp}
                                    transition={{ delay: 0.15 }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9cecfb] to-[#0052d4]"
                                >
                                    {current.title2}
                                </motion.span>
                            </motion.h1>

                            {/* MOBILE FLOATING IMAGES */}
                            <div className="sm:hidden pointer-events-none">
                                <img
                                    src={diamondImg}
                                    alt="Diamond"
                                    className="absolute -top-15 left-1/2 -translate-x-1/2 w-10 h-10 drop-shadow float-slow"
                                />
                                <img
                                    src={listImg}
                                    alt="List"
                                    className="absolute -top-15 right-0 w-20 h-20 drop-shadow float-fast"
                                />
                                <img
                                    src={lockImg}
                                    alt="Lock"
                                    className="absolute top-16 right-10 w-22 h-22 drop-shadow float-medium"
                                />
                                <img
                                    src={orangeImg}
                                    alt="Orange"
                                    className="absolute -bottom-50 right-2 w-12 h-12 drop-shadow float-medium"
                                />
                            </div>

                        </div>

                        <motion.p
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.3 }}
                            className="max-w-xl text-sm sm:text-base text-[#5b5d72]"
                        >
                            {current.description}
                        </motion.p>


                        {/* SERVICE ICONS (Label hidden on mobile) */}
                        <div className="flex gap-3 sm:gap-4">
                            {serviceTiles.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={service.label}
                                        className="
                                            flex flex-col items-center justify-center 
                                            px-4 py-4 rounded-lg 
                                            text-[#38bdff] hover:text-white 
                                            bg-white shadow-sm cursor-pointer
                                            transition-all duration-300
                                        "
                                        style={{
                                            '--hover-gradient': 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--hover-gradient)')}
                                        onMouseLeave={e => (e.currentTarget.style.background = 'white')}
                                    >

                                        <Icon className="text-3xl sm:text-4xl" />

                                        {/* Label visible only on desktop */}
                                        <span className="hidden sm:block font-medium text-gray-700 hover:text-white text-sm mt-1">
                                            {service.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* PAGINATION NUMBERS (Desktop Only) */}
                        <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#9094a8]">
                            {heroSlides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => setActiveSlide(index)}
                                    className={`px-3 py-1 rounded-full cursor-pointer border hover:scale-120 transition ${activeSlide === index
                                        ? "border-[#2db5f9] text-[#33b9fd]"
                                        : "border-gray-300 text-gray-500"
                                        }`}
                                >
                                    {slide.id}
                                </button>
                            ))}
                        </div>

                        {/* ARROWS (Visible on all screens) */}
                        <div className="flex items-center gap-4 mt-6 sm:mt-12 mb-5 justify-center sm:justify-start ">

                            <button
                                onClick={() =>
                                    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                                }
                                className="p-3 sm:p-4 rounded-full shadow-md border border-[#17aaf3] bg-white hover:bg-[#23b1f8] text-[#65c7f7] hover:text-white active:scale-90 transition cursor-pointer"
                            >
                                <FaArrowLeft size={18} />
                            </button>

                            <button
                                onClick={() =>
                                    setActiveSlide((prev) => (prev + 1) % heroSlides.length)
                                }
                                className="p-3 sm:p-4 rounded-full shadow-md border border-[#23b1f8] bg-white hover:bg-[#23b1f8] text-[#65c7f7] hover:text-white  active:scale-90 transition cursor-pointer"
                            >
                                <FaArrowRight size={18} />
                            </button>

                        </div>
                    </div>

                    {/* RIGHT SIDE FLOATING IMAGES */}
                    <div className="relative hidden sm:flex w-full lg:w-1/2 mt-10 lg:mt-0 justify-center lg:justify-end min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">

                        {/* MONITOR – Hidden on mobile */}
                        <img
                            src={monitor}
                            alt="Main Monitor"
                            className="hidden sm:block w-full max-w-[320px] sm:max-w-[420px] sm:h-[360px] md:max-w-[520px] lg:max-w-[680px] mx-auto drop-shadow-2xl relative z-0 mt-20"
                        />

                        {/* FLOATING ICONS – positioned like Home 6 template */}
                        {/* diamondImg - Top Left */}
                        <img
                            src={diamondImg}
                            className="absolute top-2 left-4 sm:top-2 sm:left-2 md:top-4 md:left-4 lg:top-6 lg:left-6 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-float-slow drop-shadow-md z-10"
                            alt="Diamond"
                        />

                        {/* lockImg - Mid-Left (above and to the left of monitor) */}
                        <img
                            src={lockImg}
                            className="
                                absolute top-16 left-6 
                                sm:top-16 sm:left-4 
                                
                                md:top-20 md:left-6 md:w-32 md:h-32     /* Bigger for desktop (md) */
                                lg:top-28 lg:left-8 lg:w-40 lg:h-40     /* Even bigger for large screens */

                                w-10 h-10 sm:w-16 sm:h-16 
                                animate-float-medium drop-shadow-md z-10"
                            alt="Lock"
                        />


                        {/* listImg - Top Right */}
                        <img
                            src={listImg}
                            className="
                                absolute top-4 right-4 
                                sm:top-2 sm:right-2 
                                md:top-4 md:right-4 
                                lg:top-8 lg:right-8 

                                w-8 h-8 
                                sm:w-20 sm:h-20 

                                md:w-36 md:h-36      /* Bigger for desktop */
                                lg:w-48 lg:h-48      /* Very big for large screens */

                                animate-float-fast drop-shadow-md z-10
                            "
                            alt="List"
                        />

                        {/* orangeImg - Bottom Right */}
                        <img
                            src={orangeImg}
                            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-2 md:bottom-12 md:right-4 lg:bottom-16 lg:right-8 w-8 h-8 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 animate-float-medium drop-shadow-md z-10"
                            alt="Orange"
                        />

                    </div>

                </div>

                <About />
                <Service />
                <Portfolio />
                <Subscribe />
                <FunFacts />

            </section>
        </>
    );
};

export default Home;
