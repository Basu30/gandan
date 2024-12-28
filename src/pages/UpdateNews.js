import React, { useEffect, useState } from 'react';

import Input from '../shared/components/FormElements/input'
import { VALIDATOR_REQUIRE } from '../shared/util/validators';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '../shared/hooks/form-hook';

import './UpdateNews.css';

const ARTICLES = [
    {
        id: 'a1',
        name: 'Жанцан',
        image: '/image/bigGate.jpg',
        url: "http://www.mongoltoli.mn/search.php?ug_id=41523&opt=1&word=%D0%96%D0%90%D0%9D%D0%A6%D0%90%D0%9D",
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'a2',
        name: 'Гандан Хийд',
        image: '/image/gandan.jpg',
        url: 'https://www.mongolianguideschool.com/info7/detail/183',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'a3',
        name: 'Бурхан багшийн их дүйчэн өдөр',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'a4',
        name: 'Буддын сургаал',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'a5',
        name: 'Гандан Хийд',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'a6',
        name: 'Буддын сургаал',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'a7',
        name: 'Буддын сургаал',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    }
  ]
   

const UpdateNews = () => {
    const { newsId } = useParams();
   
    const [isLoading, setIsLoading] = useState(true)

    const [formState, inputHandler, setFormData] = useForm( false,
        {
            name: {
                value:'',
                isValid: false
            },
            content: {
                value: '',
                isValid: false
            }, 
            image: {
                value:'',
                isValid: true
            },
            url: {
                value:'',
                isValid: true
            }
       },

    
);
    
    const article = ARTICLES.find((news) => news.id === newsId);

//  console.log('ARTICLE', article)
//  console.log('news id', newsId)

    useEffect(() => {
        if (article){
            setFormData(
                {
                    name:{
                        value: article.name,
                        isValid: true
                    },
                    content: {
                        value: article.content,
                        isValid: true
                    }, 
                    image: {
                        value: article.image ,
                        isValid: true
                    },
                    url: {
                        value: article.url ,
                        isValid: true
                    }
                },
                true
            );
        }
        setIsLoading(false)
    }, [setFormData, article]);



    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs) // sending to backend
    }

    if(isLoading){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    if(!article){
        return <div>Article not found!</div>
    }

return(


        <main className='update-form'>

            <Link to='/'><FontAwesomeIcon icon={faArrowLeft} className='font-controller-announce'/></Link>
            
            <h1>This is Edit page</h1>         
            <div className='update-form-container'>

            <form onSubmit={submitHandler} className='form-controllor'>
                <Input 
                    id='name'
                    element='input'
                    type='text'
                    label='Title'
                    autoComplete='off' 
                    errorText='Please enter a valid title'
                    validators={[VALIDATOR_REQUIRE()]}  
                    onInput={inputHandler}
                    initialValue={formState.inputs.name.value}
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
                    initialValue={formState.inputs.content.value}
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
                    initialValue={formState.inputs.url.value}
                />
                <Button type='submit' variant='contained' style={{marginTop: '20px'}}>Update</Button>
            </form>
            </div>
        </main>
    )
}

export default UpdateNews;