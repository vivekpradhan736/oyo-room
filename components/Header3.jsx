"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState(" ");

  return (
    <div className="bg-gradient-to-r from-[#d61630ed] via-[#d71c48d8] to-[#d61630ed] h-80" >
      <Image
                src={"/bg-banner.jpg"}
                alt="demo"
                width={200}
                height={200}
                className="absolute left-[10vw] top-[9.5vw] w-[80vw] h-[14.5vw] mr-5 z-[-1] "
              />
      <div className=" p-9">
        <h2 className=" text-[2.3vw] text-[#ffffff] text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex justify-center my-5 mx-20 ">
          <input
            type="text"
            placeholder="Search..."
            className=" w-6/12  h-16 outline-none px-3 text-lg border-r-1 border-gray-400 rounded-l-md"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          {/* <input
            type="date"
            placeholder="Search..."
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="date"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg col-span-1"
          /> */}

          <button
            type="submit"
            className=" h-16 px-3 py-2 w-72 bg-green-500 hover:cursor-pointer hover:bg-green-600 duration-200 text-white text-xl rounded-r-md"
          >
            <Link href={`/hotels?city=${city}`}>Search</Link>
          </button>
        </div>
        <div className="flex mx-80 my-5 font-bold">
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer text-2xl text-white mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className=" h-14 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 bg-[#dc3a5d] hover:bg-[#80112B] rounded-xl"
          >
            Homestay in India hotels
          </button>
          <button
            type="submit"
            className=" h-14 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 bg-[#dc3a5d] hover:bg-[#80112B] rounded-xl"
          >
            India • Guests
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;