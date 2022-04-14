const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

const getSmaller = (smaller, number) => (
    (smaller < number) ? smaller : number
);

const smaller = numbers.reduce(getSmaller, 0);
console.log(smaller)

// sums only even numbs:

const numbersArray = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (sum, number) => (!(number % 2) ? (sum += number) : sum);

 const evenArray = numbersArray.reduce(getEven, 0)
console.log(evenArray)
 
const ev = numbersArray.reduce((acc, value) => {
    if (!(value % 2)) {
        return acc=  acc+value
    } else {
    return acc
}

}, 0)

console.log(ev)
 
//gabarito c reduce e filter:

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (currentValue, number) => currentValue + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152

//gabarito so com reduce:

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumPair = (currentValue, number) => (
//   (number % 2 === 0) ? currentValue + number : currentValue
// );

// const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152


// exercicio alunos:

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
];
  
  //relatório para dizer em que matéria cada aluno é melhor

//1) pegar todos os alunos
//gabarito:
// const getBestClass = (acc, materia) => {
//   if (acc.nota > materia.nota) return acc;
//   return materia;
// };

// const reportBetter = (students) => students.map((student) => ({
//   name: student.nome,
//   materia: student.materias.reduce(getBestClass).name}));

// console.log(reportBetter(estudantes));

const soAlunos = estudantes.map((estudante) => console.log(estudante.nome))

const getBestGrade = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia
}

const soMath = estudantes.map((estudante) => console.log(estudante.nome, estudante.materias[0])) 

const report = (estudantes) => estudantes.map((estudante) => ({
  name: estudante.nome,
  materia: estudante.materias.reduce(getBestGrade).name,
}))

console.log(report(estudantes))