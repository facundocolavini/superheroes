import React from 'react'
import {Link} from 'wouter';
import {Col,Row,Container} from 'react-bootstrap';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import './CardDetails.css';
const CardDetails = ({name,image,powerstats,appearance,biography,work,}) => {
    
    return (
        <Container>  
            <Row className='mt-5 d-flex justify-content-center'>
                <Col md={12} className='mt-5 d-flex justify-content-start'>
                    <Link to={'/'}><AiOutlineArrowLeft className='icon-go-back'/></Link>
                </Col>  
            </Row>
             <Row className='mt-5 '>
                <Col xs={12} md={6} lg={6}>
                    <img className="img-fluid" src={image.url} alt={name}/>          
                </Col>
                <Col xs={12} md={6} lg={6} className=' hero-container-info'>
                    <h1 className='hero-title-name'>{name}</h1>
                    <div className='d-flex d-flex justify-content-between border-bot'>
                        <h3 className='hero-detail-form'>Weight:</h3>
                        <span className='hero-detail-label'>{appearance.weight[1]}</span>
                    </div>
                    <div className='d-flex d-flex justify-content-between border-bot'>
                        <h3 className='hero-detail-form'>Height:</h3>
                        <span className='hero-detail-label'>{appearance.height[1]}</span>
                    </div>
                    <div className='d-flex d-flex justify-content-between border-bot'>
                        <h3 className='hero-detail-form'>Alias:</h3>
                        {
                            biography.aliases.map(alias => <span className='hero-detail-label' key={alias}>{alias.replace(";","")}</span>)  
                        }
                    </div>
                    <div className='d-flex d-flex justify-content-between border-bot'>
                        <h3 className='hero-detail-form'>Eye color:</h3>
                        <span className='hero-detail-label'>{appearance["eye-color"]}</span>
                    </div>
                    <div className='d-flex d-flex justify-content-between border-bot'>
                        <h3 className='hero-detail-form'>Hair color:</h3>
                        <span className='hero-detail-label'>{appearance["hair-color"]}</span>
                    </div>
                    <div className='d-flex d-flex justify-content-between border-bot'>
                        <h3 className='hero-detail-form'>Workplace:</h3>
                        <span className='hero-detail-label'>{work.base.replace(";","")}</span>
                    </div>
                </Col>
            </Row>  
        </Container>
    )
}

export default CardDetails
