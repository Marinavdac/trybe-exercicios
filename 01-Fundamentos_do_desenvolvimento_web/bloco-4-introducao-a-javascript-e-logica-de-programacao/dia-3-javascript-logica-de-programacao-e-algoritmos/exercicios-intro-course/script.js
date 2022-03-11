// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

// let fruits = [3, 4, 10, 1, 12];

// 1. fazer uma iteração sobre o array:


// for (let fruit of fruits) {
// }

// 2. criar uma variável que vai armazenar a soma das variáveis que inicie com o valor zero:

// let sum = 0;

// 3. implementar que a variável será somada à cada elemento do array:

//     sum += fruit;

// 4. verificar o resultado:

// console.log(sum);

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let fruit of fruits) {
    sum += fruit;
} 
sum <= 15 ? (console.log("valor menor que 16")) : (console.log("Ao todo temos "+ sum + " frutas em estoque."));
