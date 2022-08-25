const readLine = require('readline-sync');

console.log("Advinhe o número!")

function logResults(number, answer) {
  if (number !== answer) {
  return console.log(`Ainda não foi dessa vez...=/ o número era: ${number}`);
  }
  return console.log('Parabéns, número correto!')
}

function main() {
  const answer = parseInt(Math.randim() * 10, 10);
  const number = readLine.question("Digite um número entre 0 e 100: ");

  logResults(number, answer);
}

const newPlay = readLine.question("Tentar novamente (s ou n?) ");

if (newPlay !== 's') {
  console.log('Ok, até a próxima!')
} else {
  sortedNumber();
}


module.exports = {
  sortedNumber,
}
