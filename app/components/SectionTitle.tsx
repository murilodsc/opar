interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  id,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        id={id}
        className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 w-20 h-1 bg-primary-500 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
