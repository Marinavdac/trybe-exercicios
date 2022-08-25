const readLine = require('readline-sync');

const distance = readLine.questionInt("Digite a distância que quer calcular em km:  ");

const time = readLine.question("Digite o tempo em minutos : ");


const velocity = (distance, time) => console.log(`A sua velocidade é de: ${((distance*1000) / (time*3600)).toFixed(3)} m/s`); 

velocity(distance, time);

module.exports = {
  velocity,
}