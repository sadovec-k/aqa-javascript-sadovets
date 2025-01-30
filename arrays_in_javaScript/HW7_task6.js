const numbersList = [1,10,14,2,4,5,43,34];

const sortetArray = numbersList.slice(0);
sortetArray.sort((a, b) => a - b );
console.log(`Original array ${numbersList}\nand sorted array ${sortetArray}`);