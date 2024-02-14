class Response {
    constructor() {
        this.status = null;
        this.body = null;
    }

    status(status) {
        this.status = status;
    }

    body(body) {
        this.body = body;
    }

    static builder() {
        return new this.ResponseBuilder();
    }

    static ResponseBuilder = class {
        constructor() {
            this.response = new Response();
        }

        status(status) {
            this.response.status = status;
            return this;
        }
    
        body(body) {
            this.response.body = body;
            return this;
        }

        build() {
            return this.response;
        }

    }

}

module.exports = Response;