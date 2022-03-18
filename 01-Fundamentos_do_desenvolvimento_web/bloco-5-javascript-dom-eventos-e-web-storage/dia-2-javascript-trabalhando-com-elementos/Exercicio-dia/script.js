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
  listItems.className = "numberListItems";
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

// 11. Adicione a classe description nas 3 tags h3 criadas;
let subtitle = document.querySelectorAll("h3");
for (let h3Title of subtitle) {
  h3Title.className = "description";
}

// 12. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

main.removeChild(leftSection);

// 13. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

let centralize = document.querySelector(".right-content");

centralize.style.marginRight = "auto";

// 14. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

sectionMain.style.backgroundColor = "green";

// 15. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let selectedList = document.querySelectorAll(".numberListItems");
let listIndex = document.querySelector(".number-list");

for (let i = selectedList.length-1; i > 7; i -= 1) {
      let itemsLista = selectedList[i];
    
    listIndex.removeChild(itemsLista);
}

function generatePhoneNumber(numberArray) {
    if (numberArray.length !== 11) return ("Array com tamanho incorreto.");
  
    let phoneNumber;
  
    for (let i = 0; i < numberArray.length; i += 1) {
       if (numberArray[i] > 9 || numberArray[i] < 0) {
        return "não é possível gerar um número de telefone com esses valores";
       } else checksRepeated(numberArray)
  
      phoneNumber = "(" + numberArray[0] + numberArray[1] + ") " + numberArray[2] + numberArray[3] + numberArray[4] + numberArray[5] + numberArray[6] + "-" + numberArray[7] + numberArray[8] + numberArray[9] + numberArray[10];
      return phoneNumber;
    function checksRepeated(numberArray) {
        let isRepeated = 0;
        if (numberArray[i] === numberArray[i])
        isRepeated += 1;
      if (isRepeated > 2) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
        
    }
    
  }
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]))
console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]))
console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]))
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]))


console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]))
         |                                                                               ^
      console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]))
      console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]))
      console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]))

let array = [1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8];

function findMatch(array) {
    for (let i = 0; i < array.length; i += 1){
        if (array[array.length + 1] === array[array.length + 2]
    }
      }