import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaAngleUp, FaTimes, FaPaperPlane } from "react-icons/fa";
import { FaAnglesUp } from "react-icons/fa6";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const FloatingButtons = () => {

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim() !== "") {
            window.open(
                `https://wa.me/918983839143?text=${encodeURIComponent(message)}`,
                "_blank"
            );
            setMessage("");
            setOpen(false);
        }
    };

    return (
        <>
            {/* LEFT BOTTOM - ANGLE UP */}
            <button
                onClick={scrollToTop}
                className="
                    fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 
                    bg-[#0052d4] text-white 
                    w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl 
                    flex items-center justify-center 
                    hover:bg-[#0041aa] transition-all
                "
            >
                <FaAnglesUp size={24} />
            </button>

            {/* RIGHT BOTTOM - WHATSAPP */}
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 30 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-16 sm:bottom-20 right-0 w-[80vw] max-w-xs sm:w-72 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-[linear-gradient(to_right,#25D366,#128C7E)] text-white px-4 py-3 flex justify-between items-center">
                                <span className="font-semibold text-sm">
                                    Chat with us on WhatsApp!
                                </span>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-white hover:text-gray-200"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Input Area */}
                            <div className="p-3">
                                <input
                                    type="text"
                                    placeholder="Hello, how can we help you?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-full mt-2 bg-[linear-gradient(to_right,#25D366,#65c7f7)] hover:bg-[linear-gradient(to_right,#65c7f7,#25D366)] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                                >
                                    <FaPaperPlane className="text-sm" /> Send
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating WhatsApp Button */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setOpen((prev) => !prev)}
                    className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-13 sm:h-13 -mb-1 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-all duration-300"
                >
                    <FaWhatsapp className="text-2xl sm:text-3xl" />
                </motion.button>
            </div>
        </>
    );
};

export default FloatingButtons;
