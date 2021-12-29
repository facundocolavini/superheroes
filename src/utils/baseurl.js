export function baseurl(endpoint) {
    const local = 'https://superheroapi.com/api/';
    console.log(`${local}${process.env.REACT_APP_API_KEY}${endpoint}`);
    return `${local}${process.env.REACT_APP_API_KEY}${endpoint}`;
  }
  
  export const CONFIG = {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  };