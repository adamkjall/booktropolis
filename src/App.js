import React from "react";
import DatePicker from "react-date-picker";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { fetchBooks, fetchBooksByDate } from "./services"
import "./App.css";

class App extends React.Component {
  state = {
    date: new Date(),
    books: [],
    searchfield: ""
  };

  componentDidMount() {
    fetchBooks(this.state.date).then(data => {
      this.setState({
        books: data.results.books
      });
    });
  }

  onDateChange = newDate => {
    this.setState({ date: newDate });
    fetchBooksByDate(newDate).then(data =>
      this.setState({
        books: data.results.books
      })
    );
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const search = this.state.searchfield.toLowerCase();
    const filteredBooks = this.state.books.filter(book => {
      return (
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search)
      );
    });
    return (
      <div className="tc mb5">
        <h1 className="f-headline mv3">Booktropolis</h1>
        <div className="flex justify-center pv3">
          <SearchBox searchChange={this.onSearchChange} />
          <DatePicker
            className="br3 ba b--black bw1 mh2"
            onChange={this.onDateChange}
            value={this.state.date}
            format=" d / M / y "
            minDetail="decade"
            maxDate={new Date()}
            required={true}
          />
        </div>
        <CardList books={filteredBooks} />
      </div>
    );
  }
}

export default App;
