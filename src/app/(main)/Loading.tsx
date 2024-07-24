import React from "react";

const Loading = () => {
  return (
    <div
      className="p-28 flex flex-col justify-center items-center"
      aria-label="読込み中"
    >
      <div className="animate-spin h-10 w-10 border-4 border-black rounded-full border-t-transparent"></div>
      <div className="pt-5">Now Loading...</div>
    </div>
  );
};

export default Loading;
