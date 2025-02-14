import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const More = () => {
  const products = useSelector((state) => state.data.products);
  const [items,setItems] = useState(12);

  const viewMore = () => {
    setItems(prevItems => prevItems + 12);
  }

  return (
    <div className=" w-full  py-14 max-sm:py-10 flex items-center flex-col gap-10 px-5 max-sm:px-0">
      {/* header */}
      <div className="w-full flex justify-center font-rubik font-bold text-5xl max-sm:text-4xl">
        More to love
      </div>

      {/* items */}
      <div className=" w-full h-full flex flex-wrap justify-center content-start gap-2 py-1">
        {/* product */}

        {/* one row */}
        {products.slice(0, items).map((product) => (
          <div
            className="w-[12em] h-[19em] rounded-[0.3px] mb-1 bg-white flex flex-col justify-between ring-1 ring-black/50 px-1 py-1"
            key={product.id}
          >
            {/* product image */}
            <div
              className="w-full  h-[10.5em] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            {/* product content */}
            <div className="w-full flex flex-col">
              <p className="text-sm font-semibold">
                {product.name.length > 26
                  ? product.name.slice(0, 23) + "..."
                  : product.name}
              </p>
              <p className="text-sm font-medium text-black/85">
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
              <div className="bg-black text-white text-center py-1 rounded-sm font-bold cursor-pointer mt-1">
                Check It Out
              </div>
            </div>
          </div>
        ))}

        {/* three row */}
      </div>

      {/* expend button */}
      <div className="w-full flex items-center justify-center">
        <div className="bg-black text-white px-10 py-2 text-xl font-bold rounded-sm cursor-pointer" onClick={viewMore}>
          View More
        </div>
      </div>
    </div>
  );
};

export default More;
