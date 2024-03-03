"use client"

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 108) {
        setColor('#fff');
      } else {
        setColor('');
      }
    };
  
    window.addEventListener('scroll', changeColor);
  
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);
  

  return (
   
    <div 
    style={{backgroundColor:`${color}`}}
    className={`  fixed top-[0] left-[0] right-0 flex bg-[ transparent] justify-between items-center h-2 max-w-full m-auto px-32 py-12  z-20  ${!nav ? 'w-full bg-[var(--white)] ease duration-700' : ''}`}>  


                         <h1>


                           <div className=" mr-2 z-10">
                            <Image
                               src="/Logo.png"
                               alt="Description of the image"
                               width={71}
                               height={95}
                             />
                           </div>
                         </h1>

    


      <ul 

      className=" hidden p-1 md:p-4  md:flex text-[var(--dark-blue)]  ">


        <li className="p-6 hover:text-[var(--dark-blue)] text-[16px]	cursor-pointer drop-shadow-2xl ">
          <Link legacyBehavior href="#home" ><a>Home</a></Link>
        </li>


        <li className="p-6 hover:text-[var(--dark-blue)] text-[16px]	cursor-pointer drop-shadow-2xl ">
        <Link legacyBehavior href="#about" ><a>About Us</a></Link>
        </li>


        
        <li className="p-6 hover:text-[var(--dark-blue)] text-[16px]	cursor-pointer drop-shadow-2xl ">
          <Link legacyBehavior href="#services" ><a>Search</a></Link>
        </li>


        <li className="p-6 hover:text-[var(--dark-blue)] text-[16px]	cursor-pointer drop-shadow-2xl ">
        <Link legacyBehavior href="#contact" ><a>Contact</a></Link>
        </li>


       


      </ul>













      <div onClick={handleNav} className="block md:hidden">


        {!nav ? <AiOutlineClose className="text-[var(--dark-blue)]" size={20} /> : <AiOutlineMenu className="text-[var(--dark-blue)]" size={20} />}
      </div>


      <div className={!nav ? "fixed  left-0 top-24 w-[100%] text-center	 h-[60vh] bg-[var(--white)] ease duration-500 py-24 lg:hidden z-30 " : "fixed left-[-100%] "}>

         
        <ul className="p-4 uppercase  text-[var(--dark-blue)]  ">


          <li className="p-4  hover:text-[var(--red)] text-[16px]	cursor-pointer drop-shadow-2xl ">
          <Link href="#home" >Home</Link>
          </li>


          <li className="p-4  hover:text-[var(--red)] text-[16px]	cursor-pointer drop-shadow-2xl ">
          <Link href="#about" >About Us</Link>
          </li>


          <li className="p-4  hover:text-[var(--red)] text-[16px]	cursor-pointer drop-shadow-2xl ">
          <Link href="#search" >Search</Link>
          </li>


          <li className="p-4  hover:text-[var(--red)] text-[16px]	cursor-pointer drop-shadow-2xl ">
          <Link href="#contact" >Contact</Link>
          </li>



        </ul>


      </div>


    </div>

    

    
  );
}

export default Navbar;