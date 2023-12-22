import { Link, useLocation, useNavigate } from "react-router-dom";
import LogingAn from "../../public/Login.json";
// import Swal from "sweetalert2";

import Lottie from "lottie-react";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Context from "../Hooks/Context";
const Login = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const location = useLocation();


  
  console.log(location);
  const navigate = useNavigate();
  const { signInWithGoogle, signInUser } = Context();
  const HandleFrom = (e) => {
    e.preventDefault();
    const emailvalue = e.target.email.value;
    const passwordvalue = e.target.password.value;
    signInUser(emailvalue, passwordvalue)
      .then((result) => {
		console.log(result);
        navigate(location.state ? location.state : "/");
        toast.success("Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    console.log(emailvalue, passwordvalue);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(location.state ? location.state : "/");
        toast.success(' Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
      .catch((error) => {
        toast.error(error.message)
        console.log(error.message);
      });
  };
  return (
    <div className=" md:flex  justify-around md:ml-10 ">
      <Helmet>
        <title> TASKPERT || LOGIN</title>
      </Helmet>
      <div
        className=" flex-1  mx-auto w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 shadow-lg shadow-slate-400  my-10 
	  "
      >
        <h1 className="text-2xl font-bold text-center ">Login</h1>
        <div className=" ml-28 md:ml-0  flex justify-center items-center mt-24">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={HandleFrom} className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                Sign in to our platform
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type={ShowPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                <span
                  className="relative text-xl  -top-8 left-60 md:left-72 "
                  onClick={() => setShowPassword(!ShowPassword)}
                >
                  {ShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div>
                <p className="flex justify-center items-center mx-auto text-blue-700 hover:underline dark:text-blue-500 text-xl gap-1 font-semibold">
                  {" "}
                  <FcGoogle></FcGoogle>{" "}
                  <Link onClick={handleGoogleLogin}>Login With Google</Link>
                </p>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>

        
      </div>
      <div className=" w-6/12 md:w-4/12 mx-auto ">
        <Lottie className="md:w-4/5  " animationData={LogingAn}></Lottie>
      </div>
    </div>
  );
};

export default Login;

