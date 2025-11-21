import { useNavigate, useParams } from "react-router-dom";

import decoTopLeft from "../assets/images/h6-slider-img4.png";
import decoBottomRight from "../assets/images/h6-slider-img5.png";
import bgImg from "../assets/images/title-bg.jpg";
import portfolioImg1 from "../assets/images/portfolio-images/p1.webp";
import portfolioImg2 from "../assets/images/portfolio-images/p2.webp";
import portfolioImg3 from "../assets/images/portfolio-images/p3.webp";
import portfolioImg4 from "../assets/images/portfolio-images/p4.webp";
import portfolioImg5 from "../assets/images/portfolio-images/p5.webp";
import portfolioImg6 from "../assets/images/portfolio-images/p6.webp";
import portfolioImg7 from "../assets/images/portfolio-images/p7.webp";
import portfolioImg8 from "../assets/images/portfolio-images/p8.webp";
import portfolioImg9 from "../assets/images/portfolio-images/p9.webp";
import portfolioImg10 from "../assets/images/portfolio-images/p10.webp";
import portfolioImg11 from "../assets/images/portfolio-images/p11.webp";
import portfolioImg12 from "../assets/images/portfolio-images/p12.webp";
import portfolioImg13 from "../assets/images/portfolio-images/p13.webp";
import portfolioImg14 from "../assets/images/portfolio-images/p14.webp";
import portfolioImg15 from "../assets/images/portfolio-images/p15.webp";
import portfolioImg16 from "../assets/images/portfolio-images/p16.webp";
import { MdDoubleArrow } from "react-icons/md";
import { Helmet } from "react-helmet";

const portfolioData = {
    1: {
        title: "City Directory Application",
        image: portfolioImg1,
        description:
            "A modern city directory system that helps users find essential services, local businesses, and government offices easily. Designed with a clean UI and map-based search for enhanced accessibility.",
        points: [
            "Requirement Gathering and UI Planning.",
            "Development of category-based search and filters.",
            "Integration of Google Maps API for navigation.",
            "Testing for cross-browser and mobile compatibility.",
            "Deployment with ongoing maintenance."
        ]
    },
    2: {
        title: "Health App for Police Department",
        image: portfolioImg2,
        description:
            "A mobile health-tracking application developed for police personnel to monitor fitness, diet, and daily activities with analytics dashboards.",
        points: [
            "Planning and feature mapping with department inputs.",
            "Developing Android/iOS hybrid app with fitness API integrations.",
            "Creating admin dashboards for monitoring reports.",
            "Testing for accuracy and data privacy compliance.",
            "Deployment on secure servers with cloud backup."
        ]
    },
    3: {
        title: "Smart QR-Based Petrolling System",
        image: portfolioImg3,
        description:
            "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations.",
        points: [
            "System design with GPS and QR modules.",
            "Developing mobile scanning app",
            "Building admin dashboard for live monitoring.",
            "Testing on various network conditions.",
            "Deployment with cloud-based synchronization."
        ]
    },
    4: {
        title: "GPS Vehicle Tracking System",
        image: portfolioImg4,
        description:
            "A GPS-powered fleet management platform providing real-time vehicle tracking, analytics, and performance monitoring.",
        points: [
            "Integration of GPS hardware with the backend.",
            "Development of live map dashboards.",
            "Creation of driver performance reports.",
            "Testing for real-time accuracy.",
            "Deployment and 24/7 support setup."
        ]
    },
    5: {
        title: "GPS Tracking Device with App",
        image: portfolioImg5,
        description:
            "A mobile-integrated IoT solution that connects GPS devices to monitor and analyze movement across vehicles or assets.",
        points: [
            "Device and API integration.",
            "Frontend dashboard design.",
            "Backend setup for real-time tracking.",
            "Performance and load testing.",
            "Deployment on AWS servers."
        ]
    },
    6: {
        title: "GIS Mapping Asset Application",
        image: portfolioImg6,
        description:
            "GIS-based platform for tracking and visualizing assets on geographical maps for utility and infrastructure companies.",
        points: [
            "Planning database architecture with GIS layers.",
            "Developing data visualization modules.",
            "Integrating ArcGIS API.",
            "Performance and spatial accuracy testing.",
            "Deployment with cloud GIS support."
        ]
    },
    7: {
        title: "Home/Industry Automation",
        image: portfolioImg7,
        description:
            "Smart automation solutions that enhance efficiency, safety, and convenience for both homes and industrial environments.",
        points: [
            "Hardware Integration: Identify and integrate IoT devices (e.g., sensors, controllers).",
            "Software Development: Develop software to control devices remotely.",
            "Cloud Integration: Link IoT devices to cloud platforms for real-time data access.",
            "Testing: Ensure devices communicate effectively and perform reliably.",
            "Deployment: Deliver the system with user training for effective operation."
        ]
    },
    8: {
        title: "Corporate Websites",
        image: portfolioImg8,
        description:
            "Modern corporate websites designed to represent brand identity with responsive layouts and optimized performance.",
        points: [
            "Designing professional layouts.",
            "Developing CMS-integrated pages.",
            "Testing for SEO and accessibility.",
            "Deployment on cloud hosting."
        ]
    },
    9: {
        title: "E-Learning Platforms",
        image: portfolioImg9,
        description:
            "Interactive LMS platform enabling digital learning, assessments, and progress tracking for students and teachers.",
        points: [
            "Planning LMS module structure.",
            "Video content streaming and quiz integration.",
            "Testing and scalability improvements.",
            "Cloud deployment with security setup."
        ]
    },
    10: {
        title: "E-Commerce Shopping Website",
        image: portfolioImg10,
        description:
            "A complete e-commerce solution with product management, shopping cart, payment, and order tracking modules.",
        points: [
            "UI design and category setup.",
            "Product and order management backend.",
            "Payment gateway integration.",
            "Testing for user experience.",
            "Deployment with SSL configuration."
        ]
    },
    11: {
        title: "E-Commerce Apps",
        image: portfolioImg11,
        description:
            "Cross-platform mobile e-commerce apps offering real-time inventory and order tracking.",
        points: [
            "Design and API integration.",
            "Payment gateway setup.",
            "Push notifications implementation.",
            "Testing and optimization."
        ]
    },
    12: {
        title: "Food Delivery Apps",
        image: portfolioImg12,
        description:
            "Food ordering and delivery application with restaurant panels and delivery partner tracking.",
        points: [
            "Customer, restaurant, and admin panel setup.",
            "Integration with real-time delivery tracking.",
            "Payment gateway setup.",
            "App store deployment."
        ]
    },
    13: {
        title: "Customized Android & IOS Apps",
        image: portfolioImg13,
        description:
            "Tailor-made Android and iOS applications built to deliver seamless performance, stunning UI, and powerful features designed around your unique business needs.",
        points: [
            "Requirement Analysis & App Planning",
            "UI/UX Designing & Prototype Development",
            "App Development & API Integration",
            "Testing, Deployment & Maintenance"
        ]
    },
    14: {
        title: "Industry Management ERP",
        image: portfolioImg14,
        description:
            "End-to-end ERP solution managing production, inventory, HR, and finance modules under one roof.",
        points: [
            "Module and database design.",
            "Custom workflow automation setup.",
            "Testing for scalability.",
            "Deployment with user training."
        ]
    },
    15: {
        title: "School/College Management ERP",
        image: portfolioImg15,
        description:
            "A complete School & College Management ERP that simplifies daily operations, enhances communication, and brings all academic, administrative, and financial activities under one centralized system.",
        points: [
            "Requirement Gathering & Module Planning",
            "UI/UX Design & Role-Based Dashboard Setup",
            "System Development & Integration",
            "Testing, Deployment & Training"
        ]
    },
    16: {
        title: "Hospital Management ERP",
        image: portfolioImg16,
        description:
            "Hospital ERP solution to manage patients, doctors, billing, and inventory in one secure system.",
        points: [
            "Requirement analysis and module setup.",
            "Integration with pharmacy and billing systems.",
            "Testing for HIPAA compliance.",
            "Deployment with training."
        ]
    },


};

