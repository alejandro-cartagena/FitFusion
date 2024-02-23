import React from "react";
import { Link, NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';


function Header() {

  const [menuOpen, setMenuOpen] = React.useState(false)

  function toggleMenu() {
    setMenuOpen(prevVal => !prevVal)
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "darkred"
  }


  return (
    <header>
      <Container className="header-container">

        {/* Burger Menu */}
        <div className="logo-container">
            <Link className="logo" to="/">FitFusion</Link>
            <div className="burger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink
            className="nav-link"
            to="/fitness"
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Fitness
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
            to="/nutrition"
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Nutrition
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}

export default Header;