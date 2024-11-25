import { useEffect, useState } from "react";
import { Produto } from "../../../models/Tarefa";
import "./ProdutoListar.css";

function ProdutoListar() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    pesquisarProdutos();
  });

  function pesquisarProdutos() {
    fetch("http://localhost:5085/api/produto/listar")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        // console.table(produtos);
        setProdutos(produtos);
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
          {produtos.map((produto) => (
            <tr>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.valor}</td>
              <td>{produto.criadoEm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoListar;

//EXERCÍCIOS
//1 - Exibir a lista de produtos no HTML
//2 - Cadastrar um produto na API
