import React from "react";
import ReactCardFlip from "react-card-flip";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
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
    } = this.props.book;
    console.log();
    return (
      <div className="br3 ba b--black-10 mw5 ma2 shadow-5 grow" onClick={this.handleClick}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front" >
            <img className="br3 br--top" src={book_image} alt="book cover" />
            <div className="pa2">
              <h3 className="mv0">{"#" + rank + " " + title}</h3>
            </div>
          </div>

          <div className="br3 br--top" key="back">
            <div className="pa2">
              <h3 className="mv0">{"#" + rank + " " + title}</h3>
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
  }
}
export default Card;
