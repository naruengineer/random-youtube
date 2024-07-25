// import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-20 flex items-center justify-center bg-yellow-300 ">
      <div>
        <div className="font-bold flex">
          <h1 className="font-bold text-black text-2xl sm:text-4xl">
            youtubeランダム検索
          </h1>
          <FaYoutube className="pt-1 ml-2 text-red-600 text-2xl sm:text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
