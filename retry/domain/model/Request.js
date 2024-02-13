
class Request {
    constructor(url, method, body, headers) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    }
}

module.exports = Request;