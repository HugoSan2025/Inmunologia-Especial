import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inmunologia Especial',
  description: 'Información de servicios y tiempos de entrega para estudios de inmunología.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
                background-color: #F7F7F7;
                color: #333333;
                font-family: 'Inter', sans-serif;
                scroll-behavior: smooth;
                position: relative; 
                overflow-x: hidden; 
            }

            @keyframes subtle-move {
                0% { transform: translate(0, 0); }
                100% { transform: translate(-20px, -20px); }
            }

            body::before {
                content: "";
                position: fixed;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle at 50% 50%, rgba(139, 133, 232, 0.2) 0%, transparent 40%); 
                opacity: 0.15;
                animation: subtle-move 40s infinite linear alternate;
                z-index: -1;
                pointer-events: none;
            }
            
            .card-glow:hover {
                box-shadow: 0 15px 40px rgba(139, 133, 232, 0.4); 
            }
            
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .phrase-animate {
                animation: fade-in 0.8s ease-out;
            }
          `}
        </style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
