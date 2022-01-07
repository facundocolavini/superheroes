import React from 'react'
import {Row} from 'react-bootstrap';
import CardItem from '../CardItem';
import Spinner from '../Spinner';


const ItemList = ({items}) => {

    return (
        <Row className='d-flex justify-content-around gap-5 text-center'>
            {
                items  
                ? items.map(({id,name,image,biography,powerstats}) =><CardItem  key={id} id={id} name={name} image={image.url} biography={biography} powerstats={powerstats}/>)
                : <Spinner/> 
            }
        </Row>
    )
}

export default ItemList
