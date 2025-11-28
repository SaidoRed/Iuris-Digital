import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { BLOG_POSTS } from './constants';
import { PageRoute, NavigationState } from './types';
import { ReferenceList } from './components/ui/ReferenceLink';

const App: React.FC = () => {
  const [navState, setNavState] = useState<NavigationState>({
    currentPage: PageRoute.HOME,
  });

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navState]);

  const handleNavigate = (page: PageRoute, id?: string) => {
    setNavState({ currentPage: page, currentPostId: id });
  };

  const renderHome = () => (
    <>
      <div className="text-center mb-16 space-y-4">
        <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Blog Universitario</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 leading-tight">
          Derecho y Tecnología en la<br/>Sociedad de la Información
        </h2>
        <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
          Explorando los retos jurídicos de la identidad, seguridad y comportamiento en el entorno digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => handleNavigate(PageRoute.POST, post.id)}
          >
            <div className="overflow-hidden h-64 relative">
              <div className="absolute inset-0 bg-navy-900 opacity-0 group-hover:opacity-10 transition-opacity z-10"></div>
              <img 
                src={post.heroImage} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-navy-900 text-white text-xs px-3 py-1 font-bold uppercase tracking-wide z-20">
                {post.category}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="text-xs text-gray-500 mb-3 font-medium">
                {post.publishDate} • {post.readTime}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3 group-hover:text-oxide-700 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed mb-6 flex-grow">
                {post.subtitle}
              </p>
              <div className="mt-auto">
                <span className="text-oxide-700 font-bold text-sm uppercase tracking-wider group-hover:underline underline-offset-4 decoration-oxide-700">
                  Leer Artículo &rarr;
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );

  const renderPost = () => {
    const post = BLOG_POSTS.find(p => p.id === navState.currentPostId);
    if (!post) return <div className="text-center py-20">Artículo no encontrado.</div>;

    return (
      <article className="max-w-3xl mx-auto">
        <button 
          onClick={() => handleNavigate(PageRoute.HOME)}
          className="mb-8 text-sm font-bold text-gray-500 hover:text-navy-900 flex items-center transition-colors group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Volver al inicio
        </button>

        <header className="mb-10 text-center">
          <span className="inline-block py-1 px-3 border border-gold-500 text-gold-600 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-500 font-light italic mb-6">
            {post.subtitle}
          </p>
          <div className="flex justify-center items-center text-sm text-gray-500 border-t border-b border-gray-200 py-3 space-x-4">
            <span>Por <strong>Carlos Escobar</strong></span>
            <span>•</span>
            <span>{post.publishDate}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="mb-10 shadow-lg rounded-sm overflow-hidden">
           <img 
            src={post.heroImage} 
            alt={post.title} 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none font-sans text-gray-800 leading-8">
          {post.content}
        </div>

        <ReferenceList references={post.references} />
      </article>
    );
  };

  return (
    <Layout currentPage={navState.currentPage} onNavigate={handleNavigate}>
      {navState.currentPage === PageRoute.HOME ? renderHome() : renderPost()}
    </Layout>
  );
};

export default App;