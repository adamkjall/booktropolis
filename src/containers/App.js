import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";

import {
  setSearchField,
  setDate,
  requestCurrentBestSellers,
  requestBestSellersByDate,
  requestBooksBySearch
} from "../actions";

const mapStateToProps = state => ({
  searchField: state.searchBooks.searchField,
  date: state.changeDate.date,
  books: state.requestBooks.books,
  isPending: state.requestBooks.isPending,
  error: state.requestBooks.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onSetDate: date => dispatch(setDate(date)),
  onRequestCurrentBestSellers: () => dispatch(requestCurrentBestSellers()),
  onRequestBestSellersByDate: date => dispatch(requestBestSellersByDate(date)),
  onRequestBooksBySearch: search => dispatch(requestBooksBySearch(search))
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
    const {
      onSearchChange,
      books,
      isPending,
      date
    } = this.props;

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
        <CardList books={books} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
