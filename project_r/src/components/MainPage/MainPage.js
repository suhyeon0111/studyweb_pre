import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MainPage.css';

function MainPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <div className='text-center'><span>ERUM</span></div>
        <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default MainPage;