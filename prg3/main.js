let num1 = parseInt(prompt('enter first number'))
let  num2 = parseInt(prompt('enter second number'));

let check = (num1, num2) => {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) return true;
  else return false;
};

alert(check(num1, num2));
