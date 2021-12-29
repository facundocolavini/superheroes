import React from 'react'
/* import {Col} from 'react-bootstrap'; */
import CardItem from '../CardItem/CardItem';
const ItemList = ({items}) => {
    console.log(items, 'items');
    return (
        <>
            {
                items  
                && items.map(item =><CardItem key={item.id} id={item.id} name={item.name} image={item.image.url} biography={item.biography} />)
                /* :<h1>Hero not found</h1> */
            }
        </>
    )
}

export default ItemList
