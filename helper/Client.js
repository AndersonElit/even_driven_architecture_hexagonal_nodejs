const axios = require('axios');
const Response = require('./response/Response');

class Client {

    constructor() {}

    async makeRequest(request) {
        return axios({
            method: request.method,
            url: request.url,
            data: request.body,
            headers: request.headers
        }).then(response => {
            const res = Response.builder()
                .status(response.status)
                .body(response.data)
                .build();
            return res;
        }).catch(error => {
            console.error('There was a problem with your request:', error);
            throw error;
        });
    }

}

module.exports = Client;

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