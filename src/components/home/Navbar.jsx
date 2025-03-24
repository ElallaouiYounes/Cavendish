import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchBar from "./SearchBar";
import NavButtons from "./NavButtons";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const SearchFor = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full shadow-md bg-white z-20 h-24 pb-2 px-5 max-sm:px-2"
    >
      {/* first row */}
      <div className="w-full h-[65%] flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center text-4xl font-shrikhand gap-1 cursor-pointer text-black/85">
          <p><span className="text-[#4361ee] text-5xl">C</span>avendish</p>
        </div>

        {/* search bar */}
        <form
          onSubmit={SearchFor}
          className="flex items-center justify-center h-[70%] w-[30%] bg-black/10 rounded-full lg:flex md:hidden sm:hidden max-sm:hidden"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-[90%] px-6 rounded-l-full h-full border-none outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button
            className="w-[10%] h-full rounded-r-full flex items-center "
            type="submit"
          >
            <LuSearch size={20} />
          </button>
        </form>

        {/* buttons */}
        <div>
          <NavButtons />
        </div>
      </div>

      {/* second row */}
      <div className="h-[35%] lg:w-[70%] max-md:w-full max-sm:w-full flex justify-between items-center">
        {/* categories */}
        <div className="w-[50%] lg:flex md:hidden sm:hidden max-sm:hidden">
          <Dropdown />
        </div>

        {/* links */}
        <div className="flex items-center font-bold text-black/80 w-[60%] h-full justify-between lg:flex md:hidden sm:hidden max-sm:hidden">
          <Link to="/about" className="hover:underline">
            About us
          </Link>
          <Link to="/reviews" className="hover:underline">
            Reviews
          </Link>
          <Link to="/contact" className="hover:underline">
            Get in touch
          </Link>
        </div>

        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
