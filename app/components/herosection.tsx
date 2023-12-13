import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className=" md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/image.jpg"
            width={"640"}
            height={"100"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Meditation is the art of quieting the mind to discover the wisdom
            of the heart.
          </h1>
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
