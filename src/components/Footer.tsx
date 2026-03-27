import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Your trusted partner for premium e-learning. We provide accredited courses to help your workforce stay compliant, safe, and skilled.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Health & Safety</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">HR & Business Skills</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Health and Social Care</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Twig Services. All rights reserved.</p>
          <a 
            href="https://montforddigital.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 md:mt-0 inline-flex items-center no-underline font-sans text-[12px] text-slate-400 opacity-80 transition-opacity duration-200 hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" className="mr-[6px]">
              <defs>
                <linearGradient id="md-grad-footer" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#14b8a6"/>
                </linearGradient>
              </defs>
              <path fill="url(#md-grad-footer)" d="M0 32 L0 0 L12 0 L16 8 L20 0 L32 0 L32 32 L22 32 L16 20 L10 32 Z"/>
            </svg>
            <span className="text-slate-400">Developed by <strong className="font-bold text-slate-200">Montford Digital</strong></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
