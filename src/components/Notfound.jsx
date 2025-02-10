import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      {/* 404 Text */}
      <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>

      {/* Message */}
      <h2 className="text-4xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/" // Replace with your homepage route
        className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Optional: Animation or Illustration */}
      <div className="mt-12">
        <svg
          className="w-24 h-24 text-gray-600 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Notfound;