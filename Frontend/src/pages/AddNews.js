import React from 'react'
import { useForm } from '../shared/hooks/form-hook';
import Input from '../shared/components/FormElements/input';
import { VALIDATOR_REQUIRE } from '../shared/util/validators';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './AddNews.css'

const AddNews = () => {

    const [formState, inputHandler ] = useForm(
        {
            title: {
              value: '',
              isValid: false
            },
            content: {
              value: '',
              isValid: false
            },
            image: {
                value: '',
                isValid: false
            },
            url: {
              value: '',
              isValid: false
          }
        },
        false
    );


    const addHandler = async (event) => {
        event.preventDefault();

        try{
          const response = await fetch('http://localhost:5000/api/news', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: formState.inputs.title.value,
            content: formState.inputs.content.value,
            image: formState.inputs.image.value,
            url: formState.inputs.url.value,
          })
        });
        const responseData = await response.json();
        console.log(responseData)
        } catch (err) {
          console.log(err)
        }
        // alert('Are you sure!');
        // console.log(formState.inputs)
    }

    return (  
        <main className='news-container'> 
          <Link to='/'><FontAwesomeIcon icon={faArrowLeft} className='font-controller-announce'/></Link>
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
                  id="content" 
                  type="text" 
                  label="Article"
                  autoComplete='off' 
                  placeholder='Бичвэр'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a your article' 
                  onInput={inputHandler}
                />
                <Input 
                  element="input" 
                  id="image" 
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