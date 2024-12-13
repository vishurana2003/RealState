import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkmode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_vygns3d", // Your service ID from EmailJS
        "template_05t4y59", // Your template ID from EmailJS
        formData,
        "MJ5wJNUoLnHoufFJr" // Your user ID from EmailJS
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className={`${darkmode ? "dark: bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkmode ? "dark: bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="text-2xl text-black font-semibold dark:text-white">
            Send us a message today
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name here"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your valid email"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your valid mobile number"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your message here..."
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            ></textarea>
            <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
              SEND EMAIL
            </button>
          </form>
          {status && <p className="mt-4 text-xl text-center">{status}</p>}
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white"
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            nobis!
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-xl text-gray-600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            dignissimos consectetur a doloremque aut assumenda maxime
            perspiciatis vero quod ipsum.
          </p>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
