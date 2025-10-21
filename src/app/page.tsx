'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import studios from '@/lib/studios.json';

const phrases = [
  "El éxito no es final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
  "La mejor manera de predecir el futuro es creándolo.",
  "Tu trabajo va a llenar gran parte de tu vida, la única manera de estar realmente satisfecho es hacer lo que crees que es un gran trabajo.",
  "No se trata de dónde vienes, sino de dónde vas.",
  "Cada gran diseño comienza con una historia aún mejor.",
  "La simplicidad es la máxima sofisticación. — Leonardo da Vinci",
  "Diseña para las personas, no para la tecnología."
];

interface Studio {
  "PRUEBA": string;
  "DIA DE PROCESO": string;
  "HORA DE CORTE": string;
  "HORA DE REPORTE": string;
}

const MotivationalPhrase = () => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const displayRandomPhrase = () => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setPhrase(phrases[randomIndex]);
    };
    displayRandomPhrase();
    const interval = setInterval(displayRandomPhrase, 60000);
    return () => clearInterval(interval);
  }, []);

  const changePhrase = () => {
    const phraseElement = document.getElementById('motivational-phrase');
    if (phraseElement) {
        phraseElement.style.opacity = '0';
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * phrases.length);
            setPhrase(phrases[randomIndex]);
            phraseElement.style.opacity = '1';
            phraseElement.classList.add('phrase-animate');
            setTimeout(() => phraseElement.classList.remove('phrase-animate'), 800);
        }, 300);
    }
  }

  return (
    <section className="py-16 bg-page-bg text-center border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-accent-pastel mb-4">Inspiración Diaria</h3>
        <p id="motivational-phrase" className="text-3xl font-semibold italic text-text-dark-main h-20 flex items-center justify-center transition-opacity duration-700 phrase-animate">
          {phrase}
        </p>
        <button onClick={changePhrase} className="mt-4 text-sm font-semibold text-text-muted-dark hover:text-accent-pastel transition duration-200 focus:outline-none">
          Ver otra frase
        </button>
      </div>
    </section>
  );
};

