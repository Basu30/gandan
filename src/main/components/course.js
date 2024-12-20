import React from 'react';
import Slider from 'react-slick';
import CourseItem from './courseItem';
// import { Link } from 'react-router-dom'
// import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './course.css';

const DummySchedule = [
    {
        id: 's1',
        title: 'Ламрим',
        img: 'image/хорол.png',
        day: 'Даваа',
        time: '07:00',
        date: '2024-12-01',
        location: 'Батцагаан дуган'
    },
    {
        id: 's2',
        title: 'Ёндан Ширжүрма',
        img: '/image/хорол.png',
        day: 'Даваа',
        time: '07:00',
        date: '2024-12-01',
        location: 'Батцагаан дуган'
    },
    {
        id: 's3',
        title: 'Богд Ламын Намтар',
        img: '/image/хорол.png',
        day: 'Даваа',
        time: '07:00',
        date: '2024-12-01',
        location: 'Батцагаан дуган'
    }
]

// const StyledLink = styled(Link)`text-decoration: none`;

const Course = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 4500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

return (     
    <main className='course-container'>
        <Slider {...settings}>
            {DummySchedule && DummySchedule.map((s,i) => {
                return (
                    // <StyledLink to='/announce'>
                    <div key={i}>
                        <CourseItem  
                            id={s.id}               
                            title={s.title}
                            images={s.img}
                            day={s.day}
                            time={s.time}
                            date={s.date}
                            location={s.location}
                        /></div>
                    // </StyledLink>
                )
            })}
       </Slider>
    </main> 
)
}
export default Course;