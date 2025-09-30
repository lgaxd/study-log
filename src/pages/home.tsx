import type { StudySession } from "../types/StudySession";
import { SessaoList } from "../components/sessao-lista";

interface HomeProps {
    sessoes: StudySession[];
    removeSessao: (id: string) => void;
}

export function Home({ sessoes, removeSessao }: HomeProps) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">
                Minhas Sessões de Estudo
            </h1>
            <SessaoList sessoes={sessoes} removeSessao={removeSessao} />
        </div>
    );
}