export default class Book {
	constructor(name, author, year) {
		this._name = name;
		this._author = author;
		this._year = year;
	}

	set name(value) {
		if (typeof value === "string") {
			this._name = value;
		} else {
			console.log(`Value on field name ${value} isn't a string`);
		}
	}

	get name() {
		return this._name;
	}

	set author(value) {
		if (typeof value === "string") {
			this._author = value;
		} else {
			console.log(`Value on field author ${value} isn't a string`);
		}
	}

	get author() {
		return this._author;
	}

	set year(value) {
		if (!isNaN(value) && value > 0) {
			this._year = value;
		} else {
			console.log(`Value on field year ${value} isn't a number or less then 0`);
		}
	}

	get year() {
		return this._year;
	}

	printInfo() {
		console.log(`Book name : ${this._name}\nBook author : ${this._author}\nYear : ${this._year}`);
	}

	static getOldestBook(value) {
		let oldestBook = value[0];
		for (let i = 1; i < value.length; i++) {
			if (value[i].year < oldestBook.year) {
				oldestBook = value[i];
			}
		}
		return oldestBook;
	}
}
