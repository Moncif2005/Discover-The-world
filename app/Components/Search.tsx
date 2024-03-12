"use client"
import React from "react";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";


function Search() {
  return (
    <div className="h-[654px]  flex items-center  px-[78px] custom-imges" id='search'>


      <div className="flex flex-col md:flex-row p-3 gap-[10rem] items-center w-[1300px] h-[581px]  ">
        <div className="gap-5 p-5 ">
          
        <p className=" m-2 text-[15px] md:w-[663px] md:text-[17px] text-[var(--white)] gap-4">
          Welcome to Discover The World your go to hub for 
           unforgettable travel experiences! We're a team of passionate
           travelers committed to making your journey extraordinary. 
           Our platform offers curated destination guides, insider tips, 
           and create lasting memories with Us. Happy travels!
        </p>
        
        <div className="flex items-center m-2 p-2  rounded-md bg-white">
           <input
             type="text"
             placeholder="Search..."
             className="search-input"
           />
                <IoMdSearch className="w-[40px] h-[40px] p-2 text-[var(--white)] bg-[var(--blue-white)] hover:bg-[var(--dark-blue)] rounded-md" size={10} />
         </div>


        </div>
        <Image
            className="md:flex hidden flex-wrap items-start content-start	imgs "
            src="/search2.png"
            alt="Description of the image"
            width={395}
            height={500}
        />
        
      </div>
    </div>
  );
}

export default Search;
