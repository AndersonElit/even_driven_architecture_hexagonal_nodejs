const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'retry',
    brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'message-consumer-group' });

const topic = 'message-topic';

class MessageConsumer {

    constructor() {
        this.event = null;
    }

    async consume() {
        await consumer.connect();
        await consumer.subscribe({ topic });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    const event = JSON.parse(message.value);
                    console.log('Event: ', event);
                    this.event = event;
                } catch (error) {
                    console.error('Error processing message:', error);
                }
            }
        });

    }

    async getEvent() {
        return this.event;
    }

    async connect() {
        await consumer.connect();
    }

    async disconnect() {
        await consumer.disconnect();
    }

}

module.exports = MessageConsumer;