//import {useNavigate} from 'react-router-dom'

import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import ProductPromo from "./ProductPromo";
import { useState, useEffect } from "react";

//import ProductCard from './ProductCard'
const ShopByCategory = () => {
  // const navigate = useNavigate()

  // const NaviagteProduct = () =>  {
  //        navigate('')
  // }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  const productPromo = {
    img: "../../../public/rm.webp",
    OldPrix: "6999dh",
    NewPrix: "5999dh",
    Rating: "4.5|500 +sold",
  };
  

  const {products} = useSelector(s => s.data)

  

  return (
    <div className="w-full flex flex-col justify-center mt-24">
      <div className="text-center font-bold text-5xl mb-6">
        SHOB BY CATEGORY
      </div>

      <div className=" flex flex-col lg:flex-row w-full  gap-6 p-4">

        <div className="h-full  bg-[#fff7e6]  p-6 rounded-md border border-black flex-1 flex flex-col gap-6 ">

          <div>
            <p className="text-xl font-bold text-black mb-6">
              Everything is Good!
            </p>
            <button className="bg-black text-white font-bold w-36 h-10  rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out">
              Shop now
            </button>
          </div>

          <div className="flex justify-center gap-3">
            <ProductPromo productPromo={productPromo} />
            <ProductPromo productPromo={productPromo} />
            <ProductPromo productPromo={productPromo} />
          </div>

        </div>


        <div className="flex-1 grid grid-cols-2  content-between  gap-3">
          {products.map((product) => {
            if(product.id > 6 ) {
                 return null ; 
            }
            return <CategoryCard key={product.id} category={product} />;
          })}
        </div>

      </div>
    </div>
  );
};

export default ShopByCategory;
