function handleEven(num) {
	console.log(`Number ${num} is even`);
}

function handleOdd(num) {
	console.log(`Number ${num} is odd`);
}

function handleNum(num, printEven, printOdd) {
	return num % 2 == 0 ? printEven(num) : printOdd(num);
}

handleNum(7, handleEven, handleOdd);
