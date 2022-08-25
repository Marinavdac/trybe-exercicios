const fs = require('fs').promises;

async function readAllSimpsons() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    return strings.forEach(string => console.log(string));

  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}


async function getSimpsonById(id) {
  const fileContent = await fs
  .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrada');
  } else {
    return chosenSimpson;
  }
}

async function filterSimpson() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function getSimpsonFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const family = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
  const simpsonsFamily = await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
  return simpsonsFamily;
}

async function addNelsonFamily() {
  const fileContent = await fs.readFile('simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '5', name: 'Nelson Muntz' });
  await fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);
  const simpsonsNoNelson = simpsonsFamily.filter((simpson) => simpson.id !== '5');
  const simpsonsWithMaggie = simpsonsNoNelson.concat([{ "id": "5", "name": "Maggie Simpson" }]);
  return fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

function main() {
  // readAllSimpsons()
  // getSimpsonById(4).then((simpson) => console.log(simpson));
  // filterSimpson();
  // getSimpsonFamily();
  // addNelsonFamily();
  replaceNelson();
}

main();
