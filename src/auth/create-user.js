import React from 'react';
import { Button } from '@mui/material';
import Input from '../shared/components/FormElements/input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE,} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';

import './create-user.css'


const CreateUser = () => {

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
    );

    const signupHandler = (event) => {
      event.preventDefault();
      console.log(formState.inputs)
    }


  return (
    <main> 
      <h1 className='h-1'>Create a new account</h1>  
    <div className='user-container'>     
      <div className='login-form'>
        
        {/* Image */}
        <div className='signup-img-container'>
          <img src="image\wheel.jpg" alt="gate" className='picture'/>
        </div>
        
        {/* Form */}
        <form onSubmit={signupHandler} className='form-signup'>
       
          <div className='signup-u-p'>
            <Input 
              element="input" 
              id="fname" 
              type="text" 
              label="First Name"
              autoComplete='off' 
              placeholder='Нэр оруулна уу'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Please enter a valid your first name.' 
              onInput={inputHandler}
            />

            <Input
              element="input" 
              id="lname" 
              type="text" 
              label="Last Name"
              autoComplete='off' 
              placeholder='Овог оруулна уу'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Please enter a valid your last name.' 
              onInput={inputHandler}
            />

            <Input 
              element="input" 
              id="email" 
              type="email" 
              label="Email"
              autoComplete='off' 
              placeholder='Е-шуудан хаягаа оруулна уу'
              validators={[VALIDATOR_EMAIL()]}
              errorText='Please enter a valid email.'
              onInput={inputHandler}
            />

            <Input 
              element="input" 
              id="password" 
              type="new-password" 
              label="Password"
              autoComplete='off' 
              placeholder='Нууц үгээ оруулна уу'
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText='Please enter a valid (at least 6 characters).'
              onInput={inputHandler}
            />
           
            <Input 
              element="input" 
              id="confirmPassword" 
              type="new-password" 
              label="Confirm Password"
              autoComplete='off' 
              placeholder='Нууц үгээ баталгаажуулна уу'
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText='Password do not match' 
              onInput={inputHandler}
            />

            <Button type="submit" variant='contained' style={{marginTop: '10px'}}>Sign Up</Button>


            <div className='already-user'>
              <a href="/auth"  style={{textDecoration: 'none'}}>Already have an account?</a>
            </div>
          </div>         
        </form>       
      </div>
    </div>  
    </main>
  )
}

export default CreateUser;