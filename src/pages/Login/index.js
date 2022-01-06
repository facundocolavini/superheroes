import React from "react";
import {Container} from 'react-bootstrap';
import Login from '../Login/Login';

const LoginPage = () => {
    return (
        <Container>
             <h2 className='container'>Login</h2>
            <Login/>
        </Container>
    )
}

export default LoginPage
