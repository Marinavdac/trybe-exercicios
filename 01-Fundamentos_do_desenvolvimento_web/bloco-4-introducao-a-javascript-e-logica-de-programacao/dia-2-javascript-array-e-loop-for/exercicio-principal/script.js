let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (let number of numbers) {
//     console.log(number)
// };

// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum;
for (let sum of numbers) {
  sum += sum;
  console.log(sum);
}

let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log("a soma de todos os elementos desse array é: " + soma);

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length;
console.log("a média aritmética dos valores contidos no array é: " + media);

// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

soma >= 20
  ? console.log("valor maior que 20")
  : console.log("valor menor ou igual a 20");

// 5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = numbers[0];

for (let index of numbers) {
  if (index > maiorValor) {
    maiorValor = index;
  }
}
console.log(maiorValor);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let pares = [2, 4, 6] // para teste

for (let numero of numbers) {
  if (numero % 2 !== 0) {
   console.log("números ímpar:" + numero)
  } else if (!(numero % 2 !== 0)){
      console.log("nenhum valor ímpar encontrado")
  }
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (let index of numbers) {
  if (index < menorValor) {
    menorValor = index;
  }
}
console.log(menorValor);

// 8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbersArray = [];
for (let i = 1; i <= 25; i++){
    numbersArray.push(i)
};

console.log(numbersArray);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let i=0; i < numbersArray.length; i++){
    console.log("A divisão é:" + (numbersArray[i]/2))
};

console.log(numbersArray);