import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <img
          className="lg:h-auto max-w-full md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/image.jpg"
        />
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        
        <div className="text-center lg:w-2/3 w-full">
          
          <p className="mb-8 leading-relaxed">
          In the hustle and bustle of our daily lives, amidst the noise of the external world and the constant chatter of our thoughts, meditation stands as a sanctuary of silence. It is the art of turning inward, a journey to the serene landscapes of our own consciousness. 
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
