module.exports = async function (context, req) {
    // ログインしたユーザー情報を取得する
    const header = req.headers['x-ms-client-principal'];
    let userinfo = undefined;
    if (header !== undefined) {
        const encoded = Buffer.from(header, 'base64');
        // JSON形式の文字列として取得する
        userinfo = encoded.toString('ascii');
        // データを取得する場合は、JSON.parse(userinfo)を使ってJSONオブジェクト化
        // したあと、それぞれの要素名でアクセスする
        // 例：JSON.parse(userinfo).userId
        console.log(JSON.parse(userinfo).userId);
    }

    context.res = {
        body: { text: `This is a api return value. user info = [${userinfo}]` },
    };
};
