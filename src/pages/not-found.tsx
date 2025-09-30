import { Link } from "react-router-dom"

export function NotFound(){
    return (
        <div className="w-screen h-screen p-0 m-0 flex items-center justify-center">
            <div className="text-center shadow-xl w-2/5 h-5/10 p-4 flex flex-col justify-around">
            <p className="text-9xl font-bold">404</p>
                <h2 className="text-2xl"><span className="text-red-600 font-bold text-2xl">ERRO 404</span> - Página não encontrada.</h2>
                <Link to="/" className="px-1 py-2 bg-blue-600 text-center rounded text-white font-bold shadow-md duration-[0.3s] hover:bg-white hover:text-blue-600 hover:duration-[0.3s] hover:scale-[0.9]">Voltar para a página inicial</Link>
            </div>
        </div>

    )
}