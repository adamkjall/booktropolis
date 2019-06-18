import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import SearchBox from "./SearchBox";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {
      searchChange,
      handleKeyPress,
      handleShowBestSellers,
      handleRouteChange
    } = this.props;
    return (
      <div>
        <Navbar color="muted" light expand="lg">
          <NavbarBrand onClick={() => handleRouteChange("home")}>
            <h1 className="f-subheadline-ns f1 ma0 pointer">Booktropolis</h1>
          </NavbarBrand>
          <NavbarToggler className="mt3" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem
                onClick={() => {
                  handleShowBestSellers();
                  handleRouteChange("home");
                }}
              >
                <h1 className="f2-ns f3 ma0 mr3 bb bw1 pointer">
                  Best sellers
                </h1>
              </NavItem>
              <NavItem className="mt-auto mr3">
                <h1 className="f2-ns f3 ma0 bb bw1 pointer">Favorites</h1>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <SearchBox
                  searchChange={searchChange}
                  handleKeyPress={handleKeyPress}
                />
              </NavItem>
              <NavItem onClick={() => handleRouteChange("register")}>
                <h1 className="f3-ns f4 ma0 mt1 mr3 pointer">Register</h1>
              </NavItem>
              <NavItem onClick={() => handleRouteChange("signIn")}>
                <h1 className="f3-ns f4 ma0 mt1 pointer">Login</h1>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
