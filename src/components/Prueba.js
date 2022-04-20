import React, { useContext } from 'react'
import { UserContext } from '../App';


const Prueba = () => {
    const user = useContext(UserContext);
    
  return (
    <div>{`El valor de use es :${user}`}</div>
  )
}


export default Prueba