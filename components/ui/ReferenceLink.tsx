import React from 'react';
import { Reference } from '../../types';

interface ReferenceListProps {
  references: Reference[];
}

export const ReferenceList: React.FC<ReferenceListProps> = ({ references }) => {
  return (
    <div className="mt-16 pt-8 border-t border-gray-300">
      <h3 className="font-serif text-xl font-bold text-navy-900 mb-6">Referencias Bibliográficas</h3>
      <ul className="space-y-4">
        {references.map((ref) => (
          <li key={ref.id} className="text-sm text-gray-700 font-sans pl-8 -indent-8">
            {ref.text}
            {ref.url && (
              <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-oxide-700 hover:text-navy-900 underline decoration-1 underline-offset-2 transition-colors"
              >
                [Ver recurso]
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};