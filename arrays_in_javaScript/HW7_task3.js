const numbers = [7, 11, 3, 4, 8, 11, 31];

console.log("Sum of the array is " 
    + numbers.reduce((accumulator, number) => accumulator + number , 0));