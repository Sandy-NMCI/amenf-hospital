import React, { useState } from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [active, setActive] = useState(false);

  const buttonStyleHandler = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-center items-center my-14">
      <div className="md:w-[35%] rounded-md bg-gradient-to-tl from-teal-100 bg-teal-500 w-[90%]">
        <div className="header">
          <h1 className="md:text-4xl text-3xl text-center font-bold py-4 text-white">
            Login
          </h1>
        </div>
        <div>
          <form action="">
            <div className="px-10">
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <div className="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  {<SiMinutemailer className="text-white" />}
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter email"
                />
              </div>
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  {<RiLockPasswordFill className="text-white" />}
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter password"
                />
              </div>
            </div>
            <div className="text-end mr-10 text-yellow-400 -mt-4 mb-4 hover:text-white hover:underline hover:cursor-pointer">
              <p>Forgot password?</p>
            </div>
            <div className="py-3 mt-8 mb-4 rounded-full text-center mx-10 text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:bg-gradient-to-l hover:to-teal-700 hover:from-teal-700">
              <button className="">LOGIN</button>
            </div>
            <div className="my-4 text-center">
              <h2 className="text-white text-md">Or Sign Up Using</h2>
              <div className="flex justify-center items-center space-x-2 my-4">
                <span>
                  {
                    <FaFacebookF className="bg-blue-600 text-3xl cursor-pointer rounded-full p-2" />
                  }
                </span>
                <span>
                  {
                    <FaXTwitter className="bg-white cursor-pointer text-3xl rounded-full p-2" />
                  }
                </span>
                <span>
                  {
                    <IoLogoGoogle className="bg-red-500 text-white cursor-pointer text-3xl rounded-full p-2" />
                  }
                </span>
              </div>
              <div className="my-10">
                <h2 className="text-white text-md">Or</h2>
                <NavLink
                  to="/signup"
                  className="text-white font-semibold"
                  onClick={buttonStyleHandler}
                  style={{ color: active ? "yellow" : "white" }}
                >
                  SIGN UP
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
