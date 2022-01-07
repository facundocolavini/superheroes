
import React from 'react'
import {Container} from 'react-bootstrap';
import ItemsList  from '../../components/ItemsList';
import useHeros from '../../hooks/useHeros';
import useUser from '../../hooks/useUser';
import Login from '../../components/Login';
import Spinner from '../../components/Spinner';
const SearchResults = ({params}) => {
    const keyword = params.keyword
    const {isLogged} = useUser();
    const {heros,loading} = useHeros({keyword});
   
    return (
        <>
        {isLogged &&
        <Container>
            {keyword === ''
            ? <h1>Search a hero</h1>
            :<h1>Searching for {keyword}...</h1>}
        
            {loading 
            ? <Spinner/>
            : heros ? <ItemsList items={heros}/> : <h1>No results</h1>}
                


            
            
            </Container>
        }
        {!isLogged && <Login/>}
        </>
    )
}

export default SearchResults;
