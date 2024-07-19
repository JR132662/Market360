import React from "react";
import Maintenance2 from "../components/Maintenance2";
import Pricing2 from "../components/Pricing2";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Services = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto lg:pt-20 sm:pt-2 px-6 overflow-hidden">
        <div className="pt-4 flex flex-col items-center mt-4 lg:pt-5 lg:mt-4 border-b-2 border-orange-500">
          <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold mb-4">
            <span className="text-blue-500">Quality</span>{" "}
            <span className="text-orange-500">Delivery</span> On Demand
          </h1>
        </div>
        <div className="flex mt-5 lg:mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border-2 border-blue-500 shadow-amber-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border-2 border-amber-400 shadow-amber-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <div className="pt-0 lg flex flex-col items-center mt-0 lg:pt-1 lg:mt-5 border-b-2 border-orange-500">
          <p className="mb-5 text-center mt-2 lg:text-2xl md:text-md sm:text-sm max-w-4xl lg:mb-10 sm:mb-4 lg:mt-3">
            We provide top-notch painting and cleaning services in Miami Dade,
            Broward, and Monroe County. Whether you own a residential or
            commercial property, or manage an Airbnb, we have the expertise and
            commitment necesarry to fulfill your needs.
          </p>
        </div>
        <Maintenance2 />
        <Pricing2 />
      </div>
    </>
  );
};

export default Services;
