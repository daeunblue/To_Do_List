const clock = document.querySelector(".clock");
const clockTitle = document.querySelector('.time');

function getTime(){
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  clockTitle.innerText = `현재 시간 : ${hour}시 ${min}분 ${sec}초`;
}

function init(){
  getTime();
  setInterval(getTime,1000); // setInterval() : 1초마다 getTime 함수 실행 
}

init();