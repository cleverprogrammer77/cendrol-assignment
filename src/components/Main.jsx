import React, { useState } from "react";
import Card from "./Card";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  return (
    <>
      <Card
        categoryname="animal"
        onClick={() => handleCategoryClick("animal")}
        title="animal"
      />
      <Card
        categoryname="Career"
        onClick={() => handleCategoryClick("Career")}
        title="Career"
      />
      <Card
        categoryname="Celebrity"
        onClick={() => handleCategoryClick("Celebrity")}
        title="Celebrity"
      />
      <Card
        categoryname="dev"
        onClick={() => handleCategoryClick("dev")}
        title="dev"
      />
      <Card
        categoryname="explicit"
        onClick={() => handleCategoryClick("explicit")}
        title="explicit"
      />
      <Card
        categoryname="fashion"
        onClick={() => handleCategoryClick("fashion")}
        title="fashion"
      />
      <Card
        categoryname="food"
        onClick={() => handleCategoryClick("food")}
        title="food"
      />
      <Card
        categoryname="history"
        onClick={() => handleCategoryClick("history")}
        title="history"
      />
      <Card
        categoryname="money"
        onClick={() => handleCategoryClick("money")}
        title="money"
      />
      <Card
        categoryname="movie"
        onClick={() => handleCategoryClick("movie")}
        title="movie"
      />
      <Card
        categoryname="music"
        onClick={() => handleCategoryClick("music")}
        title="music"
      />
      <Card
        categoryname="political"
        onClick={() => handleCategoryClick("political")}
        title="political"
      />
      <Card
        categoryname="religion"
        onClick={() => handleCategoryClick("religion")}
        title="religion"
      />
      <Card
        categoryname="science"
        onClick={() => handleCategoryClick("science")}
        title="science"
      />
      <Card
        categoryname="sport"
        onClick={() => handleCategoryClick("sport")}
        title="sport"
      />
      <Card
        categoryname="travel"
        onClick={() => handleCategoryClick("travel")}
        title="travel"
      />
    </>
  );
};

export default Main;
