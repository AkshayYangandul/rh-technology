import React, { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BiPlusMedical } from "react-icons/bi";
import img1 from "../assets/images/portfolio-images/p1.webp";
import img2 from "../assets/images/portfolio-images/p2.webp";
import img3 from "../assets/images/portfolio-images/p3.webp";
import img4 from "../assets/images/portfolio-images/p4.webp";
import img5 from "../assets/images/portfolio-images/p5.webp";
import img6 from "../assets/images/portfolio-images/p6.webp";
import img7 from "../assets/images/portfolio-images/p7.webp";
import img8 from "../assets/images/portfolio-images/p8.webp";
import img9 from "../assets/images/portfolio-images/p9.webp";
import img10 from "../assets/images/portfolio-images/p10.webp";
import img11 from "../assets/images/portfolio-images/p11.webp";
import img12 from "../assets/images/portfolio-images/p12.webp";
import img13 from "../assets/images/portfolio-images/p13.webp";
import img14 from "../assets/images/portfolio-images/p14.webp";
import img15 from "../assets/images/portfolio-images/p15.webp";
import img16 from "../assets/images/portfolio-images/p16.webp";
import { useNavigate } from "react-router-dom";
import { HiMiniPlus, HiPlus } from "react-icons/hi2";
import { BsPlusLg } from "react-icons/bs";

