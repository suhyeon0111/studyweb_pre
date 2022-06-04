import '../../styles/TimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import React, { createElement, useEffect, useState, useRef } from 'react';
import MyModal from './Mymodal';
import randomColor from 'randomcolor';
import { Helmet } from 'react-helmet';
import TimeList from './TimeList';
import queryString from 'query-string';
import CreateTime from './CreateTime';

// 더미 데이터
const DataList = [
  {
    id: 1,
    subject: '수학',
    starttime: 110,
    endtime: 120,
    color: 1,
    created_at: '20220601',
  },
  {
    id: 2,
    subject: '국어',
    starttime: 240,
    endtime: 410,
    color: 2,
    created_at: '20220601',
  },
  {
    id: 3,
    subject: '과학',
    starttime: 800,
    endtime: 900,
    color: 3,
    created_at: '20220601',
  },
];

const TimePage = () => {
  const [users, setUsers] = useState([]); // 데이터 상태관리 변수
  const [inputs, setInputs] = useState({
    subjectname: '',
  });

  const { subjectname } = inputs;
  const nextId = useRef(30);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    const user = {
      id: nextId.current,
      subjectname,
    };

    setUsers([...users, user]);
    // 또는 setUsers(users.concat(user));

    setInputs({
      subjectname: '',
    });
    nextId.current += 1;
  };

  //====================================================================================================//
  // 렌덤 색상 변수들
  const color = [randomColor(), randomColor(), randomColor()];

  const back_onclick = (e) => {
    window.location.href = '/';
  };

  // 현재 url에서 쿼리값 받아서 다시 라우팅
  const logout_onclick = (e) => {
    let qs = queryString.parse(window.location.search);
    console.log(Object.values(qs));
    window.location.href = `/report?created_at=${Object.values(qs)}`;
  };

  //기준 시간
  const stdlist = [];
  for (let std = 0; std < 24; std++) {
    stdlist.push(('00' + std).slice(-2));
  }
  const stdItem = stdlist.map((key) => <div key={key}>{key}</div>);

  // 시간 리스트
  let t = 0;
  const timelist = [];
  while (t < 2400) {
    timelist.push(t);
    if ((t - 50) % 100 === 0) {
      t += 50;
    } else if (t - 50 === 0) {
      t += 50;
    } else {
      t += 10;
    }
  }

  // 시간표 구성 div
  let i = 0;
  const listItem = timelist.map((key) => (
    <div
      key={key}
      style={{
        width: '15%',
        height: '30.5px',
        borderColor: 'black',
        borderStyle: 'solid',
        float: 'left',
        color:
          i < DataList.length &&
          key >= DataList[i].starttime &&
          key <= DataList[i].endtime
            ? color[i]
            : 'white',
        backgroundColor:
          i < DataList.length &&
          key >= DataList[i].starttime &&
          key <= DataList[i].endtime
            ? color[i]
            : 'white',
      }}
    >
      {i < DataList.length && key === DataList[i].endtime ? (i += 1) : null}
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>ERUM-schedule</title>
      </Helmet>
      <div className="top-box">
        <div>
          <button className="calendar-button" onClick={back_onclick}>
            <BsArrowLeftCircle className="icon" size={50} />
          </button>
        </div>
        <div className="time-ERUM">
          <span>ERUM</span>
        </div>
        <div>
          <button className="login-button" onClick={logout_onclick}>
            REPORT
          </button>
        </div>
      </div>

      <div className="container">
        <div className="first-box">
          <div className="subject-box">
            <TimeList users={users} />
          </div>
        </div>
        <div className="timelist-box">{stdItem}</div>
        <div className="second-box">{listItem}</div>
        <div className="third-box">
          <CreateTime
            subjectname={subjectname}
            onChange={onChange}
            onCreate={onCreate}
          />
        </div>
      </div>
    </>
  );
};

export default TimePage;
