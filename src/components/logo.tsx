import { FlaskConical } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <FlaskConical className="h-8 w-8 text-primary" />
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Inmunología Especial
      </h1>
    </div>
  );
}
