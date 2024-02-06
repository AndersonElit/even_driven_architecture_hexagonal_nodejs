
class MessageUSeCase {
    constructor(messageClient) {
        this.messageClient = messageClient;
    }

    async getMessage() {
        return this.messageClient.getMessage();
    }

}

module.exports = MessageUSeCase;