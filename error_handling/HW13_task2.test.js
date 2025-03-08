const axios = require('axios');

async function sendGetRequest(url) {
    let response = "";
    try {
        response = await axios.post(url,
        {
            "title": "My title",
            "descriptions" : "My text"
        },
        {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }            
        });
    } catch(error) {
        throw new Error("Request failed");
    }  
    return response;
}

test("Add custom parameters to request", async () => {
    
    const response = await sendGetRequest('https://jsonplaceholder.typicode.com/posts');

    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data.title).toEqual("My title"); 
    expect(response.data.descriptions).toEqual("My text"); 
    expect(response.headers['content-type']).toEqual("application/json; charset=utf-8");   
});