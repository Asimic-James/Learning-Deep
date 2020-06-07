var classe;
var price = 60000;
var text;
classe = prompt('Kindly Choose Your Flight Class');
switch (classe) {
    case 'First' : price += 15000;
    console.log(price);
    break;
    case 'Economy' : price += 8000;
    console.log(price);
    break;
    case 'Business' : price += 5000;
   console.log(price);
    break;
  default: 
text = 'Invalid Input,Please Try Again!';
    console.log(text);
}