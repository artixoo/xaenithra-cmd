import React, { useState } from 'react';
import { KALI_SETUP_SCRIPT } from '../constants';
import { Terminal, Copy, Check } from 'lucide-react';

const KaliSetup: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(KALI_SETUP_SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="setup" className="py-20 px-4 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-900/20 rounded-full border border-green-500/30">
                <Terminal className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">
            God Mode Protocol
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            One command to rule them all. Copy this into your Kali Linux terminal to install the essential Xaenithra toolset.
          </p>
        </div>

        <div className="relative group rounded-xl overflow-hidden bg-black border border-slate-700 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="text-slate-400 text-xs font-mono">root@xaenithra-kali:~</div>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 text-xs text-white transition-colors"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? "COPIED" : "COPY SCRIPT"}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
            <div className="flex text-green-400 mb-2">
              <span className="mr-2">➜</span>
              <span className="text-cyan-400 mr-2">~</span>
              <span className="opacity-75">./install_tools.sh</span>
            </div>
            <pre className="text-slate-300 whitespace-pre-wrap break-all pl-4 border-l-2 border-slate-700">
              {KALI_SETUP_SCRIPT}
            </pre>
          </div>
          
          {/* Glitch Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[url('https://media.giphy.com/media/o0vwzuFxE190y2qcoM/giphy.gif')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="mt-8 text-center">
             <p className="text-xs text-slate-500 uppercase tracking-widest">
                 ⚠️ Warning: Run on fresh VM or dedicated Kali instance.
             </p>
        </div>
      </div>
    </section>
  );
};

export default KaliSetup;
