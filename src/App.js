import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <ContactForm />
      <Footer />
    </BrowserRouter>
  );
}