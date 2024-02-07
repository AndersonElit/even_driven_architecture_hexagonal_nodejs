//const { messageUSeCase } = require('./application/config/Configuration')
const MessageClient = require('./infrastructure/client/MessageClient');
const MessageProducer = require('./infrastructure/producer/MessageProducer');

module.exports = async function (context, req) {
    
    //const message = await messageUSeCase.getMessage();
    const endpoint = 'http://localhost:8082/message';
    const messageClient = new MessageClient(endpoint);
    const response = await messageClient.getMessage();
    const messageProducer = new MessageProducer();
    messageProducer.emitEvent(endpoint, response);

    context.res = {
        body: response
    };
}