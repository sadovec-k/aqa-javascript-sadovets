function isAdult(age) {
	return age >= 18;
}

console.log(`This person is${isAdult(15) ? "" : " not"} adult`);
console.log(`This person is${isAdult(25) ? "" : " not"} adult`);
