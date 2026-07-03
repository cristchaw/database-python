import Card from "./Card";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({
  title,
  children,
}: SectionProps) {
  return (
    <Card>
      <h2 className="mb-5 text-2xl font-bold">
        {title}
      </h2>

      {children}
    </Card>
  );
}