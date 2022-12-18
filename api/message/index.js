module.exports = async function (context, req) {
    context.res = {
        body: { text: "This is a api return value" },
    };
};
