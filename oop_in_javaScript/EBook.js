import Book from "./Book.js"

export default class EBook extends Book {
    constructor(name, author, year, fileFormat){
        super(name, author, year);
        this._fileFormat = fileFormat;
    }

    set fileFormat(value){
        if (typeof value === 'string'){
            this._fileFormat = value;
        } else {
            console.log(`Value on field fileFormat ${value} isn't a string`);
        }
    }
    
    get fileFormat(){
        return this._fileFormat;
    }

    printInfo() {
        console.log(`Book name : ${this._name}\nBook author : ${this._author}\nYear : ${this._year}\nFile format : ${this._fileFormat}`);
    }

    static addFileFormat(instOfBook, fileType){
        return new EBook(instOfBook.name, instOfBook.author, instOfBook.year, fileType);
    }
}