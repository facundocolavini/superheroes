import {baseurl, CONFIG} from '../../utils/baseurl';
import axios from 'axios';


const SEARCH_ENDPOINT = baseurl('/search/');


  var config = {
    headers: {
      'crossDomain': true,
    }
  }

  export default async function  getHeros ({keyword} )  {
    return await axios
      .get(`http://cors-anywhere.herokuapp.com/${SEARCH_ENDPOINT}${keyword}`, config)
        
      .then(res =>{
        return res.data.results;
      })   
      .catch(err => {
        console.log(err);
      });
  }




