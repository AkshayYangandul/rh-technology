import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../assets/images/title-bg.jpg";
import { Helmet } from "react-helmet";

const FaqsPage = () => {
    const [activeCategory, setActiveCategory] = useState("Technical");
    const [activeFAQ, setActiveFAQ] = useState(null);

    const categories = ["Technical", "Sales", "Marketing"];
    const navigate = useNavigate();

    // FAQ DATA
    const faqsData = {
        Technical: [
            {
                q: "How long should a business plan be?",
                a: "A business plan should be concise yet comprehensive. Typically, it ranges between 10-20 pages, including an executive summary, market analysis, financial projections, and strategies. The length depends on the complexity of your business.",
            },
            {
                q: "Where do I start?",
                a: "Start with research. Understand your target audience, identify problems to solve, and then outline your product or service approach.",
            },
            {
                q: "Why Would a Successful Entrepreneur Hire a Coach?",
                a: "Even successful entrepreneurs need guidance to refine strategies, overcome blind spots, and maintain consistent growth.",
            },
        ],
        Sales: [
            {
                q: "Do you give any offer for premium customer?",
                a: "Yes, we value our premium customers and offer exclusive discounts, priority support, and additional benefits tailored to their specific needs. Contact us to learn more about premium offers and Services.",
            },
            {
                q: "Can I offer my items for free on a promotionap basis?",
                a: "Yes, offering items for free as part of a promotional campaign can be a great strategy to attract customers and build brand awareness. Ensure you have a clear plan to convert these promotions into long-term customer relationships.",
            },
            {
                q: "Is there a limit to the number of guests should plan in a day?",
                a: "The number of guests you should plan for depends on your capacity and the type of event or service. It's important to ensure the quality of service and comfort for all guests without exceeding your resources.",
            },

        ],
        Marketing: [
            {
                q: "Do I need a business plan?",
                a: "Yes, having a business plan is essential for setting clear goals, mapping out strategies, and ensuring your business stays on track for growth and success. It acts as a roadmap for decision-making and helps in securing funding or partnerships."
            },
            {
                q: "What makes your financial project special?",
                a: "Our financial projects stand out due to meticulous planning, accurate projections, and innovative solutions tailored to meet client needs. We ensure transparency and reliability, enabling clients to make informed financial decisions."
            },
        ],
    };

    const toggleFAQ = (i) => {
        setActiveFAQ(activeFAQ === i ? null : i);
    };

    return (
        <>
            <Helmet>
                <title>Faq's | R H Technology</title>
            </Helmet>
            {/* ---------------- TITLE SECTION ---------------- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[180px] sm:h-[220px] md:h-[300px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className="absolute inset-0 bg-gray-900/85"></div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative text-center text-white z-10 px-4"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Faq's</h1>

                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 ">
                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>

                        <p className="text-sm sm:text-md font-bold text-purple-300">
                            <MdDoubleArrow />
                        </p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200 transition">
                            Faqs
                        </p>
                    </div>
                </motion.div>
            </motion.div>



            {/* ---------------- MAIN CONTENT ---------------- */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full bg-white px-4 sm:px-6 lg:px-12 xl:px-45 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-14"
            >

                {/* LEFT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center md:text-left">
                        Seamless & Hassle-Free IT Support
                    </h2>

                    <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base max-w-lg text-center md:text-left mx-auto md:mx-0">
                        However, it can easily be configured to make and receive external calls as well...
                    </p>

                    {/* LEFT TABS */}
                    <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
                        {categories.map((cat) => (
                            <motion.div
                                key={cat}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setActiveFAQ(null);
                                    }}
                                    className={`cursor-pointer border-l-4 pl-3 py-1 text-sm sm:text-base md:text-lg font-medium 
                                        ${activeCategory === cat
                                            ? "border-[#65C7F7] bg-[linear-gradient(to_bottom,#9cecfb,#65c7f7,#0052d4)] bg-clip-text text-transparent"
                                            : "border-gray-300 text-gray-700"
                                        }`}
                                >
                                    {cat}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>



                {/* ---------------- FAQ RIGHT SECTION ---------------- */}
                <div className="space-y-3 sm:space-y-4 transition-all duration-300">
                    {faqsData[activeCategory].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="rounded-sm shadow-sm overflow-hidden"
                            layout
                        >

                            {/* QUESTION */}
                            <motion.button
                                layout
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => toggleFAQ(i)}
                                className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left
                                    text-sm sm:text-lg font-extrabold text-gray-600 bg-white
                                    border border-gray-200 hover:bg-[linear-gradient(to_bottom,#9cecfb,#65c7f7,#0052d4)]
                                    hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <span>{item.q}</span>
                                <AnimatePresence mode="wait">
                                    {activeFAQ === i ? (
                                        <motion.div
                                            key="minus"
                                            initial={{ opacity: 0, rotate: -90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: 90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Minus size={26} className="sm:w-[30px] sm:h-[30px]" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="plus"
                                            initial={{ opacity: 0, rotate: 90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: -90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Plus size={26} className="sm:w-[30px] sm:h-[30px]" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* ANSWER */}
                            <AnimatePresence>
                                {activeFAQ === i && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-4 sm:px-6 py-4 sm:py-5 text-gray-600 bg-white text-sm sm:text-base leading-relaxed"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </>
    );
};

export default FaqsPage;
