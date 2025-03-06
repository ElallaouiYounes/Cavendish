import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import back from "../../public/poster.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const Login = () => {
  const [eye, setEye] = useState(false);
  const [pass, setPass] = useState("password");
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAction = (e) => {
    e.preventDefault();
    dispatch(login({email,password}));
    navigate('/')
  }
  const showEye = () => {
    {
      eye === false ? setEye(true) : setEye(false);
    }
    {
      pass === "password" ? setPass("text") : setPass("password");
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-[900px] overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Left Section - Login Form */}
        <div className="w-1/2 p-4">
          <div className="flex flex-col mb-6">
            <Link to="/" className="text-4xl font-serif mb-3">
              Cavendish
            </Link>
            <span className="text-3xl font-bold text-gray-800">
              Welcome back!
            </span>
            <p className="text-gray-500 text-sm ">
              Join us for exclusive deals and unlimited access to the best
              electronics!
            </p>
          </div>

          <form className="space-y-4" onSubmit={loginAction}>
            <div>
              <label className="block text-gray-700 text-sm font-semibold">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter your mail address"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold">
                Password *
              </label>
              <div className="relative">
                <input
                  type={pass}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {eye && (
                  <FaEye
                    size={20}
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={showEye}
                  />
                )}
                {!eye && (
                  <FaEyeSlash
                    size={20}
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={showEye}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            type="submit"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">Or, Login with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="w-full flex items-center justify-center bg-white border py-2 rounded-lg hover:bg-gray-100 gap-2">
            <FcGoogle size={30} />
            Sign up with Google
          </button>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>

        {/* Right Section - Illustration */}
        <div className="w-1/2 p-10 flex items-center justify-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-l-lg"
            style={{ backgroundImage: `url(${back})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
