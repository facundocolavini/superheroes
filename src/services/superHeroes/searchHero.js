import {baseurl, CONFIG} from '../../utils/baseurl';
import axios from 'axios';


const SEARCH_ENDPOINT = baseurl('/search/');

/*   export const searchHero = async (name) => {
    return await axios
      .get(`${SEARCH_ENDPOINT}${name}`, CONFIG)
      .then(response => {
        return response.data;
      })   
      .catch(err => {
        console.log(err);
      });
  } */

  export default async function  getHeros ({keyword} )  {
    return await axios
      .get(`${SEARCH_ENDPOINT}${keyword}`, CONFIG)
        
      .then(res =>{
        return res.data.results;
      })   
      .catch(err => {
        console.log(err);
      });
  }




