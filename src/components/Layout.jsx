import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';

export default function Layout() {
    return (
        
        <div className="layout">
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer/>
        </div>
    )
}