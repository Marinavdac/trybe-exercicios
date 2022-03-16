// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const body = document.querySelector("body");
let jsTitle = document.createElement("h1");
jsTitle.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(jsTitle);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
let sectionMain = document.createElement("main");
sectionMain.className = "main-content";

body.appendChild(sectionMain);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let newSection = document.createElement("section");
newSection.className = "center-content";
sectionMain.appendChild(newSection);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a brand new js paragraph! =D";
newSection.appendChild(newParagraph);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let main = document.querySelector("main");
let leftSection = document.createElement("section");
leftSection.className = "left-content";
main.appendChild(leftSection);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let righSection = document.createElement("section");
righSection.className = "right-content";
main.appendChild(righSection);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
leftSection.appendChild(img);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let lista = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

let newList = document.createElement("ul");
newList.className = "number-list";
righSection.appendChild(newList);

let unorderedList = document.querySelector(".number-list");

for (let i = 0; i < lista.length; i += 1) {
  let itemDaLista = lista[i];

  let listItems = document.createElement("li");
  listItems.innerText = itemDaLista;

  unorderedList.appendChild(listItems);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
function createText(element, text) {
  let newText = document.createElement(element);
  newText.innerText = text;
  main.appendChild(newText);
}

createText("h3", "one h3");
createText("h3", "two h3");
createText("h3", "three h3");

// 10. Adicione a classe title na tag h1 criada;

jsTitle.className = "title";

let subtitle = document.querySelectorAll("h3");
for (let h3Title of subtitle) {
  h3Title.className = "description";
}

// 11. Adicione a classe description nas 3 tags h3 criadas;

