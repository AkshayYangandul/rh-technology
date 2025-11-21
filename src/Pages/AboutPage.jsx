import React, { useState } from "react";
import womanImg from "../assets/images/gallery1-460x460.jpg";
import { motion, AnimatePresence } from "framer-motion";
import StatsBar from "../Components/StatsBar";
import WhyChoose from "../Components/WhyChoose";
import Team from "../Components/Team";
import Work from "../Components/Work";
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/title-bg.jpg";
import { Helmet } from "react-helmet";

const gradientText =
    "bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4] bg-clip-text text-transparent";
const gradientBg =
    "bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4]";

const About = () => {
    const tabs = ["Our Mission", "Our Vision", "Our Value"];
    const [activeTab, setActiveTab] = useState("Our Value");
    const navigate = useNavigate()

    const tabDescriptions = {
        "Our Mission":
            "To bring transformative IT solutions under one roof, enabling organizations to unlock their full potential and achieve sustainable growth through technology-driven innovation.",
        "Our Vision":
            "To be the world’s most trusted and innovative technology partner, empowering businesses globally with next-generation solutions that shape the future of technology.",
        "Our Value":
            "Every ITS client has a dedicated Virtual CIO who provides personalized guidance and recommends strategic solutions tailored to your business needs."
    };

    return (
        <>
            <Helmet>
                <title>About Us | R H Technology</title>
            </Helmet>
            <div
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >

                <div className="absolute inset-0 bg-gray-900/85"></div>

                <div className="relative text-center text-white z-10 px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">About Us</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">

                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200  transition">
                            About
                        </p>

                    </div>

                </div>
            </div>
            <section className="py-28 px-6 md:px-45 bg-white relative overflow-visible">

                {/* ================= LEFT + RIGHT GRID ================= */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                    {/* ================= LEFT SIDE ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Title Pill */}
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-[#2f80ed] font-semibold flex items-center gap-2 mb-3"
                        >
                            About us
                            <span
                                className={`${gradientBg} w-7 h-[3px] block rounded-full`}
                            ></span>
                        </motion.p>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
                        >
                            Choose <span className={gradientText}>The Best</span> IT
                            <br className="hidden sm:block" /> Service Company
                        </motion.h1>

                        {/* Sub Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-sm sm:text-base text-gray-600 max-w-lg mb-6 sm:mb-8"
                        >
                            ITSoft has been optimized to give your visitors the best
                            experience in terms of design, performance & flow.
                        </motion.p>

                        {/* TABS */}
                        <div className="border-b border-gray-200 pb-2 mb-4 sm:mb-6 flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-x-auto">
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        opacity: activeTab === tab ? 1 : 0.5,
                                        y: activeTab === tab ? 0 : 3
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className={`text-xs sm:text-sm md:text-base font-semibold pb-2 cursor-pointer whitespace-nowrap ${activeTab === tab
                                        ? gradientText + " border-b-[3px] border-[#65c7f7]"
                                        : "text-gray-700 hover:text-[#0052d4]"
                                        }`}
                                >
                                    {tab}
                                </motion.button>
                            ))}
                        </div>

                        {/* DESCRIPTION WITH ANIMATED TRANSITION */}
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeTab}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mb-6 sm:mb-8 md:mb-10"
                            >
                                {tabDescriptions[activeTab]}
                            </motion.p>
                        </AnimatePresence>

                        {/* BUTTON */}

                    </motion.div>

                    {/* ================= RIGHT SIDE ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative flex justify-center items-center mt-8 sm:mt-12 md:mt-0"
                    >
                        {/* Floating Gradient Ring */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10px] sm:top-[15px] md:top-[25px] z-0"
                        >
                            <div
                                className="
                                w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]
                                rounded-full p-[30px] sm:p-[50px] md:p-[60px] lg:p-[70px]
                                bg-[conic-gradient(#9cecfb,#65c7f7,#0052d4)]
                                flex items-center justify-center
                            "
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                        </motion.div>

                        {/* Main Image with slight parallax */}
                        <motion.img
                            src={womanImg}
                            alt="About"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            animate={{ y: [0, 10, 0] }}
                            className="
                            relative z-10
                            w-[220px] h-[170px] sm:w-[300px] sm:h-[230px] md:w-[380px] md:h-[300px] lg:w-[450px] lg:h-[350px]
                            object-cover shadow-xl top-[60px] sm:top-[90px] md:top-[120px] lg:top-[150px]
                            "
                        />

                        {/* 12 YEARS BADGE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="
                            absolute -top-4 sm:-top-6 md:-top-8 lg:-top-10 left-[10px] sm:left-[-20px] md:left-[-25px] lg:left-[-30px]
                            w-32 sm:w-40 md:w-44 lg:w-48 p-3 sm:p-4 md:p-5 lg:p-6 rounded-md text-white z-20
                            bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4]
                            shadow-xl
                            "
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none">7+</h2>
                            <p className="text-xs sm:text-sm md:text-base mt-1 leading-tight">
                                years of <br /> experience
                            </p>
                        </motion.div>

                        {/* AWARD BOX */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="
                                absolute
                                bottom-[-120px] sm:bottom-[-160px] md:bottom-[-200px] lg:bottom-[-240px]
                                right-0 sm:right-4 md:right-8 lg:right-[120px]
                                bg-white shadow-xl rounded-2xl
                                w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]
                                p-4 sm:p-5 md:p-6 z-20
                                "
                        >
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="text-2xl sm:text-3xl md:text-4xl">🏆</div>
                                <div>
                                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1">
                                        Best Awarded Company
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        We adapt our delivery to the way you work, whether as
                                        an external provider.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <StatsBar />

                <WhyChoose />

                <Team />

                <Work />
            </section>
        </>

        /* ===================== STATS SECTION ===================== */


    );
};

export default About;
