import { Link } from "react-router-dom";
import type { StudySession } from "../types/StudySession";

interface SessaoResumeProps {
  sessao: StudySession;
  removeSessao: (id: string) => void;
}

export function SessaoResume({ sessao, removeSessao }: SessaoResumeProps) {
  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 bg-white mb-3">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-gray-600 text-lg">{sessao.subject}</h2>
          <h3 className="text-gray-500">Data: {sessao.date}</h3>
          <h3 className="text-gray-500">Duração: {sessao.minutes} minutos</h3>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            to={`/sessao/${sessao.id}`}
            state={{ sessao }}
            className="btn bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 text-center transition-colors"
          >
            Detalhes
          </Link>

          <button
            className="p-2 bg-red-600 text-white font-bold hover:cursor-pointer rounded hover:bg-red-700 transition-colors"
            onClick={() => removeSessao(sessao.id)}
          >
            Remover sessão
          </button>
        </div>
      </div>
    </div>
  );
}