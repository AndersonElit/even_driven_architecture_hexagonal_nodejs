const kafka = require('kafka-node');

const kafkaClientOpt = {
    kafkaHost: 'localhost:9092'
};

const producerOpt = {
    requireAcks: 1
};

const topic = 'message-topic';

class MessageProducer {
    constructor() {
        this.producer = new kafka.Producer(new kafka.KafkaClient(kafkaClientOpt), producerOpt);
    }

    emitEvent(endpoint, response) {
        const payload = {
            endpoint,
            response,
            timestamp: Date.now()
        };

        const message = [
            {
                topic: topic,
                message: JSON.stringify(payload)
            }
        ];

        this.producer.send(message, (error, data) => {
            if (error) {
                console.error('Error sending event:', error);
            } else {
                console.log('The event was sent succesfully: ', data);
            }
        });
    }
}

module.exports = MessageProducer;