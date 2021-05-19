const configExpress = require('./config/configExpress');


/*let em versoes mais antigas*/ app = configExpress()

app.listen(3000, () =>console.log('Servidor rodando na porta 3000'));

