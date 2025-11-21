import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/title-bg.jpg";
import { Helmet } from "react-helmet";


const PrivacyPolicy = () => {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>Privacy & Policy | R H Technology</title>
            </Helmet>
            <div
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >

                <div className="absolute inset-0 bg-gray-900/85"></div>

                <div className="relative text-center text-white z-10 px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Privacy Policy</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">

                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200  transition">
                            Privacy Policy
                        </p>

                    </div>

                </div>
            </div>
            <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-12 sm:py-16 md:py-20 bg-[#f4f8ff]">

                {/* PAGE TITLE */}


                <p className="text-center text-gray-500 font-bold mt-2 text-xs sm:text-sm">
                    Effective Date: 16/02/2024
                </p>

                {/* CARD */}
                <div className="max-w-4xl mx-auto bg-white mt-8 sm:mt-10 p-6 sm:p-8 md:p-10 lg:p-14 rounded-xl shadow-xl">

                    {/* INTRO TEXT */}
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        RH Technology (“we”, “our”, “us”) is committed to protecting your personal information.
                        This Privacy Policy explains how we collect, use, and protect your data when you browse our
                        website and services.
                    </p>

                    {/* --- SECTION 1 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">1. Information We Collect</h2>

                    <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                        We may collect the following types of information:
                    </p>

                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                        <li>Personal information such as your name, email address or phone number.</li>
                        <li>Technical information such as IP address, browser type, and device information.</li>
                        <li>
                            Information you submit voluntarily through contact forms or while using our website
                            services.
                        </li>
                    </ul>

                    {/* --- SECTION 2 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">2. How We Use Your Information</h2>

                    <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">We use your information for:</p>

                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                        <li>Providing customer support.</li>
                        <li>Improving our services and website experience.</li>
                        <li>Sending updates, offers, or promotional messages (after your consent).</li>
                        <li>Maintaining website security and functionality.</li>
                    </ul>

                    {/* --- SECTION 3 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">3. Data Sharing and Security</h2>

                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        We do not sell your data. We only share it with trusted third-party services that help us
                        operate our website or comply with legal requirements.
                        We use industry-standard security measures to protect your personal information from
                        unauthorized access or misuse.
                    </p>

                    {/* --- SECTION 4 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">4. Cookies</h2>

                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        We use cookies to enhance your experience on our website. Cookies help us understand how
                        users interact with our platform and personalize your browsing experience. You can disable
                        cookies from your browser settings at any time.
                    </p>

                    {/* --- SECTION 5 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">5. Your Rights</h2>

                    <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">You have the right to:</p>

                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                        <li>Request access to your personal data.</li>
                        <li>Request correction or deletion of your information.</li>
                        <li>Withdraw consent for data processing.</li>
                        <li>Request a copy of your stored data.</li>
                    </ul>

                    {/* --- SECTION 6 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">6. Third-Party Links</h2>

                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        Our website may contain links to external websites. We are not responsible for the privacy
                        practices of third-party sites. We encourage you to review their policies before sharing any
                        personal information.
                    </p>

                    {/* --- SECTION 7 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">7. Changes to This Policy</h2>

                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page
                        with an updated revision date. Your continued use of our website means you accept these
                        updates.
                    </p>

                    {/* --- SECTION 8 --- */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">8. Contact Us</h2>

                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        For any questions about our Privacy Policy, feel free to contact us:
                    </p>

                    <p className="text-gray-700 mt-4 text-sm sm:text-base">
                        📧 Email:
                        <span className="text-[#0052d4] font-semibold ml-1">
                            contact@rhtechnology.in
                        </span>
                    </p>

                    <p className="text-gray-700 mt-1 text-sm sm:text-base">
                        📞 Phone:
                        <span className="text-[#0052d4] font-semibold ml-1">
                            +91-8983839143
                        </span>
                    </p>

                    {/* FOOT NOTE */}
                    <p className="text-gray-400 text-xs text-center mt-10">
                        © 2025 RH Technology — All rights reserved.
                    </p>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
