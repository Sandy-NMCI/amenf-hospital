import React from "react";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaHouse } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex justify-between items-center px-10 py-4 bg-gradient-to-tr from-teal-100 to-teal-600 border-b border-teal-500">
        <div>
          <NavLink to="/" className="font-bold text-3xl">
            <img src={logo} alt="Logo" className="h-15 w-auto" />
            {/* <h1 className="ml-4 text-xl font-semibold">My Website</h1> */}
          </NavLink>
        </div>
        <div className="border border-white rounded-full p-2 justify-center items-center space-x-2 hidden md:flex ">
          <span className="text-white">{<IoIosSearch />}</span>
          <span>
            <input
              className="text-white outline-none w-3xs"
              type="text"
              defaultValue="Search for ....."
            />
          </span>
        </div>
        <div>
          <ul className="space-x-4 text-white hidden md:flex justify-center items-center">
            <NavLink to="/" className="hover:text-teal-700 cursor-pointer">
              {<FaHouse className="" title="Home" />}
            </NavLink>
            <NavLink to="/About" className="hover:text-teal-700 cursor-pointer">
              About Us
            </NavLink>
            <NavLink
              to="/Doctors"
              className="hover:text-teal-700 cursor-pointer"
            >
              Doctors
            </NavLink>
            <NavLink
              to="/Services"
              className="hover:text-teal-700 cursor-pointer"
            >
              Services
            </NavLink>
            <NavLink
              to="/Programs"
              className="hover:text-teal-700 cursor-pointer"
            >
              Programs
            </NavLink>
            <NavLink
              to="/Contact"
              className="hover:text-teal-700 cursor-pointer flex items-center justify-center"
            >
              Contact Us
            </NavLink>

            {/* <NavLink
              to="/login"
              className="hover:text-teal-700 cursor-pointer outline rounded-md p-2 outline-offset-1 outline-white"
            >
              Login
            </NavLink> */}
            {/*   <NavLink
              to="/signup"
              className="hover:text-blue-700 cursor-pointer outline rounded-md p-2 outline-offset-1 outline-white"
            >
              SignUp
            </NavLink> */}
          </ul>
          <ul className="md:hidden flex">
            <li onClick={handlerOpen} className="text-3xl cursor-pointer">
              {isOpen ? <IoClose /> : <IoMenu />}
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <motion.div
          key="dropdown"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // adjust speed here
          className="bg-white shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-tr from-teal-600 to-teal-200 text-white px-10 md:hidden flex">
            <ul className="space-x-4 text-white space-y-2 py-4 ">
              {/*  <li className="hover:text-blue-700 text-xl cursor-pointer">
                Home
              </li>
              <li className="hover:text-blue-700 text-xl cursor-pointer">
                About Us
              </li>
              <li className="hover:text-blue-700 text-xl cursor-pointer">
                Contact
              </li> */}
              <li className="hover:text-teal-700 cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-teal-700 cursor-pointer">
                <NavLink to="/About">About Us</NavLink>
              </li>
              <li className="hover:text-teal-700 cursor-pointer">
                <NavLink to="/Doctors">Doctors</NavLink>
              </li>
              <li className="hover:text-teal-700 cursor-pointer">
                <NavLink to="/Services">Services</NavLink>
              </li>
              <li className="hover:text-teal-700 cursor-pointer">
                <NavLink to="/Programs">Programs</NavLink>
              </li>
              <li className="hover:text-teal-700 cursor-pointer flex items-center justify-center">
                <NavLink to="/Contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
