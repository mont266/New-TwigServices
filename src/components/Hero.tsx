import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Users, Star, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Modern Light Background with Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      
      {/* Soft Gradient Orbs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[500px] h-[500px] bg-primary-100/60 rounded-full blur-[100px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold tracking-wide mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Premium E-Learning Partner
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empower Your Team with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Expert Training.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              High-quality, accredited online courses in Health & Safety, HR, and Social Care. Designed to keep your business compliant and your team growing.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#courses" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-primary-600/20 transform hover:-translate-y-1">
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-callback-modal'))}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm hover:border-slate-300"
              >
                <PlayCircle className="w-5 h-5 text-primary-600" />
                Get a Quote
              </button>
            </motion.div>

            <motion.div 
              className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-slate-900 font-bold text-2xl">
                  100%
                </div>
                <span className="text-sm text-slate-500 font-medium">Accredited</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-slate-900 font-bold text-2xl">
                  10k+
                </div>
                <span className="text-sm text-slate-500 font-medium">Learners</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-slate-900 font-bold text-2xl">
                  5.0
                  <div className="flex gap-0.5 ml-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="bg-[#00b67a] p-0.5 rounded-sm">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-slate-500 font-medium">Trustpilot Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 aspect-[4/5] w-full max-w-md ml-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating Card 1: Trustpilot */}
            <motion.div 
              className="absolute top-20 -left-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="flex gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="bg-[#00b67a] p-1 rounded-sm">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Rated <span className="text-slate-900 font-bold">5.0</span> on Trustpilot
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Compliance */}
            <motion.div 
              className="absolute bottom-32 -left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center border border-green-100">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Fully Compliant</p>
                <p className="text-xs text-slate-500">Industry standards met</p>
              </div>
            </motion.div>

            {/* Floating Card 3: Course Progress */}
            <motion.div 
              className="absolute -bottom-6 right-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 w-56"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-slate-900">Health & Safety</span>
                </div>
                <span className="text-xs font-bold text-primary-600">100%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-primary-500 to-blue-500 h-1.5 rounded-full w-full"></div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
