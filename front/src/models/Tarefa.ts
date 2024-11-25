import { Categoria } from "./Categoria";

export interface Tarefa {
  id?: string;
  nome: string;
  situacao: string;
  criadoEm?: string;
  categoriaId: number;
  categoria?: Categoria;
}
