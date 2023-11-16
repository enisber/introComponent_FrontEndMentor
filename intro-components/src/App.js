import React from 'react'
import './App.css'
import Texto from './components/Texto'
import Formulario from './components/Formulario'

const App = () => {
  return (
    <div className='mainContainer'>
        <Texto />
        <Formulario/>
    </div>
  )
}

export default App