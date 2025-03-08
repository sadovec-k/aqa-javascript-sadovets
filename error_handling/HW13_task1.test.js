const axios = require('axios');

async function sendGetRequest(url) {
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch(error) {
        throw new Error(`Request sent wrong url`);
    }  
    return response;
}

// GET requests to wrong URL 
test("Check error", async () => {
    expect(sendGetRequest('https://jsonplaceholder___.typicode.com/posts/2')).rejects.toThrow(`Request sent wrong url`);
});
