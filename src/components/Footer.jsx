import React from "react"
import { Container } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
            <Container className="footer-container">
                <div className="footer-items-container">
                    <h3>Take Fitness to the <span style={{color: '#E73539'}}>next</span> level</h3>
                    <div className="social-media-icons">
                        <FaInstagram className="social-media-icon"/>
                        <FaFacebook className="social-media-icon"/>
                        <FaLinkedin className="social-media-icon"/>
                    </div>
                </div>
                <div className="footer-items-container">
                    <p className="footer-p"> <MdOutlineEmail /> info@fitfusion.com</p>
                    <p className="footer-p">© 2024 FitFusion</p>
                </div>
            </Container>
        </footer>
    )
}