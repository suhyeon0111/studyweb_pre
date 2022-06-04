import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import queryString from 'query-string';
import ReactModal from 'react-modal';
import '../../styles/Mymodal.css';
import axios from 'axios';

// 메인 함수
const Mymodal = ({ isOpen, onSubmit, onCancel }) => {
  const [values, setValues] = useState({
    subject: '',
    starttime: '',
    endtime: '',
    created_at: '',
  });

  //-------------------------------//

  // 시간 선택 변수, 함수
  const [Selected1, setSelected1] = useState('');
  const [Selected2, setSelected2] = useState('');
  const [Selected3, setSelected3] = useState('');
  const [Selected4, setSelected4] = useState('');

  // 컬러 선택 상태변수

  // 컬러 선택 리스트
  const colors = [
    '#ffafb0',
    '#fdd0ac',
    '#fdfa87',
    '#bee9b4',
    '#aee4ff',
    '#caa6fe',
  ];

  // 하나만 선택할 수 있음
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('colorselect');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  // 클릭시 제출
  const handleClickSubmit = (e) => {
    //post 함수
    onSubmit();
  };

  // 클릭시 뒤로 가기
  const handleClickCancel = () => {
    onCancel();
  };

  // 박스 스타일
  const MiddleBox = {
    width: '300px',
    margin: '0 auto',
  };

  const InputStyle = {
    width: '265px',
    height: '70px',
    borderRadius: '40px',
    borderStyle: 'none',
    margin: '0 0 30px',
    fontSize: '25px',
    paddingLeft: '35px',
  };
  // ----option 테스트------//

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

  const MinuteOptions = ['00', '10', '20', '30', '40', '50'];

  // 시간선택
  const handleSelect1 = (e) => {
    setSelected1(e.target.value);
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
  //---------------------//

  return (
    <ReactModal
      style={{
        content: {
          width: '400px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f0faee',
          borderRadius: '50px',
          borderStyle: 'none',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        },
      }}
      isOpen={isOpen}
    >
      <form>
        <div
          style={{
            height: '80px',
          }}
        >
          <button
            onClick={handleClickCancel}
            style={{
              borderStyle: 'none',
              backgroundColor: '#f0faee',
            }}
          >
            <BsArrowLeftCircle size={50} color={'#17a934'} />
          </button>
        </div>
        <div style={MiddleBox}>
          <input
            name="SubjectName"
            type="text"
            style={InputStyle}
            placeholder={'과목명'}
            value={values.subject}
          />
          <div className="select-time">
            <div>
              시작
              <select onChange={handleSelect1} value={Selected1}>
                {HourOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select onChange={handleSelect2} value={Selected2}>
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
              <select onChange={handleSelect4} value={Selected4}>
                {MinuteOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* 색상선택 */}
        <div className="color-box">
          <div
            key="1"
            style={{
              backgroundColor: colors[0],
              width: '24px',
              height: '24px',
              margin: '0 9px 0 9px',
              float: 'left',
              cursor: 'pointer',
              borderRadius: '50%',
              border: 0,
              outline: 0,
            }}
            name="colorselect"
            value="1"
            onChange={(e) => checkOnlyOne(e.target)}
          />
          <div
            key="2"
            style={{
              backgroundColor: colors[1],
              width: '24px',
              height: '24px',
              margin: '0 9px 0 9px',
              float: 'left',
              cursor: 'pointer',
              borderRadius: '50%',
              border: 0,
              outline: 0,
            }}
            name="colorselect"
            value="2"
            onChange={(e) => checkOnlyOne(e.target)}
          />
          <div
            key="3"
            style={{
              backgroundColor: colors[2],
              width: '24px',
              height: '24px',
              margin: '0 9px 0 9px',
              float: 'left',
              cursor: 'pointer',
              borderRadius: '50%',
              border: 0,
              outline: 0,
            }}
            name="colorselect"
            value="3"
            onChange={(e) => checkOnlyOne(e.target)}
          />
          <div
            key="4"
            style={{
              backgroundColor: colors[3],
              width: '24px',
              height: '24px',
              margin: '0 9px 0 9px',
              float: 'left',
              cursor: 'pointer',
              borderRadius: '50%',
              border: 0,
              outline: 0,
            }}
            name="colorselect"
            value="4"
            onChange={(e) => checkOnlyOne(e.target)}
          />
          <div
            key="5"
            style={{
              backgroundColor: colors[4],
              width: '24px',
              height: '24px',
              margin: '0 9px 0 9px',
              float: 'left',
              cursor: 'pointer',
              borderRadius: '50%',
              border: 0,
              outline: 0,
            }}
            name="colorselect"
            value="5"
            onChange={(e) => checkOnlyOne(e.target)}
          />
          <div
            key="6"
            style={{
              backgroundColor: colors[5],
              width: '24px',
              height: '24px',
              margin: '0 9px 0 9px',
              float: 'left',
              cursor: 'pointer',
              borderRadius: '50%',
              border: 0,
              outline: 0,
            }}
            name="colorselect"
            value="6"
            onChange={(e) => checkOnlyOne(e.target)}
          />
          <div
            key="7"
            style={{
              backgroundColor: colors[6],
              width: '24px',
              height: '24px',
              margin: '0 9px 0 9px',
              float: 'left',
              cursor: 'pointer',
              borderRadius: '50%',
              border: 0,
              outline: 0,
            }}
            name="colorselect"
            value="colors[6]"
            onChange={(e) => checkOnlyOne(e.target)}
          />
        </div>
        {/* 체크박스 */}
        <div className="check-box">
          <input type="checkbox" className="checkstyle" />
          <input type="checkbox" className="checkstyle" />
          <input type="checkbox" className="checkstyle" />
          <input type="checkbox" className="checkstyle" />
          <input type="checkbox" className="checkstyle" />
          <input type="checkbox" className="checkstyle" />
          <input type="checkbox" className="checkstyle" />
        </div>
        {/* 시간표 추가 버튼 */}
        <div className="bottom-box">
          <button
            className="subject-button"
            type="submit"
            onClick={handleClickSubmit}
          >
            시간표 추가
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default Mymodal;
