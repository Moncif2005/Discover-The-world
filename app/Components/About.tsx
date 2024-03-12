"use client"
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="p-20 md:px-[89px] md:py-12 md:h-[60vh] bg-[var(--white)] items-center justify-center flex " id="about" >
        <div className="flex flex-col md:flex-row md:gap-[13rem] items-center  ">
        <Image
            src="/about.png"
            alt="Description of the image"
            width={473}
            height={326}
        />
        <div className="flex  flex-col items-center md:items-stretch ">
            <p className="p-5 text-[16px] m-[29px] w-[555px] h-[319] text-center md:text-justify"> 
                Welcome to Discover The World your go to hub for 
                unforgettable travel experiences! We're a team of passionate
                travelers committed to making your journey extraordinary. 
                Our platform offers curated destination guides, insider tips, 
                and expert recommendations to ensure seamless
                and authentic adventures. Join our community, explore the world,
                and create lasting memories with Us. Happy travels!
            </p>
            <a href="#search" className="flex p-10 justify-center mx-[49px] items-start w-[128px] h-[43px] gap-10 btn">SEARSH</a>
        </div>
        </div>
    </div>
  );
}

export default About;
