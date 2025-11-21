import React, { useState } from "react";
import { FaPaperPlane, FaPhoneAlt, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/images/logo1.webp";
import footerBg from "../assets/images/bg-footer1.jpg"; // your footer background image
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubscribe = () => {
        // Empty email validation
        if (email.trim() === "") {
            setError("Please enter your email");
            return;
        }

        // Valid email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        // Clear error message
        setError("");

        // Toast success message
        toast.success("Subscribed Successfully! 🎉", {
            className: `
        text-xs px-3 py-2 max-w-[180px] mx-auto rounded-md 
        sm:text-base sm:px-6 sm:py-4 sm:max-w-[400px]
        font-semibold shadow-lg
    `,
            bodyClassName: "flex items-center"
        });

        // Clear the input field
        setEmail("");
    };


    return (
        <footer
            className="text-white pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 relative bg-cover bg-center"
            style={{
                backgroundImage: `url(${footerBg})`,
            }}
        >

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12">

                {/* ================= COLUMN 1 ================= */}
                <div className="space-y-5 text-left">
                    <img src={logo} className="h-10 sm:h-12" alt="logo" />

                    <p className="text-gray-400 font-semibold text-xs sm:text-sm leading-relaxed max-w-sm pt-4 sm:pt-6">
                        We work with a passion of taking challenges and creating new ones
                        in advertising sector.
                    </p>

                    <button
                        onClick={() => navigate("/about")}
                        className="mt-4 px-5 sm:px-6 py-2 text-xs sm:text-sm font-semibold bg-[#ff5b3b] hover:bg-[#fb2f0b] transition cursor-pointer">
                        ABOUT US
                    </button>
                </div>

                {/* ================= COLUMN 2 (NEWSLETTER) ================= */}
                <div className="text-left">
                    <h3 className="text-lg sm:text-xl md:text-[24px] font-bold">
                        Newsletter
                        <span className="block w-10 h-[1.5px] bg-[#2f80ff] mt-2"></span>
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm font-semibold mt-3 sm:mt-4 leading-relaxed pt-4 sm:pt-6 max-w-xs">
                        Subscribe our newsletter to get our latest update & news.
                    </p>

                    {/* Input + Send Button */}
                    <div className="relative w-full max-w-xs sm:max-w-none">

                        {/* ERROR MESSAGE */}
                        {error && (
                            <p className="text-red-400 text-xs font-semibold mb-1 ml-1">
                                {error}
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row bg-[#2b2b41] mt-2 sm:mt-3 overflow-hidden 
                        w-full sm:w-fit border border-[#484860] rounded-lg">

                            <input
                                type="text"
                                placeholder="Your mail address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                className="px-4 py-2.5 sm:py-3 bg-transparent text-xs sm:text-sm outline-none 
                           text-gray-200 placeholder-[#797985] w-full sm:w-[180px]"
                            />

                            <button
                                onClick={handleSubscribe}
                                className="bg-[#ff5b3b] hover:bg-[#ff5b3b]/90 px-5 py-2.5 sm:py-3 flex 
                           items-center justify-center transition cursor-pointer"
                            >
                                <FaPaperPlane className="text-white" />
                            </button>
                        </div>

                        {/* SOCIAL ICONS BELOW INPUT */}
                        <div className="flex items-center gap-4 mt-4 sm:mt-5">

                            <a
                                href="https://www.facebook.com/profile.php?id=61572265378074"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-sm
        bg-[#2b2b41] border border-[#484860] hover:bg-[#ff5b3b] transition"
                            >
                                <FaFacebookF className="text-white text-md" />
                            </a>

                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-sm
         bg-[#2b2b41] border border-[#484860] hover:bg-[#ff5b3b] transition"
                            >
                                <FaTwitter className="text-white text-md" />
                            </a>

                            <a
                                href="https://www.instagram.com/rhtechnologysolapur/#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-sm
             bg-[#2b2b41] border border-[#484860] hover:bg-[#ff5b3b] transition"
                            >
                                <RiInstagramFill className="text-white text-md" />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/r-h-technology/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-sm
         bg-[#2b2b41] border border-[#484860] hover:bg-[#ff5b3b] transition"
                            >
                                <FaLinkedinIn className="text-white text-md" />
                            </a>

                            <a
                                href="https://api.whatsapp.com/send/?phone=%2B918983839143&text&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-sm
         bg-[#2b2b41] border border-[#484860] hover:bg-[#ff5b3b] transition"
                            >
                                <FaWhatsapp className="text-white text-lg" />
                            </a>

                        </div>



                    </div>
                </div>


                {/* ================= COLUMN 3 (OFFICIAL INFO) ================= */}
                <div className="text-left">
                    <h3 className="text-lg sm:text-xl md:text-[24px] font-bold">
                        Official info:
                        <span className="block w-10 h-[1.5px] bg-[#2f80ff] mt-2"></span>
                    </h3>

                    <div className="mt-5 sm:mt-6 space-y-4 text-gray-300">

                        <div className="flex gap-3">
                            <FaLocationDot className="text-[#ff5b3b] mt-1 " />
                            <p className="text-xs sm:text-sm font-semibold text-gray-400 ">
                                Solapur, Maharashtra
                            </p>
                        </div>

                        <div className="flex gap-3 mt-3 sm:mt-4">
                            <FaPhoneAlt className="text-[#ff5b3b] mt-1" />
                            <p className="text-xs sm:text-sm font-semibold text-gray-400">+91-8983839143</p>
                        </div>

                        <div className="mt-4 sm:mt-5">
                            <p className="text-white font-semibold">Open Hours:</p>
                            <p className="text-xs sm:text-sm font-semibold text-gray-400">Mon – Sat : 10 am – 7 pm</p>
                            <p className="text-xs sm:text-sm font-semibold text-gray-400">Sunday: CLOSED</p>
                        </div>

                    </div>
                </div>

                {/* ================= COLUMN 4 (USEFUL LINKS) ================= */}
                <div className="text-left">
                    <h3 className="text-lg sm:text-xl md:text-[24px] font-bold">
                        Useful Links
                        <span className="block w-10 h-[1.5px] bg-[#2f80ff] mt-2"></span>
                    </h3>

                    <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm font-semibold">
                        <li onClick={() => navigate("/privacy-policy")} className="hover:text-white hover:underline transition cursor-pointer">Privacy & Policy</li>
                        <li onClick={() => navigate("/terms-conditions")} className="hover:text-white hover:underline transition cursor-pointer">Terms & Conditions</li>
                        <li onClick={() => navigate("/disclaimer")} className="hover:text-white hover:underline transition cursor-pointer">Disclaimer</li>
                        <li onClick={() => navigate("/cancellation-return")} className="hover:text-white hover:underline transition cursor-pointer">Cancellation & Return Policy</li>
                    </ul>
                </div>

            </div>

            {/* COPYRIGHT BAR */}
            <div className="mt-14 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
                © 2025 - R H Technology | Created By R H Technology
            </div>

        </footer>
    );
};

export default Footer;
