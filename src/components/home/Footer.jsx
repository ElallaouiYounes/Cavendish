import React from "react";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Logo */}
          <div className="md:col-span-3 lg:col-span-1">
            <h2 className="text-4xl max-sm:text-3xl font-serif font-medium">
              Cavendish
            </h2>
            <p className="text-gray-400 mt-2">
              Your ultimate destination for cutting-edge electronics.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-gray-400 max-sm:flex max-sm:items-center max-sm:justify-evenly">
              <li className="hover:text-white">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/reviews">Reviews</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Shop</h3>
            <ul className="space-y-1 text-gray-400 max-sm:flex max-sm:items-center max-sm:justify-evenly">
              <li className="hover:text-white">
                <Link to="/categories/phones">Smartphones</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/categories/laptops">Laptops</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/categories/accessories">Accessories</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Policies */}
        <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-4 max-sm:w-full">
            <Link to="https://www.x.com/" className="hover:text-white">
              <FaSquareXTwitter />
            </Link>
            <Link to="https://www.linkedin.com/" className="hover:text-white">
              <FaLinkedin />
            </Link>
            <Link to="https://www.facebook.com/" className="hover:text-white">
              <FaFacebookSquare />
            </Link>
            <Link to="https://www.instagram.com/" className="hover:text-white">
              <FaInstagramSquare />
            </Link>
          </div>
          <div className="flex space-x-4 max-sm:justify-between max-sm:w-full">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/support" className="hover:text-white">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
