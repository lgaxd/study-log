import { useMemo } from "react";
import type { StudySession } from "../types/StudySession";
import { SessaoResume } from "./sessao-resume";

interface SessaoListProps {
  sessoes: StudySession[];
  removeSessao: (id: string) => void;
}

export function SessaoList({ sessoes, removeSessao }: SessaoListProps) {
  const totalSessoes = useMemo(() => {
    return sessoes.length;
  }, [sessoes]);

  const totalMinutos = useMemo(() => {
    return sessoes.reduce((total, sessao) => total + sessao.minutes, 0);
  }, [sessoes]);

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">Lista de Sessões de Estudo</h2>
      <h3 className="text-lg mb-4">
        Total de sessões: {totalSessoes} | Tempo total: {Math.floor(totalMinutos / 60)}h {totalMinutos % 60}m
      </h3>

      {sessoes.length === 0 ? (
        <p className="text-gray-500">Nenhuma sessão de estudo cadastrada.</p>
      ) : (
        sessoes.map((sessao) => (
          <SessaoResume 
            key={sessao.id} 
            sessao={sessao} 
            removeSessao={removeSessao} 
          />
        ))
      )}
    </>
  );
}