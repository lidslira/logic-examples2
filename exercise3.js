//3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

function studantAverage(grade1, grade2, grade3){
  if ((grade1 || grade2 || grade3) > 10) return "There's an invalid grade. Be sure the maximum grade is 10."; 
  const finalAverage = (grade1 + grade2 + grade3)/3.0;
  if (finalAverage >= 7) return `Congratulations, you've been approved with a ${finalAverage.toFixed(2)} average`;
  if ( 5 <= finalAverage && finalAverage < 7) return `You're going to summer school to improve your ${finalAverage.toFixed(2)} average`;
  else return `Unfortunately, your average is ${finalAverage.toFixed(2)}. You're repproved`
}

console.log(studantAverage(5, 10, 6));