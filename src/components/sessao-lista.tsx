import { useMemo } from "react";
import type { StudySession } from "../types/StudySession";
import { SessionResume } from "./sessao-resume";

interface SessionListProps {
  sessionList: StudySession[];
  removeSession: (id: string) => void;
}

export function SessionList({ sessionList, removeSession }: SessionListProps) {
  const sessionTotal = useMemo(() => {
    return sessionList.length;
  }, [sessionList]);

  return (
    <>
      <h3>Total de treinos: {sessionTotal}</h3>
      <h2 className="font-bold text-gray-600 text-xl mb-3">Lista de treinos</h2>

      {sessionList.map((value) => {
        return <SessionResume removeSession={removeSession} session={value} />;
      })}
    </>
  );
}