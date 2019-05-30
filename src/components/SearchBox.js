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
        className="bg-lightest-blue br3 ba b--black bw1 pa2-ns pa1 ma2 shadow"
        type="search"
        placeholder=" Search for books"
        onChange={searchChange}
        onKeyPress={event => handleKeyPress(event)}
        ref={this.textInput}
      />
    );
  }
}

export default SearchBox;
