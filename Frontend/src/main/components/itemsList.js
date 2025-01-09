import React from 'react';
import Items from './items';

import './itemsList.css';
import Card from '../../shared/components/UIElements/Card';



const ItemList = props => {

  if (props.articles.length === 0){
    return (
      <div>
        <Card>
          <h2>Мэдээ байхгүй</h2>
        </Card>
      </div>
      
    )
  }
  return (
    <div className='items'>
      {props.articles.map(article => (
        <Items 
          key={article.id}
          id={article.id} 
          title={article.title}
          image={article.image}
          Url={article.url}   
        />
      ))}
    </div>
  )
}
export default ItemList;