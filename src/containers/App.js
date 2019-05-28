import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import "./App.css";

import {
  setSearchField,
  updateDate,
  requestCurrentBestSellers,
  requestBestSellersByDate,
  requestBooksBySearch,
  flipCard
} from "../actions";

const mapStateToProps = state => ({
  searchField: state.searchBooks.searchField,
  date: state.changeDate.date,
  books: state.requestBooks.books,
  isPending: state.requestBooks.isPending,
  error: state.requestBooks.error,
  isFlipped: state.updateFlippedCards.isFlipped,
  
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onSetDate: date => dispatch(updateDate(date)),
  onRequestCurrentBestSellers: () => dispatch(requestCurrentBestSellers()),
  onRequestBestSellersByDate: date => dispatch(requestBestSellersByDate(date)),
  onRequestBooksBySearch: search => dispatch(requestBooksBySearch(search)),
  onCardFlip: id => dispatch(flipCard(id))
});

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestCurrentBestSellers();
  }

  onDateChange = newDate => {
    this.props.onSetDate(newDate);
    this.props.onRequestBestSellersByDate(newDate);
  };

  handleSearch = () => {
    this.props.onRequestBooksBySearch(this.props.searchField.toLowerCase());
  };



  render() {
    const { onSearchChange, onCardFlip, books, isPending, date, isFlipped } = this.props;
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc m5">
        <h1 className="f-headline mv3">Booktropolis</h1>
        <div className="flex flex-wrap justify-center pv3">
          <SearchBox className="ma2" searchChange={onSearchChange} />
          <button onClick={this.handleSearch}>Search</button>
          <DatePicker
            className="br3 ba b--black bw1 ma2"
            onChange={this.onDateChange}
            value={date}
            format=" d / M / y "
            minDetail="decade"
            maxDate={new Date()}
            required={true}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {books
            ? books.map((book, i) => (
                <Card
                  key={i}
                  id={i}
                  isFlipped={isFlipped[i]}
                  handleClick={onCardFlip}
                  book={book}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
