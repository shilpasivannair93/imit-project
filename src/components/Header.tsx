import React, { useState } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [activeNav, setActiveNav] = useState('home');

    const handleNavClick = (navItem: string) => {
        setActiveNav(navItem);
    };

    return (
        <div className="header-holder">
            <Navbar className="header-navbar" expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" style={{width: '125px'}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</Nav.Link>
                        <Nav.Link href="#about-us" className={activeNav === 'about-us' ? 'active' : ''} onClick={() => handleNavClick('about-us')}>About Us</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#service/option1">Option 1</NavDropdown.Item>
                            <NavDropdown.Item href="#service/option2">Option 2</NavDropdown.Item>
                            <NavDropdown.Item href="#service/option3">Option 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#clients" className={activeNav === 'clients' ? 'active' : ''} onClick={() => handleNavClick('clients')}>Clients</Nav.Link>
                        <Nav.Link href="#contact-us" className={activeNav === 'contact-us' ? 'active' : ''} onClick={() => handleNavClick('contact-us')}>Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button className="quote-quote-btn" variant="primary">Get a Quote</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr className="header-ruler" />
        </div>
        
    );
};

export default Header;
