import Book from "./Book.js"
import EBook from "./EBook.js"

const book1 = new Book("Sherlock Holmes", "Arthur Conan Doyle", 1999);
const book2 = new Book("The Lord of the Rings", "John Ronald Reuel Tolkien", 2000);
const book3 = new Book("Harry Potter", "J. K. Rowling", 2001);

//call info about books
book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook("How to Stop Worrying and Start Living", "Dale Breckenridge Carnegie", 2004, "txt");

//call info about ebook
ebook1.printInfo();

//change parameters using setter
book2.author = "John R. R. Tolkien";

console.log(`The autor of The Lord of the Rings is ${book2.author}`);

ebook1.fileFormat = "fb2";

console.log(`Format of the book ${ebook1.name} is ${ebook1.fileFormat}`);

//find the oldest book in array
console.log(Book.getOldestBook([book3, book1, ebook1, book2]));

//create instance of Ebook adding file format to book1
console.log(EBook.addFileFormat(book1, "pdf"));