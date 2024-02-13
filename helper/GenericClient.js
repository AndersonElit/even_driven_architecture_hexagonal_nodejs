const axios = require('axios');

class GenericClient {

    constructor() {}

    async makeRequest(request) {
        return axios({
            method: request.method,
            url: request.url,
            data: request.body,
            headers: request.headers
        }).then(response => {
            return response.data;
        }).catch(error => {
            console.error('There was a problem with your request:', error);
            throw error;
        });
    }

}

module.exports = GenericClient;

/**
 * request api POST
 */

/*const url = "https://jsonplaceholder.typicode.com/todos";
const method = "POST";
const body = { userId: 1, title: "Fix my bugs", completed: false };
const headers = { "Content-type": "application/json; charset=UTF-8" };*/

/*client(url, method, body, headers)
    .then(data => console.log(data))
    .catch(error => console.error(error));+/

/**
 * request api GET
 */

/*client(url, "GET", null, headers)
    .then(data => console.log(data))
    .catch(error => console.error(error));*/