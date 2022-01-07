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
        <Container>
            <Navbar collapseOnSelect expand="lg" className='navbar'  bg="transparent" variant="dark">
                <Navbar.Brand>
                    <Link className="link-nav" href="/">Super<span className="text-variant">HERO</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        {
                            isLogged 
                            ? <Button className="btn-login  mt-3" onClick={handleClick}>Logout</Button> 
                            : <Link className="btn-login  text-md-start text-center mt-3" to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default HeaderNavbar
