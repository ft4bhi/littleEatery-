import { memo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Footer = memo(() => {
  return (
    <footer className="w-full bg-white flex flex-col sm:flex-row md:justify-around justify-center items-center md:items-start py-6 box-border text-base text-gray-600 font-h3 border-t border-gray-200 ">
      <div className="flex flex-col md:items-start items-center sm:w-[250px] gap-6 sm:gap-5 sm:pr-4">
        <div >
          <img
            src="/images/footerlogo.png"
            className="w-30 h-30 object-cover"
            alt="logo"
          />
        </div>
        <div className="text-gray-500 text-[12px] leading-tight hidden sm:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.
        </div>
        <div className="flex flex-row gap-6 sm:gap-10 items-center justify-start  sm:justify-start">
          <div className="bg-[#fdb66f8a] p-1 rounded-full">
            <Link href="/">
              <svg
                className="w-8 h-8 text-[#f9803a] hover:text-[#2761b8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-[#fdb66f8a] p-1 rounded-full">
            <Link href="/">
              <svg
                className="w-8 h-8 text-[#f9803a] hover:text-[#cd2f8b]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-[#fdb66f8a] p-1 rounded-full">
            <Link href="/">
              <svg
                className="w-8 h-8 text-[#EA6D27] hover:text-[#2b6be3]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-[#fdb66f8a] p-1 rounded-full">
            <Link href="/">
              <svg
                className="w-8 h-8 text-[#EA6D27] hover:text-[#2b6be3]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex flex-col w-[200px] gap-6 text-center py-9">
        <h1>
          <b className="text-xl text-black">Opening Restaurant</b>
        </h1>
        <div className="text-gray-500 text-[15px] leading-tight">
          <p>Sat-Wed:09:00 AM-10:00 PM</p>
          <p>Thursday:09:00 AM-11:00 PM</p>
          <p>Friday:09:00 AM-8:00 PM</p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col w-[200px] gap-6 text-left py-9">
        <h1>
          <b className="text-xl text-black">User Link</b>
        </h1>
        <div className="text-gray-600 text-[15px] leading-tight flex flex-col">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            About us
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Contact Us
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Order Delivery
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Payment & Tax
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Terms of Services
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-[200px] md:gap-6 gap-2 text-center py-5 md:py-9">
        <h1>
          <b className="text-xl text-black">Contact Us</b>
        </h1>
        <div className="text-gray-500 text-[15px] leading-tight">
          <p>1234 Country Club Ave</p>
          <p>NC 123456, London, UK</p>
          <p>+0123 456 7891</p>
        </div>
        <div className="relative">
          <input
            className="p-3 rounded-full shadow-xl"
            placeholder="Enter your email..."
            type="email"
          />
          <button className="absolute right-0 bottom-3 bg-[#EA6D27] rounded-full">
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
