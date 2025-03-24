import back from "../../public/poster.png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUP } from "../redux/slices/authSlice";


const signup = () => {
  const [eye, setEye] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const users=useSelector(state=>state.auth.users);
  const navigate=useNavigate();
  const [alert, setAlert] = useState({ message: "", type: "" });

  

    // -----forme validation----
  const form = useForm();
  const { register, handleSubmit, formState,watch } = form;
  const { errors } = formState;


  const onSubmit = (data) => {
    console.log(data);
    const emailExist=users.find(user=>user.email===data.email);
    if (emailExist) {
      setAlert({ message: "Cet email est déjà utilisé !", type: "error" });
  } else {
      dispatch(signUP(data)); 
      setAlert({ message: "Compte créé avec succès !", type: "success" });
      setTimeout(() => navigate('/Login'), 1300); 
  }
  setTimeout(() => setAlert({ message: "", type: "" }), 3000);
  };


  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {alert.message && (
    <div className={`absolute top-5 z-10 right-50 px-12 py-3 rounded-lg text-white shadow-lg ${
      alert.type === "success" ? "bg-green-500" : "bg-red-500"
    }`}>
      {alert.message}
    </div>
  )}
      <div className="flex w-[1000px] overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Left_section - Ilistration */}
        <div className="w-1/2 p-10 flex items-center justify-center relative ">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-l-lg"
            style={{ backgroundImage: `url(${back})` }}
          ></div>
        </div>
        {/* RIghet_section - formulaire */}

        <div className="w-1/2 p-7 ">
          <div className="flex flex-col mb-3">
            <Link to="/" className="text-4xl font-serif mb-3">
              Cavendish
            </Link>
            <span className="text-3xl font-bold text-gray-800">
              Create a User account
            </span>
            <button className="w-full mt-2 flex items-center justify-center bg-white border py-2 rounded-lg hover:bg-gray-100 gap-2">
              <FcGoogle size={30} />
              Sign up with Google
            </button>
            <div className="flex items-center my-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">Or, Sign up with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <label className="block text-gray-700 text-sm font-semibold">
                User name * &ensp; &ensp;
                <span className="text-red-600">{errors.username?.message}</span>
              </label>
              <input
                type="text"
                placeholder="Entre your user name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                })}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold">
                Email * &ensp; &ensp;
                <span className="text-red-600">{errors.email?.message}</span>
              </label>
              <input
                type="text"
                placeholder="Entre your email address"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold">
                Password * &ensp; &ensp;
                <span className="text-red-600">{errors.password?.message}</span>
              </label>
              <div className="relative">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: 8,
                      message: "Minimum 8 characters required",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setEye(!eye)}
                >
                  {eye ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle size={15}  className={`transition-all duration-500 ${
                  watch("password")?.length>= 8 ? "text-green-500" : "text-red-500"
                }`} />
              <span className="text-gray-500">
                Must be at least 8 characters
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle size={15} className={`transition-all duration-500 ${
                /[!@#$%^&*(),.?":{}|<>]/.test(watch("password")) ? "text-green-500" : "text-red-500"
              }`} />
              <span className="text-gray-500">
                Must contain one special character
              </span>
            </div>

            

            <button
              className="w-full bg-indigo-600 text-white py-2  rounded-xl hover:bg-indigo-700"
              type="submit"
            >
              Create account
            </button>
            <div className="grid justify-items-center">
              <p className="text-gray-500">
                Already have an account ?{" "}
                <Link to="/Login" className="underline text-black font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
