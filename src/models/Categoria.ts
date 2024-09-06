import Produto from "./Produto";

export default interface Categoria {
  nome: ReactNode;
  id: number;
  tipo: string;
  descricao: string;
  produto: Produto[];
}
