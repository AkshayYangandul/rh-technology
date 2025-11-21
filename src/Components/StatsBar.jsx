import React from "react";
import { motion } from "framer-motion";

import { FaUsers, FaTrophy, FaUserCheck, FaFileCode } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

import bgCounter from "../assets/images/bg-counter1.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const StatsBar = () => {
    return (
        <section className="w-full mt-60 py-10">
            <motion.div
                className="relative w-full max-w-7xl mx-auto shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* BACKGROUND IMAGE - Height adjusted to accommodate all items */}
                <img
                    src={bgCounter}
                    alt="stats background"
                    className="w-full h-[550px] md:h-[200px] object-cover" 
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* DIAGONAL BLUE GRADIENT */}
                <div
                    className="
                        absolute inset-0 
                        bg-gradient-to-r from-[#0064ff] to-[#00c6ff]
                        opacity-40 
                        skew-x-[-15deg]
                    "
                ></div>

                {/* CONTENT */}
                <div
                    className="
                        absolute inset-0 z-10 
                        flex flex-col justify-center items-center py-8 
                        gap-y-6 
                        md:flex-row md:justify-between md:py-0 md:px-8 lg:px-20
                        text-white
                    "
                >
                    {/* ITEM 1 */}
                    <motion.div
                        className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <FaUsers className="text-4xl text-[#00aaff] mb-2" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold">500+</h2>
                        <p className="text-base md:text-lg mt-1">Happy Clients</p>
                    </motion.div>

                    {/* ITEM 2 */}
                    <motion.div
                        className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                        >
                            <GoProjectSymlink className="text-4xl text-[#00aaff] mb-2" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold">150+</h2>
                        <p className="text-base md:text-lg mt-1">Projects Completed</p>
                    </motion.div>

                    {/* ITEM 3 */}
                    <motion.div
                        className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                        >
                            <FaFileCode className="text-4xl text-[#00aaff] mb-2" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold">5000000+</h2>
                        <p className="text-base md:text-lg mt-1">Lines of Code</p>
                    </motion.div>

                    {/* ITEM 4 */}
                    <motion.div
                        className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                        >
                            <FaUserCheck className="text-4xl text-[#00aaff] mb-2" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold">7+</h2>
                        <p className="text-base md:text-lg mt-1">Industry Experience (Years)</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default StatsBar;