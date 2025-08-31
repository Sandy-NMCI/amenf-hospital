import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex justify-center items-center my-14">
      <div className="md:w-[35%] rounded-md bg-gradient-to-tl from-gray-300 bg-gray-500 w-[90%]">
        <div className="header">
          <h1 className="md:text-4xl text-3xl text-center font-bold py-4 text-white">
            Sign Up
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
                  {<FaUserPlus className="text-white" />}
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                />
              </div>
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  {<SiMinutemailer className="text-white" />}
                </div>
                <input
                  type="email"
                  required
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
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
                  type="password"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="py-3 mt-8 mb-8 rounded-full text-center mx-10 text-white bg-gradient-to-r from-slate-900 to-slate-700 hover:bg-gradient-to-l hover:to-slate-600 hover:from-slate-600">
              <button>SUBMIT</button>
            </div>
            <div className="flex text-white pb-10 justify-center items-center">
              <span>Already have an account? </span>
              <span>
                <NavLink className="underline text-blue-800" to="/login">
                  {" "}
                  Login
                </NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
