const axios = require('axios');

jest.mock('axios');

describe('Success cases', () => {
    test("Add custom data", async () => {
        let response = await axios.post.mockResolvedValue({data: {meaasge: "My message", title : "my title"}});
        let result = await response();

        console.log(result);    
        expect(result.data.meaasge).toEqual("My message"); 
        expect(result.data.title).toEqual("my title"); 
    });

    test("Add custom data 1", async () => {
        let response = await axios.post.mockResolvedValue({data: {path: "my/path/log", fileType : "jpeg"}});
        let result = await response();

        console.log(result);    
        expect(result.data.path).toEqual("my/path/log"); 
        expect(result.data.fileType).toEqual("jpeg"); 
    });

    test("Add custom data 2", async () => {
        let response = await axios.post.mockResolvedValue({data: {userID: "12345678", userName: "User Name", email: "email@email.com"}});
        let result = await response();

        console.log(result);    
        expect(result.data.userID).toEqual("12345678"); 
        expect(result.data.userName).toEqual("User Name"); 
        expect(result.data.email).toEqual("email@email.com"); 
    });
});

describe('Failed cases', () => {
    test("Add wrong custom data", async () => {

        axios.post.mockRejectedValue(new Error('You sent unexpected data'));

        let data = { title: 'My title', description: 'My text' };  

        await expect(axios.post('https://jsonplaceholder.typicode.com/posts', data))
        .rejects.toThrow('You sent unexpected data');
    });

    test("Add wrong file data", async () => {

        axios.post.mockRejectedValue(new Error('Unexpected file type'));

        let data = { fileName: 'My file', fileType: 'mp4' };  

        await expect(axios.post('https://jsonplaceholder.typicode.com/posts', data))
        .rejects.toThrow('Unexpected file type');
    });

    test("Add wrong email", async () => {

        axios.post.mockRejectedValue(new Error('Wrong email format'));

        let data = { email: 'exmple@@email.com' };  

        await expect(axios.post('https://jsonplaceholder.typicode.com/posts', data))
        .rejects.toThrow('Wrong email format');
    });
});