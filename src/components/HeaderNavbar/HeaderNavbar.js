import React from 'react'
import { Button ,Navbar, Nav,Container} from 'react-bootstrap';
import '../HeaderNavbar/Header.css';
import {Link} from 'wouter';
import useUser  from '../../hooks/useUser';

const HeaderNavbar = () => {
    const{isLogged,logout}= useUser();
    const handleClick = e => {
        e.preventDefault();
        logout();
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className="link-nav" href="/">SuperHeroes</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link className="link-nav" to="/myteam">My Team</Link>
                        {
                            isLogged 
                            ? <Button className="link-nav" onClick={handleClick}>Logout</Button> 
                            : <Link className="link-nav" to="/login">Login</Link>
                        }
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNavbar
