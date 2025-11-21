import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Header/Header";
import Home from "./Hero/Home";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./Pages/ServicePage";
import PortfolioPage from "./Pages/PortfolioPage";
import FaqsPage from "./Pages/FaqsPage";
import ContactPage from "./Pages/ContactPage";
import About from "./Pages/AboutPage";
import Service from "./Hero/Service";
import Portfolio from "./Hero/Portfolio";
import Footer from "./Footer/Footer";
import GetQuote from "./Hero/GetQuote";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Disclaimer from "./Pages/Disclaimer";
import CancellationReturn from "./Pages/CancellationReturn";
import FloatingButtons from "./Components/FloatingButtons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <ScrollToTop />
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cancellation-return" element={<CancellationReturn />} />
      </Routes>

      <GetQuote />
      <Footer />
      <FloatingButtons />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
