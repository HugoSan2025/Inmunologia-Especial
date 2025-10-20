import { services } from '@/lib/data';
import ServiceSearch from '@/components/service-search';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <div className="w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col items-center text-center">
          <Logo />
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Encuentre rápidamente información sobre servicios, metodologías y tiempos de entrega para estudios de inmunología.
          </p>
        </header>

        <ServiceSearch services={services} />
      </div>
    </main>
  );
}
