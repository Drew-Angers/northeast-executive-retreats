import { Suspense } from "react";
import ResultsContent from "./ResultsContent";

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-navy/40 font-sans text-sm tracking-widest uppercase">
          Loading your results...
        </p>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
