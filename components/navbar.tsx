"use client";
import Link from "next/link";
import Image from "next/image";

// import darsanaLogo from "@/assets/darsanaLogo.png";

const Navbar = () => {
  return (
    <nav className=" border-gray-200  bg-white relative z-50">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto py-10">
        <div className="flex flex-row font-poppins font-bold text-[26px] z-10 items-center relative">
          <div className="absolute -left-[50px] -top-[10px]">
            <Image
              src="/images/logo 2.png"
              alt="Logo"
              width={40}
              height={40}
              objectFit="contain"
            />
          </div>
          The Little Eatery
        </div>
        <div className="flex justify-around gap-8 text-[17.5px] font-inter">
          <Link href="/">About</Link>
          <Link href="/">Gallery</Link>
          <Link href="/">Delivery</Link>
          <Link href="/">Contact</Link>
        </div>
        <button>
          <div className=" w-[117px] h-[45px] bg-[#EA6D27]  rounded-tl-lg rounded-br-lg rounded-sm text-white font-davidLibre flex justify-center items-center text-[15.5px] hover:bg-[#df631b] drop-shadow-lg">
            MENU
          </div>
        </button>
      </div>
      <div className="absolute -z-10 h-[750px] w-[750px] border border-[#101A2433] rounded-full -top-[353.58px] -left-[399.69px]"></div>
      <div
        className="absolute h-[750px] w-[750px] border rounded-full -z-10 border-[#101A2433]  -top-[316.35px] -left-[483px]"
        style={{ transform: "rotate(17.41)" }}
      ></div>
      <div className="absolute -z-10 h-[750px] w-[750px] border border-[#101A2433]  rounded-full -top-[326.58px] -left-[368.69px]"></div>
    </nav>
  );
};

export default Navbar;
