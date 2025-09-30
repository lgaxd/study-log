import { useParams } from "react-router-dom";

export function SessaoDetails() {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">
        Detalhes da Sessão {id}
      </h1>
      <p>Página de detalhes da sessão de estudo.</p>
    </div>
  );
}