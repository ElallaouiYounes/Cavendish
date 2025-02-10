import React from "react";
import { CgCloseR } from "react-icons/cg";
import { PiDesktopTowerLight } from "react-icons/pi";
import { MdLaptopMac } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { IoLogoGameControllerB } from "react-icons/io";
import { PiGraphicsCardFill } from "react-icons/pi";
import { FaHeadset } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleCategorie } from "../../redux/slices/actionSlice";
import { Link } from "react-router-dom";

const CatSlider = () => {
  const dispatch = useDispatch();
  return (
    <div className="lg:hidden md:flex sm:flex max-sm:flex h-screen bg-black/50 top-0 z-10 w-full absolute">
      <div className="bg-white md:w-1/2 sm:w-full max-sm:w-full">
        {/* ------First row------ */}
        <div className="w-full h-[10%] flex justify-between items-center px-4">
          {/* ----------------- */}
          <div className="flex justify-center items-center text-4xl font-anton font-medium">
            <p>CATEGORIES</p>
          </div>
          {/* ----------------- */}
          <div className="w-[15%] h-full flex items-center justify-center">
            <CgCloseR
              size={30}
              className="cursor-pointer"
              onClick={() => dispatch(toggleCategorie())}
            />
          </div>
          {/* ----------------- */}
        </div>

        {/* ------Second row------ */}
        <div className="w-full h-[90%] px-4 py-4 flex flex-col space-y-4">
          {/* Desktops */}
          <Link to="/categories/desktops" className="w-full h-16 rounded-md bg-[#EA005E] shadow-md flex items-center px-6 gap-6 font-antonSC text-3xl text-white cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-white/30">
            <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <PiDesktopTowerLight
              size={40}
              className="relative z-10 transition-transform duration-300 group-hover:text-[#EA005E] group-hover:scale-110 text-white"
            />
            <p className="relative z-10 transition-colors duration-300 group-hover:text-[#EA005E]">
              Desktops
            </p>
          </Link>

          {/* Laptops */}
          <Link to="/categories/laptops" className="w-full h-16 rounded-md bg-[#EA005E] shadow-md flex items-center px-6 gap-6 font-antonSC text-3xl text-white cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-white/30">
            <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <MdLaptopMac
              size={40}
              className="relative z-10 transition-transform duration-300 group-hover:text-[#EA005E] group-hover:scale-110 text-white"
            />
            <p className="relative z-10 transition-colors duration-300 group-hover:text-[#EA005E]">
              Laptops
            </p>
          </Link>

          {/* Smartphones */}
          <Link to="/categories/phones" className="w-full h-16 rounded-md bg-[#EA005E] shadow-md flex items-center px-6 gap-6 font-antonSC text-3xl text-white cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-white/30">
            <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <LuSmartphone
              size={40}
              className="relative z-10 transition-transform duration-300 group-hover:text-[#EA005E] group-hover:scale-110 text-white"
            />
            <p className="relative z-10 transition-colors duration-300 group-hover:text-[#EA005E]">
              Smartphones
            </p>
          </Link>

          {/* Games */}
          <Link to="/categories/games" className="w-full h-16 rounded-md bg-[#EA005E] shadow-md flex items-center px-6 gap-6 font-antonSC text-3xl text-white cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-white/30">
            <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <IoLogoGameControllerB
              size={40}
              className="relative z-10 transition-transform duration-300 group-hover:text-[#EA005E] group-hover:scale-110 text-white"
            />
            <p className="relative z-10 transition-colors duration-300 group-hover:text-[#EA005E]">
              Games
            </p>
          </Link>

          {/* Desktop Components */}
          <Link to="/categories/components" className="w-full h-16 rounded-md bg-[#EA005E] shadow-md flex items-center px-6 gap-6 font-antonSC text-3xl max-sm:text-[27.6px] text-white cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-white/30">
            <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <PiGraphicsCardFill
              size={40}
              className="relative z-10 transition-transform duration-300 group-hover:text-[#EA005E] group-hover:scale-110 text-white"
            />
            <p className="relative z-10 transition-colors duration-300 group-hover:text-[#EA005E]">
              Desktop Components
            </p>
          </Link>

          {/* Accessories */}
          <Link to="/categories/accessories" className="w-full h-16 rounded-md bg-[#EA005E] shadow-md flex items-center px-6 gap-6 font-antonSC text-3xl text-white cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-white/30">
            <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <FaHeadset
              size={40}
              className="relative z-10 transition-transform duration-300 group-hover:text-[#EA005E] group-hover:scale-110 text-white"
            />
            <p className="relative z-10 transition-colors duration-300 group-hover:text-[#EA005E]">
              Accessories
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatSlider;