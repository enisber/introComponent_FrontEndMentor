import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form method='post' className='form'>
        <input type='text' placeholder='Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <input type='email' placeholder='Email Address'></input>
        <input type='password' placeholder='Password'></input>
        <button type='submit'>Claim your free trial</button>
    </form>
  )
}

export default Form