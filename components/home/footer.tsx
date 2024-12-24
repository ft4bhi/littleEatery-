import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t-2 border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row justify-between items-start ">

                {/* Logo Section */}
                <div className="lg:w-1/4 mb-8 lg:mb-0">
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                            <svg width="30" height="30" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_108_494)">
                                    <path fill="#000000" d="M231.66 49.6922L49.6922 231.66L49.6922 49.6922H231.66Z" />
                                    <path fill="#000000" d="M462.308 462.308L280.388 462.308L252.69 434.61L434.61 252.69L462.308 280.388V462.308Z" />
                                    <path fill="#FF9900" d="M252.69 434.61L231.66 434.61L231.66 462.308L252.69 434.61Z" />
                                    <path fill="#FF9900" d="M434.61 252.69L434.61 231.66L462.308 231.66L434.61 252.69Z" />
                                    <path fill="#000000" d="M231.66 231.66L49.6922 413.628L413.628 49.6922L231.66 231.66Z" />
                                    <path fill="#FF9900" d="M391.763 183.771L289.761 285.773L285.773 289.761L183.771 391.763L226.656 397.878L226.656 397.878L248.261 419.483L264.197 419.483L419.483 264.197L419.483 248.261L397.878 226.656L391.763 183.771Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_108_494">
                                        <rect width="512" height="512" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <b className="text-2xl font-poppins text-gray-800">FOOD</b>
                    </div>
                    <p className="text-gray-600 mt-4 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.
                    </p>
                    <div className="flex space-x-3 mt-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.11 0-2 .89-2 2v7h-4V8H16z" /><circle cx="8" cy="4" r="2" /><path d="M8 8h4v16H8z" /></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                </div>

                {/* Opening Hours Section */}
                <div className="lg:w-1/5 mb-8 lg:mb-0">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Opening Restaurant</h4>
                    <ul className="text-gray-600 text-sm">
                        <li className="mb-2">Sat-Wed: 09:00am-10:00PM</li>
                        <li className="mb-2">Thursday: 09:00am-11:00PM</li>
                        <li>Friday: 09:00am-8:00PM</li>
                    </ul>
                </div>

                {/* User Links Section */}
                <div className="lg:w-1/5 mb-8 lg:mb-0">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">User Link</h4>
                    <ul className="text-gray-600 text-sm">
                        <li className="mb-2"> <a href="#">About Us</a></li>
                        <li className="mb-2"> <a href="#">Contact Us</a></li>
                        <li className="mb-2"> <a href="#">Order Delivery</a></li>
                        <li className="mb-2"> <a href="#">Payment & Tax</a></li>
                        <li><a href="#">Terms of Services</a></li>
                    </ul>
                </div>


                {/* Contact Us Section */}
                <div className="lg:w-1/4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
                    <ul className="text-gray-600 text-sm">
                        <li className="mb-2">1234 Country Club Ave</li>
                        <li className="mb-2">NC 123456, London, UK</li>
                        <li>+0123 456 7891</li>
                    </ul>
                    <div className="mt-4 flex items-center">
                        <input type="email" placeholder="Enter your email..." className="bg-gray-100 rounded-md px-3 py-2 text-gray-700 text-sm w-full focus:outline-none" />
                        <button className="bg-orange-500 text-white rounded-md w-8 h-8 ml-2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75 6.75M19.5 12l-6.75-6.75" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;