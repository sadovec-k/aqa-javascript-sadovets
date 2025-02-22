const axios = require('axios');

// GET requests
test("Get Title", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.title).toEqual("qui est esse"); 
});

test("Get userID", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/5', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.userId).toEqual(1); 
});

test("Get Name", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?id=5', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].name).toEqual('vero eaque aliquid doloribus et culpa'); 
});

test("Get Email", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?id=3', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].email).toEqual("Nikita@garfield.biz"); 
});

test("Get body", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?id=2', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].body).toEqual("est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"); 
});

// POST requests
test("Post add new book", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            "Title": "New book",
            "Name" : "New author" 
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data.Title).toEqual("New book"); 
});

test("Post add new comment", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            "Title": "Second book",
            "date" : "01-01-1978", 
            "Comment" : "Some comment"
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data.Comment).toEqual("Some comment"); 
});

test("Post add new notice", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            "date" : "01-01-1978", 
            "title" : "Some title",
            "Notice" : "My notice"
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data.Notice).toEqual("My notice"); 
});

test("Post add new foto", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            "Title": "Foto title",
            "date" : "01-02-1978", 
            "Size" : "4.6Mb",
            "format" : "jpeg"
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data.Title).toEqual("Foto title"); 
    expect(response.data.date).toEqual("01-02-1978"); 
    expect(response.data.Size).toEqual("4.6Mb");   
    expect(response.data.format).toEqual("jpeg"); 
});

test("Post add new file", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            "FileName": "name",
            "Distination" : "MyFolder", 
            "Size" : "7.7Mb",
            "format" : "txt"
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data.FileName).toEqual("name"); 
    expect(response.data.Distination).toEqual("MyFolder"); 
    expect(response.data.Size).toEqual("7.7Mb");   
    expect(response.data.format).toEqual("txt"); 
});