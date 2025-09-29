import { Link } from "react-router-dom"

export function NotFound(){
    return (
        <div className="w-full h-full p-0 m-0 items-center justify-center">
            <div className="text-center shadow-md">
                <h2><span className="text-red-600 font-bold">ERRO 404</span> - Página não encontrada.</h2>
                <Link to="/" className="px-2 py-4 bg-blue-600 text-center rounded">Voltar para a página inicial</Link>
            </div>
        </div>

    )
}