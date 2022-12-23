module.exports = async function (context, req) {
    context.log('message2 API');

    context.res = {
        body: { text: "This is a message from Message2 API" },
    };
}