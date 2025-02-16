function divide(numerator, denominator) {
	if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
		throw new Error("Input isn't a number");
	}

	if (denominator == 0) throw new Error("denominator is 0");

	return numerator / denominator;
}

function callDivide(numerator, denominator) {
	try {
		console.log(divide(numerator, denominator));
	} catch (e) {
		console.log(e);
	} finally {
		console.log("Work is over");
	}
}

callDivide(21, 3);
callDivide(15, 0);
callDivide("ew", 3);
