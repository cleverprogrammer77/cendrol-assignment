import { useState } from "react";
import JokesShow from "./JokesShow";

const Card = ({ title, categoryname }) => {
  const [showJoke, setShowJoke] = useState(false);
  const [category, setCategory] = useState("");
  const handleClick = () => {
    setCategory(categoryname);
    setShowJoke(true);
  };
  return (
    <>
      <section onClick={handleClick}>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4 mx-auto text-white text-lg md:gap-y-3 md:w-fit bg-transparent">
          <div className="shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center m-3 rounded-md hover:border border-black capitalize text-white text-lg cursor-pointer false md:p-3">
            <h1 className=" text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6">
              {title}
            </h1>
            <p className="capitalize text-purple-800 text-sm lg:block md:block hidden">
              unlimited jokes on {categoryname}
            </p>
          </div>
        </div>
        <div>{showJoke && <JokesShow category={category} />}</div>
      </section>
    </>
  );
};

export default Card;
