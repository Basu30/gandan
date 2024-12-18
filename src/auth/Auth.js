import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH,} from '../shared/util/validators';
import Input from '../shared/components/FormElements/input';
import { useForm } from '../shared/hooks/form-hook';
import { AuthContext } from '../shared/context/auth-context';

import './Auth.css';


const Login = () => {

  const auth = useContext(AuthContext)


  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    }, 
    false
  )




  const submitHandler = (event) => {  // send it to backend
    event.preventDefault();
    
    console.log(formState.inputs)
    auth.login();
  }
  return (
    <div className='container'>    
      <div className='login-form'>
        
        <div className='login-img-container'>
          <img src="image\wheel.jpg" alt="gate" className='picture'/>
        </div>
        

        <form  onSubmit={submitHandler} className='form-container'>     
          <div className='container-u-p'>

            <label htmlFor="email"><b>Email </b></label> 
            <Input 
              element="input" 
              id="email" 
              type="email" 
              autoComplete='off' 
              placeholder='Хэрэглэгчийн Е-шуудан хаягаа оруулна уу'
              validators={[VALIDATOR_EMAIL()]}
              errorText='Please enter a valid email.'
              onInput={inputHandler}
            />

            <label htmlFor="password"><b>Password</b></label>
            <Input 
              element="input" 
              id="password" 
              type="current-password" 
              visible='off'
              placeholder='Нууц үгээ оруулна уу'
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText='Please enter a valid character (at least 6 characters).'
              onInput={inputHandler}
            />
            <div style={{textAlign: 'end', marginTop: '-10px', marginBottom: '15px'}}><a href='/' style={{textDecoration: 'none'}}>Forgot password</a></div>

            <Button type="submit" disabled={!formState.isValid} variant='contained' style={{marginTop: '4px'}}>Login</Button>

            <div className="check">
              <input element="input" type="checkbox" name="remember"/> Remember me
            </div>

            <div className='create-user'>
              New user? <a href="/createUser" >Create new account.</a>
            </div>
          </div>         
        </form>       
      </div>
    </div>  
  )
}

export default Login;