const PortfolioPage = () => {
    const { id } = useParams();
    const data = portfolioData[id];

    const navigate = useNavigate()

    if (!data) return <h2 className="text-center py-20">Portfolio Not Found</h2>;

    return (
        <>
            <Helmet>
                <title>Portfolio | R H Technology</title>
            </Helmet>
            <div
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >

                <div className="absolute inset-0 bg-gray-900/85"></div>

                <div className="relative text-center text-white z-10 px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Portfolio</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">

                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200  transition">
                            Portfolio
                        </p>

                    </div>

                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-12 xl:px-45 py-12 sm:py-16 md:py-20 bg-white overflow-hidden animate-fadeIn">

                {/* Decorative Background Images */}
                <img
                    src={decoTopLeft}
                    alt="decor"
                    className="
                    hidden md:block absolute top-20 left-20 w-16 md:w-24 opacity-70 
                    pointer-events-none select-none float-soft animate-fadeIn
                "
                />

                <img
                    src={decoBottomRight}
                    alt="decor"
                    className="
                    hidden md:block absolute bottom-20 right-20 w-16 md:w-24 opacity-70 
                    pointer-events-none select-none float-soft animate-fadeIn
                "
                />

                {/* Image Left + Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                    {/* LEFT IMAGE */}
                    <div className="animate-slideLeft flex justify-center">
                        <img
                            src={data.image}
                            className="shadow-sm border border-gray-500 w-full max-w-[540px] rounded-md
                                   transition-transform duration-700 hover:scale-[1.04]"
                            alt={data.title}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="animate-slideRight text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-fadeUp">
                            {data.title}
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-5 sm:mb-6 animate-fadeUp delay-150">
                            {data.description}
                        </p>

                        <div className="bg-white shadow-md rounded-sm p-4 sm:p-6 border animate-fadeUp delay-300">
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 
                            bg-[linear-gradient(to_bottom,#9cecfb,#65c7f7,#0052d4)]
                            bg-clip-text text-transparent">
                                Working Flow:
                            </h3>

                            <ul className="text-gray-600 text-sm sm:text-base space-y-2 list-disc ml-4 sm:ml-5 text-left">
                                {data.points.map((p, i) => (
                                    <li
                                        key={i}
                                        className="opacity-0 animate-fadeUp"
                                        style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                                    >
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => navigate("/contact")}
                            className="
                            mt-5 sm:mt-6 px-7 sm:px-10 py-2.5 sm:py-3 rounded-sm text-sm sm:text-base
                          bg-[#ff5b3b] hover:bg-[#ff3e1b]                           
                          text-white font-semibold shadow-lg
                            hover:scale-110 hover:shadow-xl 
                            transition-all duration-200 cursor-pointer
                            animate-fadeUp delay-100
                        "
                        >
                            GET A QUOTE
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default PortfolioPage;
