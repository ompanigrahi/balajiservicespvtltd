import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLocationDot, FaAngleRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-extrabold uppercase leading-normal">
              BALAJI <span className="text-green-400">Services</span>
            </h1>
          </Link>
          <p className="text-gray-400 mt-4 text-lg">
            Deep in the heart of nature’s embrace, beyond the bustle of concrete
            trails, where roots whisper and leaves dance, we nurture life, one
            tree at a time.
          </p>
          <div className="flex gap-4 mt-6">
            <FaTwitter className="h-10 w-10 p-2 bg-gray-800 rounded-full hover:text-green-500" />
            <FaFacebookF className="h-10 w-10 p-2 bg-gray-800 rounded-full hover:text-green-500" />
            <FaInstagram className="h-10 w-10 p-2 bg-gray-800 rounded-full hover:text-green-500" />
          </div>
        </div>

        <div className="lg:ml-7 mt-2">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="space-y-3 text-lg">
            {[
              { name: "Tree Cutting", link: "/service" },
              { name: "House Colouring", link: "/service" },
              { name: "House Keeping", link: "/service" },
              { name: "Plot Cleaning", link: "/service" },
              {
                name: "Garden Maintenance",
                link: "/service",
              },
              { name: "Grass Cutting", link: "/service" },
            ].map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:text-green-400"
              >
                <FaAngleRight />
                <Link to={service.link}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3">
              <FaLocationDot className="text-xl" />
              <span className="text-gray-400">
                Vytila, Cochin, Kerala, India, 682304
              </span>
            </li>
            <li className="flex gap-3 hover:text-green-400">
              <IoCallSharp className="text-xl" />
              <span>+91 9847467833</span>
            </li>
            <li className="flex gap-3 hover:text-green-400">
              <MdEmail className="text-xl" />
              <span>amarmanna867@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <p className="mb-2 font-medium">Opening Days:</p>
          <p className="text-gray-400">Monday - Friday: 9 AM - 8 PM</p>
          <p className="text-gray-400">Saturday: 9 AM - 5 PM</p>
          <p className="mt-4 font-medium">Vacations:</p>
          <p className="text-gray-400">All Sundays & Official Holidays</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center mt-10 pt-5 text-gray-400">
        <p>
          Copyright ©2025 All rights reserved | This website is made by
          dhanazaweb
        </p>
      </div>
    </div>
  );
};

export default Footer;
