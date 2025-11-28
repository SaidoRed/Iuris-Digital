import React from 'react';

interface VideoEmbedProps {
  src: string;
  caption: string;
  title: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, caption, title }) => {
  return (
    <figure className="my-10 w-full">
      <div className="relative w-full aspect-video bg-navy-900 rounded-sm overflow-hidden shadow-md border border-gray-200">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-gray-500 font-sans italic border-l-2 border-gold-500 pl-3 inline-block">
        Figura: {caption}
      </figcaption>
    </figure>
  );
};