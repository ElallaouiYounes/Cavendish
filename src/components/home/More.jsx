import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const More = () => {
  const products = useSelector((state) => state.data.products);
  const [items, setItems] = useState(12);
  const [heartColors, setHeartColors] = useState({}); // Track heart button colors by product ID

  const viewMore = () => {
    setItems((prevItems) => prevItems + 12);
  };

  const toggleHeartColor = (productId) => {
    // Toggle the color on click
    setHeartColors((prevState) => ({
      ...prevState,
      [productId]: prevState[productId] === "#4361ee" ? "red" : "#4361ee",
    }));
  };

  return (
    <div className="w-full py-14 max-sm:py-10 flex items-center flex-col gap-10 px-5 max-sm:px-0">
      {/* header */}
      <div className="w-full flex justify-center font-rubik font-semibold text-5xl max-sm:text-4xl">
        More to love
      </div>

      {/* items */}
      <div className="w-full h-full flex flex-wrap justify-center content-start gap-1 py-1">
        {/* product */}
        {products.slice(0, items).map((product) => (
          <div
            className="product-container w-[12em] h-[19em] rounded-[0.3px] mb-1 bg-white flex flex-col justify-between ring-1 ring-black/50 px-1 py-1"
            key={product.id}
          >
            {/* product image */}
            <div
              className="w-full h-[10.5em] bg-contain bg-center bg-no-repeat flex items-end justify-end relative group"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {/* Heart button */}
              <div
                className="absolute bg-[#4361ee] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: heartColors[product.id] || "#4361ee", // Use dynamic color
                }}
                onClick={() => toggleHeartColor(product.id)} // Handle color toggle
              >
                <AiOutlineHeart size={26} color="white" />
              </div>
            </div>

            {/* product content */}
            <div className="w-full flex flex-col">
              <p className="text-sm font-semibold">
                {product.name.length > 26
                  ? product.name.slice(0, 23) + "..."
                  : product.name}
              </p>
              <p className="text-sm font-medium text-black/80">
                {product.price + " DH"}
              </p>
              <p className="text-[0.8em] line-through text-gray-500">
                {product.oldPrice + " DH"}
              </p>
              <div className="flex items-center gap-1">
                <FaStar color="#FFD700" />
                <p className="text-sm">
                  {product.rating + " | " + product.sold + " sold"}
                </p>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="bg-black text-white border border-black text-center py-1 rounded-sm font-bold cursor-pointer mt-1 
             transition-all duration-300 ease-in-out 
             hover:bg-white hover:text-black hover:shadow-md"
              >
                Check It Out
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* expand button */}
      <div className="w-full flex items-center justify-center">
        <div
          className="bg-black text-white px-10 py-2 text-xl font-bold rounded-sm cursor-pointer"
          onClick={viewMore}
        >
          View More
        </div>
      </div>
    </div>
  );
};

export default More;
