const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  // 2 - Crie uma string com os nomes de todas as pessoas autoras.

const allAuthors = books.reduce((acc, bookInfo) => {
    
    acc += bookInfo.author.name + ', ';
    
    return acc;
}, '')
  
const listAllAuthors = `All the authors are: ${allAuthors.slice(0, -2) + '.'}`;

console.log(listAllAuthors);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. 

const ages = books.reduce((acc, year) => {
    acc += `${year.author.name} was ${(year.author.birthYear - year.releaseYear)} years old; `;
    return acc;
}, [])


console.log(ages)

function averageAge() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / numberOfBooks;
}

console.log(averageAge(books))

function getBiggest(array) {
const biggestTitle = array.reduce((acc, book) => (acc.length < book.name.length) ? acc = book.name : acc, '')
    return biggestTitle;
}

console.log(getBiggest(books));
