import type { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="text-center py-20">
      <p className="mb-4 text-red-600">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Tentar novamente
      </button>
    </div>
  );
}
