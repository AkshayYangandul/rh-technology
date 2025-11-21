import React from "react";
import girlImg from "../assets/images/h6-image-3.png";
import ball1 from "../assets/images/h6-shape3.png";
import ball2 from "../assets/images/h6-shape4.png";
import dots from "../assets/images/h6-shape5.png";
import cross from "../assets/images/h6-shape2.png";
import { useNavigate } from "react-router-dom";

const FunFacts = () => {
    const navigate = useNavigate();

    return (
        <section className="relative px-4 sm:px-6 md:px-12 lg:px-45 py-12 sm:py-16 md:py-20 bg-[#f8fbff] overflow-hidden">

            {/* ---------------- DECOR SHAPES (Floating) ---------------- */}
            <img
                src={ball1}
                alt=""
                className="hidden md:block absolute bottom-24 left-[45%] w-16 opacity-80 animate-float-medium"
            />

            <img
                src={ball2}
                alt=""
                className="hidden md:block absolute top-20 right-20 w-36 opacity-90 animate-float-slow"
            />

            <img
                src={cross}
                alt=""
                className="hidden md:block absolute bottom-[180px] right-[230px] w-6 opacity-70 animate-float-fast"
            />

            <img
                src={dots}
                alt=""
                className="hidden md:block absolute bottom-[130px] right-[120px] w-28 opacity-40 animate-float-medium"
            />

            {/* ---------------- MAIN CONTENT ---------------- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-14 md:gap-16">

                {/* ---------- LEFT CONTENT (Fade-in) ---------- */}
                <div className="w-full md:w-[45%] animate-fade-slide text-center md:text-left">

                    <p className="text-xs sm:text-sm font-semibold flex items-center justify-center md:justify-start gap-2 text-[#ff5b3b] animate-fadeUp">
                        <span className="w-2 h-2 rounded-full bg-[#ff5b3b]"></span>
                        Fun Facts
                        <span className="w-2 h-2 rounded-full bg-[#ff5b3b]"></span>
                    </p>

                    <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight text-[#222] animate-fadeUp delay-150">
                        Better understand for the <br className="hidden sm:block" />

                        <span className="bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4] text-transparent bg-clip-text">
                            world of IT.
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base animate-fadeUp delay-300">
                        We switch all the channels on to get into people's hands, homes,
                        and minds to radically shift behavior.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 sm:gap-10 mt-8 sm:mt-10 animate-fadeUp delay-500">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0052d4]">100%</h3>
                            <p className="text-xs sm:text-sm text-gray-700 mt-1">Client’s Satisfaction</p>
                        </div>

                        <div className="hidden sm:block h-12 w-px bg-gray-300"></div>

                        <div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0052d4]">20+</h3>
                            <p className="text-xs sm:text-sm text-gray-700 mt-1">Team Members</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => navigate("/contact")}
                        className="
                            mt-8 sm:mt-10 px-6 sm:px-8 py-3 rounded-md font-semibold text-white text-sm sm:text-base
                            bg-[#ff5b3b] hover:bg-[#ff3e1b]
                            shadow-md transition-all duration-300 cursor-pointer
                            hover:scale-105 active:scale-95 animate-fadeUp delay-700
                        "
                    >
                        Contact Us
                    </button>
                </div>

                {/* ---------- RIGHT IMAGE (Floating + Fade) ---------- */}
                <div className="relative w-full md:w-[55%] flex justify-center md:justify-end animate-fade-slide-right mt-10 md:mt-0">
                    <img
                        src={girlImg}
                        alt="Girl working"
                        className="h-[260px] sm:h-[320px] md:h-[420px] object-contain drop-shadow-xl relative z-10 animate-float-slow"
                    />
                </div>

            </div>
        </section>
    );
};

export default FunFacts;
