import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH,} from '../shared/util/validators';
import Input from '../shared/components/FormElements/input';
import { useForm } from '../shared/hooks/form-hook';
import { AuthContext } from '../shared/context/auth-context';

import './Auth.css';


const Login = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsloginMode] = useState(true)


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



  const submitHandler = async (event) => {      // send it to backend
    event.preventDefault();
    // console.log(formState.inputs)

    if(isLoginMode){
      
    } else {
      try {
        const response = await fetch('http://localhost:3000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            // name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
        });

        const responseData = await response.json();
        console.log(responseData);

      } catch (err) {
        console.log(err)
      }  
    };
    


    auth.login();
  }
  return (
    <main className='login-auth-container'>     
 
      <div className='login-auth-form'>
       
        <div className='login-img-container'>
          <img src="image\wheel.jpg" alt="gate"/>
        </div>
        

        <form  onSubmit={submitHandler} className='auth-form-container'>     
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
              type="password" 
              visible='off'
              placeholder='Нууц үгээ оруулна уу'
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText='Please enter a valid character (at least 6 characters).'
              onInput={inputHandler}
            />
            <div style={{textAlign: 'end', marginTop: '-10px', marginBottom: '15px'}}><a href='/' style={{textDecoration: 'none'}}>Forgot password</a></div>

             <Button type="submit"  variant='contained' style={{marginTop: '4px'}}>Login</Button>  {/* disabled={!formState.isValid} */}

            <div className="check">
              <input element="input" type="checkbox" name="remember"/> Remember me
            </div>

            <div className='create-user'>
              New user? <a href="/signup" >Create new account.</a>
            </div>
          </div>         
        </form>       
      </div>
    </main>  
  )
}

export default Login;