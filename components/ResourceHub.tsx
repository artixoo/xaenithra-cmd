import React from 'react';
import { RESOURCES } from '../constants';
import { ExternalLink, BookOpen } from 'lucide-react';

const ResourceHub: React.FC = () => {
  return (
    <section id="resources" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <BookOpen className="w-10 h-10 text-cyan-500" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
            Training Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, idx) => (
            <a 
              key={idx} 
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider
                  ${resource.category === 'Web' ? 'bg-cyan-900/30 text-cyan-400' : 
                    resource.category === 'Binary' ? 'bg-green-900/30 text-green-400' : 
                    resource.category === 'Forensics' ? 'bg-purple-900/30 text-purple-400' : 
                    'bg-slate-800 text-slate-400'}`}>
                  {resource.category}
                </span>
                <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{resource.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{resource.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                 <span className={`text-xs font-mono 
                    ${resource.difficulty === 'God Mode' ? 'text-red-500 font-bold animate-pulse' : 'text-slate-500'}`}>
                    {resource.difficulty}
                 </span>
                 <span className="text-xs text-slate-600 group-hover:translate-x-1 transition-transform">Access &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHub;
