const conn = require("../db/conn");

const read = (request, response) => {
    conn("tab_tarefas")
      .select()
      .then((tarefas) => {
        response.json(tarefas);
      });
  };

  const create = (request, response) => {
    const nome = request.body.nome;
    if (!nome) {
      return response.status(400).json({
        error: "Nome da tarefa não fornecido",
      });
    }
  
    conn("tab_tarefas")
      .insert({ nome: nome })
      .then((tarefa) => {
        response.json(tarefa);
      })
      .catch((error) => {
        response.status(500).json({
          error: "Erro ao inserir a tarefa no banco de dados",
        });
      });
  };

  const update = (request, response) => {
    const nome = request.body.nome;
    const id = Number(request.params.id);
  
    if (!nome) {
      return response.status(400).json({
        error: "Nome da tarefa não fornecido",
      });
    }
    conn("tab_tarefas")
      .update({ nome: nome })
      .where({ id: id })
      .then((_) => {
        response.status(200).json({ msg: "Tarefa atualizada com sucesso!" });
      })
      .catch((error) => {
        response.status(500).json({
          error: "Erro ao inserir a tarefa no banco de dados",
        });
      });
  }

  const readByid =  (request, response) => {
    const id = Number(request.params.id);
    conn("tab_tarefas")
      .select()
      .where({ id: id })
      .then((tarefa) => {
        response.status(200).json(tarefa);
      })
      .catch((error) => {
        response.status(500).json({
          error: "Erro ao buscar a tarefa no banco de dados!",
        });
      });
  };
  
 const del = (request, response) => {
    const id = Number(request.params.id);
    conn("tab_tarefas")
      .del()
      .where({ id: id })
      .then((_) => {
        response.status(200).json({ msg: "A tarefa foi excluida!" });
      })
      .catch((error) => {
        response.status(500).json({
          error: "Erro ao excluir a tarefa no banco de dados!",
        });
      });
  }
  
  module.exports={read,create,update,readByid,del}