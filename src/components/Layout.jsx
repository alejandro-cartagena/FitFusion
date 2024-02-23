import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Container from 'react-bootstrap/Container';

export default function Layout() {
    return (
        
        <div>
            <Header />
            <Container>
            <main>
                <Outlet />
            </main>
            </Container>
        </div>
    )
}