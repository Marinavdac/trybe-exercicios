const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    const counter = array.reduce((acc, name) => {
        let lowerCaseName = name.toLowerCase();
        let nameLength = lowerCaseName.split('').filter(v => v === 'a').length;
        return acc += nameLength;
      }, 0)

      return counter;
  }
console.log(containsA(names))
  

// gabarito:
function containsA2() {
    return names.reduce((acc, curr) =>
        acc + curr.split('').reduce((acumulator, current) => {
            if (current === 'a' || current === 'A') return acumulator + 1;
            return acumulator;
        }, 0), 0);
}
    console.log(containsA2());
