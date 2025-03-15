import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/home/Navbar";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/home/Footer";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { addWishList, removeWishList } from "../redux/slices/wishlistSlice";
import { Rating, Tooltip } from "@mui/material";
import CartSlider from "../components/home/CartSlider";
import CatSlider from "../components/home/CatSlider";

const Product = () => {
  // Rating
  const [value, setValue] = useState(2);

  // Cart
  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.Actions.openCart);
  const openCategorie = useSelector((state) => state.Actions.openCategories);

  // Product Data
  const { id } = useParams();
  const products = useSelector((state) => state.data.products);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const product = products.find((product) => product.id == id);
  const productInWishList = wishlist.some((wish) => wish.id === product.id);

  const [images, setImages] = useState({
    img1: product.image,
    img2: product.image,
    img3: product.image,
    img4: product.image,
  });

  const [inWishList, setInWishList] = useState(productInWishList);
  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setInWishList(productInWishList);
  }, [wishlist, productInWishList]);

  const decrement = () => {
    setAmount(amount <= 1 ? 1 : amount - 1);
  };

  const increment = () => {
    setAmount(amount >= product.quantity ? product.quantity : amount + 1);
  };

  const favorite = () => {
    if (inWishList) {
      dispatch(removeWishList(product.id));
    } else {
      dispatch(addWishList({ product, amount }));
    }
  };


  return (
    <>
      <Navbar />
      {openCart && <CartSlider />}
      {openCategorie && <CatSlider />}
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-4 mt-24 lg:h-[98vh]">
        
       
        <div className="flex justify-center gap-16 lg:w-2/4">
         
          <div className="flex flex-col gap-4">
            {Object.values(images).map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-20 h-20 rounded-md cursor-pointer hover:scale-105 transition border-2 border-transparent hover:border-gray-500"
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>

          
          <img src={activeImg} alt="" className="w-80 aspect-square object-cover rounded-xl" />
        </div>

        
        <div className="flex flex-col gap-4 lg:w-2/4 lg:pl-9 max-lg:w-full max-lg:items-center">
  <div>
    <span className="text-violet-600 font-semibold">{product.name}</span>
    <h1 className="text-3xl font-bold">{product.name}</h1>
  </div>
  <p className="text-gray-700">about products</p>
  <h6 className="text-2xl font-semibold">{product.price} DH</h6>

  {/* Quantity Selector & Add to Cart */}
  <div className="flex flex-row items-center gap-12">
    <div className="flex flex-row items-center gap-5">
      <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl" onClick={decrement}>
        -
      </button>
      <span className="py-4 rounded-lg">{amount}</span>
      <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl" onClick={increment}>
        +
      </button>
    </div>
    <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">Add to Cart</button>
  </div>

  {/* Buy Now Button */}
  <div className="flex flex-row items-center gap-12">
    <Link to={`/checkout/${product.id}`}>
      <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full w-[415px]">Buy Now</button>
    </Link>
  </div>

  {/* Rating & Wishlist & Share */}
  <div className="flex flex-row items-center gap-6 mt-6">
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    <div className="flex flex-row items-center justify-center gap-6 w-full">
      {inWishList ? (
        <FaHeart
          className="cursor-pointer text-red-500 text-3xl hover:scale-110 transition-transform"
          onClick={favorite}
        />
      ) : (
        <Tooltip title="favorite" placement="bottom">
          <CiHeart
            className="cursor-pointer text-gray-500 text-3xl hover:text-red-500 hover:scale-110 transition-transform"
            onClick={favorite}
          />
        </Tooltip>
      )}
      <Tooltip title="share" placement="bottom">
        <IoShareSocialSharp
          className="cursor-pointer text-gray-500 text-3xl hover:text-blue-500 hover:scale-110 transition-transform"
        />
      </Tooltip>
    </div>
  </div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default Product;
