import { useMemo } from "react";
import { SessaoForm } from "../components/sessao-form";
import type { StudySession } from "../types/StudySession";

interface AddSessaoProps {
  sessoes: StudySession[];
  onAdd: (sessao: StudySession) => void;
}

export function AdicionarSessao({ sessoes, onAdd }: AddSessaoProps) {
  const sessaoMinutos = useMemo(() => {
    let sessaoMinutosRealizados: number = 0;

    sessoes.forEach((value) => {
      sessaoMinutosRealizados += value.minutes;
    });

    const hours = Math.floor(sessaoMinutosRealizados / 60);
    const minutes = sessaoMinutosRealizados % 60;

    return `${hours}:${minutes}`;
  }, [sessoes]);

  return (
    <>
      <h2 className="font-bold text-blue-800 text-xl mb-3">
        Adicionar nova sessão
      </h2>

      <h3>Tempo de estudo: {sessaoMinutos}</h3>

      <SessaoForm onAdd={onAdd} />
    </>
  );
}