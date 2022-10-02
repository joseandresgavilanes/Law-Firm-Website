import React, { useEffect, useState } from "react";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import logo
import Logo from "../assets/img/logo.png";
import { Input } from "postcss";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, [Input]);

  return (
    <header
      className={`${
        bg && "bg-white shadow-md py-4"
      } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;