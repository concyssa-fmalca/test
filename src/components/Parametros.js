import React, { useContext } from 'react'
import { GiroContext } from '../Previo';
import Detalle from './Detalle';

const ccostos = [
    {id:0, name:"Centro de costos"},
    {id:1, name:"CP0034-2020-LIMA"},
    {id:2, name:"CP0034-2020-ATE"},
    {id:3, name:"CP0034-2020-SJL"},
]

const Parametros = () => {
    
    const {ccosto,setCcosto} = useContext(GiroContext)
    console.log(ccosto)


    const handleCcosto = (e) => {
        setCcosto(e.target)
    }

  return (
    <div>
            <select  aria-label="Default select example" value={ccosto} onChange={handleCcosto}>
            { ccostos.map( (item) => (
                <option value={item.id} key={item.id} >{item.name}</option>
                )
              )
            }
          </select>
          <Detalle />
          
    </div>
  )
}

export default Parametros