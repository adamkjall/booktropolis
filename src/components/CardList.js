import React from "react";
import Card from "./Card";

const CardList = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {books
        ? books.map((book, i) => (
            <Card
              key={i}
              book={book}
            />
          ))
        : null}
    </div>
  );
};

export default CardList;
