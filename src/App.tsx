import "./index.css";
import { lazy, Suspense, useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorFallback } from "./components/error-fallback";
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "./components/loading";
import type { StudySession } from "./types/StudySession";
import { NotFound } from "./pages/not-found";

const Home = lazy(() =>
  import("./pages/home").then((module) => ({
    default: module.Home,
  }))
);

const AdicionarSessao = lazy(() =>
  import("./pages/adicionar-sessao").then((module) => ({
    default: module.AdicionarSessao,
  }))
);

const SessaoDetails = lazy(() =>
  import("./pages/sessao-details").then((module) => ({
    default: module.SessaoDetails,
  }))
);

const Layout = lazy(() =>
  import("./components/layout").then((module) => ({
    default: module.Layout,
  }))
);

function App() {
  const [sessoes, setSessoes] = useState<StudySession[]>([]);

  const addSessao = useCallback((sessao: StudySession) => {
    setSessoes((prev) => [...prev, sessao]);
  }, []);

  const removeSessao = useCallback((id: string) => {
    setSessoes((prev) => prev.filter((sessao) => sessao.id !== id));
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Home removeSessao={removeSessao} sessoes={sessoes} />
                }
              />
              <Route
                path="/add"
                element={<AdicionarSessao onAdd={addSessao} sessoes={sessoes} />}
              />
              <Route path="/sessao/:id" element={<SessaoDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;