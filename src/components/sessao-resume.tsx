import { Link } from "react-router-dom";
import type { StudySession } from "../types/StudySession";

interface SessionResumeProps {
  session: StudySession;
  removeSession: (id: string) => void;
}

export function SessionResume({ session, removeSession }: SessionResumeProps) {
  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 bg-white mb-3">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{session.subject}</h2>

        <div className="flex flex-col gap-2">
          <Link
            to={`/workout/${session.id}`}
            state={{ session }}
            className="btn"
          >
            Detalhes
          </Link>

          <button
            className="p-2 bg-red-600 text-white font-bold hover:cursor-pointer rounded"
            onClick={() => removeSession(session.id)}
          >
            Remover sessão
          </button>
        </div>
      </div>

      <h3>Data: {session.date}</h3>
    </div>
  );
}