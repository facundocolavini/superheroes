import React, {useEffect} from 'react'
import useUser  from '../../hooks/useUser';
import { useLocation } from 'wouter';
import SearchBar from '../../components/SearchBar';
const Home = () => {
    const [,navigate]= useLocation()
    const {isLogged} = useUser();

    useEffect(() => {
        console.log(isLogged,'isLogged');
        if(!isLogged){      
          navigate('/login')
        }
        
    } ,[isLogged,navigate])
    

    return (
        <>
            <h2 className='container'>Home</h2>
            {isLogged && <SearchBar/>}  
        </>
    )
}

export default Home
