
import React from 'react'
import {Container} from 'react-bootstrap';
import ItemsList  from '../../components/ItemsList';
import useHeros from '../../hooks/useHeros';
import useUser from '../../hooks/useUser';
import Login from '../../components/Login';
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
            ? <h1>Loading...</h1>
            : !heros &&
                <h1>Hero not found</h1>}
            {heros && <ItemsList items={heros} />}
            
            
            </Container>
        }
        {!isLogged && <Login/>}
        </>
    )
}

export default SearchResults;
