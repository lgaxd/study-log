import { Link } from "react-router-dom";
import type { StudySession } from "../types/StudySession";
import { SessaoList } from "../components/sessao-lista";

interface HomeProps {
  sessoes: StudySession[];
  removeSessao: (id: string) => void;
}

export function Home({ sessoes, removeSessao }: HomeProps) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">
          Minhas Sessões de Estudo
        </h1>
        <Link
          to="/add"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Criar Nova Sessão
        </Link>
      </div>

      <SessaoList sessoes={sessoes} removeSessao={removeSessao} />
    </div>
  );
}