import React from "react";
import { Link, NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Dumbell from './icons/Dumbell'


function Header() {

  const [menuOpen, setMenuOpen] = React.useState(false)
  // const [scroll, setScroll] = React.useState(false)

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
            <div className="burger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => isActive ? activeStyles : null}
            >
              Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/fitness"
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Fitness
          </NavLink>
          <NavLink
            className="nav-link"
            to="/nutrition"
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Nutrition
          </NavLink>
          <NavLink
            className="nav-link"
            to="/plans"
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Plans
          </NavLink>
          <NavLink
            className="nav-link"
            to={'/gymNearMe'}
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Gym Finder
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}

export default Header;