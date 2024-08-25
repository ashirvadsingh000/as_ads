import React, { useState } from 'react';
import { FaSlash } from "react-icons/fa";
const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + 5) % 5);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 5);
  };
  return (

    <div className=" bg-slate-200">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 h-screen flex flex-col justify-center">
    <h1 className="text-xl font-bold mb-4 self-center flex justify-center gap-4 text-cyan-600"><FaSlash /> FEATURE POST <FaSlash /></h1>
      <h1 className="text-4xl font-bold mb-4 self-center">Our Post Work</h1>
      <div className="carousel-container relative ">
        <div className="carousel-inner relative w-full overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`carousel-slide w-full h-full flex justify-center items-center ${
                currentIndex === index ? 'active' : 'hidden'
              }`}
            >
              <div className="lg:flex lg:justify-between gap-4 ">
                <img src={`https://picsum.photos/800/600?random=${index + 1}`} alt={`Slide ${index + 1}`} className="w-full h-full object-cover lg:w-1/2 rounded-md border-2 border-cyan-500" />
                <img src={`https://picsum.photos/800/600?random=${index + 2}`} alt={`Slide ${index + 2}`} className="w-full h-full object-cover lg:w-1/2 rounded-md border-2 border-cyan-500 hidden lg:flex" />
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
        <div className="carousel-dots absolute bottom-[-60px] left-0 flex justify-center w-full mb-4">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`dot w-4 h-4 bg-gray-500 rounded-full mr-2 ${
                currentIndex === index ? 'bg-gray-900' : ''
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section4;