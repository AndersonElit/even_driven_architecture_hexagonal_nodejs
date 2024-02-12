const { Kafka } = require('kafkajs');

/*const consumerOpt = {
    groupId: 'message-consumer-group',
    autoCommit: true
};*/

const kafka = new Kafka({
    clientId: 'retry',
    brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'message-consumer-group' });

const topic = 'message-topic';

class MessageConsumer {

    constructor() {}

    async consume() {
        await consumer.connect();
        await consumer.subscribe({ topic });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    console.log('Received message:', message.value.toString());
                } catch (error) {
                    console.error('Error processing message:', error);
                }
            }
        });

    }

    async connect() {
        await consumer.connect();
    }

    async disconnect() {
        await consumer.disconnect();
    }

}

module.exports = MessageConsumer;