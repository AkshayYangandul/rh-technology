import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Consultation & Requirement Analysis",
        desc: "We begin with an in-depth consultation to understand your business goals, challenges, and specific requirements."
    },
    {
        id: 2,
        title: "Design & Planning",
        desc: "Our team crafts a detailed plan and design to ensure your project is visually appealing, structured, and effective."
    },
    {
        id: 3,
        title: "Development & Implementation",
        desc: "Using the latest technologies, we build scalable, high-performance solutions tailored to your needs."
    },
    {
        id: 4,
        title: "Testing & Support",
        desc: "We rigorously test every solution for performance and provide continuous post-launch support."
    }
];

const Work = () => {
    const ref = useRef(null);

    // Track scroll progress of entire section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"] // reveal when 20–40% enters view
    });

    // Parallax + Fade + Scale based on scroll position
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

    return (
        <section ref={ref} className="px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 bg-white">

            {/* HEADING */}
            <motion.h2
                style={{ opacity, y }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-14 
                           bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4]
                           text-transparent bg-clip-text"
            >
                How We Make Work Successful
            </motion.h2>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

                {steps.map((step, index) => {

                    // stagger effect based on index
                    const cardY = useTransform(scrollYProgress, [0, 1], [80 + index * 20, 0]);
                    const cardOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
                    const cardScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

                    return (
                        <motion.div
                            key={step.id}
                            style={{
                                opacity: cardOpacity,
                                y: cardY,
                                scale: cardScale
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                boxShadow: "0 15px 40px rgba(0,0,0,0.12)"
                            }}
                            className="bg-[#f8fbff] rounded-2xl p-6 sm:p-7 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] 
                                       transition-all duration-300"
                        >

                            {/* NUMBER CIRCLE */}
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.25 }}
                                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full 
                                           border-2 border-[#65c7f7] text-[#65c7f7] text-base sm:text-lg font-semibold mb-4 sm:mb-5"
                            >
                                {step.id}
                            </motion.div>

                            {/* TITLE */}
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.desc}</p>

                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
};

export default Work;
