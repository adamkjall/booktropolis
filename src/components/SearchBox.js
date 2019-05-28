import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    const { handleKeyPress, searchChange } = this.props;
    return (
      <input
        className="br3 ba b--black bw1 mh2"
        type="search"
        placeholder=" Search for book"
        onChange={searchChange}
        onKeyPress={event => handleKeyPress(event)}
        ref={this.textInput}
      />
    );
  }
}

export default SearchBox;
