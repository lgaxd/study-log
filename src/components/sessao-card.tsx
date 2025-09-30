import type { StudySession } from "../types/StudySession"; 

interface Props {
  sessao: StudySession;
}

export function SessaoCard({ sessao }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-3/5 hover:p-5 transition delay-150">
      <h2 className="text-lg font-bold text-blue-600">{sessao.subject}</h2>
      <p className="text-gray-600">Duração: {sessao.minutes} min</p>
      <p className="text-gray-600">Data: {sessao.date}</p>
      <p className="text-gray-600">Notas: {sessao.notes}</p>
    </div>
  );
}