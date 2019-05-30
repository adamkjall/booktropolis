import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

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
  isFlipped: state.updateFlippedCards.isFlipped
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
  constructor() {
    super();
    this.state = {
      inSearchMode: false
    };
  }
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

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log("hellooooo");
      this.handleSearch();
      this.setState({ inSearchMode: true });
    }
  };

  resetStartPage = () => {
    this.props.onSetDate(new Date());
    this.props.onRequestCurrentBestSellers();
    this.setState({ inSearchMode: false });
  };

  getWeekNumber(date) {
    // Copy date so don't modify original
    date = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [date.getUTCFullYear(), weekNo];
  }

  render() {
    const {
      onSearchChange,
      onCardFlip,
      books,
      isPending,
      date,
      isFlipped
    } = this.props;
    const [year, week] = this.getWeekNumber(this.props.date);
    return (
      <div className="tc ">
        <h1
          className="f-headline-ns f1 pointer mh3 mb4 mt2"
          onClick={this.resetStartPage}
        >
          Booktropolis
        </h1>
        <div className="flex justify-center mb3">
          <div className="">
            <a
              className="f5-ns f7 link ph3 pv2 bg-green br3 shadow ma2 b pointer grow"
              onClick={this.resetStartPage}
            >
              BEST SELLERS
            </a>
            <a className="f5-ns f7 link dim ph3 pv2 white bg-moon-gray br3 shadow ma2 b pointer grow">
              FAVORITES
            </a>
            <a className="f5-ns f7 link ph3 pv2 bg-green br3 shadow ma2 b pointer grow">
              REGISTER
            </a>
          </div>
        </div>
        <div className="justify-center">
          <SearchBox
            searchChange={onSearchChange}
            handleKeyPress={this.handleKeyPress}
          />
        </div>

        {!this.state.inSearchMode ? (
          <div className="flex flex-wrap justify-center mt4 mb3">
            <h2 className="f2-ns f3">
              New York Times Best Sellers week {week} {year}{" "}
            </h2>
            <div className="mt2">
              <DatePicker
                className="br3 pa1 ba b--black bw1 ml3"
                onChange={this.onDateChange}
                value={date}
                format=" d / M / y "
                minDetail="decade"
                maxDate={new Date()}
                required={true}
              />
            </div>
          </div>
        ) : <h2 className="f2-ns f3 mt4 mb3">
        Search results:
      </h2>}
        <div className="flex flex-wrap justify-center">
          {isPending ? (
            <h1>Loading</h1>
          ) : books ? (
            books.map((book, i) => (
              <Card
                key={i}
                id={i}
                isFlipped={isFlipped[i]}
                handleClick={onCardFlip}
                book={book}
              />
            ))
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
