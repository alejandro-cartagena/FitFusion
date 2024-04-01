import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default function FitnessLayout() {
  const activeStyles = {
    fontWeight: '600',
    textDecoration: 'underline',
    color: '#E73539',
  };

  return (
    <Container className="fitness-layout-container">
      <nav className="fitness-nav">
        <NavLink
          to={'.'}
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Overview
        </NavLink>

        <NavLink
          to={'anatomy'}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Anatomy
        </NavLink>

        <NavLink
          to={'calculator'}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Calculator
        </NavLink>

        <NavLink
          to={'progression'}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Progression
        </NavLink>
      </nav>
      <Outlet />
    </Container>
  );
}
