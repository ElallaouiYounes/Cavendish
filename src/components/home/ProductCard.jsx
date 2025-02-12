/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
const Card = ({ product }) => {
  const { name, price, rating, sold, image } = product;

  const dispalName = name.length >= 24 ? name.slice(0, 22) + "..." : name;
  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-sm w-[230px] h-[300px] m-4 py-2 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="w-[90%] h-[70%] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className="flex flex-col justify-center w-[90%] h-[20%] font-semibold">
        <p>{dispalName}</p>
        <p>{price}</p>
      </div>
      <div className="flex flex-row items-center gap-2 w-[90%] h-[10%]">
        <FaStar size={20} color="#FFD700" />
        <p>{rating} | {sold}</p>
      </div>
    </div>
  );
};

export default Card;