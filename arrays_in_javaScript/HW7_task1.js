const numbers = [2, 3, 0, -1, 8, -7, 0, 11, -9, 15, 23];

let positiveCoint = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++ ){
    switch(true){
        case numbers[i] == 0 :
            zeroCount++;
            break;
        case numbers[i] < 0 :
            negativeCount++;
            break;
        case numbers[i] > 0 :
            positiveCoint++;
            break;
    }        
}

console.log(`Count of positive numbers ${positiveCoint}`);
console.log(`Count of negative numbers ${negativeCount}`);
console.log(`Count of zero numbers ${zeroCount}`);