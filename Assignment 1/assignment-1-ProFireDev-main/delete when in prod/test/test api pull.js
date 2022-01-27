const https = require("https");
const api_url = "https://picsum.photos/600/480";


https.request(api_url, function (response) {
    var data = new Stream();

    response.on('data', function (chunk) {
        data.push(chunk);
    });

    response.on('end', function () {
        fs.writeFileSync('image.png', data.read());
    });
}).end();