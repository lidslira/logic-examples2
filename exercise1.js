//1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function getDay(number) {
  switch (number) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "an invalid day number"
    break;
  }
}

console.log(`It's ${getDay(15)}!`);
