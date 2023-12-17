import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex items-center justify-center">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-fill w-full h-full "
          alt="hero"
          src="/image.jpg"
        />
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <p className="mb-8 leading-relaxed">
            In the hustle and bustle of our daily lives, amidst the noise of the
            external world and the constant chatter of our thoughts, meditation
            stands as a sanctuary of silence. It is the art of turning inward, a
            journey to the serene landscapes of our own consciousness.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
