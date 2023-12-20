import React from 'react'
import Texto from '../texto/Texto'
import Formulario from '../formulario/Formulario'
import './Main.css'

const Main = () => {
  return (
    <div className='mainContainer'>
        <Texto />
        <Formulario />
    </div>
  )
}

export default Main