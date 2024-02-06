const MessageClient = require('../../infrastructure/client/MessageClient');
const MessageUSeCase = require('../../application/usecase/MessageUSeCase');

const messageClient = new MessageClient("http://localhost:8082/message");
const messageUSeCase = new MessageUSeCase(messageClient);

module.exports = { messageUSeCase };