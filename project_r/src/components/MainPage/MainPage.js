import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MainPage.css';
import 'react-router-dom';

function MainPage() {
  const [date, setDate] = useState(new Date());

  const events = (e) => {
    window.location.href = '/time';
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
