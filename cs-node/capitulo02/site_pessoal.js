var http = require('http');
var fs = require('fs');

const rotear = function(pathname){
    if(pathname == "/"){
        return "/.html";    
    }else if(pathname == "/contato"){
        return "/contato.html";
    }else if(pathname == "/artigos"){
        return "/artigos.html";
    }else{
        return "/erro.html";
    }
}

var server = http.createServer(function (request, response) {
    
    // A constante __dirname retorna o diretório raiz da aplicação.
    fs.readFile(__dirname + rotear(request.url), function (err, html) {
        response.writeHeader(200, {
            'Content-Type': 'text/html'
        });
        response.write(html);
        response.end();
    });
});
server.listen(3000, function () {
    console.log('Executando Site Pessoal');
});