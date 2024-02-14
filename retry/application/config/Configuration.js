const Client = require('../../../helper/Client');
const MessageProducer = require('../../infrastructure/producer/MessageProducer');
const MessageConsumer = require('../../infrastructure/consumer/MessageConsumer');
const MessageUseCase = require('../../application/usecase/MessageUseCase');

const client = new Client();
const producer = new MessageProducer();
const consumer = new MessageConsumer();
const messageUseCase = new MessageUseCase(client, producer, consumer);

module.exports = { messageUseCase };