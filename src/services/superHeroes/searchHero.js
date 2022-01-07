import {baseurl} from '../../utils/baseurl';
import axios from 'axios';

const SEARCH_ENDPOINT = baseurl('/search/');

export default async function  getHeros ({keyword} )  {
  return await axios
    .get(`https://api.allorigins.win/raw?url=${SEARCH_ENDPOINT}${keyword}`)

    .then(res =>{
      return res.data.results;
    })   
    .catch(err => {
      console.log(err);
    });
} 




