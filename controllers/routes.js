const Agendamento = require('../models/Agendamento');
module.exports = app => {

    app.get('/agendamentos', (req, resp) => {
        Agendamento.listagem(resp);
    });

    app.get('/agendamentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)
        Agendamento.buscaPorId(id, resp)
    });

    app.put('/agendamentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)
        const agendamento = req.body;

        Agendamento.alteraPorId(id, agendamento, resp);
    });
    
    app.post('/agendamentos', (req, resp) => {
        const agendamento = req.body;
        Agendamento.inserir(agendamento, resp);
       
        
    });
    app.delete('/agendamentos/:id', (req,resp) => {
        const id = parseInt(req.params.id);
        Agendamento.remover(id, resp);
    });

};