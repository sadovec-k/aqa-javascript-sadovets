const firstArray = [2, 4, 8];
const secondArray = [3, 9, 27];

console.log("New array using concat " + firstArray.concat(secondArray));

console.log("New array using spread " + [...firstArray, ...secondArray]);
