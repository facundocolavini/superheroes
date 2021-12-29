import { Card,Button} from 'react-bootstrap';
import React from 'react'

const CardItem = ({id,name,image}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={name}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Add Team</Button>
            </Card.Body>
        </Card>
    )
}

export default CardItem
