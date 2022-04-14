// 5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function getUnderageOrOfAge (birthYear) {
  const currentYear = new Date().getFullYear()
  const personAge = currentYear - birthYear;

  if (personAge >= 18) return `You have ${personAge}, so you're of age!`;
  else return `You have ${personAge}, so you're underage!`;
}

console.log(getUnderageOrOfAge(1996))