export function baseurl(endpoint) {
    const local = 'https://superheroapi.com/api/';
    return `${local}${process.env.REACT_APP_API_KEY}${endpoint}`;
  }
  
  export const CONFIG = {
    headers: {
      'crossDomain': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Content-Type': 'application/json'
    },

    crossdomain: true
  };