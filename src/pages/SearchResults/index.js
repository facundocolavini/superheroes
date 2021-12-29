
import React,{useState,useEffect} from 'react'
import {Container, Row} from 'react-bootstrap';
import ItemsList  from '../../components/ItemsList/ItemList';

import Spinner from '../../components/Spinner';
import  getHero from '../../services/superHeroes/searchHero';

const SearchResults = ({params}) => {
    const keyword = params.keyword
    console.log(keyword,'keyword');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
       
    useEffect(function(){
        setLoading(true);
        getHero({keyword})
        .then(hero=>{
            setItems(hero);
            setLoading(false);
        })
    },[keyword]) 

    return (
        <Container>
            {keyword === ''
            ? <h1>Search a hero</h1>
            :<h1>Searching for {keyword}...</h1>}
            {loading 
                    ?<Spinner/>
                    :!items 
                    ?<h1>Hero not found</h1>
                    :<Row ><ItemsList items={items} /></Row>   
            }
        </Container>
    )
}

export default SearchResults;
