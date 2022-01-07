import Forms from '../Form/Forms';
import React,{useEffect} from 'react'
import useUser  from '../../hooks/useUser';
import {Col} from 'react-bootstrap';
import { useLocation } from 'wouter';
import './Login.css'

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
        <Col  xs={12}>
            <h2 className='container text-center text-login'>Login</h2>
            <Forms className='m-auto'/>
        </Col>
    )
}

export default Login
