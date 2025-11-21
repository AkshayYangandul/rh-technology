import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { GrMapLocation } from "react-icons/gr";
import { LuMailCheck } from "react-icons/lu";
import { MdDoubleArrow, MdOutlineContactPhone } from "react-icons/md";
import bgImg from "../assets/images/title-bg.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";


const ContactPage = () => {
    const [submitAttempt, setSubmitAttempt] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setSubmitAttempt(true);

        if (
            form.name === "" ||
            form.email === "" ||
            form.phone === "" ||
            form.service === "" ||
            form.message === ""
        ) {
            return;
        }
        toast.success("Message sent successfully! 🎉", {
            position: window.innerWidth < 640 ? "top-center" : "top-right",
            autoClose: window.innerWidth < 640 ? 1500 : 2500,
        });

        setForm({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        });

        // Remove red borders after clearing
        setSubmitAttempt(false);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | R H Technology</title>
            </Helmet>
            {/* ================= TITLE SECTION ================= */}
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
                    transition={{ duration: 0.8 }}
                    className="relative text-center text-white z-10 px-4"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">Contact Us</h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 sm:mt-4 flex items-center justify-center gap-2 "
                    >
                        <p onClick={() => navigate("/")} className="text-xs sm:text-sm font-bold text-gray-200 hover:text-blue-600 transition cursor-pointer">
                            Home
                        </p>
                        <p className="text-sm sm:text-md font-bold text-purple-300"><MdDoubleArrow /></p>
                        <p className="text-xs sm:text-sm font-semibold text-gray-200 transition">
                            Contact (Get A Quote)
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>



            {/* ================= MAIN CONTENT ================= */}
            <div className="w-full px-4 sm:px-6 md:px-45 py-12 sm:py-16 md:py-20 bg-white">

                {/* TOP SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start"
                >

                    {/* LEFT TITLE */}
                    <div className="text-center md:text-left">
                        <p className="text-sm sm:text-md font-semibold flex items-center gap-2 justify-center md:justify-start
                            bg-[linear-gradient(to_bottom,#9cecfb,#65c7f7,#0052d4)]
                            bg-clip-text text-transparent
                        ">
                            Contact us <span>→</span>
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
                            Grow Your Business With <br />
                            <span className="bg-[linear-gradient(to_bottom,#9cecfb,#65c7f7,#0052d4)] bg-clip-text text-transparent">
                                Our Expertise
                            </span>
                        </h1>
                    </div>

                    {/* RIGHT SUB TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex justify-center md:justify-start mt-8 sm:mt-10"
                    >
                        <p className="text-gray-600 max-w-md text-sm sm:text-base text-center md:text-left">
                            We understand the importance of approaching each work integrally.
                        </p>
                    </motion.div>

                </motion.div>


                {/* ================= BOTTOM GRID ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mt-12 sm:mt-16">

                    {/* ================= LEFT BOXES ================= */}
                    <div className="space-y-5 sm:space-y-6 mt-10 sm:mt-16 lg:mt-28">

                        {/* BOXES ANIMATION */}
                        {[
                            {
                                icon: <GrMapLocation className="w-10 h-10 text-[#65C7F7]" />,
                                title: "Office address",
                                text: "Solapur, Maharashtra"
                            },
                            {
                                icon: <MdOutlineContactPhone className="w-10 h-10 text-[#65C7F7]" />,
                                title: "Call Us",
                                text: "+91-8983839143"
                            },
                            {
                                icon: <LuMailCheck className="w-10 h-10 text-[#65C7F7]" />,
                                title: "Mail Address",
                                text: "contact@rhtechnology.in\ninfo@rhtechnology.in"
                            }
                        ].map((box, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.04 }}
                                className="bg-[#f4f8ff] p-5 sm:p-6 rounded-sm flex items-start gap-4 h-auto w-full lg:w-[400px] lg:h-[130px] shadow-sm cursor-pointer"
                            >
                                {box.icon}
                                <div className="pl-4">
                                    <h3 className="text-base sm:text-lg font-bold">{box.title}</h3>
                                    <p className="text-gray-600 mt-1 leading-relaxed whitespace-pre-line text-sm">
                                        {box.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </div>



                    {/* ================= RIGHT FORM ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-[#f4f8ff] p-5 sm:p-8 md:p-10 lg:p-12 rounded-sm shadow-sm w-full md:h-[650px] md:w-[700px] md:-ml-10 lg:-ml-40"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                            {/* Stagger Animation */}
                            {["name", "email", "phone", "service"].map((field, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    {field !== "service" ? (
                                        <>
                                            <label className="text-xs sm:text-sm font-semibold">
                                                {field.charAt(0).toUpperCase() + field.slice(1)} (required)
                                            </label>
                                            <input
                                                name={field}
                                                type="text"
                                                placeholder={`Your ${field}*`}
                                                value={form[field]}
                                                onChange={handleChange}
                                                className={`w-full mt-2 px-3 py-2.5 sm:py-3 border rounded-md text-sm
                                                    ${submitAttempt && form[field] === "" ? "border-red-500" : "border-gray-300"}`}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <label className="text-xs sm:text-sm font-semibold">Services (required)</label>
                                            <select
                                                name="service"
                                                value={form.service}
                                                onChange={handleChange}
                                                className={`w-full mt-2 px-3 py-2.5 sm:py-3 border rounded-md text-sm
                                                    ${submitAttempt && form.service === "" ? "border-red-500" : "border-gray-300"}`}
                                            >
                                                <option value="">Select Service</option>
                                                <option>Software Product Development</option>
                                                <option>Mobile App Development</option>
                                                <option>Web App Development</option>
                                                <option>E-Commerce Solutions</option>
                                                <option>IoT-Based Solutions</option>
                                                <option>GIS-Based Asset Mapping</option>
                                                <option>GPS Vehicle Tracking System</option>
                                                <option>Customized Industry Solutions</option>
                                            </select>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* MESSAGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-5 sm:mt-6"
                        >
                            <label className="text-xs sm:text-sm font-semibold">Your message</label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Type message*"
                                value={form.message}
                                onChange={handleChange}
                                className={`w-full mt-2 px-3 py-2.5 sm:py-3 border rounded-md text-sm
                                    ${submitAttempt && form.message === "" ? "border-red-500" : "border-gray-300"}`}
                            />
                        </motion.div>

                        {/* SUBMIT BUTTON */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSubmit}
                            className="mt-5 sm:mt-6 px-8 sm:px-10 py-2.5 sm:py-3 rounded-md font-semibold text-white text-sm sm:text-base
                                bg-[linear-gradient(to_right,#9cecfb,#65c7f7,#0052d4)]
                                hover:opacity-90 transition-all duration-300 cursor-pointer w-full md:w-auto"
                        >
                            Send message
                        </motion.button>

                    </motion.div>
                </div>


                {/* ================= GOOGLE MAP ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 sm:mt-20"
                >
                    <iframe
                        title="RH Technology Location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7603.401784983323!2d75.92861!3d17.66432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db49c55f6a1f%3A0x395ff6b1477549f1!2sR%20H%20Technology!5e0!3m2!1sen!2sin!4v1762851835994!5m2!1sen!2sin"
                        width="100%"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-lg sm:h-[600px] md:h-[800px] h-[400px]"
                    ></iframe>
                </motion.div>

            </div>
        </>
    );
};

export default ContactPage;
