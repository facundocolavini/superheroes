import React, {useState} from 'react';

const Context = React.createContext({});

export function HerosContextProvider({children}) {

    const [heros,setHeros] = useState([]);
    
    return (
        <Context.Provider value={{
            heros,
            setHeros
        }}>
            {children}
        </Context.Provider>
    );
}

export default Context