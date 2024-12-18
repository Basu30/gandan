import React from 'react'
import { useForm } from '../shared/hooks/form-hook';
import Input from '../shared/components/FormElements/input';
import { VALIDATOR_REQUIRE } from '../shared/util/validators';
import { Button } from '@mui/material';

import './AddNews.css'

const AddNews = () => {

    const [formState, inputHandler ] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );


    const addHandler = (event) => {
        event.preventDefault();
        alert('Are you sure!');
        console.log(formState.inputs)
    }

    return (  
        <main className='news-container'> 
            <h1>Шинэ мэдээ нэмэх</h1>  
            <div className='news-form-container'> 
            <form onSubmit={addHandler} className='news-form'>
                <Input 
                  element="input" 
                  id="title" 
                  type="text" 
                  label="Title"
                  autoComplete='off' 
                  placeholder='Гарчиг'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a valid character' 
                  onInput={inputHandler}
                />
                <Input 
                  element="textarea"
                  id="textarea" 
                  type="textarea" 
                  label="Article"
                  autoComplete='off' 
                  placeholder='Бичвэр'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a your article' 
                  onInput={inputHandler}
                />
                <Input 
                  element="input" 
                  id="email" 
                  type="file" 
                  label="Image"
                  autoComplete='off' 
                  placeholder=''
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a valid img.file' 
                  onInput={inputHandler}
                />
                <Input 
                  element="input" 
                  id="url" 
                  type="url" 
                  label="Url (Optional)"
                  autoComplete='off' 
                  placeholder='link оруулна уу'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a valid your first name.' 
                  onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid} variant='contained' style={{marginTop: '20px'}}>Publish</Button>
            </form>
            </div> 
        </main>  
    )
}

export default AddNews;