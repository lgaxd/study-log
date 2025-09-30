import { useState } from "react";
import type { StudySession } from "../types/StudySession";

interface SessaoFormProps {
  onAdd: (sessao: StudySession) => void;
}

export function SessaoForm({ onAdd }: SessaoFormProps) {
  const [subject, setMateria] = useState("");
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

    setMateria("");
    setMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 flex flex-col gap-4"
    >
      <div>
        <label htmlFor="study-subject" className="block font-medium text-gray-700 mb-2">
          Matéria do estudo
        </label>
        <input
          type="text"
          id="study-subject"
          placeholder="Matéria estudada"
          onChange={(e) => setMateria(e.target.value)}
          value={subject}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="session-duration" className="block font-medium text-gray-700 mb-2">
          Duração (minutos)
        </label>
        <input
          type="number"
          id="session-duration"
          placeholder="Duração em minutos"
          onChange={(e) => setMinutes(Number(e.target.value))}
          value={minutes}
          min="1"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="session-date" className="block font-medium text-gray-700 mb-2">
          Data do estudo
        </label>
        <input
          type="date"
          id="session-date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="session-note" className="block font-medium text-gray-700 mb-2">
          Anotações
        </label>
        <textarea
          placeholder="Anotações sobre a sessão"
          id="session-note"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          rows={4}
        />
      </div>

      <button 
        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-4 text-lg cursor-pointer" 
        type="submit"
      >
        Adicionar sessão de estudo
      </button>
    </form>
  );
}