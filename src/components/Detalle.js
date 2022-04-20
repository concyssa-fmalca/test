import React from 'react'
import { Link } from 'react-router-dom'

const Detalle = () => {
  return (
    <div>    
        <Link className="btn btn-success" to="/nuevo">Nueva solicitud de giro</Link>
    </div>
  )
}

export default Detalle