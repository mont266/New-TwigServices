import { ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
}

export default function LoginPage({ onBack }: LoginPageProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Business Account Login */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Business Account<br />Login
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 flex-grow">
              If you are a business user, please click the button below and you will be redirected to the business account login page.
            </p>
            
            <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1507679622778-90d23f3170e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Business User" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <a 
              href="https://videotilehost.com/twigservices/busLogin.php?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center px-8 py-4 bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Login
            </a>
          </div>

          {/* Candidate Account Login */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Candidate Account<br />Login
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 flex-grow">
              If you are an individual or free trial user, please click the button below and you will be redirected to the candidate login page.
            </p>
            
            <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Candidate User" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <a 
              href="https://videotilehost.com/twigservices/index.php?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center px-8 py-4 bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Login
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
