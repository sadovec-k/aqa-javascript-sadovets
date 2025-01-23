const number = 5;

// for
console.log("Using for : ")
for ( let i = 1; i < 11; i++ ) {
    console.log(`${number} x ${i} = ${number*i}`);
}

//while
console.log("\nUsing while : ")
let i = 1;
while (i < 11) {
    console.log(`${number} x ${i} = ${number*i}`);
    i++;
}