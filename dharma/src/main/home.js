import React from "react";
import ItemList from "./components/itemsList";
import Calender from "./components/calender";
import Course from "./components/course";
import './home.css';


const DUMMYTEXT = [{
    id: <h1>Монголын Бурханы шашны тэргүүн Оройн дээд Очирдара X Богд Жэвзүндамба хутагтын мэндчилгээ</h1>,
    text: <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
}]

const ARTICLE = [
    {
        id: 'a1',
        name: 'Жанцан',
        image: 'image/bigGate.jpg',
        url: "http://www.mongoltoli.mn/search.php?ug_id=41523&opt=1&word=%D0%96%D0%90%D0%9D%D0%A6%D0%90%D0%9D"
    },
    {
        id: 'a2',
        name: 'Гандан Хийд',
        image: 'image/gandan.jpg',
        url: 'https://www.mongolianguideschool.com/info7/detail/183'
    },
    {
        id: 'a3',
        name: 'Буддын сургаал',
        image: 'image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
    },
    {
        id: 'a4',
        name: 'Буддын сургаал',
        image: 'image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
    },
    {
        id: 'a5',
        name: 'Гандан Хийд',
        image: 'image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
    },
    {
        id: 'a6',
        name: 'Буддын сургаал',
        image: 'image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
    },
    {
        id: 'a7',
        name: 'Буддын сургаал',
        image: 'image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
    }
]

export default function Home() {
    return (
        <main className="home">

            <section className="section-1">
                <img src="image\Богд Жэвзүндамба.jpg" alt="10th His Holiness Bogd Jevzundamda"/>

                {DUMMYTEXT.map((d) => {
                    return(
                    <div>
                        <h4>{d.id}</h4>
                        <p>{d.text}</p>
                    </div>) 
                })}              
            </section>

            <section className="section-2">
                <div >
                    <ItemList articles={ARTICLE} /> 
                </div>
                   
            </section>

            <section className="section-3">
                <div className="cali-container">
                  <Calender />    
                </div>

                <h3 style={{marginBottom: '0px'}}>Course Schedule</h3>                                          
                  <Course />         
            </section>        
        </main>
    )
};

