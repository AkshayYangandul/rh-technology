import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/title-bg.jpg";
import { Helmet } from "react-helmet";


const Disclaimer = () => {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>Disclaimer | R H Technology</title>
            </Helmet>
            <div
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >

                <div className="absolute inset-0 bg-gray-900/85"></div>

                <div className="relative text-center text-white z-10 px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Disclaimer</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">

                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200  transition">
                            Disclaimer
                        </p>

                    </div>

                </div>
            </div>
            <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-12 sm:py-16 md:py-20 bg-[#f4f8ff]">

                {/* PAGE TITLE */}


                <p className="text-center text-gray-500 font-bold mt-2 text-xs sm:text-sm">
                    Effective Date: 16/02/2024
                </p>

                {/* MAIN CONTENT CARD */}
                <div className="max-w-4xl mx-auto bg-white mt-8 sm:mt-10 p-6 sm:p-8 md:p-10 lg:p-14 rounded-xl shadow-xl">

                    {/* Intro Paragraph */}
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        The information provided on this website by <span className="font-semibold text-[#0052d4]">R H Technology</span> is for general informational purposes only.
                        While we strive to ensure the information on our website is accurate and up to date, we make no
                        representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability,
                        suitability, or availability of the information, products, services, or related graphics contained on this
                        website.
                    </p>

                    {/* 1. Professional Advice */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">1. Professional Advice</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        The content on this website is intended for general informational use only. You should not rely upon any
                        material or information on this site as a substitute for professional advice. For specific questions or
                        business-related decisions, consult with qualified professionals before taking any action.
                    </p>

                    {/* 2. Limitation of Liability */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">2. Limitation of Liability</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        <span className="font-semibold text-[#0052d4]">R H Technology</span> will not be liable for any losses or damages, including indirect or consequential loss,
                        arising from your use of this site or the information provided. Use this site at your own risk. We expressly
                        disclaim liability.
                    </p>

                    {/* 3. Third-Party Links */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">3. Third-Party Links</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        This website may contain links to third-party websites. These links are provided for your convenience and do
                        not signify our endorsement. We are not responsible for the content, privacy practices, or policies of such
                        sites. We advise all users to exercise caution when visiting external websites.
                    </p>

                    {/* 4. Changes to Content */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">4. Changes to Content</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        The content on this site may be subject to change without prior notice. <span className="font-semibold text-[#0052d4]">R H Technology</span> reserves the right
                        to modify, update, or remove content at any time to improve accuracy and usability.
                    </p>

                    {/* 5. No Guarantees */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">5. No Guarantees</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        While we strive to keep this website operational at all times, we make no warranty regarding technical
                        issues, service interruptions, or any delays caused by external factors beyond our control.
                    </p>

                    {/* 6. Contact Us */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">6. Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        If you have any questions or concerns about this Disclaimer, please contact us at:
                    </p>

                    <p className="text-gray-700 mt-4 text-sm sm:text-base">
                        📧 Email:
                        <span className="text-[#0052d4] font-semibold ml-1">contact@rhtechnology.in</span>
                    </p>

                    <p className="text-gray-700 mt-1 text-sm sm:text-base">
                        📞 Phone:
                        <span className="text-[#0052d4] font-semibold ml-1">+91-8983839143</span>
                    </p>

                    {/* FOOTER NOTE */}
                    <p className="text-gray-400 text-xs text-center mt-10">
                        Disclaimer © 2024, R H Technology. Errors & omissions excepted.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Disclaimer;
