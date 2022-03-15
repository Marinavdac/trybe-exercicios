// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; 

const title = document.querySelector('body');
let jsTitle = document.createElement('h1');
jsTitle.innerText = 'Exercício 5.2 - JavaScript DOM';

title.appendChild(jsTitle);

