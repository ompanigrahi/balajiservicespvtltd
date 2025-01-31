import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function footer() {
  return (
    <>
      <div className="foter">
        <div className="foter-top">
          <div className="w-[22%] h-[80%] flex flex-col text-left p-[20px] text-white">
            <Link to="/">
              <h1 className="text-[30px] mb-8 font-extrabold uppercase leading-normal">
                BALAJI <span className="text-green-400">services</span>
              </h1>
            </Link>
            <h3 className="text-[#c1bebe] text-[18px]">
              Far far away, behind the word <br /> mountains, far from the{" "}
              <br /> countries Vokalia and <br /> Consonantia, there live the{" "}
              <br /> blind texts.
            </h3>

            <div className="icons">
              <ul className="flex mt-14 gap-4">
                <li className="h-12 w-12 bg-[#2a2929] rounded-full flex items-center justify-center hover:text-[#216721]">
                  <FaTwitter className="text-2xl " />
                </li>

                <li className="h-12 w-12 bg-[#2a2929] rounded-full flex items-center justify-center hover:text-[#216721]">
                  <FaFacebookF className="text-2xl " />
                </li>

                <li className="h-12 w-12 bg-[#2a2929] rounded-full flex items-center justify-center hover:text-[#216721]">
                  <FaInstagram className="text-2xl " />
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[17%] h-[80%] ml-10  text-white foter-card flex flex-col text-left py-[20px] ">
            <h1 className="text-2xl mb-8 mt-2 font-[400] left-8">Services</h1>
            <ul className="flex flex-col justify-evenly gap-5 text-[18px]">

              <li className="transition duration-200 hover:text-[#216721]">
                <Link to="/" className="flex items-center space-x-2 leading-5">
                  <FaAngleRight />
                  <span>Garden Care</span>
                </Link>
              </li>
              <li className="transition duration-200 hover:text-[#216721]">
                <Link to="/" className="flex items-center space-x-2 leading-5">
                  <FaAngleRight />
                  <span>Lawn Mowing</span>
                </Link>
              </li>
              <li className="transition duration-200 hover:text-[#216721]">
                <Link to="/" className="flex items-center space-x-2 leading-5">
                  <FaAngleRight />
                  <span>Lawn Care</span>
                </Link>
              </li>
              <li className="transition duration-200 hover:text-[#216721]">
                <Link to="/" className="flex items-center space-x-2 leading-5">
                  <FaAngleRight />
                  <span>Gutter Cleaning</span>
                </Link>
              </li>
              <li className="transition duration-200 hover:text-[#216721]">
                <Link to="/" className="flex items-center space-x-2 leading-5">
                  <FaAngleRight />
                  <span>New Law Installation</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[22%] h-[80%] text-white foter-card flex flex-col text-left justify-start py-5">
            <h1 className="text-2xl mb-6 mt-2 font-semibold">
              Contact Information
            </h1>
            <ul className="space-y-5 text-[18px]">
              <li className="flex items-top space-x-4">
                <FaLocationDot className="txt-xl" />
                <span className="text-[#d9d1d1]">
                  203 Fake St. Mountain <br /> View, San Francisco,
                  <br /> California, USA
                </span>
              </li>
              <li className="flex items-top space-x-4 transition duration-150 hover:text-[#216721]">
                <IoCallSharp className="text-xl" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-4 transition duration-150 hover:text-[#216721]">
                <MdEmail className="text-xl" />
                <span>infoyourdomain@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="w-[15%] h-[80%] text-white foter-card flex flex-col text-left py-5">
            <h1 className="text-2xl font-semibold mb-6 mt-2">Business Hours</h1>
            <h3 className="mb-3">
              <span className="font-medium">Opening Days:</span>
            </h3>
            <p className="mb-3">Monday - Friday: 9 AM - 8 PM</p>
            <p className="mb-3">Saturday: 9 AM - 5 PM</p>

            <h3 className="mb-2">
              <span className="font-medium">Vacations:</span>
            </h3>
            <p>All Sundays & Official Holidays</p>
          </div>
        </div>
        <div className="foter-buttom text-white flex justify-center items-center ">
          <h3 className="mt-6">
            Copyright ©2025 All rights reserved | This template is made with by
            Colorlib
          </h3>
        </div>
      </div>
    </>
  );
}

export default footer;
