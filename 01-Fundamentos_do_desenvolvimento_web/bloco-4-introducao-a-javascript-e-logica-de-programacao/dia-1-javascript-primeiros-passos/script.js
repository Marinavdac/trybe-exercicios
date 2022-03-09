
    // Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

    // Adição (a + b)
    // Subtração (a - b)
    // Multiplicação (a * b)
    // Divisão (a / b)
    // Módulo (a % b)

const a = 10;
const b = 15;

let adição = a + b;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let módulo = a % b;

console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(módulo);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. 


const num1 = 120;
const num2 = 50;

    if (num1 > num2) {
    
    let maior = 0;

    maior = num1;
    console.log(maior);
} else {
    maior = num2;
    console.log(maior);
};

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let maior2 = 0;
const valor1 = 100;
const valor2 = 30;
const valor3 = 102;


if (valor1 > valor2 && valor1 > valor3) {
    maior2 = valor1;
    console.log("o maior número é " + maior2);
} else if (valor2 > valor1 && valor2 > valor3) {
    maior2 = valor2;
    console.log("o maior número é " + maior2);
} else if (valor3 > valor1 && valor3 > valor2) {
    maior2 = valor3;
    console.log("o maior número é " + maior2);
} else {
    console.log("não foi possível encontrar o número solicitado")
};

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const misteryNumber = -15;

if (misteryNumber === 0) {
    console.log('the mistery number is zero, ha!');
} else if (misteryNumber > 0) {
    console.log('the mistery number is still a mistery, but it is "positive"');
} else {
    console.log('the mistery number is still a mistery, but it is "negative"');
};

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

const side1 = 45;
const side2 = -40;
const side3 = 45;
const triangle = 180;
const isTriangle = side1 + side2 + side3;

if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    console.log("please enter a positive value to proceed")
}
if (isTriangle === triangle) {
    console.log("yay, you've got yourself a triangle, lil dude!")
} else {
    console.log("Try again....better luck next time, mate!")
};

