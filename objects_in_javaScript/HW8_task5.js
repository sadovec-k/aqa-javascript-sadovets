const users = [
	{ name: "John", email: "john@example.com", age: 18 },
	{ name: "Tom", email: "Idontlikemouses@tom.com", age: 3 },
	{ name: "Jerry", email: "jerry@tom.com", age: 4 },
];

for (const { name, email, age } of users) {
	console.log(`User ${name} has email ${email} and age ${age}`);
}
