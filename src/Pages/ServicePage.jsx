import React, { useState } from "react";
import {
    FaChevronRight,
    FaDollarSign
} from "react-icons/fa";
import bgImg from "../assets/images/title-bg.jpg";
import img1 from "../assets/images/software.jpg";
import img2 from "../assets/images/web.jpg";
import img3 from "../assets/images/mobile.jpg";
import img4 from "../assets/images/iot.jpg";
import img5 from "../assets/images/gis.jpg";
import img6 from "../assets/images/gps.jpg";
import img7 from "../assets/images/sdp.jpg";
import img8 from "../assets/images/cis.jpg";
import img9 from "../assets/images/e-commerce.jpg";
import membersImg from "../assets/images/h6-slider-img1.png";
import { PiCrownSimpleBold } from "react-icons/pi";
import { LuShieldBan } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { Helmet } from "react-helmet";

// -------- SERVICE DATA ----------
const services = [
    { id: 1, title: "Software Product Development", image: img1, desc: "R H Technology specializes in developing bespoke software products that cater to diverse client needs. From standalone desktop applications to LAN-based software and comprehensive ERP/Inventory systems, we deliver reliable and efficient solutions designed to enhance business performance." },
    { id: 2, title: "Web App Development", image: img2, desc: "We build modern, responsive, and secure web applications tailored to your business objectives. From static sites to full-stack solutions, our team ensures scalability, usability, and performance." },
    { id: 3, title: "Mobile App Development", image: img3, desc: "Our mobile app solutions cover Android and iOS platforms, ensuring seamless user experiences and high performance. We focus on crafting feature-rich apps that engage your audience effectively." },
    { id: 4, title: "IoT Based Solutions", image: img4, desc: "We design smart automation and GPS-enabled IoT systems that connect devices, collect data, and optimize processes for industries like manufacturing, logistics, and smart cities." },
    { id: 5, title: "GIS Based Asset Mapping", image: img5, desc: "Our GIS-based asset management applications help track and analyze geographic data, enabling smarter decision-making and efficient operations." },
    { id: 6, title: "GPS Vehicle Tracking System", image: img6, desc: "We provide advanced vehicle tracking systems offering real-time monitoring, route optimization, and analytics for fleets of all sizes." },
    { id: 7, title: "Software Development Platforms", image: img7, desc: "Our team has expertise across multiple low-code and traditional software development platforms, helping businesses innovate faster." },
    { id: 8, title: "Customized Industry Solutions", image: img8, desc: "We create tailored digital solutions for various industries to meet specific challenges and enhance operational efficiency." },
    { id: 9, title: "E-Commerce Solutions", image: img9, desc: "Our e-commerce services include custom website design, secure payment integration, and end-to-end management of your digital store." },
];

const ServicePage = () => {
    const [active, setActive] = useState(1);

    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title>Services | R H Technology</title>
            </Helmet>
            <div
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >

                <div className="absolute inset-0 bg-gray-900/85"></div>

                <div className="relative text-center text-white z-10 px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Services</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">

                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200  transition">
                            Services
                        </p>

                    </div>

                </div>
            </div>
            <section className="px-4 sm:px-6 lg:px-12 xl:px-45 py-12 sm:py-16 md:py-20 bg-white animate-fadeIn">

                {/* ===================== MAIN GRID ===================== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

                    {/* ================= LEFT SIDE TABS ================= */}
                    <div className="space-y-3">
                        {services.map((srv, index) => {
                            const isActive = active === srv.id;

                            return (
                                <div
                                    key={srv.id}
                                    onClick={() => setActive(srv.id)}
                                    className={`
                                    cursor-pointer p-4 sm:p-5 flex items-center justify-between
                                    transition-all duration-300 shadow-sm rounded-sm

                                    ${isActive
                                            ? "bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4] text-white shadow-lg scale-[1.03]"
                                            : "bg-[#eef2f8] text-[#1f1f1f]"
                                        }

                                    hover:scale-[1.03]
                                    animate-stagger
                                `}
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    <p className={`
                                    text-sm sm:text-base font-semibold flex items-center gap-3 transition-all duration-300
                                    ${isActive ? "translate-x-2" : "group-hover:translate-x-2"}
                                `}>
                                        <span className="text-lg font-bold">–</span>
                                        {srv.title}
                                    </p>

                                    <FaChevronRight
                                        className={`
                                        text-sm transition-all duration-300
                                        ${isActive ? "rotate-90" : ""}
                                    `}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* ================= RIGHT SIDE CONTENT ================= */}
                    <div className="lg:col-span-2">
                        {services
                            .filter((s) => s.id === active)
                            .map((srv) => (
                                <div key={srv.id} className="animate-fade-slide">

                                    {/* IMAGE */}
                                    <img
                                        src={srv.image}
                                        alt={srv.title}
                                        className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover rounded-sm animate-fadeIn"
                                    />

                                    {/* TITLE */}
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 sm:mt-8 animate-fadeUp">
                                        {srv.title}
                                    </h2>

                                    {/* DESCRIPTION */}
                                    <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base animate-fadeUp delay-150">
                                        {srv.desc}
                                    </p>

                                    {/* BUTTON */}
                                    <button
                                        onClick={() => navigate("/contact")}
                                        className="
                                        mt-5 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-white rounded-sm text-sm sm:text-base
                                        bg-[#ff5b3b] hover:bg-[#ff3e1b]
                                        shadow-lg hover:shadow-xl cursor-pointer
                                    "
                                    >
                                        Get a Quote
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>

                {/* ================= SEPARATOR SECTION ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-16 md:mt-20 items-center">

                    {/* IMAGE */}
                    <img
                        src={membersImg}
                        className="w-full max-w-[600px] h-[220px] sm:h-[260px] md:h-[300px] animate-fadeIn rounded-sm mx-auto"
                    />

                    {/* TEXT */}
                    <div className="animate-fadeUp text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">We serve the best work</h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                            A hosted desktop solution allows for the delivery of a consistent and scalable IT experience for all users in an organisation.
                        </p>
                    </div>
                </div>

                {/* ================= ICON SECTION ================= */}
                <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">

                    {/* ITEM 1 */}
                    <div className="flex items-center gap-4 sm:gap-5 animate-fadeUp hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-black hover:scale-110 transition duration-300">
                            <PiCrownSimpleBold size={32} className="sm:text-[34px] md:text-[38px] text-[#2196f3]" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left">
                            Best quality<br />support
                        </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex items-center gap-4 sm:gap-5 animate-fadeUp hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-black hover:scale-110 transition duration-300">
                            <LuShieldBan size={32} className="sm:text-[34px] md:text-[38px] text-[#2196f3]" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left">
                            Money back<br />guarantee
                        </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="flex items-center gap-4 sm:gap-5 animate-fadeUp hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-black hover:scale-110 transition duration-300">
                            <FaDollarSign size={32} className="sm:text-[34px] md:text-[38px] text-[#2196f3]" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left">
                            Cheap price<br />provider
                        </p>
                    </div>

                </div>

            </section>
        </>
    );
};

export default ServicePage;
