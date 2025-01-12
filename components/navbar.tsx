"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-gray-200 bg-white relative z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-6 px-4 md:py-10">
        {/* Logo and Restaurant Name */}
        <div className="flex items-center font-poppins font-bold md:text-xl lg:text-[26px] text-[20px] relative px-8 md:p-0 lg:ml-0 md:ml-14 ml-6">
          <div className="absolute left-[-20px] md:left-[-50px] -top-[13px]">
            <Image
              src="./images/logo 2.png"
              alt="Logo"
              width={40}
              height={40}
              objectFit="contain"
            />
          </div>
          <div className="font-montserrat">The Little Eatery</div>
        </div>

        {/* Desktop Navigation */}
        

        {/* Desktop Menu Button */}
        <button >
          <div className="md:w-[117px] md:h-[45px] w-[90px] h-[38px] bg-[#EA6D27] rounded-tl-lg rounded-br-lg text-white font-davidLibre flex items-center justify-center text-[15.5px] hover:bg-[#df631b] drop-shadow-lg">
            MENU
          </div>
        </button>

        {/* Mobile Hamburger Button */}
        
      </div>

      {/* Mobile Navigation */}
     
        
        
      

      {/* Background Circles */}
      <div className="md:block hidden absolute z-0 h-[750px] w-[750px] border border-[#101A2433] rounded-full -top-[353.58px] -left-[399.69px]"></div>
      <div
        className="md:block hidden absolute h-[750px] w-[750px] border border-[#101A2433] rounded-full z-0 -top-[316.35px] -left-[483px]"
        style={{ transform: "rotate(17.41deg)" }}
      ></div>
      <div className=" md:block hidden absolute z-0 h-[750px] w-[750px] border border-[#101A2433] rounded-full -top-[326.58px] -left-[368.69px]"></div>
    </nav>
  );
};

export default Navbar;