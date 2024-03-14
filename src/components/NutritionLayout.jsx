import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

export default function NutritionLayout() {
    const activeStyles = {
        fontWeight: '600',
        textDecoration: 'underline',
        color: '#E73539'
    }

    return (
        <Container className='fitness-layout-container'>
            <nav className='fitness-nav'>
                <NavLink
                    to={'.'}
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}>
                    Overview
                </NavLink>

                <NavLink
                    to={'bmi'}
                    style={({ isActive }) => isActive ? activeStyles : null}>
                    BMI
                </NavLink>

                <NavLink
                    to={'macros'}
                    style={({ isActive }) => isActive ? activeStyles : null}>
                    Macros
                </NavLink>

            </nav>
            <Outlet />
        </Container>
    )
}