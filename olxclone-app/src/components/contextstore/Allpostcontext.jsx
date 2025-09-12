import React, { createContext, useState } from 'react';

export const Allpostcontext =createContext(null);


function Contextallpost({children}){
    const [allpostdata, setAllpostdata] = useState([]);
    return(
        <Allpostcontext.Provider value={{allpostdata, setAllpostdata}}>
            {children}
        </Allpostcontext.Provider>
    )
}


export default Contextallpost;

