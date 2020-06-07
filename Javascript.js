for (let number = 0; number <= 12; number += 2) {
console.log(number);
}
switch (prompt("What is the weather like?")) {
case "rainy":
console.log("Remember to bring an umbrella.");
break;
case "sunny":
console.log("Dress lightly.");
break;
case "cloudy":
console.log("Go outside.");
break;
default:
console.log("Unknown weather type!");
break;
}
*/
console.log(true ? 1 : 2);
//To reuse a variabl
let mood = 'happy';
console.log(mood);
mood = 'excited';
console.log(mood);
//To check one's debt balance
let jamesdebt = 5500;
jamesdebt = jamesdebt - 2000;
  console.log(jamesdebt);
//Use of var and const
var name = 'James';
const greeting = 'Hello ';
console.log(greeting + name);
//Loop for 7 Calls

//2 get num div by 3,5 nd log dem as Fizz,Buzz
for (let n = 0; n <= 100; n = n + 1){
      if (n % 3 == 0){
const n = 'Fizz';
  console.log(n);
} 
  else if ( n % 5 == 0){
 const n = 'Buzz';
    console.log(n);
  }
  {
const n = 'FizzBuzz';
  console.log(n);
  }
  } */
function starTriangle(length){
let str = " ";
for (let x = 0; x <= 7; x++){
  str += "$";
  console.log(str);
  }
  }
starTriangle(7);
  //ChessBoard
let size = 8;
let board = ' ';
for (let k = 1;  k <= 8; k++){
  for (let j = 1; j <= 8; j++){
    if ((k + j) % 2 ==0){
    board += ' ';
      }
    else
      {
        board += '#';
        }
  }
  board += ' \n ';
  }
console.log(board);
    
    
  

