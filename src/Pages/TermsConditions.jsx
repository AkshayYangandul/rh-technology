import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/title-bg.jpg";
import { MdDoubleArrow } from "react-icons/md";
import { Helmet } from "react-helmet";


const TermsConditions = () => {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | R H Technology</title>
            </Helmet>
            <div
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >

                <div className="absolute inset-0 bg-gray-900/85"></div>

                <div className="relative text-center text-white z-10 px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Terms & Conditions</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">

                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200  transition">
                            Terms & Conditions
                        </p>

                    </div>

                </div>
            </div>
            <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-12 sm:py-16 md:py-20 bg-[#f4f8ff]">

                {/* PAGE TITLE */}

                <p className="text-center text-gray-500 font-bold mt-2 text-xs sm:text-sm">
                    Effective Date: 16/02/2024
                </p>

                {/* MAIN CARD */}
                <div className="max-w-4xl mx-auto bg-white mt-8 sm:mt-10 p-6 sm:p-8 md:p-10 lg:p-14 rounded-xl shadow-xl">

                    {/* INTRO */}
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        Welcome to RH Technology. By accessing or using our products and services, you agree to comply
                        with our terms and conditions outlined below. Please read them carefully before using our website
                        and services.
                    </p>

                    {/* 1. Acceptance of Terms */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        By accessing our website, services, or software solutions, you acknowledge that you have read,
                        understood, and agreed to these Terms & Conditions. RH Technology reserves the right to update or
                        modify these terms without prior notice.
                    </p>

                    {/* 2. Services */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">2. Services</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        RH Technology provides software development services. These services include designing,
                        developing, and deploying customized software solutions. All services are offered based on
                        project agreements and client requirements.
                    </p>

                    {/* 3. User Responsibilities */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">3. User Responsibilities</h2>
                    <p className="text-gray-700 text-sm sm:text-base">Users agree to:</p>

                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 space-y-2 mb-6 sm:mb-8 mt-2 text-sm sm:text-base">
                        <li>Provide accurate information for the delivery of our services.</li>
                        <li>Not engage in any activity that may disrupt or interfere with our website or services.</li>
                        <li>Avoid copying, redistributing, or reverse-engineering our software without permission.</li>
                    </ul>

                    {/* 4. Intellectual Property */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">4. Intellectual Property</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        All content, software, designs, logos, and related materials are the intellectual property of RH
                        Technology. Unauthorized reproduction, distribution, or modification of these materials is strictly
                        prohibited.
                    </p>

                    {/* 5. Payment Terms */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">5. Payment Terms</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        Payment terms must be clearly specified in the project contract. Failure to complete payments may
                        result in suspension or termination of services. Additional charges may apply for extended services
                        or late payments.
                    </p>

                    {/* 6. Limitation of Liability */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">6. Limitation of Liability</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        RH Technology is not liable for:
                    </p>

                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                        <li>Any indirect, incidental, or consequential damages.</li>
                        <li>Loss of data due to unauthorized access or technical issues beyond our control.</li>
                        <li>Errors or delays caused by third-party service providers or system failures.</li>
                    </ul>

                    {/* 7. Confidentiality */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">7. Confidentiality</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        RH Technology agrees to maintain the confidentiality of all sensitive client information and
                        project data. Clients agree not to disclose any sensitive information shared during the project
                        development phase.
                    </p>

                    {/* 8. Termination */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">8. Termination</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        We reserve the right to terminate access to our services for violations of our terms or unethical
                        activities. Users can also request termination by contacting our support team.
                    </p>

                    {/* 9. Governing Law */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">9. Governing Law</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        All disputes will be governed by the laws of India. Any legal action or claim related to our
                        services must be filed in the appropriate courts located within Maharashtra, India.
                    </p>

                    {/* 10. Contact Us */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">10. Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        For any questions or clarifications regarding our Terms & Conditions, feel free to contact us:
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

export default TermsConditions;
