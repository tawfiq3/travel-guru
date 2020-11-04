import React from 'react';
import './Header.css'
import logo from '../images/Logo.png'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="justify-content-around" >
            <img src={logo} href="#home" alt="light" className="logo-size" />
            <input type="text" className="searchBar" placeholder="Search your destination"/>
          
           <Nav  >
                <Nav.Link style={{color: 'white'}} href="#news">News</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link style={{color: 'white'}} href="#destination">Destination</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link style={{color: 'white'}} href="#login">Log In</Nav.Link>
            </Nav>

   

        </Navbar>
    );
};

export default Header;