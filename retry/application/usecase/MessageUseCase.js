
class MessageUseCase {
    constructor(client, producer, consumer) {
        this.client = client;
        this.producer = producer;
        this.consumer = consumer;
    }

    async sendBnpBody(request) {

        await this.producer.connect();
        await this.consumer.connect();

        this.consumer.consume();

        const response = await this.client.makeRequest(request);

        await this.producer.emitEvent(request.url, response);

        const event = await this.consumer.getEvent();

        await this.producer.disconnect();
        await this.consumer.disconnect();

        return event;

    }

}

module.exports = MessageUseCase;