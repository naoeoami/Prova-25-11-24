import { useEffect, useState } from "react";
import { Produto } from "../../../models/Tarefa";
import axios from "axios";

function TarefaCadastrar() {
  const [nome, setNome] = useState("");
  const [situacao, setSituacao] = useState("");
  const [categoriaId, setCategoriaId] = useState(0);
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get<any[]>("http://localhost:5085/api/categoria/listar")
      .then((resposta) => {
        setCategorias(resposta.data);
      });
  }, []);

  function enviarProduto(event: any) {
    event.preventDefault();
    const tarefa: Tarefa = {
      nome: nome,
      descricao: situacao,
      categoriaId: categoriaId,
    };

    //AXIOS - Biblioteca de requisições HTTP

    fetch("http://localhost:5085/api/tarefa/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((tarefa) => {
        console.log(tarefa);
      });
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={enviarProduto} id="form-cadastro">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(event: any) => setNome(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="situacao">Situação:</label>
          <input
            type="text"
            id="situacao"
            name="situacao"
            required
            onChange={(event: any) => setSituacao(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            min="1"
            required
            onChange={(event: any) => setQuantidade(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="valor">Preço:</label>
          <input
            type="number"
            id="valor"
            name="valor"
            min="0"
            step="0.01"
            required
            onChange={(event: any) => setPreco(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categorias:</label>
          <select onChange={(event: any) => setCategoriaId(event.target.value)}>
            {categorias.map((categoria) => (
              <option value={categoria.id} key={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default ProdutoCadastrar;
