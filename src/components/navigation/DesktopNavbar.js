import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import MobileNavIcon from "../../assets/mobile-nav-icon.svg";
const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: ${(props) => props.theme.primary};
  color: white;

  height: 15vh;

  box-shadow: 0 10px 5px ${(props) => props.theme.accent};

  .logo {
    font-size: 7vh;
    text-shadow: 3px 3px 3px ${(props) => props.theme.accent};
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    list-style: none;
    width: 35vw;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 15vh;

    padding: 0 1rem;
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
    border-radius: 10px;

    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }

    &::after {
      content: "";
      height: 2px;
      width: 0;
      background: white;
      display: block;
      transition: width 0.5s;
    }
    &:hover::after {
      transform: width;
      width: 125%;
    }
  }
`;

const MobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;

  transition: transform 1s ease-in-out;
  transform: rotate(
    ${(props) => (props.displayMobileNavbar ? "540deg" : "0deg")}
  );

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const DesktopNavbar = (props) => {
  return (
    <MyDesktopNavbar>
      <div className="logo">Logo</div>
      <NavLink />
      <MobileNavButton
        displayMobileNavbar={props.displayMobileNavbar}
        onClick={props.toggleMobileNavbar}
      >
        <img src={MobileNavIcon} alt="Mobile Navbar's icon" />
      </MobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
