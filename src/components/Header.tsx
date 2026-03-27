import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import Logo from './Logo';
import RequestCallbackModal from './RequestCallbackModal';

interface HeaderProps {
  onAdminClick: () => void;
  isAdminView: boolean;
  onHomeClick: () => void;
}

export default function Header({ onAdminClick, isAdminView, onHomeClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-callback-modal', handleOpenModal);
    return () => window.removeEventListener('open-callback-modal', handleOpenModal);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => { if (!isAdminView) { onHomeClick(); window.scrollTo(0,0); } }}>
            <Logo className="scale-75 origin-left" />
          </div>

          {/* Desktop Navigation */}
          {!isAdminView && (
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => { onHomeClick(); window.scrollTo(0,0); }} className="text-slate-600 hover:text-primary-500 font-medium transition-colors">Home</button>
              <a href="#courses" onClick={onHomeClick} className="text-slate-600 hover:text-primary-500 font-medium transition-colors">Courses</a>
              <a href="#" onClick={onHomeClick} className="text-slate-600 hover:text-primary-500 font-medium transition-colors">About Us</a>
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
            <button 
              onClick={onAdminClick}
              className="hidden md:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-2.5 rounded-full font-medium transition-all"
            >
              Back to Site
            </button>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-primary-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {!isAdminView ? (
              <>
                <button onClick={() => { onHomeClick(); setIsMenuOpen(false); window.scrollTo(0,0); }} className="w-full text-left px-3 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">Home</button>
                <a href="#courses" onClick={() => { onHomeClick(); setIsMenuOpen(false); }} className="block px-3 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">Courses</a>
                <a href="#" onClick={() => { onHomeClick(); setIsMenuOpen(false); }} className="block px-3 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">About Us</a>
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
                  className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-medium shadow-sm"
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
