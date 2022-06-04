import axios from 'axios';
const API = axios.create();

// Subject
export const DevelopList = () => API.get('/report'); // 개발자 리스트 출력
export const DevelopCreate = (name, position, age) =>
  API.post('/report', {
    name: name,
    position: position,
    age: age,
  }); // 개발자 생성
