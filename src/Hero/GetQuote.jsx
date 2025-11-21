import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GetQuote = () => {
    const navigate = useNavigate();

    return (
        <section
            className="relative w-full py-8 sm:py-10 md:py-12 bg-[#101234] overflow-hidden"
        >
            {/* ---------- BACKGROUND IMAGE ---------- */}


            {/* ---------- CONTENT WRAPPER ---------- */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 sm:gap-6">

                {/* ---------- LEFT TEXT ---------- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white text-center md:text-left"
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug">
                        Looking for the Best IT Business Solutions?
                    </h2>

                    <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">
                        As an app web crawler expert, We will help to organize.
                    </p>
                </motion.div>

                {/* ---------- RIGHT BUTTON ---------- */}
                <motion.button
                    onClick={() => navigate("/contact")}
                    className="
                        mt-5 sm:mt-6 md:mt-0
                        bg-[#ff5b3b] hover:bg-[#fb2f0b] 
                        text-white font-semibold
                        px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg
                        rounded-md
                        shadow-xl cursor-pointer
                        transition-all duration-300 hover:scale-105 active:scale-95
                    "
                >
                    Get a quote
                </motion.button>

            </div>
        </section>
    );
};

export default GetQuote;
