import Forms from '../Form/Forms';
import React,{useEffect} from 'react'
import useUser  from '../../hooks/useUser';
import {Alert} from 'react-bootstrap';
import { useLocation } from 'wouter';

const Login = () => {
    const [,navigate]= useLocation()
    const {isLogged} = useUser();

    useEffect(() => {
        console.log(isLogged,'isLogged');
        if(isLogged){
            
            setTimeout(() => {navigate('/')},3000)
        }
    } ,[isLogged,navigate])
    return (
        <>
            <h2 className='container'>Login</h2>
           
            {isLogged 
            ?<Alert className='container' variant="success">Login Successful</Alert>
            :<Forms/>
            }
        </>
    )
}

export default Login
