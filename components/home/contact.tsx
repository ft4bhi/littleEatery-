import React from 'react';

const InfoSection = () => {
    return (
        <div className="w-full flex justify-center border-t-2 border-b-2 border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-around py-8 items-center ">
                {/* Delivery Section */}
                <div className="flex flex-col items-center text-center  pr-6">
                    <div className="bg-orange-400 rounded-full w-10 h-10 flex justify-center items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                    <h3 className="font-medium mb-1">delivery available</h3>
                    <p className="text-xs text-gray-500">Working time 10 am to 10 pm</p>
                </div>

                {/* Location Section */}
                <div className="flex flex-col items-center text-center  px-6">
                    <div className="bg-orange-400 rounded-full w-10 h-10 flex justify-center items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <h3 className="font-medium mb-1">Kappad,Kozhikode,Kerala</h3>
                    <p className="text-xs text-gray-500">Our Location</p>
                </div>

                {/* Phone Number Section */}
                <div className="flex flex-col items-center text-center pl-6">
                    <div className="bg-orange-400 rounded-full w-10 h-10 flex justify-center items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0021 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0v3m3-3v3m1.5 14.25v-4.5a2.25 2.25 0 00-2.25-2.25H9.75a2.25 2.25 0 00-2.25 2.25v4.5m7.5-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5" />
                        </svg>
                    </div>
                    <h3 className="font-medium mb-1">+0123 456 7891</h3>
                    <p className="text-xs text-gray-500">Phone Number</p>
                </div>
            </div>
        </div >
    );
};

export default InfoSection;