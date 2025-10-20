'use client';

import { useState, useTransition, useEffect } from 'react';
import type { Service } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2, BrainCircuit } from 'lucide-react';
import ServiceCard from './service-card';
import { runIntelligentSearch } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type ServiceSearchProps = {
  services: Service[];
};

export default function ServiceSearch({ services }: ServiceSearchProps) {
  const [query, setQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState<Service[]>(services);
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) {
      setFilteredServices(services);
      setAiSuggestion(null);
      return;
    }

    startTransition(async () => {
      const result = await runIntelligentSearch(query);
      const correctedQuery = result.correctedQuery.toLowerCase();
      
      if (result.correctedQuery && result.correctedQuery.toLowerCase() !== query.toLowerCase()) {
        setAiSuggestion(`Mostrando resultados para: "${result.correctedQuery}"`);
      } else {
        setAiSuggestion(null);
      }

      const newFilteredServices = services.filter(
        (service) =>
          service.name.toLowerCase().includes(correctedQuery) ||
          service.description.toLowerCase().includes(correctedQuery) ||
          service.category.toLowerCase().includes(correctedQuery) ||
          service.applications.toLowerCase().includes(correctedQuery) ||
          service.methodology.toLowerCase().includes(correctedQuery)
      );
      setFilteredServices(newFilteredServices);
    });
  };

  useEffect(() => {
    if (query === '') {
      setFilteredServices(services);
      setAiSuggestion(null);
    }
  }, [query, services]);

  return (
    <section className="w-full">
      <form onSubmit={handleSearch} className="mb-8 flex w-full max-w-2xl mx-auto items-center space-x-2">
        <Input
          type="text"
          placeholder="Buscar por prueba, metodología, tiempo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow"
          aria-label="Buscar servicio"
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
          <span className="sr-only">Buscar</span>
        </Button>
      </form>

      {aiSuggestion && (
        <div className="max-w-2xl mx-auto mb-6">
          <Alert>
             <BrainCircuit className="h-4 w-4" />
            <AlertDescription>
              {aiSuggestion}
            </AlertDescription>
          </Alert>
        </div>
      )}

      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-2">No se encontraron resultados</h2>
          <p className="text-muted-foreground">
            Intente con otra búsqueda o revise la ortografía.
          </p>
        </div>
      )}
    </section>
  );
}
