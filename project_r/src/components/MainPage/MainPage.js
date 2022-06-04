import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/MainPage.css';
import 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

function MainPage() {
  // 날짜 상태 관리
  const [date, setDate] = useState(new Date());

  // date를 숫자로 바꾸기
  const ChangeDay = (date) => {
    setDate(date);
    let Day = date.toString().split(' ');

    if (Day[1] === 'Jan') {
      Day[1] = ('00' + 1).slice(-2);
    } else if (Day[1] === 'Feb') {
      Day[1] = ('00' + 2).slice(-2);
    } else if (Day[1] === 'Mar') {
      Day[1] = ('00' + 3).slice(-2);
    } else if (Day[1] === 'Apr') {
      Day[1] = ('00' + 4).slice(-2);
    } else if (Day[1] === 'May') {
      Day[1] = ('00' + 5).slice(-2);
    } else if (Day[1] === 'Jun') {
      Day[1] = ('00' + 6).slice(-2);
    } else if (Day[1] === 'Jul') {
      Day[1] = ('00' + 7).slice(-2);
    } else if (Day[1] === 'Aug') {
      Day[1] = ('00' + 8).slice(-2);
    } else if (Day[1] === 'Sep') {
      Day[1] = ('00' + 9).slice(-2);
    } else if (Day[1] === 'Oct') {
      Day[1] = ('00' + 10).slice(-2);
    } else if (Day[1] === 'Nov') {
      Day[1] = ('00' + 11).slice(-2);
    } else if (Day[1] === 'Dec') {
      Day[1] = ('00' + 12).slice(-2);
    }
    const fullDay = Day[3] + Day[1] + Day[2];
    console.log(fullDay);
    window.location.href = `/plan?create_at=${fullDay}`;

    axios
      .get(`http://127.0.0.1:8000/plan?created_at=${fullDay}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div className="app">
      <Helmet>
        <title>ERUM-calendar</title>
      </Helmet>
      <div className="text-center">
        <span>ERUM</span>
      </div>
      <Calendar onChange={setDate} value={date} onClickDay={ChangeDay} />
    </div>
  );
}

export default MainPage;
