
class Request {
    constructor(url, method, body, headers) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    }

    url(url) {
        this.url = url;
    }

    method(method) {
        this.method = method;
    }

    body(body) {
        this.body = body;
    }

    headers(headers) {
        this.headers = headers;
    }

    static builder() {
        return new this.RequestBuilder();
    }

    static RequestBuilder = class {
        constructor() {
            this.request = new Request();
        }

        url(url) {
            this.request.url = url;
            return this;
        }
    
        method(method) {
            this.request.method = method;
            return this;
        }
    
        body(body) {
            this.request.body = body;
            return this;
        }
    
        headers(headers) {
            this.request.headers = headers;
            return this;
        }

        build() {
            return this.request;
        }

    }

}

module.exports = Request;