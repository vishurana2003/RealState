import React from "react";
import { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import AOS from "aos";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkmode, toogleDarkMode } = useDarkMode();
  return (
    <div>
      <footer
        className={`${
          darkmode ? "dark: bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10 `}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, sed aliquid at assumenda voluptatibus cumque.
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebook className="size-5 " />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5 " />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5 " />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5 " />
            </div>
          </div>
          <h1 className="text-white mt-8">
            Copyright Real Estate, All Rights Reserved
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5 ">
          <h1 className="text-white text-2xl font-semibold ">Contact US</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5"></FaBuilding>
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5"></FaMobile>
            <p className="text-slate-200">+984 2902 0290</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5"></FaFax>
            <p className="text-slate-200">9494 45949</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5"></IoMdMail>
            <p className="text-slate-200">demomail@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold ">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view </h1>
              <p className="text-slate-400">$ 287.98</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Smart View From Beach</h1>
              <p className="text-slate-400">$ 487.98</p>
            </div>
          </div>
        </div>
      </footer>

      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6    "
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white"></FaArrowUp>
        </Link>
      </div>


      <div>
        <button onClick={toogleDarkMode} className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6 ">
          {darkmode ? <FaMoon size={25} className="text-black"/>:<FaSun size={25} className="text-black"/>}
        </button>
      </div>
    </div>
  );
};

export default Footer;
