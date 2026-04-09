import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Moon, Sun } from 'lucide-react';
import Logo from './Logo';
import RequestCallbackModal from './RequestCallbackModal';

interface HeaderProps {
  onAdminClick: () => void;
  isAdminView: boolean;
  onHomeClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ onAdminClick, isAdminView, onHomeClick, isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-callback-modal', handleOpenModal);
    return () => window.removeEventListener('open-callback-modal', handleOpenModal);
  }, []);

  return (
    <header className="bg-white dark:bg-slate-900 sticky top-0 z-50 shadow-sm border-b border-primary-50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => { if (!isAdminView) { onHomeClick(); window.scrollTo(0,0); } }}>
            <Logo className="scale-75 origin-left" />
          </div>

          {/* Desktop Navigation */}
          {!isAdminView && (
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => { onHomeClick(); window.scrollTo(0,0); }} className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">Home</button>
              <a href="#courses" onClick={onHomeClick} className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">Courses</a>
              <a href="#" onClick={onHomeClick} className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">About Us</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4" />
                Get Started
              </button>
            </nav>
          )}

          {isAdminView && (
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={onAdminClick}
                className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-6 py-2.5 rounded-full font-medium transition-all"
              >
                Back to Site
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {!isAdminView ? (
              <>
                <button onClick={() => { onHomeClick(); setIsMenuOpen(false); window.scrollTo(0,0); }} className="w-full text-left px-3 py-3 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg font-medium">Home</button>
                <a href="#courses" onClick={() => { onHomeClick(); setIsMenuOpen(false); }} className="block px-3 py-3 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg font-medium">Courses</a>
                <a href="#" onClick={() => { onHomeClick(); setIsMenuOpen(false); }} className="block px-3 py-3 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg font-medium">About Us</a>
                <div className="pt-4">
                  <button 
                    onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
                    className="w-full flex justify-center items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-medium shadow-sm"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Get Started
                  </button>
                </div>
              </>
            ) : (
              <div className="pt-2">
                <button 
                  onClick={() => { onAdminClick(); setIsMenuOpen(false); }}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-medium shadow-sm"
                >
                  Back to Site
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <RequestCallbackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
}
