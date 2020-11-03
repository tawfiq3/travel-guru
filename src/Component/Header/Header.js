import React from 'react';
import './Header.css'
import logo from '../images/Logo.png'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="justify-content-around" >
            <img src={logo} href="#home" alt="light" className="logo-size" />
            <input type="text" className="form-control searchBar" placeholder="Search your destination"/>
           <div className="d-flex justify-content-around">
           <Nav  >
                <Nav.Link style={{color: 'white'}} href="#news">News</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link style={{color: 'white'}} href="#destination">Destination</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link style={{color: 'white'}} href="#login">Log In</Nav.Link>
            </Nav>

           </div>

        </Navbar>
    );
};

export default Header;