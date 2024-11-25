import { useEffect, useState } from "react";

function ConsultarCEP() {
  const [localidade, setLocalidade] = useState("");
  const [estado, setEstado] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");

  useEffect(() => {
    //Evento de carregamento do componente
    //Executar código ao abrir carregar o componente
    //AXIOS - Biblioteca de requisições
    // consultarCEP();
  });

  function pesquisarCEP() {
    fetch("https://viacep.com.br/ws/" + cep + "/json/")
      .then((resposta) => resposta.json())
      .then((endereco) => {
        setLocalidade(endereco.localidade);
        setLogradouro(endereco.logradouro);
        setEstado(endereco.estado);
      });
  }

  function sairFoco() {
    pesquisarCEP();
  }

  function digitar(event: any) {
    setCep(event.target.value);
  }

  function clicar() {
    pesquisarCEP();
  }

  return (
    <div id="consultar_cep">
      <h1>Consultar CEP</h1>

      <input
        type="text"
        placeholder="Digite o seu CEP"
        onChange={digitar}
        onBlur={sairFoco}
      />

      <button onClick={clicar}>Consultar CEP</button>

      <p> {localidade} </p>
      <p> {estado} </p>
      <p> {logradouro} </p>
      <p> {cep} </p>
    </div>
  );
}

export default ConsultarCEP;
