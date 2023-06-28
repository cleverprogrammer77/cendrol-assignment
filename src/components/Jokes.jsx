import React, { useState } from "react";
import JokesShow from "./JokesShow";

const Jokes = () => {
  const [showJoke, setShowJoke] = useState(true);
  // return <div>{showJoke && <JokesShow />}</div>;
};

export default Jokes;
