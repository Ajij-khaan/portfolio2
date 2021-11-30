import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <Navbar className="global-bg" collapseOnSelect expand="lg" sticky="top">
            <Container className="fw-bold">
                <Navbar.Brand as={HashLink} to="/home" className="fw-bolder fs-1 text-white my-3">Ak.</Navbar.Brand>
                <Navbar.Toggle className='bg-white' />
                <Navbar.Collapse className="justify-content-end text-dark">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/" className=" fw-bold text-white">HOME</Nav.Link>
                        <Nav.Link as={HashLink} to="/" className=" fw-bold text-white">ABOUT</Nav.Link>
                        <Nav.Link as={HashLink} to="/" className=" fw-bold text-white">RESUME</Nav.Link>
                        <Nav.Link as={HashLink} to="/" className=" fw-bold text-white"> CONTACT</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;