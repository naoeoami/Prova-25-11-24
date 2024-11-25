import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import "./TarefaListar.css";

function Tarefalistar() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    pesquisarProdutos();
  });

  function pesquisarProdutos() {
    fetch("http://localhost:5085/api/produto/listar")
      .then((resposta) => resposta.json())
      .then((tarefas) => {
        // console.table(produtos);
        setProdutos(tarefas);
      });
  }

  return (
    <div id="listar_produtos">
      <h1>Lista de Produtos</h1>
      <table id="tabela">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr>
              <td>{tarefa.id}</td>
              <td>{tarefa.nome}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.quantidade}</td>
              <td>{tarefa.valor}</td>
              <td>{tarefa.criadoEm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefaListar;

//EXERCÍCIOS
//1 - Exibir a lista de produtos no HTML
//2 - Cadastrar um produto na API
