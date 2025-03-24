import React from "react";
import { TbArrowBadgeRightFilled  } from "react-icons/tb"; // Import the 3 dots icon
import amdLogo from "../../assets/brands/amd.png";
import msiLogo from "../../assets/brands/msi.png";
import asrockLogo from "../../assets/brands/asrock.png";
import gigabyteLogo from "../../assets/brands/gigabyte.png";
import intelLogo from "../../assets/brands/intel.png";
import sonyLogo from "../../assets/brands/sony.png";
import xiaomiLogo from "../../assets/brands/xiaomi.png";
import appleLogo from "../../assets/brands/apple.png";

const brands = [
  { name: "AMD", logo: amdLogo },
  { name: "MSI", logo: msiLogo },
  { name: "ASRock Rack", logo: asrockLogo },
  { name: "GIGABYTE", logo: gigabyteLogo },
  { name: "Intel", logo: intelLogo },
  { name: "Sony", logo: sonyLogo },
  { name: "Xiaomi", logo: xiaomiLogo },
  { name: "Apple", logo: appleLogo },
];

const FeaturedBrands = () => {
  return (
    <div className="w-full px-6 mt-10 mb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Featured Brands</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto mt-4 scrollbar-hide items-center border-t border-gray-200 pt-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="min-w-[120px] bg-white shadow-md my-1 p-4 rounded-xl flex items-center justify-center"
          >
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="w-[100px] h-[50px] object-contain"
            />
          </div>
        ))}

        {/* Three dots as a separate image-like element */}
        <div className="min-w-[40px] bg-gray-200 p-4 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <TbArrowBadgeRightFilled  size={26} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
