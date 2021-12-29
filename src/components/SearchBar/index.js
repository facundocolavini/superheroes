import React,{useState} from 'react'
import { Container,Form} from 'react-bootstrap';
import {Link,useLocation} from "wouter";

const SearchBar = () => {
 
    const [keyword ,setKeyword] = useState('');
    const [,pushLocation] = useLocation();

    const inputChange = (e) => {
        setKeyword(e.target.value);
        console.log(keyword,'keyword');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`search/${keyword}`);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text" placeholder="batman" onChange={inputChange} value={keyword}/>
                <Link to={`search/${keyword}`}>Search</Link>
            </Form>
        </Container>
    )
}

export default SearchBar
