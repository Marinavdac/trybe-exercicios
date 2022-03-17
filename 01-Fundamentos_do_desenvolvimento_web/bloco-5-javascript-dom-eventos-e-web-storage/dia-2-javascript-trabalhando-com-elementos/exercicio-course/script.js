// console.log(document.getElementById("igrds").nextSibling);

// let ingredientItems = [
//   "4 colheres (sopa) de manteiga",
//   "1 kg de filé de frango em tiras finas",
//   "2 cebolas picadas",
//   "meia colher (sopa) de sal",
//   "1 pitada de pimenta-do-reino moída",
//   "meia xícara (chá) de conhaque",
//   "200 g de champignons em conserva fatiados",
//   "3 colheres (sopa) de purê de tomate",
//   "1 colher (sopa) de mostarda",
//   "2 colheres (sopa) de ketchup",
//   "1 lata de NESTLÉ® Creme de Leite",
// ];

// let ingredientsList = document.querySelector('.lista-ingredientes');

// for (let i = 0; i < ingredientItems.length; i += 1) {
//     let ingredient = ingredientItems[i];

//     let ingredientListItem = document.createElement('li');
//     ingredientListItem.innerText = ingredient;

//    ingredientsList.appendChild(ingredientListItem);
// }

// let arrayNumbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

// let li1 = document.createElement('li');
// li1.innerText = array;

// let ol1 = document.createElement('ol');

//       function criarNovoOl(array){
//           let listaItem = array[i];  
        
//           return li1
//       }

//       function addElement (parent,child){
        
//           parent.appendChild(child);
          
//         for (number of arrayNumbers){
//           let elements = criarNovoOl(arrayNumbers);
//           addElement(ol1,elements);
//           addElement(section3,ol1);
//         }
//         return elements
//       }


// addElement(ol1,li1)






    let ol1 = document.createElement('ol');
      
    function criarNovoOl(array) {
        let li1 = document.createElement('li');
        li1.innerText = array[item];
          return li1
    }

    let arrayNumbers = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];
    
        
      function addElement (parent,child){
        return parent.appendChild(child);
      }

      addElement(section3,ol1);
      addElement(ol1, li1)