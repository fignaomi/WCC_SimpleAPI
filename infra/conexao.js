const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user: 'root',
    password: '1234',
    database: 'agendawcc'

});

module.exports = conexao;