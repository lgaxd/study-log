import { useLocation, Link } from "react-router-dom";
import type { StudySession } from "../types/StudySession";

export function SessaoDetails() {
    const location = useLocation();

    const sessao = location.state?.sessao as StudySession | undefined;

    if (!sessao) {
        return (
            <div className="container mx-auto p-6 max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                    <Link
                        to="/"
                        className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        ← Voltar
                    </Link>
                    <h1 className="text-2xl font-bold text-blue-800">
                        Sessão Não Encontrada
                    </h1>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                    <p className="text-gray-600 mb-4">Não foi possível encontrar os detalhes desta sessão.</p>
                    <Link
                        to="/"
                        className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    >
                        Voltar para a Lista
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
                <Link
                    to="/"
                    className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                    ← Voltar
                </Link>
                <h1 className="text-2xl font-bold text-blue-800">
                    Detalhes da Sessão
                </h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="space-y-6">

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">ID da Sessão</h3>
                        <p className="text-lg text-gray-900">{sessao.id}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Matéria</h3>
                        <p className="text-lg text-gray-900">{sessao.subject}</p>
                    </div>


                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Duração</h3>
                        <p className="text-lg text-gray-900">{sessao.minutes} minutos</p>
                    </div>


                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Data do Estudo</h3>
                        <p className="text-lg text-gray-900">{sessao.date}</p>
                    </div>


                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Anotações</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            {sessao.notes ? (
                                <p className="text-gray-700 whitespace-pre-wrap">{sessao.notes}</p>
                            ) : (
                                <p className="text-gray-500 italic">Nenhuma anotação registrada.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <Link
                    to="/"
                    className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Voltar para Lista
                </Link>
            </div>
        </div>
    );
}