import React from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ id, isFlipped, handleClick, book }) => {
  const {
    title,
    description,
    book_image,
    rank,
    author,
    publisher,
    rank_last_week,
    weeks_on_list,
    primary_isbn13,
    amazon_product_url
  } = book;

  return (
    <div
      id={id}
      className="bg-light-gray br3 ba b--black w-70 w-40-m w-20-l ma3 shadow-5 grow pointer"
      onClick={() => handleClick(id)}
    >
      <ReactCardFlip isFlipped={isFlipped}>
        <div key="front">
          <img
            className="br3 br--top w-100"
            src={book_image}
            alt="book cover"
          />
          <div className="pa2">
            <h2 className="mv0">
              <b>{rank && "#" + rank + " "}</b>
              {title}
            </h2>
          </div>
        </div>

        <div className="br3 br--top pa3" key="back">
          <div className="pa2">
            <h1 className="mv0">
              <b>{rank && "#" + rank + " "}</b>
              {title}
            </h1>
            <h3 className="mv1">By<b> {author}</b></h3>
            <hr />
            <p>{description}</p>
            <hr />
            <div className="tl">
              {rank_last_week ? (
                <div>
                  <b>Rank last week</b>: {rank_last_week}
                </div>
              ) : null}
              <b>Weeks on list:</b> {weeks_on_list} <br />
              <b>Publisher:</b> {publisher} <br />
              <b>ISBN:</b> {primary_isbn13} <br />
              <br />
              <a
                href={amazon_product_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get it on Amazon
              </a>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
