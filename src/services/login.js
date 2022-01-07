const ENDPOINT = "HTTPS://challenge-react.alkemy.org/"


export default function login ({email,password}){
    return fetch(`http://cors-anywhere.herokuapp.com/${ENDPOINT}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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