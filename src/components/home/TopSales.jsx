import ProductCard from "./ProductCard";
import { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSelector } from "react-redux";

const TopSales = () => {
  const productData = useSelector((state) => state.data.products);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 750;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center mt-16 mb-10">
      <div className="text-center font-bold text-5xl mb-6">TOP SALES</div>
      <div className="w-full relative">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition duration-200"
          onClick={() => handleScroll("left")}
        >
          <BiChevronLeft size={30} />
        </button>
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex min-w-max">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition duration-200"
          onClick={() => handleScroll("right")}
        >
          <BiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default TopSales;
