const clock = document.querySelector("h2#clock"); //html 불러오기

//querySelector() 는 괄호안에 인자로 넣은 값과 일치하는 요소를 찾아서 반환한다. 
//일치하는 요소가 없으면 null을 반환한다. 
// 괄호안에는 String(문자열) 형만 넣을 수 있고, 
// 유효한 CSS 선택자를 넣어야한다.


function getClock(){ // 시계가 작동되는 함수 만들어보기
  const date = new Date(); //date 라는 상수 만들고
  //이 코드를 실행하면, 호출하는 당시의 초, 시간, 등 전부 가져올 수 있는 것이다

  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");  
  //padStart, padEnd = 길이를 설정해주고, 
  // 길이가 다 안나올 때는 앞이나 뒤에 추가할 수 있는거 넣어두기 
  //number -> String = String(date.getHours()) = String 괄호 안에 똑같이 넣어주기 
  //number 버전 = date.getHours()

  clock.innerText = `${hours}:${minutes}:${seconds}`; 
  //우리가 구한 시간을 clock 의 innerText로 찍어내면 된다 (시간,분,초)
  //clock의 id 는 h2 ("h2#clock") + html too 
}

getClock(); //여기서 시간 자체를 실행하고,
//website가 load 되자마자 getclock을 실행하고 매초마다 실행되도록 해보자  
//어떻게 함수를 호출할까? -> setInterval


setInterval(getClock, 1000); //(매초)1초마다 인터벌로 다시 실행되고 있다 
// setInterval = 실시간으로 보이게 하는 부분 

