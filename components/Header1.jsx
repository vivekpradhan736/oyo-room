"use client";
import Image from "next/image";
import Block from "./Block.jsx";
import Link from "next/link";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     const key = Cookies.get("user");
//     if(key){
//       setAuth(true);
//       return;
//     }
//     setAuth(false);
//   }, [auth]);
  
//   const router = useRouter();

//   const handleLogout = () => {
//     Cookies.remove("user");
//     setAuth(false);
//     router.push("/");
//   };
  return (
    <div className=" flex justify-between border-b-[1.5px] border-gray-200 items-center h-20 px-20">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
      <div className=" h-full flex border-l border-gray-200">
        <Block title={"OYO for business"} para={"Trusted by 5000 corporates."} icon={"/bag.png"} />
        <Block title={"List your property"} para={"Start earning in 30 min."} icon={"/building.png"} />
        <Block title={"0124-6201611"} para={"Call us to book now."} icon={"/call.png"} />
        <Block title={"English ▼"}  icon={"/globe.png"} />
        <div className="flex items-center px-3 hover:bg-[#F2F2F2]">
          <Image
            src={"/login.png"}
            alt="demo"
            width={200}
            height={200}
            className=" w-8 h-8  mr-5"
          />
          {auth ? (
            <h3
              className=" font-bold cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className=" text-[20px] font-semibold">
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;

