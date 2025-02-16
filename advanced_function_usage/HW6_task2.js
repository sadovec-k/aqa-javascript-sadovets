function printNum(num) {
	console.log(num);

	if (num <= 0) {
		return num;
	}

	printNum(num - 1);
}

printNum(7);
