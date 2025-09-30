import { useState } from "react";
import type { StudySession } from "../types/StudySession";

interface AddSessaoProps {
  sessoes: StudySession[];
  onAdd: (sessoes: StudySession) => void;
}

export function SessaoForm({ onAdd }: AddSessaoProps) {
  const [subject, setTitle] = useState("");
  const [minutes, setDurationMinutes] = useState(0);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const workout: StudySession = {
      id: crypto.randomUUID(),
      subject,
      date,
      minutes,
      notes,
    };

    onAdd(workout);

    setTitle("");
    setDurationMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 w-4/5 mb-5"
    >
      <label htmlFor="workout-title">Matéria do estudo</label>
      <input
        type="text"
        id="study-subject"
        placeholder="Título do estudo"
        onChange={(e) => setTitle(e.target.value)}
        value={subject}
        className="border rounded p-2"
      />

      <label htmlFor="session-duration">Duração (min)</label>
      <input
        type="number"
        id="session-duration"
        placeholder="Duração (min)"
        onChange={(e) => setDurationMinutes(Number(e.target.value))}
        value={minutes}
        className="border rounded p-2"
      />

      <label htmlFor="session-date">Dia do estudo</label>
      <input
        type="date"
        id="session-date"
        placeholder="Dia de estudo"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border rounded p-2"
      />

      <label htmlFor="session-note">Anotações</label>
      <input
        type="text"
        placeholder="Anotações"
        id="session-note"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="border rounded p-2"
      />

      <button className="btn" type="submit">
        Adicionar sessão de estudo
      </button>
    </form>
  );
}
