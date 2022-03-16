// console.log(document.getElementById('start').nextSibling);
// console.log(document.getElementById('start').nextElementSibling);


// 1. Acesse o elemento elementoOndeVoceEsta .

console.log(document.getElementById('elementoOndeVoceEsta'));

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.


console.log(document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "red");

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const filho1 = document.getElementById('elementoOndeVoceEsta').firstElementChild;

filho1.innerText = "agora sim, um texto";

// 4. Acesse o primeiroFilho a partir de pai .

const nomeDoPai = document.getElementById('pai').firstChild;

//5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

const local = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

local.innerText = "aqui?"

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

// 8. Agora acesse o terceiroFilho a partir de pai .

