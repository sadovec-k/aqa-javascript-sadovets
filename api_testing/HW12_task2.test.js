const axios = require('axios');

// interceptor
const apiRequest = axios.create({
    headers: {
        "Content-Type": "application/json",
    }
  });

  apiRequest.interceptors.request.use(
    config => {
      console.log(config);
      return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
  );

  apiRequest.interceptors.response.use(
    response => {
      console.log(response.data);
      return response;
    },
     error => {
        console.log(error);
        return Promise.reject(error);
    }
  );

  test("Get Email", async () => {
    const response = await apiRequest.get('https://jsonplaceholder.typicode.com/comments?id=5');

    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].name).toEqual('vero eaque aliquid doloribus et culpa'); 
  });