const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/Tabelas');


conexao.connect(error => {
    if (error) {
        throw error;
    };

    Tabelas.init(conexao);

    app = configExpress();

    app.listen(3000, () =>{
        console.log('Servidor rodando na porta 3000')
    });

});
// {
//     "id": 1,
//     "nome_cliente": "luana",
//     "servico": "unha",
//     "status": "agendando",
//     "data_servico": "2022-09-11",
//     "data_agendamento": "2022-09-11"
// }