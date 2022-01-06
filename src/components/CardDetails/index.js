import React from 'react'
import {Col,Row,Container} from 'react-bootstrap';
const CardDetails = ({name,image,powerstats}) => {

    return (
        <Container>
            <h1>{name}</h1>
             <Row>
                <Col >
                    <img className="img-fluid" src={image.url} alt={name}/>          
                </Col>
                <Col className='border'>
                    <p>Intelligence:{powerstats.intelligence}</p>
                    <p>Strength:{powerstats.strength}</p>
                    <p>Speed:{powerstats.speed}</p>
                </Col>
            </Row>  
        </Container>
    )
}

export default CardDetails
