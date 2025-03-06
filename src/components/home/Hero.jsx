import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { useSelector } from "react-redux";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroSlides = useSelector((state) => state.data.heroSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div
      className="lg:h-[24em] md:h-[18em] max-sm:h-[12em] mt-24 px-5 py-4"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* --------------------------- */}
      {show && (
        <div
          className="w-10 h-14 max-sm:w-7 max-sm:h-8 bg-black/50 absolute left-0 lg:top-[16em] md:top-[13.5em] max-sm:top-[11em] rounded-r-sm flex items-center cursor-pointer"
          onClick={prevSlide}
        >
          <AiFillCaretLeft color="#ffffff" size={50} />
        </div>
      )}
      {/* --------------------------- */}

      <div
        className="w-full h-full bg-[#4361ee] rounded-sm bg-cover bg-center bg-no-repeat aspect-square"
        style={{ backgroundImage: `url(${heroSlides[currentIndex].img})` }}
      ></div>

      {/* --------------------------- */}
      {show && (
        <div
          className="w-10 h-14 max-sm:w-7 max-sm:h-8 bg-black/50 absolute right-0 lg:top-[16em] md:top-[13.5em] max-sm:top-[11em] rounded-l-sm flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <AiFillCaretRight color="#ffffff" size={40} />
        </div>
      )}
    </div>
  );
};

export default Hero;
