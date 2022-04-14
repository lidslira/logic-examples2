//6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function daysToHours (days) {
  const daysToHours = days * 24;
  let dayName = days === 1 ? 'day' : 'days';
  return `${days} ${dayName} have ${daysToHours} hours`
}

console.log(daysToHours(0));