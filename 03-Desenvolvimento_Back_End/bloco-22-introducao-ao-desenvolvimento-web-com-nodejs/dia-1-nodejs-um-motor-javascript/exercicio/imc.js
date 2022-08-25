const readLine = require('readline-sync');

const altura = readLine.questionFloat("Digite a sua altura :")
const peso = readLine.questionFloat("Digite o seu peso :")

const imc = (altura, peso) => (peso / (altura * altura).toFixed(1)); 
const medida = imc(altura, peso).toFixed(1);

console.log(`Você possui um IMC de: ${medida}`);
getImcCassification(medida);

function getImcCassification(medida) {
  if (medida >= 40.0) {
    console.log('Você está acima do peso (Obesidade graus III e IV)')
  } else if (medida < 18.5) {
    console.log('Você está abaixo do peso');
  } else if (medida < 24, 9 && medida > 18.5) {
    console.log('Você está dentro do peso ideal');
  } else if (medida < 29, 9 && medida > 25, 0) {
    console.log('Você está acima do peso (sobrepeso)');
  } else if (medida < 34, 9 && medida > 30, 0) {
    console.log('Você está acima do peso (obesidade grau I)');
  } else if (medida < 39, 9 && medida > 35, 0) {
    console.log('Você está acima do peso (obesidade grau II)')
  } else if (medida > 34, 9 && medida < 30, 0) {
    console.log('Você está acima do peso (obesidade grau I)');
  } 

}

module.exports = {
  imc,
}