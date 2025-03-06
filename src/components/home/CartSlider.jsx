import React, { useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, deleteProduct } from "../../redux/slices/dataSlice";
import { toggleCart } from "../../redux/slices/actionSlice";

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
    <div className="fixed w-full h-full bg-black/50 top-0 left-0 z-50 flex">
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
          <div className="w-full h-[10%] flex justify-between items-center px-4 py-4 bg-[#4361ee] rounded-b-none shadow-md">
            <CgCloseR
              size={30}
              className="cursor-pointer text-white hover:text-[#f0f0f0] transition-all"
              onClick={() => dispatch(toggleCart())}
            />
            <p className="text-3xl font-anton font-medium text-white">CART</p>
          </div>

          {/* Cart Body (Scrollable) */}
          <div className="flex-1 px-4 py-4 overflow-y-auto scrollbar-hide scroll-smooth">
            {products.map((i) => (
              <div
                key={i.id}
                className="w-full h-24 bg-white mb-3 flex items-center ring-1 ring-gray-200 rounded-lg shadow-sm hover:ring-[#4361ee] transition-all transform hover:scale-105"
              >
                {/* Product Image */}
                <div
                  className="w-[20%] h-[80%] bg-contain bg-center bg-no-repeat rounded-l-md aspect-square"
                  style={{ backgroundImage: `url(${i.image})` }}
                ></div>

                {/* Product Details */}
                <div className="w-[70%] h-full px-2 py-3">
                  <div className="w-full h-[40%] flex items-center">
                    <p className="font-semibold text-sm text-gray-800 truncate">{i.name}</p>
                  </div>
                  <div className="w-full h-[20%] flex items-center justify-between text-sm text-gray-600">
                    <p>Quantity:</p>
                    <div className="flex items-center gap-2">
                      <IoMdArrowDropleftCircle
                        className="cursor-pointer hover:text-[#4361ee] transition-all"
                        onClick={() => dispatch(decrement(i.id))}
                      />
                      <input
                        type="text"
                        placeholder={i.quantity}
                        disabled
                        className="w-[10%] h-full text-center border-none outline-none bg-transparent text-gray-700"
                      />
                      <IoMdArrowDroprightCircle
                        className="cursor-pointer hover:text-[#4361ee] transition-all"
                        onClick={() => dispatch(increment(i.id))}
                      />
                    </div>
                  </div>
                  <div className="w-full h-[40%] text-sm text-gray-800 flex items-center gap-6 pt-2">
                    <p>Total Price:</p>
                    <p className="font-semibold text-lg">{`${parseInt(i.price) * i.quantity} DH`}</p>
                  </div>
                </div>

                {/* Delete Product */}
                <div className="w-[10%] h-[80%] flex items-center justify-center">
                  <RiDeleteBinFill
                    size={25}
                    className="cursor-pointer text-red-600 hover:text-red-800 transition-all"
                    onClick={() => dispatch(deleteProduct(i.id))}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="w-full h-[20%] px-4 py-2 bg-black/5 flex flex-col rounded-b-lg shadow-md">
            <div className="flex justify-between text-sm text-gray-800">
              <div>
                <p className="font-medium">Products:</p>
                <p>{products.length}</p>
              </div>
              <div>
                <p className="font-medium text-lg">Total (TVA included):</p>
                <motion.p
                  className="font-semibold text-xl text-black/60"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {total + " DH"}
                </motion.p>
              </div>
            </div>

            <div className="w-full flex items-center justify-between my-2">
              <Link
                to="/cart"
                className="w-[48%] bg-[#4361ee] font-anton text-center py-2 text-xl rounded-md text-white hover:bg-white hover:text-[#4361ee] hover:ring-2 hover:ring-[#4361ee] transition-all"
              >
                Go To Cart
              </Link>
              <Link
                to="/checkout"
                className="w-[48%] bg-black text-white font-anton text-center py-2 text-xl rounded-md hover:bg-white hover:ring-2 hover:ring-black hover:text-black transition-all"
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
