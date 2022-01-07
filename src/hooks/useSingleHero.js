import {useState, useEffect} from 'react'
import useHeros from '../hooks/useHeros';
import getHeroById from '../services/superHeroes/getHeroById';

export default function useSingleHero ({id}) {

  const {heros} = useHeros()
  console.log(heros,'heros')
  const [hero, setHero] = useState( null);

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(function () {
    if (!hero) {
      setIsLoading(true)
      // llamar al servicio si no tenemos heros en cache
      getHeroById({id})
        .then(hero => {
          setHero(hero)
          setIsLoading(false)
          setIsError(false)
        }).catch(err => {
          setIsLoading(false)
          setIsError(true)
        })
    }
    else{

        setIsLoading(false)
        setIsError(false)
    }
  }, [hero, id,isError])


  return {hero, isLoading, isError}
}