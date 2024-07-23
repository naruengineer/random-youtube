// import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-20 flex items-center justify-center bg-yellow-300">
      <div>
        <div className="font-bold text-2xl flex">
          <h1 className="text-4xl font-bold text-black">
            youtubeランダム検索
          </h1>
          <FaYoutube className="pt-1 ml-2 text-4xl text-red-600" />
        </div>
      </div>
      <div className="flex">
        {/* <Link href="login" className="px-4 text-l font-bold">
          〇
        </Link>
        <Link href="logout" className="px-4 text-l font-bold">
          〇
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
