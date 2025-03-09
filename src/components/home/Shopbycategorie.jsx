import React from "react";
import headset from "../../../public/headset1.png";
import laptop from "../../../public/laptop1.png";
import phone from "../../../public/phone1.png";
import games from "../../../public/games.png";
import rtx from "../../../public/rtx.png";
import desktop from "../../../public/desktop.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const Shopbycategorie = () => {
  const products = useSelector((state) => state.data.products);

  return (
    <div className="w-full lg:h-[30em] md:h-[50em] max-sm:h-[40em] mt-5 px-5">
      {/* Title */}
      <div className="w-full h-[15%] py-3 flex items-center justify-center font-rubik font-bold text-5xl max-sm:text-4xl">
        <p>Shop by categorie</p>
      </div>

      {/* Content */}
      <div className="w-full h-[85%] py-4 max-sm:py-0 flex items-center gap-3 lg:flex-row md:flex-col max-sm:flex-col">
        {/* Trends */}
        <div className="lg:w-1/2 lg:h-full md:h-[60%] max-sm:h-[50%] md:w-full max-sm:w-full h-full ring-1 ring-black/60 rounded-sm bg-gradient-to-r from-[#4361ee] via-[#2a4ac8] to-[#000000]">
          <div className="w-full h-[30%] px-5 flex gap-2 flex-col justify-center">
            <div className="text-4xl text-white font-rubik font-extrabold max-sm:text-3xl max-sm:mt-2">
              Trend Items
            </div>
            <div className=" bg-black text-white py-2 px-4 w-36 rounded-sm font-rubik font-bold cursor-pointer max-sm:py-1">
              Explore Now
            </div>
          </div>

          <div className="w-full h-[70%]  px-5 flex justify-between items-center">
            {products.slice(0, 3).map((product) => (
              <Link to={`/product/${product.id}`} className="h-[80%] w-[30%]  rounded-sm px-2 py-2 bg-white cursor-pointer" key={product.id}>
                <div className="w-full lg:h-[60%] md:h-[55%] max-sm:h-[60%] rounded-sm bg-contain bg bg-center bg-no-repeat" style={{backgroundImage:`url(${product.image})`}}></div>

                <div className="w-full h-[40%] max-sm:h-[55%] pt-1 text-sm leading-tight ">
                  <p className="font-semibold max-sm:text-[9.1px]">
                    {product.name.length > 20
                      ? product.name.slice(0, 17) + "..."
                      : product.name}
                  </p>
                  <p className="max-sm:text-[9.1px]">{product.price}</p>
                  <p className="line-through text-black/50 max-sm:text-[9.1px] text-[12px]">
                    {product.oldPrice}
                  </p>
                  <div className="flex items-center gap-1 ">
                    <FaStar color="#FFD700" />
                    <p className="text-sm max-sm:text-[9px]">
                      {product.rating + " | " + product.sold + " sold"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* categories */}
        <div className="lg:w-1/2 lg:h-full md:h-[60%] max-sm:h-[60%] md:w-full max-sm:w-full h-full flex flex-wrap gap-1">
          <Link
            to="/categories/desktops"
            className="w-[49.67%] h-[32.7%] max-sm:w-[49.48%] rounded-sm ring-1 ring-black/60 text-black/90 cursor-pointer flex"
          >
            <div className="h-full w-1/2 text-3xl font-bold font-rubik relative z-10 pl-2 pt-1 max-sm:text-[26px]">
              <p>Desktops</p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center pt-8 md:pt-4 px-1">
              <div
                className="w-full lg:h-[90%] md:h-full max-sm:h-full max-sm:mb-3 bg-contain bg-center bg-no-repeat md:mb-3"
                style={{ backgroundImage: `url(${desktop})` }}
              ></div>
            </div>
          </Link>

          <Link
            to="/categories/laptops"
            className="w-[49.67%] h-[32.7%] max-sm:w-[49.48%] rounded-sm ring-1 ring-black/60 text-black/90 cursor-pointer flex"
          >
            <div className="h-full w-1/2 text-3xl font-bold font-rubik relative z-10 pl-2 pt-1 max-sm:text-[26px]">
              <p>Laptops</p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center pt-8 md:pt-4 px-1">
              <div
                className="w-full lg:h-[90%] md:h-full max-sm:h-full max-sm:mb-3 bg-contain bg-center bg-no-repeat md:mb-3"
                style={{ backgroundImage: `url(${laptop})` }}
              ></div>
            </div>
          </Link>

          <Link
            to="/categories/phones"
            className="w-[49.67%] h-[32.7%] max-sm:w-[49.48%] rounded-sm ring-1 ring-black/60 text-black/90 cursor-pointer flex"
          >
            <div className="h-full w-1/2 text-3xl font-bold font-rubik relative z-10 pl-2 pt-1 max-sm:text-[26px]">
              <p>Phones</p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center pt-8 md:pt-4 px-1">
              <div
                className="w-full lg:h-[90%] md:h-full max-sm:h-full max-sm:mb-3 bg-contain bg-center bg-no-repeat md:mb-3"
                style={{ backgroundImage: `url(${phone})` }}
              ></div>
            </div>
          </Link>

          <Link
            to="/categories/games"
            className="w-[49.67%] h-[32.7%] max-sm:w-[49.48%] rounded-sm ring-1 ring-black/60 text-black/90 cursor-pointer flex"
          >
            <div className="h-full w-1/2 text-3xl font-bold font-rubik relative z-10 pl-2 pt-1 max-sm:text-[26px]">
              <p>Games</p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center pt-8 md:pt-4 px-1">
              <div
                className="w-full lg:h-[90%] md:h-full max-sm:h-full max-sm:mb-3 bg-contain bg-center bg-no-repeat md:mb-3"
                style={{ backgroundImage: `url(${games})` }}
              ></div>
            </div>
          </Link>

          <Link
            to="/categories/components"
            className="w-[49.67%] h-[32.7%] max-sm:w-[49.48%] rounded-sm ring-1 ring-black/60 text-black/90 cursor-pointer flex"
          >
            <div className="h-full w-1/2 text-3xl font-bold font-rubik relative z-10 pl-2 pt-1 max-sm:text-[26px]">
              <p>Components</p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center pt-8 md:pt-4 px-1">
              <div
                className="w-full lg:h-[90%] md:h-full max-sm:h-full max-sm:mb-3 bg-contain bg-center bg-no-repeat md:mb-3 lg:scale-110"
                style={{ backgroundImage: `url(${rtx})` }}
              ></div>
            </div>
          </Link>

          <Link
            to="/categories/accessories"
            className="w-[49.67%] h-[32.7%] max-sm:w-[49.48%] rounded-sm ring-1 ring-black/60 text-black/90 cursor-pointer flex"
          >
            <div className="h-full w-1/2 text-3xl font-bold font-rubik relative z-10 pl-2 pt-1 max-sm:text-[26px]">
              <p>Accessories</p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center pt-8 md:pt-4 px-1">
              <div
                className="w-full lg:h-[90%] md:h-full max-sm:h-full max-sm:mb-3 bg-contain bg-center bg-no-repeat  md:mb-3"
                style={{ backgroundImage: `url(${headset})` }}
              ></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shopbycategorie;
