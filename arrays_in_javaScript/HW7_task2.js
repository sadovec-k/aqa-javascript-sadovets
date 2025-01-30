const numbers = [9, 3, 7, 4, 0, 11];

const newNumbers = numbers.map((number) => number * numbers.indexOf(number))
console.log("New array " + newNumbers);