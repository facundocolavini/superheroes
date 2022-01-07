
import React from 'react'
import {Container,Col,Row} from 'react-bootstrap';
import ItemsList  from '../../components/ItemsList';
import useHeros from '../../hooks/useHeros';
import useUser from '../../hooks/useUser';
import Login from '../../components/Login';
import Spinner from '../../components/Spinner';
import './SearchResults.css';

const SearchResults = ({params}) => {
    const keyword = params.keyword
    const {isLogged} = useUser();
    const {heros,loading} = useHeros({keyword});
   
    return (
        <Container>
        {isLogged &&
        <Row className='mt-5 mb-5'>  
            <Col  xs={12} md={12} lg={12}>
                {keyword === ''
                ? <h1>Search a hero</h1>
                :<h1 className="title-search">Searching for {keyword}...</h1>}
                {loading 
                ? <Spinner/>
                : heros ? <ItemsList items={heros}/> : <h1 className='title-not-found'>No results...</h1>}
            </Col>
        </Row>
        }
        {!isLogged && <Login/>}
        </Container>
    )
}

export default SearchResults;
