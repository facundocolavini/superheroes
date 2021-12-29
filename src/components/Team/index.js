import React ,{useEffect} from 'react'
import useUser  from '../../hooks/useUser';
import { useLocation } from 'wouter';
const Team = () => {
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
            <h2 className='container'>Team</h2>
            {isLogged && <span>My Team</span>}
            
        </>
    )
}

export default Team
