"use client"
import React from "react";

function Main() {
  return (
    <div className="h-[100vh] items-center justify-center flex flex-col  custom-img" id='home'>
      <h2 className="text-[var(--text-first)] text-[30px] sm:text-[40px] md:text-[80px] ">
      Discover <span className="text-[var(--blue-white)]">The</span> world
      </h2>
      <h4 className="text-[13px] md:text-[40px] px-10 text-[var(--text-first)] ">Travel Now</h4>
      <div className="absolute top-0 left-0 w-full h-full z-[10]"></div>
      <a href="#search" className="z-10 btn">SEARCH</a>

    </div>
  );
}

export default Main;
