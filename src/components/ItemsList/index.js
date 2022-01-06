import React, { useContext } from 'react'
import {Row,Col} from 'react-bootstrap';
import CardItem from '../CardItem';
import Spinner from '../Spinner';
import Toasts from '../Toasts';
import TeamContext from '../../context/TeamContext'
const ItemList = ({items}) => {
    const team = useContext(TeamContext);

    return (
     
            <Row className='d-flex justify-content-around gap-5'>
               
                {
                    items  
                    ? items.map(({id,name,image,biography,powerstats}) =><CardItem key={id} id={id} name={name} image={image.url} biography={biography} powerstats={powerstats}/>)
                    : <Spinner/> 
                }
               
            </Row>
     
    )
}

export default ItemList
