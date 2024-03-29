var http = require('http');
var url = require('url');


var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("<h1>Dados da query string</h1>");
    var result = url.parse(request.url);

    for (var key in result.query) {
        response.write("<h2>" + key + " : " + result.query[key] + "</h2>");
    }
    response.end();
});

module.exports = server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});