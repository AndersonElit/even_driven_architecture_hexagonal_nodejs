const MessageClient = require('./infrastructure/client/MessageClient');
const MessageProducer = require('./infrastructure/producer/MessageProducer');
const MessageConsumer = require('./infrastructure/consumer/MessageConsumer');

module.exports = async function (context, req) {

    const producer = new MessageProducer();
    const consumer = new MessageConsumer();

    await producer.connect();
    await consumer.connect();

    consumer.consume();

    const endpoint = 'http://localhost:8082/message';
    const messageClient = new MessageClient(endpoint);
    const response = await messageClient.getMessage();

    await producer.emitEvent(endpoint, response);

    const event = await consumer.getEvent();

    await producer.disconnect();
    await consumer.disconnect();

    context.res = {
        body: event
    };
}