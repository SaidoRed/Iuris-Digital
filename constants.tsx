import React from 'react';
import { BlogPost } from './types';
import { VideoEmbed } from './components/ui/VideoEmbed';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'identidad-digital',
    title: 'La Construcción de la Identidad Digital',
    subtitle: 'Gestión de la huella digital y sus implicaciones en la reputación jurídica.',
    category: 'Identidad Digital',
    readTime: '6 min lectura',
      publishDate: '28/11/2025',
    heroImage: 'https://plus.unsplash.com/premium_photo-1709143101313-d73dafff9e4d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&grayscale',
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-6 font-serif leading-relaxed">
          En la era de la información, la identidad ya no se define únicamente por documentos físicos o presencia biológica. 
          La identidad digital se configura como el conjunto de rastros, datos y comportamientos que dejamos en la red, 
          creando una proyección de nuestra persona que a menudo nos precede.
        </p>

        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">El concepto de Huella Digital</h2>
        <p className="mb-4">
          Cada interacción en línea, desde un "me gusta" en redes sociales hasta una transacción bancaria, constituye un fragmento de nuestra huella digital. 
          A diferencia de la huella física, esta es indeleble y acumulativa. Para los profesionales, gestionar esta huella no es una opción, 
          sino una necesidad estratégica.
        </p>

        <VideoEmbed 
          title="Gestión de Identidad Digital"
          src="https://www.youtube.com/watch?v=rNmXiYY9iHA" // Placeholder educational video ID
          caption="La importancia de la gestión proactiva de la identidad en entornos profesionales."
        />

        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">Integración Jurídica: El Abogado y la Reputación Online</h2>
        <div className="bg-white p-8 border-l-4 border-gold-500 shadow-sm my-8">
          <h3 className="text-lg font-bold text-navy-800 mb-2 uppercase tracking-wide text-xs">Perspectiva Legal</h3>
          <p className="italic text-gray-700">
            "La reputación es el activo intangible más valioso de un abogado. Una identidad digital descuidada puede ser utilizada en contra de un litigante o cuestionar su ética profesional."
          </p>
        </div>
        <p className="mb-4">
          Desde la perspectiva del Derecho, la identidad digital plantea desafíos significativos en torno al <strong>Derecho al Honor</strong> y la <strong>Propia Imagen</strong>. 
          Un estudiante de derecho o un abogado en ejercicio debe comprender que su comportamiento en línea está sujeto al escrutinio público y deontológico.
        </p>
        <p className="mb-4">
          Jurisprudencialmente, los tribunales han comenzado a admitir evidencia digital extraída de perfiles públicos para demostrar conductas, contradicciones o estados de ánimo. 
          Por tanto, la incoherencia entre la identidad física (el abogado en el estrado) y la identidad digital (el abogado en redes sociales) puede derivar en una pérdida de credibilidad procesal irreparable.
        </p>
      </>
    ),
    references: [
      { id: 'r1', text: 'Cervantes, J. (2020). Identidad digital y reputación online en la abogacía. Revista de Derecho Digital, 4(1), 45-60.' },
      { id: 'r2', text: 'Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.', url: 'https://www.boe.es' },
      { id: 'r3', text: 'Gasser, U., & Palfrey, J. (2008). Born Digital: Understanding the First Generation of Digital Natives. Basic Books.' }
    ]
  },
  {
    id: '2',
    slug: 'etiqueta-digital',
      title: 'NETIQUETA DIGITAL',
    subtitle: 'Protocolos de comunicación y civilidad en el entorno virtual.',
      category: 'NETIQUETA DIGITAL',
    readTime: '4 min lectura',
      publishDate: '28/11/2025',
    heroImage: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&grayscale',
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-6 font-serif leading-relaxed">
          La "Netiqueta" no es simplemente un manual de buenos modales; es el código de conducta que permite la convivencia pacífica y productiva en el ciberespacio. 
          La falta de señales no verbales en la comunicación escrita exige una mayor precisión y cortesía.
        </p>
        
        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">Principios Fundamentales</h2>
        <p className="mb-4">
          La regla de oro de la Netiqueta es: "Recuerde lo humano". Detrás de cada pantalla hay una persona con sentimientos y derechos. 
          El anonimato percibido nunca debe ser una excusa para la hostilidad.
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Claridad y Concisión:</strong> El tiempo de los demás es valioso.</li>
          <li><strong>Respeto por la Privacidad:</strong> No reenviar correos privados sin consentimiento.</li>
          <li><strong>Tono Profesional:</strong> Evitar el uso excesivo de mayúsculas, que equivale a gritar.</li>
        </ul>

        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">Integración Jurídica: La Comunicación Procesal</h2>
        <p className="mb-4">
           En el ejercicio del derecho, la forma es fondo. La comunicación electrónica entre abogados, y entre abogado y tribunal (vía sistemas como LexNET o notificaciones electrónicas), 
           tiene validez legal.
        </p>
        <p className="mb-4">
           Una falta de etiqueta digital, como un lenguaje inapropiado en un correo electrónico profesional, no solo es una falta de educación, sino que puede constituir una 
           infracción del <strong>Código Deontológico de la Abogacía</strong>, que exige lealtad, respeto y compañerismo. Además, los insultos o calumnias vertidos en foros o redes 
           pueden dar lugar a responsabilidades penales y civiles.
        </p>
      </>
    ),
    references: [
      { id: 'r1', text: 'Shea, V. (1994). Netiquette. Albion Books.' },
      { id: 'r2', text: 'Código Deontológico de la Abogacía Española (2019).', url: 'https://www.abogacia.es' }
    ]
  },
  {
    id: '3',
    slug: 'seguridad-digital',
    title: 'Prevención de Riesgos Técnicos y Seguridad',
    subtitle: 'Salvaguardando la integridad de la información en un entorno hostil.',
    category: 'Seguridad Digital',
    readTime: '7 min lectura',
      publishDate: '28/11/2025',
    heroImage: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&grayscale',
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-6 font-serif leading-relaxed">
          La seguridad digital comprende las medidas técnicas, organizativas y legales para proteger los sistemas de información. 
          En un mundo interconectado, la brecha de seguridad es una cuestión de "cuándo", no de "si".
        </p>

        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">Vectores de Ataque Comunes</h2>
        <p className="mb-4">
          El Phishing, el Ransomware y la Ingeniería Social son las amenazas predominantes. La mayoría de los incidentes de seguridad 
          no se deben a fallos técnicos complejos, sino al error humano.
        </p>

        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">Integración Jurídica: El Deber de Custodia</h2>
        <div className="bg-navy-900 text-cream-50 p-6 rounded-sm shadow-lg mb-8">
           <p className="font-serif text-lg">
             "El abogado es custodio de los secretos de su cliente. Una brecha de seguridad no es solo un problema informático; es una violación del secreto profesional."
           </p>
        </div>
        <p className="mb-4">
          Legalmente, el abogado tiene un deber reforzado de diligencia. Si un despacho de abogados sufre un ataque de Ransomware y se filtran datos sensibles de clientes 
          (datos penales, médicos, económicos), el despacho enfrenta sanciones administrativas severas por parte de la Agencia de Protección de Datos, 
          además de responsabilidad civil contractual frente al cliente.
        </p>
        <p>
          La adopción de medidas de seguridad (cifrado, copias de seguridad, autenticación de doble factor) no es opcional para el jurista; es una obligación legal derivada 
          del principio de <strong>integridad y confidencialidad</strong> de los datos.
        </p>
      </>
    ),
    references: [
      { id: 'r1', text: 'Incibe (2023). Guía de Ciberseguridad para el sector legal.' },
      { id: 'r2', text: 'Reglamento (UE) 2016/679 (RGPD), Artículos 32 y siguientes.' }
    ]
  },
  {
    id: '4',
    slug: 'proteccion-datos',
    title: 'Protección Digital y Privacidad',
    subtitle: 'El derecho fundamental a la privacidad en la sociedad de la vigilancia.',
    category: 'Protección Digital',
    readTime: '5 min lectura',
      publishDate: '28/11/2025',
    heroImage: 'https://plus.unsplash.com/premium_photo-1723892425262-ccb9f6b6229d?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&grayscale',
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-6 font-serif leading-relaxed">
          La protección digital se centra en el control que los individuos tienen sobre su propia información. 
          En la economía de datos, la privacidad se ha convertido en una moneda de cambio, a menudo entregada sin conciencia real de su valor.
        </p>

        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">Habeas Data</h2>
        <p className="mb-4">
          El concepto de Habeas Data garantiza que cualquier persona pueda conocer qué datos suyos existen en los registros, 
          para qué se usan y solicitar su rectificación o supresión.
        </p>

        <h2 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">Integración Jurídica: Derechos ARCO-POL</h2>
        <p className="mb-4">
          Para el futuro abogado, la protección de datos es un nicho de mercado en expansión y una competencia transversal obligatoria. 
          Entender los derechos de Acceso, Rectificación, Cancelación, Oposición, Portabilidad y Limitación (ARCO-POL) es esencial.
        </p>
        <p className="mb-4">
          El derecho al olvido digital es un ejemplo claro de cómo la doctrina jurídica ha tenido que evolucionar para proteger la dignidad humana frente a la memoria infinita de los buscadores.
          El abogado debe saber ponderar este derecho frente a la libertad de información, un conflicto constitucional clásico trasladado al terreno digital.
        </p>
      </>
    ),
    references: [
      { id: 'r1', text: 'Sentencia del TJUE de 13 de mayo de 2014 (Caso Google Spain).' },
      { id: 'r2', text: 'Piñar Mañas, J.L. (2019). El Derecho fundamental a la protección de datos.' }
    ]
  }
];