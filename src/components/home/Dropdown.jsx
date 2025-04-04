import React, { useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [radius, setRadius] = useState("rounded-full");
  const [show, setShow] = useState(false);
  const Hover = () => {
    {
      radius === "rounded-full"
        ? setRadius("rounded-t-md")
        : setRadius("rounded-full");
    }
    setShow(!show);
  };

  const CategoriesItems = useSelector((state) => state.data.CategoriesItems);
  return (
    <div
      className="flex flex-col w-[46%] relative"
      onMouseEnter={Hover}
      onMouseLeave={Hover}
    >
      <div
        className={`flex items-center font-bold space-x-2 w-[164px] cursor-pointer bg-white ring-1 ring-black/20 px-4 py-1 ${radius} hover:${radius} `}
      >
        <HiOutlineSquares2X2 size={26} />
        <p>Categories</p>
      </div>

      {/* --------------- */}
      {show && (
        <div className="w-[150%] bg-white ring-1 ring-black/20 shadow-xl rounded-e-md rounded-b-md mt-1 absolute z-20 top-8">
          {/* ---------------- */}
          {CategoriesItems.map((item) => (<Link
            to={`/categories/${item.name}`}
            className="flex flex-row items-center justify-between pl-4 pr-1 cursor-pointer hover:bg-gray-100 hover:rounded-e-md text-gray-800 h-12"
          >
            <div className="flex flex-row gap-4 items-center w-[90%] h-full">
              <div className="w-[13%]">
              <img src={item.image} alt="" />
              </div>
              <p>{item.label}</p>
            </div>
            <RiArrowRightSLine size={20} />
          </Link>
        ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
