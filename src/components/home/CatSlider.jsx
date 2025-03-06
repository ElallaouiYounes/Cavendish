import React, { useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import { PiDesktopTowerLight, PiGraphicsCardFill } from "react-icons/pi";
import { MdLaptopMac } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleCategorie } from "../../redux/slices/actionSlice";
import { Link } from "react-router-dom";

const categories = [
  { name: "Desktops", icon: PiDesktopTowerLight, path: "/categories/desktops" },
  { name: "Laptops", icon: MdLaptopMac, path: "/categories/laptops" },
  { name: "Smartphones", icon: LuSmartphone, path: "/categories/phones" },
  { name: "Games", icon: IoLogoGameControllerB, path: "/categories/games" },
  { name: "Desktop Components", icon: PiGraphicsCardFill, path: "/categories/components" },
  { name: "Accessories", icon: FaHeadset, path: "/categories/accessories" },
];

const CatSlider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Disable scrolling when the slider is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling when the slider is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-start">
      <div className="bg-white w-full h-full max-w-md shadow-lg relative flex flex-col overflow-y-auto md:w-1/2">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-3xl font-bold">CATEGORIES</h2>
          <button
            onClick={() => dispatch(toggleCategorie())}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <CgCloseR size={30} />
          </button>
        </div>

        {/* Category List */}
        <div className="flex flex-col p-4 space-y-4">
          {categories.map(({ name, icon: Icon, path }) => (
            <Link
              key={name}
              to={path}
              className="flex items-center gap-6 px-6 py-4 text-xl font-bold text-white bg-blue-600 rounded-md shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-white/30"
            >
              <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <Icon size={40} className="relative z-10 text-white transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-110" />
              <p className="relative z-10 transition-colors duration-300 group-hover:text-blue-600">{name}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-full bg-black/770 w-1/2 md:flex max-sm:hidden" onClick={() => dispatch(toggleCategorie())}></div>
    </div>
  );
};

export default CatSlider;
