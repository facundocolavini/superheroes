const ENDPOINT = "https://challenge-react.alkemy.org/"

var apiBase = process.env === 'PRODUCTION' ? 
    'https://www.productionapp.com/' : 'http://localhost:3000/'

export default function login ({email,password}){
    return fetch(`${ENDPOINT}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        proxy:{
            host: apiBase,
            port: 3000
        },
        body:JSON.stringify({email,password})
    }).then(res => {
        if(!res.ok)throw new Error('Error response from server');
        return res.json()
    }).then(res => {
        const {token} = res;
        return token;
    })
}