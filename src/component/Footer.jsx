import logo from "../assets/Logo.png";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-teal-700 to-teal-400 border-t border-teal-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <div className="flex items-center space-x-2">
              <div className="bg-white w-100 text-center rounded-sm">
                <img
                  src="Logo.png"
                  alt="elehealth logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <p className="mt-3 text-white text-sm leading-relaxed">
              Your trusted partner for health checkups, insurance, and more. We
              make healthcare simple and accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="#" className="hover:text-teal-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Annual Checkup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Get A Diagnosis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Insurances */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Top Insurances
            </h3>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="#" className="hover:text-teal-500">
                  Aetna
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Health Plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Blue Shield
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Health Net
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  View More
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© {new Date().getFullYear()} AMENF. All rights reserved.</p>
          <div className="space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-teal-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-500">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
