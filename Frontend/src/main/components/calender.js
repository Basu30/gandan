import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar/DateCalendar';



import './calendar.css';


const Calender = () => {
  return (
    <main className='cale-container'> 
      <h1>Calender</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar  className='cale-date'/>
      </LocalizationProvider>

    </main>

  )
}
export default Calender;