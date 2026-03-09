import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// --- THE TRUST PROTOCOL THEME ---
// Primary: Deep Emerald (#042f2e)
// Secondary: Brushed Gold (#d4af37)
// Text: Charcoal (#1f2937)
// Action: Neon Pulse (#10b981)

export default function Landing() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500/30">
      
      {/* --- NAV: INSTITUTIONAL TRUST --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
              W
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg text-emerald-950 leading-none">Waggoner</h1>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Wealth Management</p>
            </div>
          </div>
          <button 
            onClick={() => setChatOpen(true)}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-emerald-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20"
          >
            Client Portal
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* --- HERO: THE PSYCHOLOGICAL HOOK --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800 text-xs font-bold uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Inheritance Guidance System
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
            Start the conversation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">AI</span>.
            <br />
            <span className="text-slate-400">Grow your wealth with a trusted CFP.</span>
          </h1>
          
          <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
            No pressure. No judgment. Just an intelligent assistant to help you understand your new financial reality before you ever talk to a human.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => setChatOpen(true)}
              className="px-8 py-5 bg-emerald-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              Start AI Analysis
            </button>
            <button className="px-8 py-5 border border-slate-200 text-slate-600 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
              Read The Guide
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8 opacity-60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Fiduciary Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Family Focused</span>
            </div>
          </div>
        </motion.div>

        {/* --- THE MIRROR: AI INTERFACE PREVIEW --- */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-3xl" />
          <div className="relative bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl p-8 overflow-hidden">
            {/* Mock Chat Interface */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 text-emerald-600">✨</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl rounded-tl-none border border-slate-100 max-w-[90%]">
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    Hello. I know inheriting money can feel overwhelming. I'm here to help you do the math and identify any potential tax traps—privately and at your own pace.
                  </p>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed mt-4">
                    To start, could you tell me roughly which bracket your inheritance falls into?
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {['Under $100k', '$100k - $500k', '$500k - $1M', '$1M+'].map(opt => (
                      <button key={opt} className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-all text-left">
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* User Reply Simulation */}
              <div className="flex items-center justify-end gap-2 opacity-40">
                <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce" />
                <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce delay-100" />
                <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce delay-200" />
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white to-transparent flex items-end justify-center pb-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Powered by Inherit AI</p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
