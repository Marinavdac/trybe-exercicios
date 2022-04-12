const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

const getSmaller = (smaller, number) => (
    (smaller < number) ? smaller : number
);

const smaller = numbers.reduce(getSmaller, 0);
console.log(smaller)

// sums only even numbs:

const numbersArray = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (sum, number) => (!(number % 2) ? (sum += number) : sum);

 const evenArray = numbersArray.reduce(getEven, 0)
console.log(evenArray)
 
const ev = numbersArray.reduce((acc, value) => {
    if (!(value % 2)) {
        return acc=  acc+value
    } else {
    return acc
}

}, 0)

console.log(ev)
 