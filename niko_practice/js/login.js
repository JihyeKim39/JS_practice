const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// form의 submit 이벤트 감지
function onLoginSubmit(tomato) {
  tomato.preventDefault(); // 기본 동작(새로고침) 방지
  console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);
