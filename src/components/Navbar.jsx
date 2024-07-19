import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { motion } from "framer-motion";

const Navbar = ({text, handleClick}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-Orange-500/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href='/'>
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            </a>
            <a href="/">
              <span className="text-xl tracking-tight text-blue-500">
                Market<span className="text-orange-400">360</span>
              </span>
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="text-blue-500 hover:text-orange-400" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="tel:+1 (305) 632-4462">
              <motion.button whileHover={{scale: 1.1}} className="py-2 px-3 border rounded-md bg-orange-400 text-white">
                Call us for a free quote
              </motion.button>
            </a>
            <a href="https://calendly.com/rodtechdevelopment/30min">
              <motion.button
                whileHover={{scale: 1.1}}
                className="bg-blue-500 py-2 px-3 rounded-md text-white"
              >
                Order a cleaning
              </motion.button>
              </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="text-blue-500" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-blue-500 w-full p-12 flex flex-col justify-center items-center lg:hidden text-center">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 border-b-8 border-orange-400">
                  <a className="text-orange-400 hover:text-white" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex space-x-12">
              <a href="tel:+1 (305) 632-4462" className="py-2 px-5 border rounded-md bg-orange-400">
                Call us now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;