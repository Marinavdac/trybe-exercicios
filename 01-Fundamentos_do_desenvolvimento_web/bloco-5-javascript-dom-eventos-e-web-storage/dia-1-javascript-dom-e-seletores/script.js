// function sortedInfo(array) {
//     let sorted = array

//     }
// let technologies = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let myName = "Lucas"
// let tech2 = [];

// function techList(technologies, name) {
//     if (!technologies.length) {
//         return 'Vazio!'
//     }

//     let userInfo = [];

//     for (let tech of technologies) {
//         userInfo.push({ tech: tech, name: name })
//     }

//     return userInfo.sort(function (a, b) {
//         if (a.tech < b.tech) {
//             return -1;
//         }
// })

// }

// console.log(techList(technologies, myName))

// console.log(techList(tech2, myName))

// function techList(technologies, name) {
// for (let i = 0; i < technologies.length; i +=1) {

//     if (technologies[i] > technologies[i]) {
//           return -1;
//             } else {
//                 return true;
//                 }
//             }

//     return technologies, name
// }

// console.log(techList(technologies, name))

let array1 = [2, 1, 1, 1, 1];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let array3 = [0, 0];
let array4 = [6, 7, 2, 1, 3, 3, 5, 6, 7, 8, 8];
let array5 = [];

function generatePhoneNumber(numberArray) {
    if (numberArray.length !== 11) {
        return "Array com tamanho incorreto.";
    }
    for (let i = 0; i < numberArray.length; i += 1) {
        if (numberArray[i] >= 9 || numberArray[i] < 0) {
            return "não é possível gerar um número de telefone com esses valores";
        }
        for (let number of numberArray) {
            
        }
        let repeatedNumb = numberArray[i];
        // if (numberArray[i] === numberArray[i]) {
        //   repeatedNumb += 1;
        // }
        //   }
  
    }
}

//     console.log("funfa")
//   return `(${numberArray[i]} ${numberArray[i]})${numberArray[i]}${numberArray[i]}${numberArray[i]}`
//   }
console.log(generatePhoneNumber(array1), "array1");

console.log(generatePhoneNumber(array2), "array2");
console.log(generatePhoneNumber(array3), "array3");
console.log(generatePhoneNumber(array4), "array4");
console.log(generatePhoneNumber(array5), "array5");
