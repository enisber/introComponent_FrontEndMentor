import React from 'react'
import './Form.css'
import { useState, useRef, onChange } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameVlaid, setFirstNameValid] = useState('');
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  

  const handleSubmit = (e) => {
    console.log(firstNameVlaid);
    e.preventDefault();
    
    const esValido = () =>{
      if(firstName.length!=0){setFirstNameValid('First Name cannot be empty')}
      if(lastName.length!=0){setLastNameValid(true)}
      if(email.length!=0){setEmailValid(true)}
      if(password.length!=0){setPasswordValid(true)}

      return firstNameVlaid.length===0 && lastNameValid && emailValid && passwordValid;
    }


    if(esValido()){
      alert("Submited");
      }

      console.log(firstNameVlaid);
    }


  return (
    <form onSubmit={handleSubmit} className='form'>
        <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name'></input>
        <p className='error'><i>{firstNameVlaid}</i></p>
        <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name'></input>
        <p className='error'><i>{firstNameVlaid}</i></p>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address'></input>
        <p className='error'><i>{firstNameVlaid}</i></p>
        <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
        <p className='error'><i>{firstNameVlaid}</i></p>

        <button type='submit'>Claim your free trial</button>
    </form>
  )
}

export default Form