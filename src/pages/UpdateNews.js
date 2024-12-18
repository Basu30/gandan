import React from 'react';

import Input from '../shared/components/FormElements/input'
import { VALIDATOR_REQUIRE } from '../shared/util/validators';
import { Button } from '@mui/material';
import { useForm } from '../shared/hooks/form-hook';

import './UpdateNews.css';

const UpdateNews = () => {

    const [formState, inputHandler] = useForm( 
        {
 
            title: {
                value:'',
                isValid: false
            },
            content: {
                value: '',
                isValid: false
            }
       },

    false
);


    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs) // sending to backend
    }

return(


        <main className='update-form'>
            <h1>This is Edit page</h1>
            <div className='update-form-container'>

            <form onSubmit={submitHandler} className='form-controllor'>
                <Input 
                    id='title'
                    element='input'
                    type='text'
                    label='Title'
                    autoComplete='off' 
                    errorText='Please enter a valid title'
                    validators={[VALIDATOR_REQUIRE()]}  
                    onInput={inputHandler}
                />
            
                <Input 
                    id='content'
                    element='textarea'
                    type='text'
                    label='Content'
                    autoComplete='off' 
                    validators={[VALIDATOR_REQUIRE()]} 
                    errorText='Please enter a valid title'
                    onInput={inputHandler}
                />
                <Input 
                    id='image'
                    element='input'
                    type='file'
                    label='Image'
                    autoComplete='off' 
                    errorText='Field is empty'
                    validators={[VALIDATOR_REQUIRE()]}  
                    onInput={inputHandler}
                />
                <Input 
                    id='url'
                    element='input'
                    type='url'
                    label='Url'
                    autoComplete='off' 
                    errorText='Field is empty'
                    validators={[VALIDATOR_REQUIRE()]}  
                    onInput={inputHandler}
                />
                <Button type='submit' variant='contained' style={{marginTop: '20px'}}>Update</Button>
            </form>
            </div>
        </main>
    )
}

export default UpdateNews;