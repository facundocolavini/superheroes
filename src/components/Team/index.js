import React ,{useContext} from 'react'
/* import useUser  from '../../hooks/useUser';
import { useLocation } from 'wouter'; */
import {Col} from 'react-bootstrap' 
import ItemList from '../ItemsList'
import '../../components/Team/Team.css'

import TeamContext from '../../context/TeamContext'
import PowerStats from '../PowerStats'
const Team = () => {
    const team = useContext(TeamContext);
    const stats = team.teamPowerStats();
    const measure = team.averageMeasure();

    return(
        <>
            {team.team.length === 0 ? <h2 className="d-flex justify-content-center align-item-center  mt-5 title-home text-md-start text-center">No heroes in your team</h2>
            :<Col className='team-bkg m-auto'>
                <h1 className="title-home ps-3 mb-5 mt-5 text-md-start text-center">Your Team</h1>
                <PowerStats powerStats={stats} measure={measure}/>
                <ItemList items={team.team}/>
                
            </Col>
            } 
        </>
           
  
    )
}

export default Team
