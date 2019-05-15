import React from "react";
import DatePicker from "react-date-picker";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import './App.css'
const apiKey = "IoNgBtPcB2BAFBogGs0w6VxskM9amKDP";

class App extends React.Component {
  state = {
    date: new Date(),
    books: [],
    searchfield: ""
  };

  componentDidMount() {
    this.fetchBooks(this.state.date);
  }

  fetchBooks() {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data.results.books
        })
      )
      .catch(console.log);
  }

  fetchBooksByDate(date) {
    const dateString = this.dateToString(date);
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/${dateString}/hardcover-fiction.json?api-key=${apiKey}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data.results.books
        })
      )
      .catch(console.log);
  }

  dateToString(date) {
    const year = date.getFullYear();
    // increment month by one because getMonth() starts from zero
    const month =
      date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return `${year}-${month}-${day}`;
  }

  onDateChange = date => {
    this.setState({ date });
    this.fetchBooksByDate(date);
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const search = this.state.searchfield.toLowerCase();
    const filteredBooks = this.state.books.filter(book => {
      return (
        book.title
          .toLowerCase()
          .includes(search) ||
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
