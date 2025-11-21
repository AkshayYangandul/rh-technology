import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";
import teamImg from "../assets/images/team.jpg";

// TEAM DATA
const teamMembers = [
    { name: "Sagar Bijja", role: "Founder & CEO", desc: "Sagar has been leading the company with a strong vision and technical excellence since its inception." },
    { name: "Yogesh Madas", role: "UI/UX Designer", desc: "Yogesh creates visually stunning and user-friendly designs that elevate digital experiences." },
    { name: "Nikhil D", role: "Programmer, IT", desc: "Nikhil specializes in building scalable software solutions and optimizing backend systems." },
    { name: "Nikhil G", role: "Full Stack Developer", desc: "Nikhil works across frontend and backend to deliver seamless, full-stack applications." },
    { name: "Akash Dyawarkonda", role: "DB Administrator", desc: "Akash manages complex databases, ensuring security, performance, and reliability." },
    { name: "Shravani Sanga", role: ".NET Developer", desc: "Shravani builds enterprise-grade .NET applications with clean architecture and strong logic." },
    { name: "Akshay Y", role: "React & Next.JS Dev", desc: "Akshay creates fast, modern, and interactive web apps using React, Next.js, and Tailwind." },
];

// ANIMATION VARIANTS
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Team = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 bg-white">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-10 md:mb-12 px-2"
            >
                <p className="text-xs sm:text-sm tracking-wide text-blue-600 uppercase">Team Member</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
                    Passionate Personalities,{" "}
                    <span className="bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4] text-transparent bg-clip-text">
                        Versatile
                    </span>{" "}
                    Brains
                </h2>
            </motion.div>

            {/* TEAM GRID */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 sm:pt-10 gap-x-6 sm:gap-x-10 gap-y-20 sm:gap-y-24"
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariant}
                        className="flex flex-col items-center px-2 sm:px-0"
                    >

                        {/* CARD WITH 3D TILT */}
                        <motion.div

                            className="
                                relative w-full max-w-[300px] sm:max-w-full h-[320px] sm:h-[350px] group rounded-xl overflow-visible
                                shadow-lg hover:shadow-2xl transition-shadow duration-300
                                [transform-style:preserve-3d]
                                hover:[transform:rotateX(6deg)_rotateY(6deg)]
                            "
                        >

                            {/* IMAGE */}
                            <div className="relative h-[260px] sm:h-[300px] overflow-hidden">

                                {/* IMAGE */}
                                <img
                                    src={teamImg}
                                    alt={member.name}
                                    className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] pt-6 sm:pt-8 object-cover mx-auto block"
                                />

                                {/* GRADIENT HOVER */}
                                <div
                                    className="
                                        absolute inset-0 
                                        bg-gradient-to-b from-[#9cecfb] via-[#65c7f7] to-[#0052d4]
                                        opacity-0 
                                        group-hover:opacity-95 
                                        transition-opacity duration-300
                                        p-6 
                                        flex flex-col justify-end
                                    "
                                >
                                    {/* DESCRIPTION TEXT */}
                                    <p
                                        className="
                                        text-white text-sm mb-4
                                        transform translate-y-8 opacity-0
                                        group-hover:translate-y-0 group-hover:opacity-100
                                        transition-all duration-150 ease-out
                                    "
                                    >
                                        {member.desc}
                                    </p>
                                </div>

                            </div>

                            {/* BLACK STRIP */}
                            <div className="
                                absolute bottom-0 left-0 w-full py-4 sm:py-5 px-3 sm:px-4
                                bg-black text-white clip-diagonal-b
                                transition-all duration-500 group-hover:bg-white group-hover:text-black
                                group-hover:translate-y-[-3px]
                            ">
                                <h3 className="font-semibold text-base sm:text-lg transition-all duration-300 group-hover:tracking-wide">
                                    {member.name}
                                </h3>
                                <p className="text-xs sm:text-sm opacity-80 group-hover:opacity-100">
                                    {member.role}
                                </p>
                            </div>

                            {/* SOCIAL ICONS */}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-26px] z-20 flex gap-3">

                                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.2, rotate: 1 }}
                                        transition={{ duration: 0 }}
                                        whileTap={{ scale: 0.9 }}

                                        className="
                                            bg-white border text-gray-600 p-2 w-10 h-10 rounded-md
                                            flex items-center justify-center cursor-pointer
                                            shadow-md hover:shadow-xl
                                            hover:bg-[#2F80ED]
                                            hover:text-gray-200 transition-all duration-300
                                        "
                                    >
                                        <Icon size={17} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Team;
