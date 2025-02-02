"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoNavigateOutline } from "react-icons/io5";
import { CiLocationOn, CiShare2 } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { BsBookmarkStar } from "react-icons/bs";
import React, { useState } from "react";
import Image from "next/image";
import { LuShare2 } from "react-icons/lu";
import { GiScalpel } from "react-icons/gi";
export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/image8.jpg");
  const imageArray = ["/image8.jpg", "/image3.jpg", "/image4.webp"];

  return (
    <div className="w-full flex flex-col lg:flex-row mt-10 px-4 lg:px-10 gap-8">
      {/* Left Section (Image & Gallery) */}
      <div className="w-full flex flex-col lg:w-1/2 h-auto">
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full h-[600px] rounded-xl shadow-2xl bg-gray-100 overflow-hidden">
            <Image src={selectedImage} alt="Selected" layout="fill" objectFit="cover" className="rounded-xl" />
          </div>
        </div>
        {/* Thumbnails */}
        <div className="flex mt-4 gap-3 justify-center">
          {imageArray.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer rounded-lg shadow-md border border-gray-300 hover:scale-110 transition-all"
            >
              <Image src={image} alt={`image ${index + 1}`} width={100} height={100} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Details & Actions) */}
      <div className="w-full lg:w-1/2 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900">Sagoon Beauty & Tattoo Studio</h1>

        {/* Rating & Reviews */}
        <div className="flex mt-4 items-center space-x-4">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-lg px-6 py-2 rounded-lg shadow-md">
            ⭐ 4.7
          </span>
          <p className="text-gray-600 font-semibold text-lg hover:text-blue-600 cursor-pointer">28+ Reviews</p>
        </div>

        {/* Location */}
        <div className="flex items-center mt-4 space-x-2">
          <CiLocationOn className="text-red-500 text-2xl" />
          <p className="text-gray-700 font-medium text-lg">Near L.I.C. Office, Nayagarh</p>
        </div>

        {/* Response Time */}
        <p className="mt-2 text-gray-500 font-medium text-sm">Response expected in minutes</p>
        {/* tatto */}
        <div className="flex items-center space-x-2 mt-2">
  <GiScalpel className="text-xl text-gray-700" />
  <p>Tatto |</p>
  <p className="text-blue-600 font-medium">5 years of service</p>
</div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { icon: <FiPhoneCall className="text-blue-600 text-3xl" />, text: "Call" },
            { icon: <FaWhatsapp className="text-green-500 text-3xl" />, text: "WhatsApp" },
            { icon: <IoNavigateOutline className="text-red-500 text-3xl" />, text: "Navigate" },
            { icon: <LuShare2 className="text-gray-500 text-3xl" />, text: "Share" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-blue-50"
            >
              {item.icon}
              <p className="text-gray-800 font-semibold text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Timing */}
        <div className="mt-6">
          <p className="text-lg font-bold text-green-700">Opening Hours:</p>
          <p className="text-gray-600 font-medium text-md">Sunday 9 AM – 9 PM</p>
          <p className="text-blue-500 hover:underline cursor-pointer mt-2 text-lg">See all timings</p>
        </div>

        {/* Booking Button */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all text-lg">
            Book a Service
            <BsBookmarkStar className="ml-2 text-2xl transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110" />
          </button>
        </div>

        {/* Address */}
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Full Address:</p>
          <p className="text-gray-600 font-medium">Near L.I.C. Office, Nayagarh, Odisha 752069, India</p>
        </div>

        {/* Amenities */}
        <p className="text-gray-800 font-semibold mt-6">Amenities:</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { text: "Private Rooms" },
            { text: "Sterilization Station" },
            { text: "Relaxing Waiting Areas" },
            { text: "Complimentary Beverages" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition-all hover:bg-green-50"
            >
              <FaCircleCheck className="text-3xl text-green-500" />
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
