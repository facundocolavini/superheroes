import { useEffect,useState ,useContext} from "react";
import getHeros from '../services/superHeroes/searchHero';
import HerosContext from '../context/HerosContext';
export default function useHeros ({keyword} = {keyword:null}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {heros, setHeros} = useContext(HerosContext);
    useEffect(function(){
        setLoading(true);
        //Get the las keyword searched
        const lastKeywordUse =  keyword || localStorage.getItem('lastKeyword') || 'superman';
        getHeros({keyword : lastKeywordUse})
        .then(hero=>{
            setHeros(hero);
            setLoading(false);
            localStorage.setItem('lastKeyword',keyword);
        }).catch(err => {
            setLoading(false)
            setError(true)
          })
    },[keyword,setHeros])  

    return {
        heros,
        loading,
        error
    }

}