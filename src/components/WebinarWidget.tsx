import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, X } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

export default function WebinarWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // NOTE: Replace this URL with your actual free Calendly booking link
  // e.g., "https://calendly.com/your-username/30min"
  const calendlyUrl = "https://calendly.com/tom-twigservices/30min";

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-r-xl shadow-xl hover:-translate-x-1 transition-transform flex items-center justify-center rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 flex-shrink-0 rotate-90" />
          </div>
          <span className="tracking-wider">Book Webinar</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Book a Webinar
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Schedule a personalized webinar with our team to explore our training platform, discuss your needs, and see how Twig Services can empower your workforce.
                </p>

                <div className="h-[550px] w-full bg-white rounded-xl overflow-hidden relative border border-slate-100 dark:border-slate-700">
                   <InlineWidget 
                     url={calendlyUrl} 
                     styles={{ height: '100%', width: '100%' }}
                     pageSettings={{
                       // Basic styling parameters supported by Calendly
                       backgroundColor: 'ffffff',
                       hideEventTypeDetails: false, // Keep false so users see event info
                       hideLandingPageDetails: false,
                       primaryColor: '0ea5e9', // Matches tailwind sky-500 / primary feeling
                       textColor: '0f172a'
                     }} 
                   />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