export default function Home() {
  const teamImage = PlaceHolderImages.find(p => p.id === "equipo-ide");
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Studio[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = studios.filter(studio =>
      studio.PRUEBA.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);


  return (
    <>
      <header className="sticky top-0 z-50 bg-page-bg/95 backdrop-blur-sm shadow-lg shadow-gray-200/50 transition-all duration-300 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <div className="text-2xl font-black tracking-wider text-accent-pastel">
                INMUNOLOGIA<span className="text-text-dark-main">ESPECIAL</span>
              </div>
              <div className="flex items-center space-x-8">
                  <nav className="hidden md:flex space-x-8 text-text-dark-main font-medium">
                      <a href="#servicios" className="hover:text-accent-pastel transition duration-200">Servicios</a>
                      <a href="#casos" className="hover:text-accent-pastel transition duration-200">Equipo IDE</a>
                      <a href="#contacto" className="hover:text-accent-pastel transition duration-200">Busqueda</a>
                  </nav>
              </div>
          </div>
      </header>

      <main>
          <section className="py-20 md:py-32 lg:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[80vh] flex items-center justify-center">
              <div className="max-w-4xl">
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent-pastel mb-4">
                      Salud, Ciencia y Diagnóstico Avanzado
                  </p>
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 text-text-dark-main">
                      INMUNOLOGÍA ESPECIAL
                      <span className="text-4xl font-extrabold text-accent-pastel block mt-2">Descifrando los secretos de tus defensas</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-text-muted-dark mb-10 max-w-2xl mx-auto">
                      No somos solo un laboratorio, somos el sistema inmune hecho ciencia con propósito, resultados con impacto. Donde el suero habla y el diagnóstico responde
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <a href="#servicios" className="bg-accent-pastel text-card-bg font-bold py-3 px-8 rounded-xl text-lg shadow-xl shadow-accent-pastel/30 hover:shadow-accent-pastel/50 transition duration-300 transform hover:scale-105">
                          Nuestros Servicios
                      </a>
                      <a href="#casos" className="bg-card-bg border-2 border-text-muted-dark/20 text-text-dark-main font-semibold py-3 px-8 rounded-xl text-lg hover:border-accent-pastel transition duration-300 transform hover:scale-105">
                          Conocer al Equipo
                      </a>
                  </div>
              </div>
          </section>
          
          <section id="servicios" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-base font-semibold uppercase tracking-wider text-accent-pastel text-center mb-3">
                  Servicios de Inmunología
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-text-dark-main">
                  Nuestra Tecnología en Inmunologia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <div className="bg-card-bg p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-accent-pastel/30 transition duration-300 transform hover:-translate-y-1 card-glow">
                      <h3 className="text-2xl font-bold mb-3 text-text-dark-main">Inmunofluorescencia</h3>
                      <p className="text-text-muted-dark">
                          La inmunofluorescencia revela lo que la luz ilumina y la ciencia interpreta, Anticuerpos Antinucleares, Anticuerpos Antineutrófilos, FTA IgG, FTA IgM, Músculo liso, IFI Viral, etc.
                      </p>
                  </div>
                  <div className="bg-card-bg p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-accent-pastel/30 transition duration-300 transform hover:-translate-y-1 card-glow">
                      <h3 className="text-2xl font-bold mb-3 text-text-dark-main">Elisa/CLIA Automatizado</h3>
                      <p className="text-text-muted-dark">
                          Automatización con alma científica, distintas técnicas, un mismo propósito — certeza diagnóstica. Perfil TORCH, Marcadores de autoinmunidad, Hormonas, Marcadores infecciosos.
                      </p>
                  </div>
                  <div className="bg-card-bg p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-accent-pastel/30 transition duration-300 transform hover:-translate-y-1 card-glow">
                      <h3 className="text-2xl font-bold mb-3 text-text-dark-main">Inmunoblot/Electroforesis</h3>
                      <p className="text-text-muted-dark">
                          Electroforesis e Inmunoblot: precisión que se ve, ciencia que se confirma. Donde descubrimos la huella del sistema inmune y el diagnóstico se hace visible. Panel de Alergia, Perfil ENA extendido, Proteinograma en suero y orina, Inmunofijación en suero y orina.
                      </p>
                  </div>
              </div>
          </section>

          <section id="casos" className="py-20 md:py-28 bg-card-bg shadow-xl shadow-gray-200/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-pastel mb-3 block">
                          EQUIPO IDE (Inmuno Diagnostico Especial)
                      </span>
                      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-text-dark-main">
                          Somos un sistema inmune hecho equipo
                      </h2>
                      <p className="text-xl text-text-muted-dark mb-8">
                          En Inmunología Especial, cada resultado es fruto del trabajo en equipo, no solo procesamos muestras, procesamos confianza. Detrás de cada diagnóstico, hay un profesional de Inmunología Especial.
                      </p>
                  </div>
                  <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl border border-gray-200">
                    {teamImage && (
                      <Image
                        src={teamImage.imageUrl}
                        alt={teamImage.description}
                        fill
                        data-ai-hint={teamImage.imageHint}
                        className="object-contain lg:object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
              </div>
          </section>

          <MotivationalPhrase />

          <section id="contacto" className="py-20 md:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-text-dark-main">
                  Días de procesos, horas de corte y horas de reporte
              </h2>
              <p className="text-xl text-text-muted-dark mb-10 max-w-3xl mx-auto">
                  Acceda a información detallada sobre nuestros tiempos de respuesta y programación de muestras.
              </p>
              <form className="flex max-w-xl mx-auto shadow-2xl shadow-accent-pastel/20 rounded-xl overflow-hidden mb-12 transform transition duration-300 hover:scale-[1.01]" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="search" 
                    placeholder="Buscar tiempo de entrega o protocolo..." 
                    className="w-full p-5 text-lg text-text-dark-main border-none focus:outline-none focus:ring-4 focus:ring-accent-pastel/30 bg-card-bg" 
                    aria-label="Buscar servicio o caso"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="bg-accent-pastel text-card-bg p-5 text-lg font-bold hover:bg-opacity-90 transition duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
              </form>
              <div id="search-results-placeholder" className="min-h-[200px] w-full max-w-xl mx-auto bg-card-bg border border-gray-100 p-6 rounded-xl text-left shadow-lg text-text-muted-dark">
                  <p className="text-lg font-semibold text-text-dark-main mb-4">Resultados de Búsqueda:</p>
                  {searchQuery.trim() !== '' && searchResults.length === 0 ? (
                    <p>No se encontraron resultados para "{searchQuery}".</p>
                  ) : (
                    <ul className="space-y-4">
                      {searchResults.map((studio, index) => (
                        <li key={index} className="p-4 bg-page-bg rounded-lg border border-gray-200">
                          <p className="font-bold text-text-dark-main text-lg">{studio.PRUEBA}</p>
                          <p><span className="font-semibold">Día de Proceso:</span> {studio["DIA DE PROCESO"]}</p>
                          <p><span className="font-semibold">Hora de Corte:</span> {studio["HORA DE CORTE"]}</p>
                          <p><span className="font-semibold">Hora de Reporte:</span> {studio["HORA DE REPORTE"]}</p>
                        </li>
                      ))}
                      {searchQuery.trim() === '' && (
                        <p>Los resultados de su búsqueda aparecerán aquí.</p>
                      )}
                    </ul>
                  )}
              </div>
          </section>
      </main>

      <footer className="bg-card-bg border-t border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-gray-100 pb-6">
                  <div className="text-center md:text-left mb-6 md:mb-0">
                      <div className="text-xl font-black tracking-wider text-accent-pastel mb-2">
                          INMUNOLOGIA<span className="text-text-dark-main">ESPECIAL</span>
                      </div>
                      <p className="text-sm text-text-muted-dark">
                          &copy; 2025 INMUNOLOGIA ESPECIAL. Todos los derechos reservados.
                      </p>
                  </div>
              </div>
              <div className="flex flex-wrap justify-center space-x-6 text-sm font-medium">
                  <a href="#servicios" className="text-text-muted-dark hover:text-accent-pastel transition duration-200">Servicios</a>
                  <a href="#casos" className="text-text-muted-dark hover:text-accent-pastel transition duration-200">Casos</a>
                  <a href="#" className="text-text-muted-dark hover:text-accent-pastel transition duration-200">Términos</a>
                  <a href="#" className="text-text-muted-dark hover:text-accent-pastel transition duration-200">Política de Privacidad</a>
              </div>
          </div>
      </footer>
    </>
  );
}
