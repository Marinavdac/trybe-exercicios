//1 - Dada uma matriz, transforme em um array. 

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
      return array.reduce((acc, item) => {
        return acc.concat(item)
    })  
  }

  console.log(flatten(arrays))