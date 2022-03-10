let pizzas = ['4 queijos', 'frango com catupiry', 'marguerita', 'palmito', 'chocolate'];

pizzas.push('peito de peru');

console.log(pizzas);

//possível imprimir no console todos os sabores de pizzas:

for (let i = 0; i < pizzas.length; i++){
    console.log('Sabor: ' + (pizzas[i]));
};


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

console.log(tasksList.indexOf('Tomar café'))

//1.Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// 2. Procure o índice do valor "Portfólio" do array menu :

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// 3. Adicione o valor "Contato" no final do array menu :

let newService = menu.push('Contato');
console.log(menu);



//Estruturas de repetição

// Tabuada:

let numero = 5;
for (let i = 1; i <= 10; i++){
    console.log(numero + " * " + i + " = " + numero * i)
}


let cars = ['Saab', 'Volvo', 'BMW'];

for (let i = 0; i < cars.length; i += 1){
    console.log("type of car: " + cars[i])
}

// Exercício 1

// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1){
    console.log(groceryList[i])
}

for (let grocery of groceryList) {
    console.log(grocery)
}

// #For/of

let numeros = [1,2,3,4,5];

for (let numero of numeros) {
  console.log(numero);
}

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

let name = 'Marina';
for (let letter of name) {
    console.log(letter)
}

//somar elementos em uma lista:

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

// Nesse CacheStorage, é importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma. 


console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

// Para criar um segundo array com os valores modificados, teríamos que fazer:
let newArray = [];

let arrayOfNumbers = [10, 20, 30];
for (let sum of arrayOfNumbers) {
  newArray.push(sum += 1);
  
}

console.log(newArray);

// Exercício 1

// Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
    console.log(nome)
}