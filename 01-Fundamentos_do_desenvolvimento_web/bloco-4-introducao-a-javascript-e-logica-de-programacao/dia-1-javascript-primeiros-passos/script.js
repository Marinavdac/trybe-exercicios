// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

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

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num1 = 120;
const num2 = 50;

if (num1 > num2) {
  let maior = 0;

  maior = num1;
  console.log(maior);
} else {
  maior = num2;
  console.log(maior);
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

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
  console.log("não foi possível encontrar o número solicitado");
}

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const misteryNumber = -15;

if (misteryNumber === 0) {
  console.log("the mistery number is zero, ha!");
} else if (misteryNumber > 0) {
  console.log('the mistery number is still a mistery, but it is "positive"');
} else {
  console.log('the mistery number is still a mistery, but it is "negative"');
}

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const side1 = 45;
const side2 = -40;
const side3 = 45;
const triangle = 180;
const isTriangle = side1 + side2 + side3;

if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
  console.log("please enter a positive value to proceed");
}
if (isTriangle === triangle) {
  console.log("yay, you've got yourself a triangle, lil dude!");
} else {
  console.log("Try again....better luck next time, mate!");
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let piece = "Queen";
let chessPiece = piece.toLowerCase();

if (!chessPiece) {
  console.log("Please pick a piece");
} else if (chessPiece === "paw") {
  console.log("move one square forward");
} else if (chessPiece === "king") {
  console.log("move one square in any direction");
} else if (chessPiece === "bishop") {
  console.log("move diagonally as many squares as you wish to");
} else if (chessPiece === "knight") {
  console.log(
    "L-shape your way ahead (move one square left or right horizontally and then two squares up or down vertically, OR two squares left or right horizontally and then one square up or down vertically)"
  );
} else if (chessPiece === "rook") {
  console.log("move vertically or horizontally as many squares as you wish to");
} else if (chessPiece.toLowerCase() === "queen") {
  console.log(
    "move diagonally, vertically or horizontally as many squares as you wish to"
  );
}

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let conceito;

let nota;

if (!nota || nota < 0 || nota > 100) {
  console.log("A nota digitada não pode ser contabilizada.");
} else if (nota >= 90) {
  conceito = "A";
} else if (nota >= 80) {
  conceito = "B";
} else if (nota >= 70) {
  conceito = "C";
} else if (nota >= 60) {
  conceito = "D";
} else if (nota >= 50) {
  conceito = "E";
} else if (nota < 50) {
  conceito = "F";
}

console.log("o conceito da pessoa estudante foi " + conceito + ".");

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// Bonus: use somente um if .

const numb1 = 1;
const numb2 = 17;
const numb3 = 4;

numb1 % 2 === 0 || numb2 % 2 === 0 || numb3 % 2 === 0
  ? console.log("true")
  : console.log("false." + " Sorry, none of those numbers are even");

// 9.
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// Bonus: use somente um if .

const numbr1 = 2;
const numbr2 = 4;
const numbr3 = 12;

if (!(numbr1 % 2 === 0) || !(numbr2 % 2 === 0) || !(numbr3 % 2 === 0)) {
  console.log("true");
} else {
  console.log("false");
}

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const valorCusto = 10;
const impostoSobreOCusto = (20 * 100) / 100;
const valorVenda = 50;

let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let bigSell = lucro * 1000;

console.log(lucro);
console.log(
  "o lucro de uma venda de 1.000 itens é de $" + bigSell + ",00 dollars"
);


// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
let salarioBruto = 3000.00;
let descontoINSS;
let salarioBase = salarioBruto - (descontoINSS);

let deducaoIr;
let aliquotaIr;
let IR = salarioBase * aliquotaIr - deducaoIr;

let INSS = salarioBruto * aliquotaInss; 
let aliquotaInss;


let salarioLiquido = salarioBruto - (INSS + IR);













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































//Para calcular a alíquota e dedução do INSS:

if (salarioBruto < 1556.94) {
    aliquotaInss = (8* 100)/100; 
} else if (salarioBruto >= 1556.94 && salarioBruto < 2594.92) {
    aliquotaInss = (9* 100)/100;
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    aliquotaInss = (11* 100)/100;
} else {
    aliquotaInss = 570.88;
};


//Para calcular alíquota e dedução do Imposto de Renda:

if (salarioBase < 1903.98) {
    INSS = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {

}

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//     INSS (Instituto Nacional do Seguro Social)
//         Salário bruto até R$ 1.556,94: alíquota de 8%
//         Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//         Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//         Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//     IR (Imposto de Renda)
//         Até R$ 1.903,98: isento de imposto de renda
//         De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//         De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//         De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//         Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//     R$ 2.670,00: salário com INSS já deduzido;
//     7.5%: alíquota de imposto de renda;
//     R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55. 