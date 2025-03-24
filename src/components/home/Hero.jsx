import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroSlides = useSelector((state) => state.data.heroSlides);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = (clientX) => {
    touchStartX.current = clientX;
    touchCurrentX.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX) => {
    if (!isDragging.current) return;
    touchCurrentX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dragDistance = touchStartX.current - touchCurrentX.current;
    
    if (dragDistance > 50) {
      nextSlide();
    } else if (dragDistance < -50) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative lg:h-[24em] md:h-[18em] max-sm:h-[12em] mt-[80px] py-4 overflow-hidden"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div
        className="w-full h-full bg-[#4361ee]  bg-cover bg-center bg-no-repeat aspect-square"
        style={{ backgroundImage: `url(${heroSlides[currentIndex].img})` }}
      ></div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {heroSlides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-[#4361ee]" : "bg-black/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
