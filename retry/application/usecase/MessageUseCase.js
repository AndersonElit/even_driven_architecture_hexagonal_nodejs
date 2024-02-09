
const retries = process.env.RETRIES

class MessageUseCase {
    constructor(messageClient) {
        this.messageClient = messageClient;
    }

    async getMessage() {
        return this.messageClient.getMessage();
    }

    async retry() {

    }

}

module.exports = MessageUseCase;