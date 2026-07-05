type Props = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <>
      <h1
        className="hero-line text-3xl font-bold mb-1"
        style={{ "--i": 0, color: "#e2e8f0" } as React.CSSProperties}
      >
        {title}
      </h1>
      <p
        className="hero-line mb-12 text-sm"
        style={{ "--i": 1, color: "#475569" } as React.CSSProperties}
      >
        {subtitle}
      </p>
    </>
  );
}
