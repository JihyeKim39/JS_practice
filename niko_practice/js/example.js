const hellos = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  hellos.style.color = "blue",
  console.log("title was clicked!");
}

hellos.addEventListener("click", handleTitleClick);