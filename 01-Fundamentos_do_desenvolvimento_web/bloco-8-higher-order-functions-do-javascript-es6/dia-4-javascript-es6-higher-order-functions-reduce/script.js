const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

const getSmaller = (smaller, number) => (
    (smaller < number) ? smaller : number
);

const smaller = numbers.reduce(getSmaller, 0);
console.log(smaller)
