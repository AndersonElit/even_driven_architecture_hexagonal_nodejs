const { messageUSeCase } = require('./application/config/Configuration')

module.exports = async function (context, req) {
    
    const message = await messageUSeCase.getMessage();

    context.res = {
        body: message
    };
}