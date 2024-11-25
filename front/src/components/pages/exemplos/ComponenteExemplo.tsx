//REGRAS PARA CRIAÇÃO DE UM NOVO COMPONENTE
//1 - A primeira letra do componente DEVE ser maiúscula
//2 - O componente DEVE ser uma função
//3 - O componente DEVE retornar APENAS UM elemento HTML
//4 - Exportar o componente

function ComponenteExemplo() {
  return (
    <div>
      <h1>Primeiro Post</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dolores deleniti asperiores, alias omnis sequi mollitia voluptates
        libero ratione cum eos a porro cupiditate id recusandae minus ipsa harum
        tempora.
      </p>
    </div>
  );
}

export default ComponenteExemplo;
