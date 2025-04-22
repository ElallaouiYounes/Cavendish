import  { useState } from "react";
import SearchBar from "./SearchBar";
import NavButtons from "./NavButtons";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const Effacer = () => {
    setSearch("");
  };
  return (
    <div className="fixed top-0 left-0 w-full shadow-md bg-white z-20 h-24 pb-2 px-5 max-sm:px-2">
      {/* first row */}
      <div className="w-full h-[65%] flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center text-4xl font-serif gap-1 cursor-pointer text-black/85">
              <button onClick={() => navigate('/')} >Cavendish</button>
        </div>

        {/* Middle Section - Search */}
        <div className="hidden md:flex items-center relative mx-4 flex-1 max-w-xl">
          <div className="absolute left-3 text-gray-400 dark:text-gray-500">
            <RiSearchLine />
          </div>
          <input
            type="text"
            placeholder="Search for orders, products, customers..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="absolute right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            onClick={Effacer}
          >
            <RiCloseLine />
          </button>
        </div>

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
