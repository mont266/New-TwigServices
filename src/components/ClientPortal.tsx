import { PlaySquare, Lightbulb } from 'lucide-react';

interface ClientPortalProps {
  onLoginClick: () => void;
}

export default function ClientPortal({ onLoginClick }: ClientPortalProps) {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Already A Client Card */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex flex-col h-full">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8">
              <PlaySquare className="w-8 h-8 text-[#FF6B4A]" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Already A Client?</h2>
            <p className="text-lg text-slate-500 mb-8 flex-grow">
              Login to your account to access your E-Learning courses.<br className="hidden sm:block" />
              Business or Candidate Accounts.
            </p>
            <div>
              <button 
                onClick={onLoginClick}
                className="px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
              >
                Login
              </button>
            </div>
          </div>

          {/* Want to Become A Client Card */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex flex-col h-full">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8">
              <Lightbulb className="w-8 h-8 text-[#FFB020]" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to Become A Client?</h2>
            <p className="text-lg text-slate-500 mb-8 flex-grow">
              Use our quick quote calculator to instantly generate a<br className="hidden sm:block" />
              quote for your business.
            </p>
            <div>
              <button 
                onClick={scrollToQuote}
                className="px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
              >
                Quote Calculator
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
