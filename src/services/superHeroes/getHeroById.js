import {baseurl} from '../../utils/baseurl';
import axios from 'axios';


const SEARCH_ID_ENDPOINT = baseurl('/');

var config = {
  headers: {
    'crossDomain': true,
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
  },
  proxy:{
    host: 'http://localhost:3000',
    port: 3000
  }
}

export default async function  getHeroById ({id})  {
  return await axios
    .get(`http://cors-anywhere.herokuapp.com/${SEARCH_ID_ENDPOINT}${id}`, config)
      .then(res =>{
        return res.data;
      })   
      .catch(err => {
        console.log(err);
      });
}