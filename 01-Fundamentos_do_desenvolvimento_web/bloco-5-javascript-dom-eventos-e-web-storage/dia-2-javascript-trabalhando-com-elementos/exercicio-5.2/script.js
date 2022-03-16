// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; 

const body = document.querySelector('body');
let jsTitle = document.createElement('h1');
jsTitle.innerText = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(jsTitle);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;

let sectionMain = document.createElement('main');
sectionMain.className = "main-content";

body.appendChild(sectionMain);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let newSection = document.createElement('section');
newSection.className = 'center-content';
sectionMain.appendChild(newSection);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; 

let newParagraph = document.createElement('p');
newParagraph.innerText = "This is a brand new js paragraph! =D";
newSection.appendChild(newParagraph);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let main = document.querySelector('main');
let leftSection = document.createElement('section');
leftSection.className = 'left-content';
main.appendChild(leftSection); 

