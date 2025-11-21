import React, { useState } from "react";
import rocketImg from "../assets/images/h6-image-2.png";
import { toast } from "react-toastify";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubscribe = () => {
        // Empty validation
        if (email.trim() === "") {
            setError("Please enter your email");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        setError("");

        // Toast success
        toast.success("Subscribed Successfully! 🎉", {
            className: `
                text-xs px-3 py-2 max-w-[180px] mx-auto rounded-md 
                sm:text-base sm:px-6 sm:py-4 sm:max-w-[400px]
                font-semibold shadow-lg
            `,
            bodyClassName: "flex items-center"
        });

        setEmail("");
    };

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-45 py-12 sm:py-16 md:py-20 bg-[#f7faff] relative overflow-hidden">

            {/* ----------------- TOP HERO SECTION ----------------- */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                {/* LEFT TEXT CARD */}
                <div className="bg-white shadow-xl rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-14 w-full md:w-[55%]
                                animate-fade-slide text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2a2a2a] leading-snug md:leading-tight animate-fadeUp">
                        We work together <br className="hidden sm:block" /> for success.
                    </h2>

                    <p className="text-gray-500 mt-4 sm:mt-6 leading-relaxed max-w-md mx-auto md:mx-0 animate-fadeUp delay-150 text-sm sm:text-base">
                        One of the key benefits of partnering with Remote IT Solutions is
                        our security expertise.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-full md:w-[55%] flex justify-center md:justify-end pr-0 md:pr-4">
                    <img
                        src={rocketImg}
                        alt="Rocket"
                        className="h-[240px] sm:h-[320px] md:h-[380px] lg:h-[450px] object-contain -mt-8 sm:-mt-10 md:-mt-12 drop-shadow-xl 
                                   animate-rocket-float"
                    />
                </div>
            </div>

            {/* ----------------- SUBSCRIBE SECTION ----------------- */}
            <div className="mt-16 sm:mt-20 md:mt-28 text-center px-2">

                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fadeUp">
                    Get{" "}
                    <span className="bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4]
                                   bg-clip-text text-transparent">
                        connected
                    </span>{" "}
                    with us!
                </h2>

                <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg animate-fadeUp delay-150">
                    Give you update all times.
                </p>

                {/* INPUT + BUTTON */}
                <div className="flex justify-center mt-8 sm:mt-10 animate-fadeUp delay-300">
                    <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 w-full max-w-[420px] sm:max-w-full sm:w-auto">

                        {/* ERROR MESSAGE */}
                        {error && (
                            <p className="text-red-500 text-xs font-semibold mt-1 px-2 absolute -translate-y-6">
                                {error}
                            </p>
                        )}

                        <input
                            type="text"
                            placeholder="Your mail address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError(""); // Clear error while typing
                            }}
                            className="px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-[300px] md:w-[360px] outline-none text-gray-700 focus:bg-[#f1f5ff] transition-all text-sm sm:text-base"
                        />

                        <button
                            onClick={handleSubscribe}
                            className="
                        px-6 sm:px-8 py-3 sm:py-4 
                        bg-gradient-to-r from-[#ff8a4c] to-[#ff3d00]
                        text-white font-semibold text-sm sm:text-md 
                        hover:scale-105 active:scale-95 
                        transition-all cursor-pointer
                    "
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Subscribe;
