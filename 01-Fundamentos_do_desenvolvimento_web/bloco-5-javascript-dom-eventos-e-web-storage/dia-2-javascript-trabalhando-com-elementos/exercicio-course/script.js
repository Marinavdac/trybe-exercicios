// console.log(document.getElementById("igrds").nextSibling);

let ingredientItems = [
  "4 colheres (sopa) de manteiga",
  "1 kg de filé de frango em tiras finas",
  "2 cebolas picadas",
  "meia colher (sopa) de sal",
  "1 pitada de pimenta-do-reino moída",
  "meia xícara (chá) de conhaque",
  "200 g de champignons em conserva fatiados",
  "3 colheres (sopa) de purê de tomate",
  "1 colher (sopa) de mostarda",
  "2 colheres (sopa) de ketchup",
  "1 lata de NESTLÉ® Creme de Leite",
];

let ingredientsList = document.querySelector('.lista-ingredientes');

for (let i = 0; i < ingredientItems.length; i += 1) {
    let ingredient = ingredientItems[i];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;

    ingredientsList.appendChild(ingredientListItem);
}

