import { useMemo } from "react";
import { Link } from "react-router-dom";
import { SessaoForm } from "../components/sessao-form";
import type { StudySession } from "../types/StudySession";

interface AdicionarSessaoProps {
  sessoes: StudySession[];
  onAdd: (sessao: StudySession) => void;
}

export function AdicionarSessao({ sessoes, onAdd }: AdicionarSessaoProps) {
  const tempoTotal = useMemo(() => {
    const totalMinutos = sessoes.reduce((total, sessao) => total + sessao.minutes, 0);
    const hours = Math.floor(totalMinutos / 60);
    const minutes = totalMinutos % 60;
    return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
  }, [sessoes]);

  return (
    <div className="container mx-auto p-6 max-w-2xl">

      <div className="flex items-center gap-4 mb-6">
        <Link
          to="/"
          className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Voltar
        </Link>
        <h2 className="font-bold text-blue-800 text-2xl">
          Adicionar nova sessão de estudo
        </h2>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          Estatísticas do Estudo
        </h3>
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-blue-600 font-medium text-sm">Tempo total</p>
            <p className="text-blue-800 text-2xl font-bold">{tempoTotal}</p>
          </div>
          <div className="text-center">
            <p className="text-blue-600 font-medium text-sm">Total de sessões</p>
            <p className="text-blue-800 text-2xl font-bold">{sessoes.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <SessaoForm onAdd={onAdd} />
      </div>
    </div>
  );
}