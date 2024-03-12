"use client"
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-[var(--white)]  justify-between px-[67px] md:w-[990px] h-[750px] flex flex-col md:flex-row" id='contact'>
        <div className="gap-3">
            <h2 className="p-[42px] m-[6px] text-[42px] text-[var(--blue-white)] ">Contact Us</h2>
            <p className="p-[18px] m-[30px] text-[18px] w-[378px] h-[239px] ">
                Welcome to Discover The World your go to hub for 
                unforgettable travel experiences! We're a team of passionate
                travelers committed to making your journey extraordinary. 
                Our platform offers curated destination guides, insider tips, 
            </p>

            <div className="p-[18px] m-[26px] flex items-center">
                <div className="p-4  rounded-[50%]  bg-[var(--text-first)] m-2 ">
                    <MdEmail className="w-6 h-6 " />
                </div>
                <h5 className="text-black">info@yourdomain.com</h5>
            </div>
            <div className="p-[18px] m-[26px] flex items-center">
                <div className="p-4  rounded-[50%]  bg-[var(--text-first)] m-2 ">
                    <FaPhoneAlt className="w-6 h-6 " />
                </div>
                <h5 className="text-black">+1 (011)-345-387</h5>
            </div>
        </div>



        <div className="hidden md:flex px-[42px] my-[50px] mx-[-30rem] bg-[var(--text-first)] rounded-lg gap-[10rem] ">

        <div className=" bg-blue-white p-8">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-lg text-blue-white block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-[500px] p-2 border-b border-blue-white rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-lg text-blue-white block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-[500px] p-2 border-b border-blue-white rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="text-lg text-blue-white block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-[500px] p-16 border border-blue-white rounded-lg	 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[var(--blue-white)] text-white py-2 px-[225px] rounded-lg	 hover:bg-opacity-80 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
        </div>
    </div>
  );
}

export default Contact;
