import React from 'react'
import useUser  from '../../hooks/useUser';
import SearchBar from '../../components/SearchBar';
import Login from '../../components/Login';
import Team from '../../components/Team';
import { Container ,Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const {isLogged} = useUser();


    return (
        <>
            {isLogged &&
            <Container> 
                <Row className='mt-5 mb-5'>
                    <Col  xs={12} lg={6}>
                        <h1 className='title-home text-md-start text-center'>Search your Hero</h1>   
                    </Col>
                    <Col  xs={12} lg={6} >
                        <SearchBar  />
                    </Col>
              
                </Row>
                <Row>
                    <Team/>
                </Row>
            </Container>
            }
            {!isLogged && <Login/>}
        </>
    )
}

export default Home;
