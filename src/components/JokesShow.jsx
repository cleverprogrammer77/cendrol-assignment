import React, { useState } from "react";

const JokesShow = ({ category }) => {
  const [joke, setJoke] = useState("");
  const [showJoke, setShowJoke] = useState(true);
  const fetchAnotherJoke = async () => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      const data = await response.json();
      console.log(data);
      setJoke(data.value);
    } catch (error) {
      console.error(error);
      setJoke("Failed to fetch joke. Please try again.");
    }
  };
  return (
    <div>
      {showJoke && (
        <div
          id="showjoke"
          className="locate-position shadow-2xl lg:rounded-md card p-5 lg:w-1/2 md:w-1/2 bg-gradient-to-r from-red-400 to-yellow-500 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 float-right text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setShowJoke(false)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <h1 className="text-center text-xl text-white font-bold">
            <span className=" block capitalize text-3xl text-white">
              {category}
            </span>
          </h1>
          <div className="w-full border border-black m-auto mt-6 shadow-xl flex flex-col items-center justify-center">
            <p className="text-center font-semibold text-blue-100   font-sans  m-5 text-xl md:text-3xl">
              {joke}
            </p>
            <button
              className="px-4 py-2 bg-blue-700  my-2 mx-3 cursor-pointer lg:w-96 md:96  rounded-md hover:bg-blue-600 font-bold text-white "
              onClick={fetchAnotherJoke}
            >
              Next joke
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JokesShow;
