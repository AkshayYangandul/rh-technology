import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/title-bg.jpg";
import { MdDoubleArrow } from "react-icons/md";
import { Helmet } from "react-helmet";


const CancellationReturn = () => {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>Cancellation & Return Policy | R H Technology</title>
            </Helmet>
            <div
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >

                <div className="absolute inset-0 bg-gray-900/85"></div>

                <div className="relative text-center text-white z-10 px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Cancellation and Return Policy</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">

                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200  transition">
                            Cancellation & Return Policy
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

                    {/* INTRO */}
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        At <span className="font-semibold text-[#0052d4]">R H Technology</span>, we strive to provide the highest quality products and services to our customers.
                        We understand that situations may arise where cancellations or returns are necessary. This policy outlines the
                        terms and conditions for requesting any kind of cancellations or refunds.
                    </p>

                    {/* 1. Cancellation Policy */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">1. Cancellation Policy</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        We understand that plans can change unexpectedly. To cancel an order, clients must notify us via email before
                        project start. At least 24 hours before the project work is scheduled to begin.
                        <br /><br />
                        Any request received after project work has begun will not be considered for cancellation and will be treated
                        as part of project execution. Such deductions will be at the sole discretion of <span className="font-semibold text-[#0052d4]">R H Technology</span>.
                    </p>

                    {/* 2. Non-Eligibility for Cancellation */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">2. Non-Eligibility for Cancellation</h2>
                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        <li>Cancellation is not allowed once project is approved and initiated.</li>
                        <li>Custom-developed solutions are non-refundable.</li>
                        <li>Any work that has been completed prior to the cancellation request cannot be refunded.</li>
                    </ul>

                    {/* 3. Return Policy */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">3. Return Policy</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        Every project is tailored to the unique needs of our clients; therefore, returns are not applicable once services
                        are delivered. However, in rare situations where a client reports unexpected performance issues, the request
                        will be reviewed within 7 days.
                        <br /><br />
                        Returns will only be accepted when they involve project malfunction, bugs, or valid reasons for dissatisfaction.
                        If approved, the refund process may take up to 10–15 working days.
                    </p>

                    {/* 4. Refund Eligibility */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">4. Refund Eligibility</h2>
                    <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                        Refunds are approved only under the following conditions:
                    </p>
                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        <li>Failure to deliver the agreed service as specified in the project documentation.</li>
                        <li>Project cancellation before work begins and no resources are allocated or deployed.</li>
                        <li>Duplicate payment made by the client by mistake.</li>
                    </ul>

                    {/* 5. Payment Refunds */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">5. Payment Refunds</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        All approved refunds will be processed within 10–15 business days to the original mode of payment. Bank
                        processing time may vary.
                    </p>

                    {/* 6. Contact Us */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#0052d4] mb-3">6. Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        For any inquiries or concerns related to our Cancellation & Return Policy, please contact us at:
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
                        Cancellation & Return Policy © 2024, R H Technology. Errors & omissions excepted.
                    </p>
                </div>
            </section>
        </>
    );
};

export default CancellationReturn;
