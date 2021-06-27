import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationBar = styled.nav`
  display: flex;
  margin-top: 0px;
  justify-content: space-between;
  align-items: center;
  min-height: 9vh;
  background: #f2f2f2;
`;

const HorizontalMenu = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 50px;
  li:nth-child(2) {
    margin: 0px 21px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const ToggleIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  margin-right: 15px;
  @media (min-width: 700px) {
    display: none;
  }
`;

const LineHorizontalButton = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #8c0343;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "30%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100%;
  background: #262223;
  transition: height 0.4s ease-in-out;
  @media (min-width: 700px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  li {
    opacity: ${(props) => (props.open ? 0.5 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <NavigationBar>
        <a>
          <img
            className="degu__logo"
            src="https://lh3.googleusercontent.com/Vo6lE27L5U2QvrMu6sZYyEB6_q8M2BOanhT2sLO9RX33j7_MMrJXNiqTHDTOUE_pMIo_3OtpOgEwrQA_usFCcOzGJjpmXwH7n79gt-wPeHnQx7XzgGWaKc0dwGvTsupI-Qr97WoCzA=w1920-h1080"
            alt="De Gustibus"
          />
        </a>

        <HorizontalMenu>
          <li>
            <NavLink
              to="/"
              activeClassName="active_menu_navbar"
              className="nav_inactive_menu_navbar"
              exact={true}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className="nav_inactive_menu_navbar"
              activeClassName="active_menu_navbar"
            >
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className="nav_inactive_menu_navbar"
              activeClassName="active_menu_navbar"
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/AboutUs"
              className="nav_inactive_menu_navbar"
              activeClassName="active_menu_navbar"
            >
              About us
            </NavLink>
          </li>
        </HorizontalMenu>
        <ToggleIcon
          onClick={() => {
            toggleNav(!toggle);
          }}
        >
          <LineHorizontalButton open={toggle} />
          <LineHorizontalButton open={toggle} />
          <LineHorizontalButton open={toggle} />
        </ToggleIcon>
      </NavigationBar>

      <Overlay className="overlay" open={toggle}>
        <OverlayMenu open={toggle}>
          <li>
            <NavLink
              className="nav_inactive_menu_overlay"
              activeClassName="active_menu_overlay"
              onClick={() => {
                toggleNav(!toggle);
              }}
              to="/"
              exact={true}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="nav_inactive_menu_overlay"
              activeClassName="active_menu_overlay"
              onClick={() => {
                toggleNav(!toggle);
              }}
              to="/menu"
            >
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              className="nav_inactive_menu_overlay"
              activeClassName="active_menu_overlay"
              onClick={() => {
                toggleNav(!toggle);
              }}
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              className="nav_inactive_menu_overlay"
              activeClassName="active_menu_overlay"
              onClick={() => {
                toggleNav(!toggle);
              }}
              to="/AboutUs"
            >
              About Us
            </NavLink>
          </li>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
