import { Card,Button,Alert,Col} from 'react-bootstrap';
import React  ,{useContext} from 'react';
import {useLocation} from "wouter";
import './CardItem.css';
import TeamContext from '../../context/TeamContext';
import PowerStatsHero from '../PowerStatsHero';
const CardItem = ({id,name,image,powerstats,biography}) => {
    const team = useContext(TeamContext);
    const [,pushLocation] = useLocation();
    const handleClickStats = () => {
        pushLocation(`/detail/${id}`);
    }   
    const stats = team.heroPowerStats([powerstats]);
    const onAddTeam = (e) => {
       team.addToTeam(id);
    
    }
    const removeFromTeam = (e) => {
        team.removeFromTeam(id);
        
    }
    console.log( image )
    return (
        <Col lg={3} md={4}>
{/*         <Card id={id} className='card mt-3'>
            <Card.Img loading="lazy" variant="top" className='card-img image-fluid' src={image} alt={name}/>
            <Card.Body className='card-body align-items-center p-2 text-center'>
                <Card.Title className='card-title'>{name}</Card.Title>
                <Card.Text className="stats mt-3">
                    <PowerStatsHero className="text" powerStats={stats}/>
                </Card.Text>
                <Row className='btns'>
                    {team.error ? <Alert variant="danger">{team.error}</Alert>:null}
                    {team.isInTeam(id) 
                    ? <Button variant="danger" onClick={removeFromTeam}>Remove</Button> 
                    : <Button variant="success" onClick={onAddTeam}>Add to team</Button>}
                     <Button variant="primary" onClick={handleClickStats } >View Stats</Button> 
                </Row>

            </Card.Body>
        </Card> */}
        {
           
       
            <div className="card-hero">
                     <img className='hero-image'loading="lazy" src={image} alt={name}/>
                    <div className="card-title">{name}</div>
                <div className="information-hero">

                    <div className="stats">
                        <PowerStatsHero  powerStats={stats}/>
                    </div>
                    {team.error ? <Alert variant="danger" className='alert-error'>{team.error}</Alert>:null}
                    <div className="btns">
                    
                        {team.isInTeam(id)
                        ? <Button className='btn-delete' variant="danger" onClick={removeFromTeam}>Remove</Button>
                        : <Button variant="success" className='btn-add' onClick={onAddTeam}>Add</Button>}
                        <Button variant="primary" className='btn-view-stats' onClick={handleClickStats } >View Stats</Button>
                    </div>
                </div>
                <div className="alignment">
                    {biography.alignment}
                </div>
            </div>
        
         }
        </Col>
    )
}

export default CardItem
