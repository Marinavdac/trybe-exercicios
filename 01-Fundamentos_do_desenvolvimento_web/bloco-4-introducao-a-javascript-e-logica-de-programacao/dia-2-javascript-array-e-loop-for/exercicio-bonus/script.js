// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

// let sortedNumbers = numbers.sort(function (a, b) {
//     return a - b;
// });

// console.log(sortedNumbers);

// 2.Ordene o array numbers em ordem decrescente e imprima seus valores;

// let sortedNumbers2 = numbers.sort(function (a, b) {
//     return b - a;
// });

// console.log(sortedNumbers2);

// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbersArray = [];

for (let i = 1; i < numbers.length; i += 1) {
  newNumbersArray.push(numbers[i - 1] * numbers[i]);
  if (i === (numbers.length - 1)) {
    newNumbersArray.push(numbers[numbers.length - 1] * 2);
  }
}
console.log(newNumbersArray)
