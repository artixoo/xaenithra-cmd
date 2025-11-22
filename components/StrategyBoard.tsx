import React, { useState } from 'react';
import { STRATEGY_PHASES } from '../constants';
import { ChevronRight, Target, AlertCircle, CheckCircle2 } from 'lucide-react';

const StrategyBoard: React.FC = () => {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <section id="strategy" className="py-20 px-4 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Target className="w-10 h-10 text-red-500" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
            15-Day Ace Strategy
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Tabs */}
          <div className="lg:w-1/3 space-y-4">
            {STRATEGY_PHASES.map((phase) => (
              <button
                key={phase.phase}
                onClick={() => setActivePhase(phase.phase)}
                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 group ${
                  activePhase === phase.phase
                    ? 'bg-slate-800 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    : 'bg-slate-950 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-mono text-sm font-bold ${activePhase === phase.phase ? 'text-red-400' : 'text-slate-500'}`}>
                    {phase.days}
                  </span>
                  {activePhase === phase.phase && <ChevronRight className="text-red-500 animate-pulse" />}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-100">{phase.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{phase.focus}</p>
              </button>
            ))}
            
            <div className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-lg mt-8">
                <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                    <div>
                        <h4 className="text-purple-100 font-bold font-display mb-2">Utkarsh's AI Directive</h4>
                        <p className="text-purple-200/70 text-sm">
                            Do NOT ask AI to "Solve this CTF".<br/>
                            DO ask: "Here is a C function. Explain the memory management vulnerability in lines 10-15 and suggest a python payload structure to exploit it."
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            {STRATEGY_PHASES.map((phase) => (
              <div
                key={phase.phase}
                className={`h-full transition-all duration-500 ${activePhase === phase.phase ? 'opacity-100 block' : 'opacity-0 hidden'}`}
              >
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 h-full shadow-2xl">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800">
                    <span className="text-6xl font-display font-black text-slate-800 select-none">0{phase.phase}</span>
                    <div>
                        <h3 className="text-2xl text-white font-bold uppercase">{phase.title}</h3>
                        <span className="px-3 py-1 bg-red-900/30 text-red-400 text-xs font-mono rounded border border-red-900/50">
                            INTENSITY: HIGH
                        </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {phase.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded bg-slate-900/50 border border-slate-800/50 hover:border-slate-600 transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                            <p className="text-slate-200 font-mono leading-relaxed">
                                {/* Simple highlighting for names */}
                                {task.split(/(Aryan:|Yuyutshu:|Divyanshu:|Utkarsh:|Team:)/g).map((part, i) => 
                                    part.match(/^(Aryan:|Yuyutshu:|Divyanshu:|Utkarsh:|Team:)$/) ? 
                                    <span key={i} className="font-bold text-cyan-400">{part}</span> : 
                                    <span key={i}>{part}</span>
                                )}
                            </p>
                        </div>
                    ))}
                  </div>

                  {phase.phase === 3 && (
                      <div className="mt-8 p-4 bg-green-900/20 border border-green-500/30 rounded text-center">
                          <p className="text-green-400 font-bold font-display tracking-widest animate-pulse">
                              VICTORY IS IMMINENT
                          </p>
                      </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyBoard;
