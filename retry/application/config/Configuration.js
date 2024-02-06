const MessageClient = require('../../infrastructure/client/MessageClient');
const MessageUSeCase = require('../../application/usecase/MessageUSeCase');
require('dotenv').config();

let url = process.env.CLIENT_URL;
const messageClient = new MessageClient(url);
const messageUSeCase = new MessageUSeCase(messageClient);

module.exports = { messageUSeCase };