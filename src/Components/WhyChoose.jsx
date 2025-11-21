import React from "react";
import { motion } from "framer-motion";
import chooseImg from "../assets/images/h6-image-2.png";
import { useNavigate } from "react-router-dom";

// Gradient utilities
const gradientText =
    "bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4] text-transparent bg-clip-text";
const gradientBg =
    "bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4]";

// Bullet data
const bulletDataLeft = [
    "Dedicated Support",
    "Innovative Technologies",
    "Affordable Pricing"
];

const bulletDataRight = [
    "End-to-End Solutions",
    "Commitment to Quality",
    "Customer Satisfaction"
];

// Smooth stagger animation for lists
const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};



const WhyChoose = () => {
    const navigate = useNavigate()
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#f8fbfd] w-full py-20 px-6 md:px-16 rounded-3xl mt-20 overflow-hidden"
        >

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Heading */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-[#0f1c2e]"
                        >
                            Why Choose Us
                        </motion.h2>

                        {/* Line animation */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`h-[4px] mt-2 rounded-full ${gradientBg}`}
                        ></motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-gray-600 leading-relaxed max-w-xl"
                    >
                        Offering confined entrance no. Nay rapturous him see something
                        residence. Highly talked do so vulgar. Her use behaved spirits and
                        natural attempt say feeling. Exquisite mr incommode immediate he
                        something ourselves it of.
                    </motion.p>

                    {/* Bullet points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">

                        {/* LEFT LIST */}
                        <div className="space-y-6">
                            {bulletDataLeft.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={listVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={index}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <span className={`${gradientText} text-2xl font-bold`}>&raquo;</span>
                                    <p className="text-lg font-medium text-[#0f1c2e]">{item}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* RIGHT LIST */}
                        <div className="space-y-6">
                            {bulletDataRight.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={listVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={index + 3}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <span className={`${gradientText} text-2xl font-bold`}>&raquo;</span>
                                    <p className="text-lg font-medium text-[#0f1c2e]">{item}</p>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                    {/* BUTTON WITH SHINE EFFECT */}
                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => navigate("/contact")}
                        className={"bg-[#ff5b3b] hover:bg-[#fb2f0b] relative cursor-pointer overflow-hidden text-white px-10 py-4 mt-6 rounded-sm shadow-lg text-lg font-medium flex items-center gap-3 w-fit"}
                    >
                        <span className="relative z-10">Get A Quote</span>



                        {/* Shine animation */}
                        <motion.span
                            className="absolute inset-0 bg-white/20 skew-x-[-20deg]"
                            initial={{ x: "-120%" }}
                            whileHover={{ x: "120%" }}
                            transition={{ duration: 0.8 }}
                        />
                    </motion.button>

                </motion.div>

                {/* RIGHT IMAGE WITH FLOAT + SLIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative flex justify-center items-center"
                >
                    <motion.img
                        src={chooseImg}
                        alt="Why Choose Us"
                        className="w-[95%] max-w-[480px] object-contain drop-shadow-xl"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                </motion.div>

            </div>
        </motion.section>
    );
};

export default WhyChoose;
