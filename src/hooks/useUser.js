import Context from '../context/UserContext';
import loginService from '../services/login';
import { useCallback,useContext,useState } from 'react';

export default function useUser(){
    const {token,setToken} = useContext(Context);
    const [loginStatus,setLoginStatus] = useState({loading:false,error:false});

    const login = useCallback(({email,password})=>{
        setLoginStatus({loading:true,error:false});
        loginService({email,password})
        .then(tok => {
            setLoginStatus({loading:false,error:false});
            setToken(tok); 
            localStorage.setItem('token',tok);
        })
        .catch(err => {
            setLoginStatus({loading:false,error:true});  
            localStorage.removeItem('token');
            console.error(err);
        })
    },[setToken])

    const logout = useCallback(()=>{
        localStorage.removeItem('token');
        setToken(null);
    },[setToken])
   

    return{
        isLogged: Boolean(token),
        loadinLogin: loginStatus.loading,
        loginError: loginStatus.error,
        login,
        logout
    }
}