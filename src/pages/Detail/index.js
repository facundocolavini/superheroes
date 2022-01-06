import React from 'react'
import useUser  from '../../hooks/useUser';
import useSingleHero from '../../hooks/useSingleHero';
import Login from '../../components/Login';
import CardDetails from '../../components/CardDetails';
import Spinner from '../../components/Spinner';
import { Redirect } from 'wouter';
const Detail = ({params}) => {
    const {isLogged} = useUser();
    const {hero, isLoading, isError}=useSingleHero({id: params.id});

    if(isLoading){
       return(
            <Spinner/>
       )
    }
    if(!isLogged){
         return(
            <Login/>
         )
    }
    if (isError) return <Redirect to='/404'/>
    if(!hero) return null
    return (
        <>
            {isLogged && <CardDetails {...hero} />}
        </>
    )
            
    
   
}

export default Detail
