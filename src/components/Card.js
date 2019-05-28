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
      className="br3 ba b--black-10 w-40 w-30-m w-20-l ma2 shadow-5 grow"
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
            <h3 className="mv0">
              {rank && "#" + rank + " "}
              {title}
            </h3>
          </div>
        </div>

        <div className="br3 br--top" key="back">
          <div className="pa2">
            <h3 className="mv0">
              {rank && "#" + rank + " "}
              {title}
            </h3>
            <h4 className="mv1">By {author}</h4>
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
              <a href={amazon_product_url}>Get it on Amazon</a>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
