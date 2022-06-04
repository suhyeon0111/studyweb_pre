import axios from 'axios';
import React, { useState, useRef } from 'react';
import queryString from 'query-string';
import { Select } from 'antd';
const { Option } = Select;

function CreateTime({ onChange, onCreate }) {
  const [disabled, setDisabled] = useState(false);

  // Input 상태관리
  const [name, setName] = useState('');

  // 시간 선택 변수, 함수
  const [Selected1, setSelected1] = useState(0);
  const [Selected2, setSelected2] = useState(0);
  const [Selected3, setSelected3] = useState('');
  const [Selected4, setSelected4] = useState('');

  const HourOptions = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  // const MinuteOptions = [
  //   { key: 1, value: '00' },
  //   { key: 2, value: '10' },
  //   { key: 3, value: '20' },
  //   { key: 4, value: '30' },
  //   { key: 5, value: '40' },
  //   { key: 6, value: '50' },
  // ];
  const MinuteOptions = ['00', '10', '20', '30', '40', '50'];

  // 시간선택
  const handleSelect1 = (e) => {
    setSelected1(e.target.value);
    console.log(Selected1);
  };
  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
  };
  const handleSelect3 = (e) => {
    setSelected3(e.target.value);
  };
  const handleSelect4 = (e) => {
    setSelected4(e.target.value);
  };

  // 과목 이름 핸들링 함수
  const inputHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  // 제출 핸들링 함수
  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setDisabled(false);

    console.log(setSelected1);
    console.log(setSelected2);
    console.log(setSelected3);
    console.log(setSelected4);

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
                {HourOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select value={Selected2} onChange={handleSelect2}>
                {MinuteOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="select-time">
            <div>
              종료
              <select onChange={handleSelect3} value={Selected3}>
                {HourOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              {/* <select onChange={handleSelect4} value={Selected4}>
                {MinuteOptions.map((item, index) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select> */}
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
