import { useMemo } from "react";
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
    <div className="container mx-auto p-6">
      <h2 className="font-bold text-blue-800 text-2xl mb-6">
        Adicionar nova sessão de estudo
      </h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-700">
          Tempo total de estudo: {tempoTotal}
        </h3>
        <p className="text-blue-600">
          Total de sessões: {sessoes.length}
        </p>
      </div>

      <SessaoForm onAdd={onAdd} />
    </div>
  );
}