const { Kafka } = require('kafkajs');
const { format } = require('date-fns');
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

        const dateNow = Date.now();
        const formattedDate = format(new Date(dateNow), 'yyyy-MM-dd HH:mm:ss');

        const payload = Event.builder()
            .endpoint(endpoint)
            .response(response)
            .timestamp(formattedDate)
            .build();

        try {
            await producer.send({
                topic,
                messages: [{ value: JSON.stringify(payload) }]
            });
            console.log('The event was sent successfully.');
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