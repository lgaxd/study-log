import "./index.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorFallback } from "./components/error-fallback";
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "./components/loading";

const Home = lazy(() =>
  import("./pages/home").then((module) => ({
    default: module.Home,
  }))
);

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
