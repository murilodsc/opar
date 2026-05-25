import { PawPrint } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export default function EmptyState({
  title = "Nenhum animal encontrado",
  message = "No momento não há animais disponíveis. Volte em breve para conferir novos resgatados!",
}: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
      role="status"
      aria-label={title}
    >
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary-100 text-primary-400 mb-6">
        <PawPrint className="w-10 h-10" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-md">{message}</p>
    </div>
  );
}
