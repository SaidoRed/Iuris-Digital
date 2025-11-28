import React from 'react';
import { PageRoute } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, id?: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-navy-800 bg-cream-50 selection:bg-gold-500 selection:text-white">
      {/* Header */}
      <header className="bg-navy-950 text-white sticky top-0 z-50 border-b-4 border-gold-600 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="cursor-pointer group"
            onClick={() => onNavigate(PageRoute.HOME)}
          >
            <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
              Iuris<span className="text-gold-500">Digitalis</span>
            </h1>
            <p className="text-xs text-gray-400 tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              UBA - Facultad de Derecho
            </p>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium tracking-wide">
              <li>
                <button 
                  onClick={() => onNavigate(PageRoute.HOME)}
                  className={`hover:text-gold-500 transition-colors ${currentPage === PageRoute.HOME ? 'text-gold-500 underline underline-offset-4' : 'text-gray-300'}`}
                >
                  Inicio
                </button>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">Sobre Nosotros</span>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">Recursos</span>
              </li>
            </ul>
          </nav>

          <button className="md:hidden text-white focus:outline-none">
            {/* Simple Menu Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-gray-400 py-12 border-t border-navy-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Iuris Digitalis</h4>
            <p className="leading-relaxed mb-4">
              Un espacio académico dedicado al estudio de la intersección entre el derecho y la tecnología.
              Promoviendo la cultura digital responsable.
            </p>
            <p>&copy; {new Date().getFullYear()} UBA - Facultad de Derecho.</p>
          </div>
          
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li className="hover:text-gold-500 transition-colors cursor-pointer">Identidad Digital</li>
              <li className="hover:text-gold-500 transition-colors cursor-pointer">Seguridad de la Información</li>
              <li className="hover:text-gold-500 transition-colors cursor-pointer">Ética y Netiqueta</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Contacto</h4>
            <p className="mb-2">Campus Universitario, Facultad de Derecho</p>
            <p className="mb-2">info@iurisdigitalis.edu</p>
            <div className="flex mt-4 space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-navy-800 rounded flex items-center justify-center hover:bg-gold-600 transition-colors">Ln</div>
              <div className="w-8 h-8 bg-navy-800 rounded flex items-center justify-center hover:bg-gold-600 transition-colors">Tw</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};