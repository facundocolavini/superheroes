import React, {useState} from 'react';
import useHeros from '../hooks/useHeros';

const Context = React.createContext({});

export function TeamContextProvider({children}) {
    const [goodHeros, setGoodHeros] = useState([]);
    const [evilHeros, setEvilHeros] = useState([]);
    const [team,setTeam] = useState([]);
    const [error, setError] = useState('');
    const {heros} = useHeros();
   

    const isInTeam = (id) => {
        return team.find(h => h.id === id)
    }
    const addToTeam = (id) => {
        let hero = heroFilter(id)
        newHero(hero)
    }
    const removeFromTeam = (id) => {
        setTeam(team.filter(h => h.id !== id))
    }
    const heroFilter = (id) => heros.filter(hero => hero.id === id)[0];
    const newHero = (hero) => {
        const countAligment = (aligment) => {
            return team.reduce((count,hero) => hero.biography.alignment === aligment ? ++count : count,0)
        }
        if(team.length===6){
            setError('You can only have 6 heroes in your team');
            console.log(error);
            setTimeout(() => {
                setError('');
            }, 1500);
        }else if(team.some(h => h.id === hero.id)){
            setError('This hero is already in your team');
            setTimeout(() => {
                setError('');
            }, 1500);
            console.log(error);
        }else if (countAligment('good') === 3 && hero.biography.alignment === 'good'){
            setError('You can only have 3 good heroes in your team');
            setTimeout(() => {
                setError('');
            }, 1500);
            console.log('You can only have 3 good heroes in your team');
        }else if(countAligment('bad') === 3 && hero.biography.alignment === 'bad'){
            setError('You can only have 3 evil heroes in your team');
            setTimeout(() => {
                setError('');
            }, 1500);
            console.log(error);
        }else{
            setTeam([...team,hero])
        }
    }
    const totalPowerStats = () => {

        const powerStats = team.reduce((stats,hero) => {
            return {
                intelligence: parseInt(stats.intelligence) + parseInt(hero.powerstats.intelligence),
                strength: parseInt(stats.strength) + parseInt(hero.powerstats.strength),
                speed: parseInt(stats.speed) + parseInt(hero.powerstats.speed),
                durability: parseInt(stats.durability) + parseInt(hero.powerstats.durability),
                power: parseInt(stats.power) + parseInt(hero.powerstats.power),
                combat: parseInt(stats.combat) + parseInt(hero.powerstats.combat)

            }
        },{
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0
        })
        return [powerStats].sort((a,b) => b-a);
    }
    const heroPowerStats = (arrStats) => {
        const namesStat = Object.keys(arrStats[0]);
        const valuesStat = Object.values(arrStats[0]);
        const powerArray = [];
        var powerValue ={
            value:'',
            name:''
        }
       for(let i = 0; i < valuesStat.length; i++){
            if(valuesStat[i]=== null) return null;
            powerValue ={
                value:Number(valuesStat[i]),
                name:namesStat[i]
            }
            powerArray.push(powerValue);
        }
        return  powerArray.sort((a,b) => b.value - a.value);
    }
    const teamPowerStats = () => {
        const namesPowerStat = Object.keys(totalPowerStats()[0]);
        const valuesPowerStat = Object.values(totalPowerStats()[0]);
        const powerStatArray = [];
        var powerStatsValue ={
            value:'',
            name:''
        }
       for(let i = 0; i < valuesPowerStat.length; i++){
            if(valuesPowerStat[i]=== null) return null;
            powerStatsValue ={
                value:Number(valuesPowerStat[i]),
                name:namesPowerStat[i]
            }
            powerStatArray.push(powerStatsValue);
        }
        return  powerStatArray.sort((a,b) => b.value - a.value);
    }
    const averageMeasure = () => {
        if (team.length === 0) return 0;
        const totalWeight = (team.reduce((total,hero) => total + parseInt(hero.appearance.weight[1].replace("kg","")) ,0) / team.length).toFixed(2);
        const totalHeight = (team.reduce((total,hero) => total + parseInt(hero.appearance.height[1].replace("cm","")),0) / team.length).toFixed(2);
        return {
            totalWeight,
            totalHeight
        }
    }

    return (
        <Context.Provider value={{
            goodHeros,
            setGoodHeros,
            evilHeros,
            setEvilHeros,
            addToTeam,
            removeFromTeam,
            isInTeam,
            teamPowerStats,
            heroPowerStats,
            averageMeasure,
            team,
            error
        }}>
            {children}
        </Context.Provider>
    );
}

export default Context