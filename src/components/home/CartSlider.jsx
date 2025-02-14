import React, { useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, deleteProduct } from "../../redux/slices/dataSlice"
import { toggleCart } from "../../redux/slices/actionSlice"

const CartSlider = () => {
  const products = useSelector((state) => state.data.products);
  const dispatch = useDispatch();

  const total = products.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  // Disable scrolling when cart is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed w-full h-full bg-black/35 top-0 left-0 z-50 flex">
      {/* Clickable Background */}
      <div
        className="flex-1 h-full"
        onClick={() => dispatch(toggleCart())}
      ></div>

      {/* Sliding Cart */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="lg:w-[35%] md:w-[50%] sm:w-full max-sm:w-full bg-white h-full right-0 top-0 absolute rounded-l-lg shadow-lg overflow-hidden"
      >
        {/* Cart Content */}
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="w-full h-[10%] flex justify-between items-center px-4 py-4">
            <CgCloseR
              size={30}
              className="cursor-pointer hover:text-[#EA005E]"
              onClick={() => dispatch(toggleCart())}
            />
            <p className="text-4xl font-anton font-medium">CART</p>
          </div>

          {/* Cart Body (Scrollable) */}
          <div className="flex-1 px-4 py-4 overflow-y-auto scrollbar-hide scroll-smooth">
            {products.map((i) => (
              <div
                key={i.id}
                className="w-full h-24 bg-white mb-3 flex items-center ring-1 ring-gray-200 rounded-lg shadow-sm hover:ring-[#EA005E] transition-all"
              >
                {/* Product Image */}
                <div
                  className="w-[20%] h-[80%] bg-contain bg-center bg-no-repeat rounded-l-md"
                  style={{ backgroundImage: `url(${i.image})` }}
                ></div>

                {/* Product Details */}
                <div className="w-[70%] h-full px-2 py-3">
                  <div className="w-full h-[40%] flex items-center">
                    <p className="font-semibold text-sm truncate">{i.name}</p>
                  </div>
                  <div className="w-full h-[20%] flex items-center justify-between text-sm">
                    <p>Quantity:</p>
                    <div className="flex items-center gap-2">
                      <IoMdArrowDropleftCircle
                        className="cursor-pointer hover:text-[#EA005E]"
                        onClick={() => dispatch(decrement(i.id))}
                      />
                      <input
                        type="text"
                        placeholder={i.quantity}
                        disabled
                        className="w-[10%] h-full text-center border-none outline-none bg-transparent"
                      />
                      <IoMdArrowDroprightCircle
                        className="cursor-pointer hover:text-[#EA005E]"
                        onClick={() => dispatch(increment(i.id))}
                      />
                    </div>
                  </div>
                  <div className="w-full h-[40%] text-sm flex items-center gap-6 pt-2">
                    <p>Total Price:</p>
                    <p>{`${parseInt(i.price) * i.quantity} DH`}</p>
                  </div>
                </div>

                {/* Delete Product */}
                <div className="w-[10%] h-[80%] flex items-center justify-center">
                  <RiDeleteBinFill
                    size={25}
                    className="cursor-pointer text-red-600 hover:text-red-800"
                    onClick={() => dispatch(deleteProduct(i.id))}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="w-full h-[20%] px-4 py-2 bg-black/5 flex flex-col">
            <div className="flex justify-between text-sm text-black/70">
              <div>
                <p className="font-medium">Products:</p>
                <p>{products.length}</p>
              </div>
              <div>
                <p className="font-medium text-lg">Total (TVA included):</p>
                <p>{total + " DH"}</p>
              </div>
            </div>

            <div className="w-full flex items-center justify-between mt-4">
              <Link
                to="/cart"
                className="w-[48%] bg-black font-anton text-center py-2 text-xl rounded-md text-white hover:bg-[#EA005E] transition-colors"
              >
                Go To Cart
              </Link>
              <Link
                to="/checkout"
                className="w-[48%] bg-[#EA005E] text-white font-anton text-center py-2 text-xl rounded-md hover:bg-black transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartSlider;