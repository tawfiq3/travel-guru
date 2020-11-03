import React from 'react';
import './Header.css'
import logo from '../images/Logo.png'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="justify-content-around" >
            <img src={logo} href="#home" alt="light" className="logo-size" />
            <Form >
                <FormControl type="text" placeholder="Search your destination"  className="searchBar" />
            </Form>
           <div className="d-flex justify-content-around">
           <Nav  >
                <Nav.Link className="invert-color" href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

           </div>

        </Navbar>
    );
};

export default Header;