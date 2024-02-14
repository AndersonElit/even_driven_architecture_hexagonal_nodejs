
class Event {
    constructor() {
        this.endpoint = null;
        this.response = null;
        this.timestamp = null;
    }

    endpoint(endpoint) {
        this.endpoint = endpoint;
    }

    response(response) {
        this.response = response;
    }

    timestamp(timestamp) {
        this.timestamp = timestamp;
    }

    static builder() {
        return new this.EventBuilder();
    }

    static EventBuilder = class {
        constructor() {
            this.event = new Event();
        }

        endpoint(endpoint) {
            this.event.endpoint = endpoint;
            return this;
        }
    
        response(response) {
            this.event.response = response;
            return this;
        }
    
        timestamp(timestamp) {
            this.event.timestamp = timestamp;
            return this;
        }

        build() {
            return this.event;
        }

    }

}

module.exports = Event;