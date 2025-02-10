import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { toggleCategorie } from "../../redux/slices/actionSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const SearchFor = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };
  return (
    <form
      onSubmit={SearchFor}
      className="flex justify-between items-center px-2 py-1 w-full bg-black/10 rounded-full lg:hidden md:flex sm:flex max-sm:flex"
    >
      <HiOutlineSquares2X2
        size={26}
        className="cursor-pointer"
        onClick={() => dispatch(toggleCategorie())}
      />

      <input
        type="text"
        className="border-none outline-none px-5 h-full w-[90%] bg-transparent"
        placeholder="What are you looking for?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button type="submit">
        <LuSearch size={20} className="cursor-pointer" />
      </button>
    </form>
  );
};

export default Searchbar;
