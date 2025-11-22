import React from 'react';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import StrategyBoard from './components/StrategyBoard';
import ResourceHub from './components/ResourceHub';
import KaliSetup from './components/KaliSetup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* Sticky Nav */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-display font-bold text-2xl text-white tracking-tighter">
                XAENITHRA
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#team" className="hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</a>
                <a href="#strategy" className="hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Strategy</a>
                <a href="#resources" className="hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Resources</a>
                <a href="#setup" className="bg-cyan-900/50 text-cyan-400 hover:bg-cyan-900/70 px-3 py-2 rounded-md text-sm font-bold border border-cyan-700/50 transition-colors">
                    GET TOOLS
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <TeamSection />
        <StrategyBoard />
        <ResourceHub />
        <KaliSetup />
      </main>

      <footer className="bg-black border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="font-display font-bold text-2xl text-slate-800 mb-4">XAENITHRA</p>
           <p className="text-slate-600 font-mono text-sm">
               Built for Shaastra 2026. Prepare to Dominate.
           </p>
           <p className="text-slate-700 text-xs mt-8">
               &copy; {new Date().getFullYear()} Team Xaenithra. IIT Madras CTF Unit.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
