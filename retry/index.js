const Request = require('./domain/request/Request');

module.exports = async function (context, req) {
    
    const request = new Request("Mensaje enviado");

    context.res = {
        body: request.message
    };
}