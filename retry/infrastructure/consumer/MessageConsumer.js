const kafka = require('kafka-node');

const consumerOpt = {
    groupId: 'message-consumer-group',
    autoCommit: true
};

const topic = 'message-topic';

class MessageConsumer {
    constructor() {
        this.consumer = new kafka.ConsumerGroup(consumerOpt, topic);
    }

    consume() {
        this.consumer.on('message', async (message) => {
            try {
                const payload = JSON.parse(message.value);
                const { endpoint, response } = payload;
                console.log('Event: ', endpoint);
            } catch (error) {
                console.error('Error: ', error);
            }
        });
    }

}

module.exports = MessageConsumer;