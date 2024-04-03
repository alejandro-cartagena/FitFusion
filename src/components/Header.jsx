import React from "react";
import { Link, NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Dumbell from './icons/Dumbell'
import { GrClose } from "react-icons/gr";


function Header() {

  const [menuOpen, setMenuOpen] = React.useState(false)

  function toggleMenu() {
    setMenuOpen(prevVal => !prevVal)
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#E73539"
  }

  return (
    <header className={scroll ? "header scroll" : ""}>
      <Container className="header-container">

        {/* Burger Menu */}
        <div className="logo-container">
            <Link to="/" className="logo-svg-container">
              <Dumbell color='#E73539' />
              <span className="logo">FitFusion</span>
            </Link>
            {!menuOpen ? (
              <div className="burger-menu" onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            ) : (
              <GrClose onClick={toggleMenu} className="header-close-btn" />
            )}
        </div>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => isActive ? activeStyles : null}
              onClick={toggleMenu}
            >
              Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/fitness"
            style={({ isActive }) => isActive ? activeStyles : null}
            onClick={toggleMenu}
          >
            Fitness
          </NavLink>
          <NavLink
            className="nav-link"
            to="/nutrition"
            style={({ isActive }) => isActive ? activeStyles : null}
            onClick={toggleMenu}
          >
            Nutrition
          </NavLink>
          <NavLink
            className="nav-link"
            to="/plans"
            style={({ isActive }) => isActive ? activeStyles : null}
            onClick={toggleMenu}
          >
            Plans
          </NavLink>

          {/* Route in progress... */}
          {/* <NavLink
            className="nav-link"
            to={'/gymNearMe'}
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Gym Finder
          </NavLink> */}
        </nav>
      </Container>
    </header>
  );
}

export default Header;