
class Event {
    constructor(endpoint, response, timestamp) {
        this.endpoint = endpoint;
        this.response = response;
        this.timestamp = timestamp;
    }
}

module.exports = Event;