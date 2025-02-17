//아래처럼도 가능

type Age = number; 
type Name = string;
type Player ={
  name : Name,
  age? :Age,
}

//name :콜론, argument의 타입이 있다 
//원하는 것 : player object 만들고, 그걸 return 하는 것 
function playerMaker(name : string ){
  return {
    name

  }
}