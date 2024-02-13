const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'c98e412f-91fd-4911-871c-0f6e91f4227e',
    brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'message-consumer-group' });

const topic = 'message-topic';

class MessageConsumer {

    constructor() {
        this.emmitedEvent = new Promise((resolve) => {
            this.resolveEvent = resolve;
        });
    }

    async consume() {
        await consumer.connect();
        await consumer.subscribe({ topic });

        await consumer.run({
            eachMessage: this.eachMessageHandler.bind(this)
        });

    }

    async eachMessageHandler({ topic, partition, message }) {
        try {
            const event = JSON.parse(message.value);
            console.log('Event: ', event);
            this.emittedEvent = event;
            this.resolveEventPromise(event);
        } catch (error) {
            console.error('Error processing message:', error);
        }
    }

    async getEvent() {
        return this.emmitedEvent;
    }

    async connect() {
        await consumer.connect();
    }

    async disconnect() {
        await consumer.disconnect();
    }

}

module.exports = MessageConsumer;