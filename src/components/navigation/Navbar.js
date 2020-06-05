import React, { Component } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import styled from "styled-components";

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  overflow-x: hidden;
`;

class Navbar extends Component {
  componentDidMount = () => {
    window.addEventListener("resize", this.checkAndAutoHideMobileNavbar);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.checkAndAutoHideMobileNavbar);
  };
  state = {
    displayMobileNavbar: false,
  };

  toggleMobileNavbar = () => {
    this.setState((prevState) => {
      return {
        displayMobileNavbar: !prevState.displayMobileNavbar,
      };
    });
  };

  checkAndAutoHideMobileNavbar = () => {
    const screenWidth = window.innerWidth;

    if (this.state.displayMobileNavbar && screenWidth > 768) {
      this.setState({
        displayMobileNavbar: false,
      });
    }
  };

  render() {
    return (
      <MyNavbar>
        <DesktopNavbar
          displayMobileNavbar={this.state.displayMobileNavbar}
          toggleMobileNavbar={this.toggleMobileNavbar}
        />
        <MobileNavbar displayMobileNavbar={this.state.displayMobileNavbar} />
      </MyNavbar>
    );
  }
}

export default Navbar;
