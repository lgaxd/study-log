import { useState } from "react";
import type { StudySession } from "../types/StudySession";

interface SessaoFormProps {
  onAdd: (sessao: StudySession) => void;
}

export function SessaoForm({ onAdd }: SessaoFormProps) {
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const sessao: StudySession = {
      id: crypto.randomUUID(),
      subject,
      date,
      minutes,
      notes,
    };

    onAdd(sessao);

    setSubject("");
    setMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 w-4/5 mb-5"
    >
      <label htmlFor="study-subject" className="font-medium text-gray-700">
        Matéria do estudo
      </label>
      <input
        type="text"
        id="study-subject"
        placeholder="Matéria estudada"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <label htmlFor="session-duration" className="font-medium text-gray-700">
        Duração (minutos)
      </label>
      <input
        type="number"
        id="session-duration"
        placeholder="Duração em minutos"
        onChange={(e) => setMinutes(Number(e.target.value))}
        value={minutes}
        min="1"
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <label htmlFor="session-date" className="font-medium text-gray-700">
        Data do estudo
      </label>
      <input
        type="date"
        id="session-date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <label htmlFor="session-note" className="font-medium text-gray-700">
        Anotações
      </label>
      <textarea
        placeholder="Anotações sobre a sessão"
        id="session-note"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      />

      <button
        className="btn bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-2"
        type="submit"
      >
        Adicionar sessão de estudo
      </button>
    </form>
  );
}