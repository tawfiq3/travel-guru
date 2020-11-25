import React from 'react';
import './Header.css'
import logo from '../images/Logo.png'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="justify-content-around" >
            <img src={logo} href="#home" alt="light" className="logo-size" />
            <input type="text" className="searchBar" placeholder="Search your destination" />
            <Nav>
                <NavLink to="/news" style={{color:"white"}}>News</NavLink>
            </Nav>
            <Nav>
                <NavLink to="/destination" style={{color:"white"}}>Destination</NavLink>
            </Nav>
            <Nav>
                <Button variant="warning" to="/login" style={{color:"black"}}>Log In</Button>
            </Nav>
        </Navbar>
    );
};

export default Header;