/**
 * https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-1-3-6c8389d7147d
 */

const express = require('express');
const server = express();

module.exports = server.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});