// 1.  Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let numero = 6;
// let soma =1;

// for (let i = 1; i <= numero; i++){
//     soma *= i;
// };

// console.log(soma);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// function scramble(word) {
//   let newWord = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     newWord += word[i];
//   }
//   return newWord;
// }
// console.log(scramble("tryber"));
// console.log(scramble("banana"));

// 3. Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

function findWord(words) {
  let smallest = words[0];
  
  for (let palavra of words) {
    if (palavra.length < smallest.length) {
      smallest = palavra;
     }
  }
  return smallest;

}
console.log(findWord(array));

function findWord2(words) {
  let biggest = words[0];
  
  for (let palavra of words) {
    if (palavra.length > biggest.length) {
      biggest = palavra;
     }
  }
  return biggest;

}
console.log(findWord2(array));