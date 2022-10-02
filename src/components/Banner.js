import React from "react";

// import image
import Image from "../assets/img/lawyer_banner.png";

// import components
import Header from "./Header";
import Appointment from "./Appointment";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex pt-32">
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
          <h1 className="font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
            Your Problem <br /> <span className="text-accent">Our Goal.</span>
          </h1>
          <p className="max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            architecto corrupti! Dolores rem dicta officia nam unde modi ad
            omnis.
          </p>
          {/* Appointment */}
          <div className="lg:absolute mx-auto max-w-[445px] lg:mx-0">
            <Appointment />
          </div>
        </div>
        {/* Banner Image */}
        <div className="hidden flex-1 lg:flex lg:flex-col items-end">
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
