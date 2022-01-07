import React from "react";
import {Container,Row} from 'react-bootstrap';
import Login from './Login';

const LoginPage = () => {
    return (
        <Container>
            <Row>
                <Login/>    
            </Row>
        </Container>
    )
}

export default LoginPage
