import React, { createContext, useState } from 'react'
import Parametros from './components/Parametros';

export const GiroContext = createContext('');

const Previo = () => {
    const [ccosto, setCcosto] = useState(0);        
 
  return (
    <GiroContext.Provider value={{ccosto, setCcosto}}>
        <Parametros />
    </GiroContext.Provider>

  )
}

export default Previo