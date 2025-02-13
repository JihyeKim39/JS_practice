//바깥에서 하면 그냥 아까처럼 
//function sayHello(a,b){중괄호에 넣고 하면 끝}


//근데 object (const,let)안에서는 다르게 넣게 된다
const player = {
  name: "nico",
  sayHello: function(){
    console.log("hello");
  },
};

console.log(player.game);
player.sayHello();

//여기서 sayHello는 어떠한 argument도 받지 않는다 
//그래서 바깥세상에서 argument를 받도록 할거다

const toBuy = ["potato", "apple", "banana"]
console.log(toBuy[1]); //0부터 세고 원하는 거 호출 가능

toBuy[0]= "water"; //array 바꿀 수도 있다 = 업데이트
console.log(toBuy);

toBuy.push("beef"); //추가할 수도 있다 
console.log(toBuy);

const buyPerson = {
  name: "zeze",
  age:31,
  job:"SE",
}

//<object 만드는 법>
console.log(buyPerson,console); //buyPerson의 정보 호출하기
//하나의 element 만 가져오기 
console.log(buyPerson.name); //object에서 item 가져오는 방법
buyPerson.name = "Julien"; //name 바꾸기 (아래는 호출)
console.log(buyPerson);
buyPerson.rich = "soon"; //추가하기
console.log(buyPerson);
//buyPerson =object이고, name,age,job = property 특성 넣어주기

//function (1)
function plus(){
  console.log(2+2);
}
plus(); //호출하고 싶다면 

//function (2)
function plus (a,b){ //function은 이곳 바디{body}에서만 사용가능하다
  console.log(a + b);
}

plus(5,10);

//To make a calculator
const calculatorEx = {
  add: function(a,b){
    console.log(a,b);
  },
} 

//calculator.add(5,6); 치면 => console.log 처럼 나타낼 수 있다

const calculator = {
  add: function(a, b){
    console.log(a + b);
  },
  minus: function(a,b){
    console.log(a - b);
  },
  divide: function(a,b){
    return (a/b);
  },
  multi : function(a,b){
    return (a * b);
  },
}

calculator.add (5,10);
calculator.minus(6, 4);
calculator.divide(30,5);

//한국나이를 계산하는 function 만들기
const age = 55;
function calculatorKrAge(ageOfForeigner){
  //ageOfForeigner + 2; //console.log 대신 직접 적는다
  return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age); 
//calculatorKrage를 실행시키면, function안의 함수가 실행된다
//그리고 age는 55라는 argument가 age자리고 대체된다 
//그 55가 age자리고 가서, 55+2 가 return된다
console.log(krAge);

//만약, 국제나이 (-2)값을 구하고, 호출하고 싶다면?
function calculatorIntAge(ageOfInternational){
  return ageOfInternational -2
}

const ageInter = calculatorIntAge(age);
console.log(ageInter);

//아까 calculator 에서도 return으로 하면 훨씬더 간단해진다 
// multi : function(a,b){
//   return (a * b);
// },
//그냥 calculator.multi해서는 안나온다 
// 여기 앞에 const multiResult =/ 해줘야 한다
const multiResult = calculator.multi(6,5);
console.log(multiResult);

//아래처럼 길게 서로 값을 구하게 한 것 = 상호의존성 (서로가 연결된 것)
const divideResult = calculator.divide(multiResult,5);
const minusResult = calculator.minus(10,divideResult);

console.log(multiResult); //값 구하기 
