"use client";
import React, { useState, useEffect } from 'react';

// Explicitly import images
import img1 from "@/assets/food/1.jpeg";
import img2 from "@/assets/food/2.jpeg";
import img3 from "@/assets/food/3.jpeg";
import img4 from "@/assets/food/4.jpeg";
import img5 from "@/assets/food/5.jpeg";
import img6 from "@/assets/food/6.jpeg";
import img7 from "@/assets/food/7.jpeg";

const Header = () => {
    const images = [
        img1.src, img2.src, img3.src, img4.src, img5.src, img6.src, img7.src,
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    }

    return (
        <header className="w-full">

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center py-8">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
                        Don't wanna <br /> Make you have <br /> A bad day
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Our job is delivering a delicious food with fast, free delivery and easy.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                        <button className="bg-orange-400 text-white px-6 py-3 rounded-md font-medium">
                            Menu
                        </button>
                        <button className="bg-white border-2 border-orange-400 text-orange-400 px-6 py-3 rounded-md font-medium flex items-center space-x-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 10.5a8.25 8.25 0 0116.5 0m-16.5 0a8.25 8.25 0 0016.5 0M5.25 10.5a8.25 8.25 0 01-1.75-4m18.5 0a8.25 8.25 0 00-1.75-4M5.25 10.5c0 7.18 6.82 10.5 13.5 10.5M21.75 10.5c0 7.18-6.82 10.5-13.5 10.5m-18-4.5a9 9 0 019-9m18 0a9 9 0 00-9-9" />
                            </svg>
                            </span>
                            <span> Google map </span>
                        </button>
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Image Carousel */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <div className="relative rounded-2xl overflow-hidden">
                        <img
                            src={images[currentImageIndex]}
                            alt="Restaurant Interior"
                            className="w-full h-[400px] object-cover rounded-2xl"
                        />


                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                                    onClick={() => handleDotClick(index)}
                                >
                                </button>
                            ))}

                        </div>

                        <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                            <button className="w-8 h-8 bg-gray-200 bg-opacity-50 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-900"
                                onClick={goToPreviousImage}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
                            <button className="w-8 h-8 bg-gray-200 bg-opacity-50 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-900"
                                onClick={goToNextImage}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;