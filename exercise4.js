//4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function oddOrEven (num1) {
    if (num1 % 2 === 0) return `You chose ${num1}, it's even!`
    else return `You chose ${num1}, it's odd!`
}

console.log(oddOrEven(2))