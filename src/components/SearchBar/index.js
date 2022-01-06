import React,{useState} from 'react'
import {Form} from 'react-bootstrap';
import {Link,useLocation} from "wouter";
import {FaSearch} from 'react-icons/fa';
import '../SearchBar/SearchBar.css';
const SearchBar = () => {
    const [keyword ,setKeyword] = useState('');
    const [,pushLocation] = useLocation();

    const inputChange = (e) => {
        setKeyword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`search/${keyword}`);
    }

    return (
    
            
     
                <Form className='form-searchbar d-flex justify-content-md-end justify-content-center' onSubmit={handleSubmit}>
                    
                    <Form.Control  className=' form-input' type="text" placeholder="spawn" onChange={inputChange} value={keyword}/>
                    {keyword.trim('') !== '' && <Link className='form-searchBtn' to={`search/${keyword}`}><FaSearch className='icon-search'/></Link>}
                    {keyword.trim('') === '' && <Link className='form-searchBtn' to={`/`}><FaSearch className='icon-search'/></Link>}
                </Form>
          
       

 
    )
}

export default SearchBar
