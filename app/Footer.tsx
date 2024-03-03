"use client"
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdEmail } from "react-icons/md";



function Footer() {
  return (
    <div className="bg-[var(--text-first)] h-[395px] items-start " >
    <div className="py-10 m-28 ">
        <h2 className=" m-2 p-1 ">Search from here</h2>
        <div className="flex w-[600px] items-center m-2 p-2  rounded-md bg-white">
           <input
             type="text"
             placeholder="Search..."
             className="search-input"
           />
                <IoMdSearch className="w-[40px] h-[40px] p-2 text-[var(--white)] bg-[var(--blue-white)] hover:bg-[var(--dark-blue)] rounded-md" size={10} />
         </div>
         <div className="flex justify-end">
         <div className="  p-20 flex items-center">
                    <MdEmail className="w-6 h-6 " />
                <h5 className="text-black p-1">info@yourdomain.com</h5>
            </div>
         </div>
    </div>
    </div>
  );
}

export default Footer;
