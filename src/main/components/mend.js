import React from 'react';

import './mend.css';

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



const Mend = () => {
    return (
        <main className='main-mend-container'>
            <div className='mend-img'>
                <img src="image\Богд Жэвзүндамба.jpg" alt="10th His Holiness Bogd Jevzundamda"/>
            </div>
            

                {DUMMYTEXT.map((d) => {
                    return(
                    <div key={d}>
                        <h4>{d.id}</h4>
                        <p>{d.text}</p>
                    </div>) 
                })}      
        </main>
    )
}
export default Mend;