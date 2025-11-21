import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import serviceImg from "../assets/images/h6-image-1.png";
import { Link } from "react-router-dom";

const services = [
    {
        category: "Product Development",
        title: "Web, Mobile & Custom Software Development",
        desc: "We build fast, secure, and scalable digital products tailored to your business goals."
    },
    {
        category: "IoT & Smart Solutions",
        title: "IoT, GPS Tracking & GIS Asset Mapping",
        desc: "Smart tracking and automation solutions to monitor assets and improve efficiency."
    },
    {
        category: "Business Solutions",
        title: "Customized Industry & Enterprise Applications",
        desc: "Powerful industry-specific tools designed to streamline workflows and boost productivity."
    },
    {
        category: "Digital Transformation",
        title: "Technology Strategy & System Modernization",
        desc: "Helping businesses modernize, optimize, and adopt future-ready digital technologies."
    },
    {
        category: "UI/UX Experience",
        title: "User Interface Design & Experience Mapping",
        desc: "Clean, modern, and user-friendly designs built for better engagement and usability."
    }


];

// ANIMATION VARIANTS
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerParent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

const Service = () => {
    return (
        <motion.section
            className="px-4 sm:px-6 md:px-12 lg:px-45 py-12 sm:py-16 md:py-20 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
        >

            {/* TOP HEADER SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-0 items-center">

                {/* LEFT TEXT */}
                <motion.div variants={fadeUp} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mt-30 mb-3 sm:mb-4">
                        <span className="w-2 h-2 bg-[#ff6b6b] rounded-full"></span>
                        <p className="text-xs sm:text-sm md:text-base font-semibold text-[#ff6b6b]">Awesome Services</p>
                        <span className="w-2 h-2 bg-[#ff6b6b] rounded-full"></span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                        Our Awesome{" "}
                        <span className="bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4] text-transparent bg-clip-text">
                            services
                        </span>{" "}
                        <br className="hidden sm:block" />
                        to give you success.
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                        We switch all the channels on to get into people's hands,
                        homes, and minds to radically shift behavior.
                    </p>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="flex justify-center mt-4 lg:mt-0"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img
                        src={serviceImg}
                        alt="Service Illustration"
                        className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[420px] xl:w-[500px] object-contain drop-shadow-xl"
                    />
                </motion.div>
            </div>

            {/* SERVICE GRID WITH STAGGER */}
            <motion.div
                className="mt-8 sm:mt-10 md:mt-12 lg:-mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 sm:gap-8 md:gap-10 lg:gap-0"
                variants={staggerParent}
            >

                {/* First Row (2 Cards) */}
                <motion.div
                    variants={fadeUp}
                    className="lg:col-start-1 lg:row-start-1 lg:-mt-10 flex justify-center w-full"
                >
                    <ServiceCard item={services[0]} />
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="lg:col-start-2 lg:row-start-1 lg:-mt-10 flex justify-center w-full"
                >
                    <ServiceCard item={services[1]} />
                </motion.div>

                {/* Second Row (3 Cards) */}
                <motion.div
                    variants={fadeUp}
                    className="lg:col-start-1 lg:row-start-2 flex justify-center w-full"
                >
                    <ServiceCard item={services[2]} />
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="lg:col-start-2 lg:row-start-2 flex justify-center w-full"
                >
                    <ServiceCard item={services[3]} />
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="lg:col-start-3 lg:row-start-2 flex justify-center w-full"
                >
                    <ServiceCard item={services[4]} />
                </motion.div>
            </motion.div>

        </motion.section>
    );
};

// ======================= CARD ==========================
const ServiceCard = ({ item }) => (
    <motion.div
        className="
        bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl 
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        border border-[#f1f1f1]
        transition-all duration-500 ease-out
        w-full max-w-[350px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] 
        min-h-[280px] sm:min-h-[320px] md:min-h-[350px]
        aspect-square flex flex-col

        hover:-translate-y-3
        hover:shadow-[0_18px_55px_rgba(0,0,0,0.12)]
        hover:border-transparent
        hover:scale-[1.02]
        cursor-pointer
        group
        "
        whileHover={{ scale: 1.03 }}
        variants={fadeUp}
    >
        <div className="mt-2 sm:mt-4 md:mt-7 flex-1">
            <p className="text-xs sm:text-sm font-medium text-gray-600 mb-3 sm:mb-4 md:mb-6">{item.category}</p>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-5">{item.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-7">{item.desc}</p>
        </div>

        <hr className="text-gray-200 w-full" />

        <Link to="/services" className="mt-3 sm:mt-4 md:mt-5 flex items-center gap-2 cursor-pointer group">
            <span className="text-sm sm:text-base font-medium text-black hover:underline">Read More</span>

            <span
                className="
                    text-[#65C7F7]
                    transform transition-all duration-300 
                    group-hover:translate-x-2
                    "
            >
                <FaLongArrowAltRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </span>
        </Link>
    </motion.div>
);

export default Service;
