import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Announce.css'




const Announce = () => {
    const { newsId } = useParams();
    const [isLoaded, setIsLoaded] = useState();
  
    // const article = ARTICLES.find(news => news.id === newsId);
  
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await fetch(`http://localhost:5000/api/news/${newsId}`);
                const responseData = await response.json();
                setIsLoaded(responseData.news)
            } catch (err) {
                console.log(err)
            }
            
        };
        fetchNews();
    }, [newsId])

    if (!isLoaded) {
        return (
            <main>
                <h1>Article not found</h1>   
                <Link to='/'>Back to main page</Link>
            </main>
        )
    }


    return (
        <main className='main-announce-container'>
            <Link to='/'><FontAwesomeIcon icon={faArrowLeft} className='font-controller-announce'/></Link>
            <div className='announce-container'>
                <h1>{isLoaded.title}</h1>
                <div className='announce-img-container'>
                    <img src={isLoaded.image} alt={isLoaded.name}/>
                </div>
                <div className='announce-url'>
                    <a href={isLoaded.url}>Article Link</a>
                </div>
                <div className='announce-content'>
                    {isLoaded.content}
                </div>
            
            </div>
          
        </main>
    )
}
export default Announce;