import Forms from '../Form/Forms';
import React,{useEffect} from 'react'
import useUser  from '../../hooks/useUser';
import {Container} from 'react-bootstrap';
import { useLocation } from 'wouter';

const Login = () => {
    const {isLogged} = useUser();
    const [,navigate]= useLocation()

    useEffect(()=>{
        if(isLogged){
            setTimeout(()=>{
                navigate('/')
            }
         ,3000)
        }
    },[isLogged,navigate])

    return (
        <Container>
            <h2 className='container'>PITO </h2>
            <Forms/>
        </Container>
    )
}

export default Login
