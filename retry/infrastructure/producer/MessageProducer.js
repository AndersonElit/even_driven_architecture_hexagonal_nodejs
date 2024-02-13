const { Kafka } = require('kafkajs');
const Event = require('../../domain/model/Event');

const kafka = new Kafka({
    clientId: 'c98e412f-91fd-4911-871c-0f6e91f4227e',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

const topic = 'message-topic';

class MessageProducer {

    constructor() {}

    async emitEvent(endpoint, response) {

        const payload = new Event(endpoint, response, Date.now());

        try {
            await producer.send({
                topic,
                messages: [{ value: JSON.stringify(payload) }]
            });
            console.log('The event was sent sussessfully.');
        } catch (error) {
            console.log('Error sending event: ', error);
        }
    }

    async connect() {
        await producer.connect();
    }

    async disconnect() {
        await producer.disconnect();
    }

}

module.exports = MessageProducer;