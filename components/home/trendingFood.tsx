"use client";
import React, { useState, useRef, useEffect } from 'react';
import img1 from "@/assets/food/1.jpeg";
import img2 from "@/assets/food/2.jpeg";
import img3 from "@/assets/food/3.jpeg";
import img4 from "@/assets/food/4.jpeg";
import img5 from "@/assets/food/5.jpeg";
import img6 from "@/assets/food/6.jpeg";
import img7 from "@/assets/food/7.jpeg";

const TrendingFood = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemsPerPage = 3;
    const autoScrollInterval = 5000; // Time in ms for auto-scroll


    const items = [
        { name: "Straw Cake", price: 10, rating: 4.5, image: img1.src },
        { name: "Pancake", price: 12, rating: 4.5, image: img2.src },
        { name: "Special Pizza", price: 20, rating: 4.5, image: img3.src },
        { name: "Meat Ball", price: 15, rating: 4, image: img4.src },
        { name: "Cake", price: 8, rating: 4.5, image: img5.src },
        { name: "Toast", price: 5, rating: 4, image: img6.src },
        { name: "Sandwich", price: 7, rating: 4.5, image: img7.src },
    ];
    const totalPages = Math.ceil(items.length / itemsPerPage);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, autoScrollInterval);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [totalPages]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = containerRef.current.offsetWidth * currentPage;
        }
    }, [currentPage]);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handleDotClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full py-8 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <p className="text-sm text-gray-500 mb-2">- Popular Delivery -</p>
                    <h2 className="text-3xl font-bold text-gray-800">Trending Food</h2>
                </div>
                <div className="relative">
                    {/* Carousel container */}
                    <div
                        ref={containerRef}
                        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex-shrink-0 snap-start w-64 md:w-72 lg:w-80 h-auto rounded-2xl overflow-hidden shadow-md transform transition-transform duration-500 ease-in-out mr-4"
                            >
                                <img src={item.image} alt={item.name} className="w-full h-auto object-cover" />
                                <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">${item.price}</div>
                                <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75 w-full">
                                    <h3 className="font-medium mb-1">{item.name}</h3>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-yellow-500"
                                                fill={i < Math.floor(item.rating) ? 'currentColor' : 'none'}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.72-3.22c.63-.54.24-1.6-.58-1.6h-4.76l-1.45-4.43c-.25-.76-1.13-.76-1.38 0L9.43 8.35H4.67c-.83 0-1.22 1.06-.58 1.6l3.72 3.22-1.1 4.73c-.2.86.72 1.62 1.49 1.08L12 17.27z" />
                                            </svg>
                                        ))}
                                        <span className="text-xs ml-1">{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation dots */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${index === currentPage ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                        <button
                            className="w-8 h-8 bg-gray-200 bg-opacity-50 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-900"
                            onClick={handlePrevClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
                        <button
                            className="w-8 h-8 bg-gray-200 bg-opacity-50 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-900"
                            onClick={handleNextClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingFood;
