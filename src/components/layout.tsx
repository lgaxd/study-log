import { Link, Outlet, useLocation } from "react-router-dom";

export function Layout() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-blue-800 hover:text-blue-700 transition-colors"
                        >
                            StudyLog
                        </Link>

                        <nav className="flex gap-4">
                            <Link
                                to="/"
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${location.pathname === "/"
                                        ? "bg-blue-100 text-blue-800"
                                        : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                                    }`}
                            >
                                Minhas Sessões
                            </Link>
                            <Link
                                to="/add"
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${location.pathname === "/add"
                                        ? "bg-blue-100 text-blue-800"
                                        : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                                    }`}
                            >
                                Nova Sessão
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto py-8">
                <Outlet />
            </main>
        </div>
    );
}