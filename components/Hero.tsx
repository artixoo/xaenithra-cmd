import React from 'react';
import { Shield, Terminal, Crosshair, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="p-4 border-2 border-cyan-500/30 rounded-full bg-black/50 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <Shield className="w-20 h-20 text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-2 glitch-wrapper">
          XAENITHRA
        </h1>
        <p className="text-xl md:text-2xl font-mono text-cyan-400 mb-8 tracking-widest uppercase">
          Shaastra 2026 <span className="text-white mx-2">|</span> CTF Unit
        </p>

        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-lg max-w-3xl mx-auto mb-12 backdrop-blur-md">
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            We don't just participate. We dominate. <br/>
            <span className="text-cyan-400 font-bold">Web</span>, <span className="text-green-400 font-bold">Binary</span>, <span className="text-purple-400 font-bold">Forensics</span>, <span className="text-red-400 font-bold">Intel</span>.
            <br/>
            One team. One objective. <span className="text-white font-bold">Ace the Flag.</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#strategy" className="group relative px-8 py-4 bg-cyan-600 text-white font-bold uppercase tracking-wider clip-path-polygon hover:bg-cyan-500 transition-all duration-300">
            <span className="flex items-center gap-2">
              <Crosshair className="w-5 h-5" />
              Access Strategy
            </span>
            <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/50 transition-all"></div>
          </a>
          <a href="#setup" className="group relative px-8 py-4 bg-slate-800 text-cyan-400 font-bold uppercase tracking-wider hover:bg-slate-700 transition-all duration-300 border border-slate-600">
             <span className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Deploy Kali Setup
            </span>
          </a>
        </div>
      </div>
      
      {/* Bottom Ticker */}
      <div className="absolute bottom-0 w-full bg-black/80 border-t border-slate-800 py-2 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-slate-500 font-mono text-sm">
          <span>STATUS: ONLINE</span>
          <span>TARGET: IIT MADRAS</span>
          <span>OPERATION: SHAASTRA 2026</span>
          <span>WIN_PROBABILITY: CALCULATING... 99.9%</span>
          <span>AI_ASSIST: ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
