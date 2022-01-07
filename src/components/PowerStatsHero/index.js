import React from 'react'
import {Row,Container,Col} from 'react-bootstrap';
const PowerStatsHero = ({powerStats}) => {
//Paso el array de  powerstats 
    return (
        <Container>
            <Row>
                <Col >
                    {
                        powerStats.map((stat,i) => (
                            <div key={i} className="progress" style={{background:"#151515",height:"25px"}} >
                                <div
                                    className="progress-bar"
                                    role='progressbar'
                                    style={{
                                        width:`${stat.value}%`,
                                        margin:"1px",
                                        background:"#x2f2f2f"
                                    }}
                                >
                                    {`${stat.name} : ${stat.value}`}
                                </div>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default PowerStatsHero
