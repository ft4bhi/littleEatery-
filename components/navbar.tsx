"use client";
import Link from "next/link";
import Image from "next/image";

import darsanaLogo from "@/assets/darsanaLogo.png";

const Frame = () => {
  return (
    <div className="w-full relative h-[17.8px] text-left text-[4.44px] text-gray font-inter">
      <div className="absolute top-[3px] left-[146px] w-[88.5px] h-[9.5px]">
        <Link href="/about" className="absolute top-[0.46px] left-[0px] leading-[8.04px]">About</Link>
        <Link href="/gallery" className="absolute top-[0px] left-[19.08px] leading-[8.04px]">Gallery</Link>
        <Link href="/delivery" className="absolute top-[0px] left-[46.26px] leading-[8.04px]">Delivery</Link>
        <Link href="/contact" className="absolute top-[0px] left-[71.5px] leading-[8.04px]">Contact</Link>
      </div>
      <div className="absolute top-[0px] left-[301px] w-[46.3px] h-[17.8px] text-[5.55px] text-white font-david-libre">
        <img className="absolute top-[0px] left-[0px] w-[46.3px] h-[17.8px]" alt="" src="Rectangle 4.svg" />
        <div className="absolute top-[5.73px] left-[16.32px] leading-[8.04px] font-medium">MENU</div>
      </div>
      <img className="absolute top-[0px] left-[0px] w-[54.9px] h-[15.3px] overflow-hidden" alt="" src="logo 2.svg" />
      <b className="absolute h-[50.56%] w-[23.32%] top-[22.47%] left-[5.47%] text-[9px] tracking-[0.01em] leading-[100%] inline-block font-poppins text-black">The Little Eatery</b>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={darsanaLogo} height={32} alt="Darsana Logo" />
        </Link>
        <Frame />
      </div>
    </nav>
  );
};

export default Navbar;
