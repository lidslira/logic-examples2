// 7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse numero é par ou ímpar.

function divideAndCheck(num1, num2) {
    const divisionResult = (num1/num2).toFixed(2);
    if (divisionResult % 2 === 0) return `The result of the division between ${num1} and ${num2} is ${divisionResult}, and it's a even number.`;
    else return `The result of the division between ${num1} and ${num2} is ${divisionResult}, and it's a odd number.`
  } 

  console.log(divideAndCheck(4,2));