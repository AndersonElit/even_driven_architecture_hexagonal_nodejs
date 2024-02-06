const axios = require('axios');

class MessageClient {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.data = null;
    }

    getMessage() {
        return axios.get(this.endpoint)
            .then(response => {
                this.data = response.data;
                return this.data;
            })
            .catch(error => {
                throw error;
            });
    }

}

module.exports = MessageClient;