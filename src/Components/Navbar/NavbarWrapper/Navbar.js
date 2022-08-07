import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiStarShuriken } from "react-icons/gi";
import Button from "../../UI/Button/Button";
function Navbar() {
  const styled = NavbarCSS;
  const location = useLocation();

  return (
    <div className={styled.navbarContainer}>
      <div className={styled.iconCircle}>
        <GiStarShuriken />
      </div>
      <div className={styled.line}></div>
      <div className={styled.navLinks}>
        <div className={styled.navLinks__background}></div>
        <NavLink exact to="/">
          <Button
            status={location.pathname === "/" ? "active" : "disabled"}
            className={styled.button}
            type="NavButton"
          >
            <h2>
              <span>00</span> HOME
            </h2>
          </Button>
        </NavLink>
        <NavLink exact to="/destination">
          <Button
            status={
              location.pathname === "/destination" ? "active" : "disabled"
            }
            className={styled.button}
            type="NavButton"
          >
            <h2>
              <span>01</span> DESTINATION
            </h2>
          </Button>
        </NavLink>
        <NavLink exact to="/crew">
          <Button
            status={location.pathname === "/crew" ? "active" : "disabled"}
            className={styled.button}
            type="NavButton"
          >
            <h2>
              <span>02</span> CREW
            </h2>
          </Button>
        </NavLink>
        <NavLink exact to="/technology">
          <Button
            status={location.pathname === "/technology" ? "active" : "disabled"}
            className={styled.button}
            type="NavButton"
          >
            <h2>
              <span>03</span> TECHNOLOGY
            </h2>
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