// ================== SAMPLE DATA ===================
const portfolios = [
    { id: 1, title: "City Directory Application", category: "Custom Software Development", image: img1, hoverText: "A modern city directory system that helps users find essential services, local businesses, and government offices easily." },
    { id: 2, title: "Health App for Police Department", category: "Custom Software Development", image: img2, hoverText: "A mobile health-tracking application developed for police personnel to monitor fitness, diet, and daily activities with analytics dashboards." },
    { id: 3, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img3, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 4, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img4, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 5, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img5, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 6, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img6, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 7, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img7, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 8, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img8, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 9, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img9, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 10, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img10, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 11, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img11, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 12, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img12, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 13, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img13, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 14, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img14, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 15, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img15, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
    { id: 16, title: "Smart QR-Based Petrolling System", category: "Custom Software Development", image: img16, hoverText: "A real-time monitoring solution using QR code scanning and GPS tracking to ensure accountability during patrolling operations." },
];

// ===================== MAIN COMPONENT =====================
const Portfolio = () => {
    // Mobile vertical carousel
    const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: false, axis: "y" },
        [Autoplay({ delay: 20000 })]
    );

    // Desktop horizontal carousel
    const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: false, axis: "x" },
        [Autoplay({ delay: 20000 })]
    );

    // Chunk portfolios into groups of 4 for mobile (4 items per vertical "page")
    const mobileGroups = useMemo(() => {
        const groups = [];
        for (let i = 0; i < portfolios.length; i += 4) {
            groups.push(portfolios.slice(i, i + 4));
        }
        return groups;
    }, []);

    const totalPagesMobile = mobileGroups.length;
    const totalPagesDesktop = Math.ceil(portfolios.length / 4);
    const [currentPageMobile, setCurrentPageMobile] = useState(0);
    const [currentPageDesktop, setCurrentPageDesktop] = useState(0);

    // Mobile carousel pagination
    useEffect(() => {
        if (!emblaApiMobile) return;

        const onSelect = () => {
            const index = emblaApiMobile.selectedScrollSnap();
            setCurrentPageMobile(index);
        };

        emblaApiMobile.on("select", onSelect);
        onSelect();
    }, [emblaApiMobile]);

    // Desktop carousel pagination
    useEffect(() => {
        if (!emblaApiDesktop) return;

        const onSelect = () => {
            const index = emblaApiDesktop.selectedScrollSnap();
            setCurrentPageDesktop(Math.floor(index / 4));
        };

        emblaApiDesktop.on("select", onSelect);
        onSelect();
    }, [emblaApiDesktop]);

    const scrollToMobile = (i) => emblaApiMobile && emblaApiMobile.scrollTo(i);
    const scrollToDesktop = (i) => emblaApiDesktop && emblaApiDesktop.scrollTo(i);

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-45 py-12 sm:py-16 md:py-20 bg-white animate-fadeUp">

            {/* ===================== TITLE SECTION ===================== */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 md:mb-12 opacity-0 animate-fadeUp gap-6 md:gap-0">
                <div>
                    <p className="text-[#0052d4] font-semibold flex items-center gap-2 text-sm sm:text-base md:text-lg">
                        Portfolio! <span>↗</span>
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
                        Few of Our Apps Adored <br className="hidden sm:block" />
                        by{" "}
                        <span className="bg-gradient-to-r from-[#9cecfb] via-[#65c7f7] to-[#0052d4] text-transparent bg-clip-text">
                            millions of users!
                        </span>
                    </h2>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mt-4 md:mt-0 leading-relaxed">
                    We show only the best websites and portfolios built completely with passion, simplicity & creativity.
                </p>
            </div>

            {/* ===================== MOBILE VERTICAL CAROUSEL (4 items per column/page) ===================== */}
            <div className="md:hidden relative pb-12">
                <div className="overflow-hidden h-[1100px] sm:h-[1200px]" ref={emblaRefMobile}>
                    <div className="flex flex-col h-full">
                        {mobileGroups.map((group, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="flex-shrink-0 h-full py-1"
                            >
                                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                                    {group.map((item) => (
                                        <PortfolioCard key={item.id} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE PAGINATION */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-4 absolute bottom-0 left-1/2 -translate-x-1/2">
                    {Array.from({ length: totalPagesMobile }).map((_, index) => {
                        const isActive = index === currentPageMobile;
                        return (
                            <button
                                key={index}
                                onClick={() => scrollToMobile(index)}
                                className={`
                  transition flex items-center justify-center cursor-pointer
                  ${isActive
                                        ? "w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#0052d4] bg-white text-black font-bold text-xs sm:text-sm"
                                        : "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0052d4]"
                                    }
                `}
                            >
                                {isActive && (index + 1).toString().padStart(2, "0")}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ===================== DESKTOP HORIZONTAL CAROUSEL ===================== */}
            <div className="hidden md:block relative">
                <div className="overflow-hidden px-4 lg:px-5" ref={emblaRefDesktop}>
                    <div className="flex gap-4 lg:gap-6 px-4 lg:px-5">
                        {portfolios.map((item) => (
                            <div key={item.id} className="min-w-[45%] lg:min-w-[30%] xl:min-w-[25%] overflow-hidden">
                                <PortfolioCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* DESKTOP PAGINATION */}
                <div className="flex justify-center gap-3 lg:gap-4 mt-8 lg:mt-10">
                    {Array.from({ length: totalPagesDesktop }).map((_, index) => {
                        const isActive = index === currentPageDesktop;
                        return (
                            <button
                                key={index}
                                onClick={() => scrollToDesktop(index * 4)}
                                className={`
                  transition flex items-center justify-center cursor-pointer
                  ${isActive
                                        ? "w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-[#0052d4] bg-white text-black font-bold text-sm"
                                        : "w-2.5 h-2.5 rounded-full bg-[#0052d4]"
                                    }
                `}
                            >
                                {isActive && (index + 1).toString().padStart(2, "0")}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// ===================== CARD COMPONENT =====================
const PortfolioCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div
            className="
      relative group cursor-pointer overflow-hidden shadow-lg rounded-lg
      opacity-0 animate-stagger
      hover:scale-[1.03] hover:-rotate-1 
      transition-all duration-500 ease-out
      w-full max-w-[320px] sm:max-w-[360px] md:max-w-full mx-auto
      "
            style={{ animationDelay: `${item.id * 0.07}s` }}
        >

            {/* IMAGE */}
            <img
                src={item.image}
                alt={item.title}
                className="
        w-full h-[220px] sm:h-[260px] md:h-[270px] object-cover 
        transition-transform duration-700 
        group-hover:scale-110 group-hover:-translate-y-2
        "
            />

            {/* DIAGONAL BLACK STRIP */}
            <div
                className="
        absolute bottom-0 left-0 w-full bg-black py-3 sm:py-4 px-3 sm:px-4 clip-slant
        transition-all duration-700 ease-out
        group-hover:translate-y-14 group-hover:scale-[1.02]
        "
            >
                <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1">{item.title}</h3>
                <p className="text-blue-300 text-xs sm:text-sm line-clamp-1">{item.category}</p>
            </div>

            {/* OVERLAY */}
            <div
                className="
        absolute inset-0 
        bg-gradient-to-t from-black/80 via-black/30 to-transparent
        translate-y-full opacity-0 scale-95
        group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100
        transition-all duration-700 ease-out
        flex flex-col justify-end px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-6 gap-3 sm:gap-4
        "
            >

                {/* TEXT BOX */}
                <div
                    className="
          bg-gradient-to-r from-white/10 via-white/20 to-white/5 
          backdrop-blur-sm 
          px-4 py-3 rounded-md
          opacity-0 translate-y-5
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-700 delay-150
          "
                >
                    <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
                        {item.hoverText}
                    </p>
                </div>

                {/* + ICON */}
                <div
                    className="
          w-12 h-12 bg-white hover:bg-[#2196f3] rounded-full 
          flex items-center justify-center shadow-md
          transform scale-0 group-hover:scale-100
          group-hover:animate-bounceSlow
          transition-all duration-700 ease-out
          "
                    onClick={() => navigate(`/portfolio/${item.id}`)}
                >
                    <BsPlusLg size={18} className="text-black font-bold" />
                </div>
            </div>

        </div>
    );
};

export default Portfolio;
