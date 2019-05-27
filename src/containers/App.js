import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import {
  fetchCurrentBestSellers,
  fetchBestSellersByDate,
  searchForBook
} from "../common/services";
import "./App.css";

import { setSearchField } from "../actions";

const mapStateToProps = state => ({
  searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value))
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      books: []
    };
  }

  componentDidMount() {
    fetchCurrentBestSellers(this.state.date).then(data => {
      this.setState({
        books: data.results.books
      });
    });
  }

  onDateChange = newDate => {
    this.setState({ date: newDate });
    fetchBestSellersByDate(newDate).then(data =>
      this.setState({
        books: data.results.books
      })
    );
  };

  handleSearch = () => {
    searchForBook(this.props.searchField.toLowerCase()).then(books =>
      this.setState({
        books: books
      })
    );
  };

  render() {
    /*const search = this.props.searchField.toLowerCase();
    const filteredBooks = this.state.books.filter(book => {
      return (
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search)
      ); 
    }); */
    return (
      <div className="tc m5">
        <h1 className="f-headline mv3">Booktropolis</h1>
        <div className="flex flex-wrap justify-center pv3">
          <SearchBox className="ma2" searchChange={this.props.onSearchChange} />
          <button onClick={this.handleSearch}>Search</button>
          <DatePicker
            className="br3 ba b--black bw1 ma2"
            onChange={this.onDateChange}
            value={this.state.date}
            format=" d / M / y "
            minDetail="decade"
            maxDate={new Date()}
            required={true}
          />
        </div>
        <CardList books={this.state.books} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
