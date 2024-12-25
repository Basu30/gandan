import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './courseItem.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

let nom = 'Бодь мөрийн зэрэг буюу түвдээр Ламрим хэмээх бүтээлийг анх 1402 онд Цаст Түвдийн оройн чимэг хэмээн алдаршсан Богд Зонхов туурвижээ. Богд Зонхов нь Будда болон түүний залгамжлагчдын сургаал номыг уг эхээс нь эхлэн бүгдийг нь нарийвчлан судлаад үндсэн агуулгыг нь багтаасан, алхам алхмаар гэгээрэлд хүрэх шат дарааллыг эхлэн гэгээрэгч, улам гэгээрэгч, төгс гэгээрэгч хэмээн гурав ангилан энэхүү бүтээлдээ бичжээ.Бодь мөрийн зэрэг судар нь Бурханы шашинтан, лам хувраг , сүсэгтэн хүмүүсийн өдөр тутмын унших, бясалгах номын хөтөч нь бөлгөө.'


const CourseItem = course => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
    <main className="main-container">
      
      {/* <div>{s.id}</div> */}
      <div className='title'>{course.title}</div>

      <Button onClick={handleOpen}>
        <div className='images-course'>      
          <img src={course.images} alt='hurd' style={{width:'80px'}}/>
        </div>
      </Button>

      <div className='d-d-t'>
        <div className='day'>Өдөр: {course.day}</div>
        <div className='date'>Огноо: {course.date}</div>
        <div className='time'>Цаг: {course.time}</div>
      </div>

      <div className='location'>Хаана: {course.location}</div>
    </main>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          <h1 className='title' style={{fontSize: '35px'}}>{course.title}</h1>
          <p>Товч танилцуулга</p>
          <p>{nom}</p>
          <p className='location'>Энэхүү номыг Гандантэгчэнлин хийдийн дэд хамба Гантөмөр айлдана. Ном 7 хоног үргэлжилэнэ. </p>
        </Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mt: 2}}>
            <div className='d-d-t'>
              <div className='day'>Өдөр: {course.day}</div>
              <div className='date'>Огноо: {course.date}</div>
              <div className='time'>Цаг: {course.time}</div>
            </div>
          </Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
            <div className='location'>Хаана: {course.location}</div>
          </Typography>

        </Box>
      </Modal>
    </React.Fragment>
  )
}
export default CourseItem;