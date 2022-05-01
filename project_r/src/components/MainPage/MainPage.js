import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePage from '../TimePage/TimePage';
import './MainPage.css';

import 'react-router-dom';

function MainPage() {
  const [date, setDate] = useState(new Date());

  const events = () => {
    alert('click 했음 확인용');
  };
  return (
    <div className="app">
      <div className="text-center">
        <span>ERUM</span>
      </div>
      <Calendar onChange={setDate} value={date} onClickDay={events} />
    </div>
  );
}

export default MainPage;
