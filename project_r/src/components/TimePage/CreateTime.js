import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import queryString from 'query-string';
// import { Select } from 'antd';
// const { Option } = Select;

function CreateTime({ onChange, onCreate }) {
  const [disabled, setDisabled] = useState(false);

  // Input 상태관리
  const [name, setName] = useState('');

  // 시간 선택 변수, 함수
  const [Selected1, setSelected1] = useState(0);
  const [Selected2, setSelected2] = useState('');
  const [Selected3, setSelected3] = useState('');
  const [Selected4, setSelected4] = useState('');

  // useEffect(() => {
  //   // console.log(Selected1);
  // }, [Selected1]);

  useEffect(() => {
    //console.log(Selected2);
  }, [Selected2]);

  useEffect(() => {
    //console.log(Selected3);
  }, [Selected3]);

  useEffect(() => {
    //console.log(Selected4);
  }, [Selected4]);

  const HourOptions = [
    { key: 0, value: '00' },
    { key: 1, value: '01' },
    { key: 2, value: '02' },
    { key: 3, value: '03' },
    { key: 4, value: '04' },
    { key: 5, value: '05' },
    { key: 6, value: '06' },
    { key: 7, value: '07' },
    { key: 8, value: '08' },
    { key: 9, value: '09' },
    { key: 10, value: '10' },
    { key: 11, value: '11' },
    { key: 12, value: '12' },
    { key: 13, value: '13' },
    { key: 14, value: '14' },
    { key: 15, value: '15' },
    { key: 16, value: '16' },
    { key: 17, value: '17' },
    { key: 18, value: '18' },
    { key: 19, value: '19' },
    { key: 20, value: '20' },
    { key: 21, value: '21' },
    { key: 22, value: '22' },
    { key: 23, value: '23' },
  ];
  // const HourOptions = [
  //   '00',
  //   '01',
  //   '02',
  //   '03',
  //   '04',
  //   '05',
  //   '06',
  //   '07',
  //   '08',
  //   '09',
  //   '10',
  //   '11',
  //   '12',
  //   '13',
  //   '14',
  //   '15',
  //   '16',
  //   '17',
  //   '18',
  //   '19',
  //   '20',
  //   '21',
  //   '22',
  //   '23',
  // ];
  const MinuteOptions = [
    { key: 0, value: '00' },
    { key: 1, value: '10' },
    { key: 2, value: '20' },
    { key: 3, value: '30' },
    { key: 4, value: '40' },
    { key: 5, value: '50' },
  ];
  // const MinuteOptions = ['00', '10', '20', '30', '40', '50'];

  // 시간선택
  const handleSelect1 = (e) => {
    setSelected1(e.target.value);
    console.log(e.target.value);
  };
  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
    console.log(Selected2);
  };
  const handleSelect3 = (e) => {
    setSelected3(e.target.value);
    console.log(Selected3);
  };
  const handleSelect4 = (e) => {
    setSelected4(e.target.value);
    console.log(Selected4);
  };

  // 과목 이름 핸들링 함수
  const inputHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  // 제출 핸들링 함수
  const handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    // await new Promise((r) => setTimeout(r, 1000));
    setDisabled(false);

    // console.log(Selected1);
    // console.log(Selected2);
    // console.log(Selected3);
    // console.log(Selected4);

    // 현재 플레너 날짜 쿼리스트링 빼오기
    let qs = queryString.parse(window.location.search);

    // 내가 보내는 데이터 객체 생성
    let body = {
      subject: name,
      starttime: Number(setSelected1 + setSelected2),
      endtime: Number(setSelected3 + setSelected4),
      created_at: Number(Object.values(qs)),
    };
    console.log(body);
    // 직접 보내기
    // axios
    //   .post(`plan?created_at=${Object.values(qs)}`, body)
    //   .then((res) => console.log(res));
  };

  const InputStyle = {
    width: '265px',
    height: '70px',
    borderRadius: '40px',
    borderStyle: 'none',
    margin: '0 0 30px',
    fontSize: '25px',
    paddingLeft: '35px',
    backgroundColor: 'rgb(227, 227, 227)',
  };
  // 박스 스타일
  const MiddleBox = {
    width: '300px',
    margin: '100px auto',
    bottom: '10%',
    position: 'fixed',
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={MiddleBox}>
          <input
            name="SubjectName"
            type="text"
            onChange={inputHandler}
            style={InputStyle}
            placeholder={'과목명'}
          />
          <div className="select-time">
            <div>
              시작
              <select value={Selected1} onChange={handleSelect1}>
                {HourOptions.map((item, idx) => (
                  <option key={idx} value={Number(item.value)}>
                    {item.value}
                  </option>
                ))}
              </select>
              <select value={Selected2} onChange={handleSelect2}>
                {MinuteOptions.map((item, idx) => (
                  <option key={idx} value={Number(item.value)}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="select-time">
            <div>
              종료
              <select value={Selected3} onChange={handleSelect3}>
                {HourOptions.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
              <select value={Selected4} onChange={handleSelect4}>
                {MinuteOptions.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* 시간표 추가 버튼 */}
          <div className="bottom-box">
            <button className="subject-button" type="submit" onClick={onCreate}>
              시간표 추가
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateTime;
