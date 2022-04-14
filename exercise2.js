//2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".


function checkBiggerNumber(num1, num2){
  if (num1 > num2) return `${num1} is bigger than ${num2}`;
  if (num2 > num1) return `${num1} is smaller than ${num2}`;
  else return `${num1} is equal ${num2}`
}

console.log(checkBiggerNumber(14, 15));