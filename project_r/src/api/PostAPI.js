import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

axios
  .post('/plan?created_at=20220601', {
    subject: '수학',
    starttime: 110,
    endtime: 120,
    color: 1,
    created_at: '20220601',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
