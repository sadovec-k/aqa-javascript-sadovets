import Utils from "./HW10_Utils.js";

const todoUrl = "https://jsonplaceholder.typicode.com/todos/1";
const userUrl = "https://jsonplaceholder.typicode.com/users/1";

//print text with delay
function printWithTimeout(text, delay) {
	setTimeout(console.log, delay, text);
}

printWithTimeout("Some text", 10000);

//call url using fetch
Promise.all([Utils.callUrl(todoUrl), Utils.callUrl(userUrl)]);
Promise.race([Utils.callUrl(todoUrl), Utils.callUrl(userUrl)]);

//call url using await
Promise.all([Utils.getUrl(todoUrl), Utils.getUrl(userUrl)]);
Promise.race([Utils.getUrl(todoUrl), Utils.getUrl(userUrl)]);
