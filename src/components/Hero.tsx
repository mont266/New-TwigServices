import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-semibold tracking-wide mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Premium E-Learning Reseller
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empower Your Workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">Expert Training</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              High-quality, accredited online courses in Health & Safety, HR & Business Skills, and Health and Social Care. Designed to keep your business compliant and your team growing.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#courses" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-primary-500/30 transform hover:-translate-y-1">
                Browse Courses
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:border-slate-300">
                Contact Sales
              </a>
            </motion.div>

            <motion.div 
              className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-slate-900 font-bold text-xl">
                  <ShieldCheck className="w-5 h-5 text-primary-500" />
                  100%
                </div>
                <span className="text-sm text-slate-500 font-medium">CPD Accredited</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-slate-900 font-bold text-xl">
                  <Users className="w-5 h-5 text-primary-500" />
                  10k+
                </div>
                <span className="text-sm text-slate-500 font-medium">Active Learners</span>
              </div>
              <div className="flex flex-col gap-1 sm:col-span-1 col-span-2">
                <div className="flex items-center gap-1 text-slate-900 font-bold text-xl">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  4.9/5
                </div>
                <span className="text-sm text-slate-500 font-medium">Average Rating</span>
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
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 aspect-[4/5] w-full max-w-md ml-auto">
              <img 
                src="https://picsum.photos/seed/elearningworkspace/800/1000" 
                alt="Professional learning online" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Card 1: Course Progress */}
            <motion.div 
              className="absolute top-12 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 w-64"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Health & Safety</p>
                  <p className="text-xs text-slate-500">Course Completed</p>
                </div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full w-full"></div>
              </div>
            </motion.div>

            {/* Floating Card 2: Certificate */}
            <motion.div 
              className="absolute bottom-24 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center border border-yellow-200">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">CPD Certified</p>
                <p className="text-xs text-slate-500">+5 Units Earned</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
