const axios = require('axios');
const Response = require('../../domain/response/Response');

class MessageClient {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.response = null;
    }

    getMessage() {
        return axios.get(this.endpoint)
            .then(response => {
                this.response = Response.builder()
                    .status(response.status)
                    .body(response.data)
                    .build();
                
                return this.response;
            })
            .catch(error => {
                throw error;
            });
    }

}

module.exports = MessageClient;