import {baseurl, CONFIG} from '../../utils/baseurl';
import axios from 'axios';


const SEARCH_ID_ENDPOINT = baseurl('/');


export default async function  getHeroById ({id})  {
    console.log(SEARCH_ID_ENDPOINT+id);
    return await axios
      .get(`${SEARCH_ID_ENDPOINT}${id}`, CONFIG)
      .then(res =>{
       
        return res.data;
      })   
      .catch(err => {
        console.log(err);
      });
  }