import React from 'react'
import {Row,Col} from 'react-bootstrap';
import './PowerStats.css';

const PowerStats = ({powerStats,measure}) => {

    return (
        <Row>
            <Col lg={6} md={12} xs={12}>
                {
                    powerStats.map((stat,i) => (
                        <div key={i} className="progress" >
                            <div
                                className="progress-bar "
                                role='progressbar'
                                style={{
                                    width:`${stat.value}%`,
                                }}
                            >
                                {`${stat.name} : ${stat.value}`}
                            </div>
                        </div>                          
                    ))
                }
            </Col>
            <Col lg={6} md={12} xs={12} className='team-measures mb-5'>
                <h3 className="title-measures text-xs-center">Measures Team</h3>
                <div className="measures-content ">
                    <span className="measure-text"><span className='text-varian-measure '>Average Height:</span>  {measure.totalHeight}Kg</span>
                    <span className="measure-text"><span className='text-varian-measure'>Average Weight:</span>  {measure.totalWeight}Cm</span>
                </div>
            </Col>
        </Row>
    )
}

export default PowerStats
