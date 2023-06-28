import React from "react";
import Main from "./Main";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="h-fit flex flex-col items-center justify-center">
        <h1 className="m-3 text-4xl text-yellow-500 animate-bounce font-bold ">
          Chuck Norries
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4 p-4 mx-[150px] text-white text-lg md:gap-y-3 md:w-fit bg-transparent">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Header;
