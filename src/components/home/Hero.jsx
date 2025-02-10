import React, { useState } from "react";
import { AiFillCaretRight,AiFillCaretLeft } from "react-icons/ai";

const Hero = () => {
    const [show,setShow] = useState(false);
    const [slide,setSlide] = useState(false);

    const rightClick = () => {
        setSlide(!slide)
    }

    const lefttClick = () => {
        setSlide(!slide)
    }

  return (
    <div className="lg:h-[24em] md:h-[18em] max-sm:h-[12em] mt-24 px-5 py-4" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {/* --------------------------- */}
      {show && <div className="w-14 h-14 max-sm:w-11 max-sm:h-11 bg-black/50 absolute left-0 lg:top-[16em] md:top-[13.5em] max-sm:top-[10.5em] rounded-r-sm flex items-center cursor-pointer" onClick={lefttClick}>
      <AiFillCaretLeft color="#ffffff" size={40}/>
      </div>}
      {/* --------------------------- */}
      {!slide && <div className="w-full h-full bg-[#EA005E] rounded-sm"></div>}
      {slide && <div className="w-full h-full bg-yellow-300 rounded-sm "></div>}
      {/* --------------------------- */}
      {show && <div className="w-14 h-14 max-sm:w-11 max-sm:h-11 bg-black/50 absolute right-0 lg:top-[16em] md:top-[13.5em] max-sm:top-[10.5em] rounded-l-sm flex items-center justify-center cursor-pointer" onClick={rightClick}>
      <AiFillCaretRight color="#ffffff" size={40}/>
      </div>}
    </div>
  );
};

export default Hero;