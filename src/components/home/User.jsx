import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { useSelector } from "react-redux";

const User = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <div className="w-full">
      {/* ----UnLogged User---- */}
      {!isLogged && (
        <>
          <div className="rotate-90 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black/60 absolute lg:right-[35px] lg:top-[60px] md:right-[86px] md:top-[60px] max-sm:right-[82px] max-sm:top-[60px]"></div>

          <div className="w-60 h-16 rounded-md bg-black/60 absolute lg:right-4 lg:top-[64px] md:right-[70px] md:top-16 max-sm:right-[66px] max-sm:top-16 px-2 flex items-center justify-between">
            <Link
              to="/login"
              className="w-[48%] h-[60%] bg-white text-black rounded-md font-anton flex items-center justify-center overflow-hidden group relative"
            >
              <span className="absolute inset-0 bg-black -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">
                Login
              </span>
            </Link>
            <Link
              to="/login"
              className="w-[48%] h-[60%] bg-[#EA005E] text-white rounded-md font-anton flex items-center justify-center overflow-hidden group relative"
            >
              <span className="absolute inset-0 bg-black -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">
                Sign Up
              </span>
            </Link>
          </div>
        </>
      )}

      {/* ----Logged User---- */}

      {isLogged && (
        <>
          <div className="rotate-90 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black/60 absolute lg:right-[35px] lg:top-[60px] md:right-[86px] md:top-[60px] max-sm:right-[82px] max-sm:top-[60px]"></div>

          <div className="w-60 h-60 rounded-md bg-black/60 absolute lg:right-4 lg:top-[64px] md:right-[70px] md:top-16 max-sm:right-[66px] max-sm:top-16 px-2 flex flex-col items-center justify-between py-2 gap-2">
            <div className="text-white text-center font-antonSC text-lg">
              <p>ELALLAOUI YOUNES</p>
            </div>
            <hr className="border border-white w-full" />
            <div className="flex flex-col w-full gap-1 text-white font-medium">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaClipboardList size={20} />
                <p>Orders</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <MdPayment size={20} />
                <p>Payment</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <MdLiveHelp size={20} />
                <p>Help center</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <IoSettings size={20} />
                <p>Settings</p>
              </div>
            </div>
            <hr className="border border-white w-full" />
            <Link
              to="/"
              className="w-full h-11 text-xl bg-[#EA005E] text-white rounded-md font-anton flex items-center justify-center overflow-hidden group relative"
            >
              <span className="absolute inset-0 bg-black -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">
                Log Out
              </span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
