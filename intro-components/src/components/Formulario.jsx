import React from 'react'
import './Formulario.css'
import Form from './Form'

const Formulario = () => {
  return (
    <div className='generalContainer'>
      <div className='promo'><span>Try it free 7 days</span> then $20/mo. thereafter</div>
      <div className='formContainer'>
          <Form/>
          <p className='termsTxt'>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
      </div>
    </div>
  )
}

export default Formulario

/*

    
      First Name 
      Last Name 
      Email Address
      Password
    
      Claim your free trial 
    
      By clicking the button, you are agreeing to our Terms and Services
      
*/