import React from "react";

const DisplayQuote = ({ simpsonQuote }) => {
  return (
    simpsonQuote && (
      <div className="displayQuote">
        <h1>{simpsonQuote.character}</h1>
        <img src={simpsonQuote.image} alt={simpsonQuote.character} />
        <p>{simpsonQuote.quote}</p>
      </div>
    )
  );
};

export default DisplayQuote;
