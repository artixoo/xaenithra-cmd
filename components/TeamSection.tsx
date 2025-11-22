import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { User, Globe, Cpu, Smartphone, Eye, ShieldCheck } from 'lucide-react';

const TeamSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe': return <Globe className="w-6 h-6" />;
      case 'cpu': return <Cpu className="w-6 h-6" />;
      case 'smartphone': return <Smartphone className="w-6 h-6" />;
      case 'eye': return <Eye className="w-6 h-6" />;
      default: return <User className="w-6 h-6" />;
    }
  };

  return (
    <section id="team" className="py-20 px-4 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <ShieldCheck className="w-10 h-10 text-purple-500" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
            Active Roster
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="group relative p-1">
              {/* Card Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative h-full bg-slate-900 p-6 rounded-lg border border-slate-800 group-hover:border-slate-600 transition-all">
                <div className={`mb-4 p-3 rounded-lg bg-slate-950 w-fit ${member.color} border border-slate-800`}>
                  {getIcon(member.icon)}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-1">{member.name}</h3>
                <p className={`text-sm font-mono mb-4 ${member.color}`}>{member.role}</p>
                
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialty.map((spec, sIdx) => (
                      <span key={sIdx} className="text-xs font-mono px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Logic for Utkarsh (AI) */}
                {member.name === "Utkarsh" && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <p className="text-xs text-purple-400 font-mono">
                      <span className="font-bold">AI COMMAND:</span> "Use Gemini 2.5 Flash for rapid script generation. Use Pro for complex code analysis."
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
