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
                    to={'strength'}
                    style={({ isActive }) => isActive ? activeStyles : null}>
                    Strength
                </NavLink>

                <NavLink
                    to={'hypertrophy'}
                    style={({ isActive }) => isActive ? activeStyles : null}>
                    Hypertrophy
                </NavLink>

                <NavLink
                    to={'calisthenics'}
                    style={({ isActive }) => isActive ? activeStyles : null}>
                    Calisthenics
                </NavLink>

            </nav>
            <Outlet />
        </Container>
    )
}