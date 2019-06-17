import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";
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
      inSearchMode: false,
      route: "home",
      isSignedIn: "false"
    };
  }
  componentDidMount() {
    this.props.onRequestCurrentBestSellers();
  }

  onRouteChange = route => {
    this.setState({ route: route })
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

  showBestSellers = () => {
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
      <div className="center tc w-90-ns">
        <NavBar
          searchChange={onSearchChange}
          handleKeyPress={this.handleKeyPress}
          handleShowBestSellers={this.showBestSellers}
          handleRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          !this.state.inSearchMode ? (
            <div className="mt3 mb3 mh2">
              <h3 className="f2-ns f3">
                New York Times Best Sellers week {week} {year}{" "}
              </h3>
              <div className="mt2">
                <DatePicker
                  style={{ color: "blue" }}
                  className="br3 pa1-ns ba b--black bw1"
                  onChange={this.onDateChange}
                  value={date}
                  format="d / M / y"
                  minDetail="decade"
                  maxDate={new Date()}
                  required={true}
                  clearIcon={null}
                  showLeadingZeros={false}
                />
              </div>
            </div>
          ) : (
            <h2 className="f2 mt3 mb2">Search results:</h2>
          )
        ) : this.state.route === "signIn" ? (
          <SignIn />
        ) : (
          <h1>Register</h1>
        )}
        <div className="flex flex-wrap justify-center">
          {isPending ? (
            <h1 className="f1-ns f2 mt4 mb3">Loading...</h1>
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
          ) : (
            <h2 className="f3 mt3">No results found :(</h2>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
