const person = {
    firstName : "Will",
    lastName : "Smith",
    age : 30
}

person.email = "Will_Smith@example.com";
delete person.age;
console.log(person);