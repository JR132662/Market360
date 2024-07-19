import React, { useRef } from "react";
import ItemsContainer from "./ItemsContainer";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yzovkd1", "template_66b9yg3", "form", {
        publicKey: "Bjg6lTAjngjW4sUGd",
      })
      .then((result) => {
        e.target.reset(); // clear the form
      });
  };

  return (
    <footer className="bg-orange-400 text-white">
      <form ref={formRef} onSubmit={sendEmail} className="md:flex md:items-center md:justify-between sm:px-12 px-4 bg-blue-500 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-orange-400">Market</span>360
        </h1>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            className="text-blue-500 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none border-2 border-orange-500"
          ></input>
          <button
            type="submit"
            className="bg-orange-400 px-5 py-2.5 rounded text-white md:w-auto w-full"
          >
            Get Free Quote
          </button>
        </div>
      </form>
      <ItemsContainer />
    </footer>
  );
};

export default Footer;
