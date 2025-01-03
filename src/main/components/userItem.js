import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';

import './userItem.css';
// import Input from '../../shared/components/FormElements/input';

const UserItem = () => {
    const history = useHistory()
   
    const [data, setData] = useState(
        {
            title: '',
            post: '',
            file: null
        }
    );
   

    const inputHandler = (e) => {
        const { id, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    const fileHandler = (e) => {
        const file = e.target.files[0];
        setData((prevState) => ({
            ...prevState,
            file
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const isConfirmed = window.confirm("Are you sure to Post it?")
        
        if(isConfirmed){
            console.log('User: ', data);
            history.push('/user');
        } else {
            console.log('Post action cancelled')
        }   
    };
    
  return (
    <main className='user-container'>
      <h1>User Interface</h1>
      <div className='user-form-container'>

        <form onSubmit={submitHandler} className='user-form'>
          <input type="text" id='title' placeholder='Post title (Optional)'  onChange={inputHandler}/>
          <textarea id='post' placeholder='Write your post...'  onChange={inputHandler} className='user-textarea'/>
          <input type="file" id='file'  accept='image/*,video/*' onChange={fileHandler}/>
          <Button type="submit" variant='contained'>Post</Button>
        </form>

      </div>
    </main>
  )
}
export default UserItem;