//const server = require('./services');
//https://github.com/caio-ribeiro-pereira/livro-nodejs
const httpServer = require('./services/http-server');


fs.readFile('./index.html', function (erro, arquivo) {
    if (erro) throw erro;
    console.log(arquivo);
});
var arquivo = fs.readFileSync('./index.html');
console.log(arquivo);