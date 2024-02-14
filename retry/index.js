
const { messageUseCase } = require('./application/config/Configuration');
const Request = require('./domain/request/Request');
require('dotenv').config();

module.exports = async function (context, req) {

    const request = Request.builder()
                            .url('http://localhost:8082/message')
                            .method('GET')
                            .build();

    const event = await messageUseCase.sendBnpBody(request);

    context.res = {
        body: event
    };
}