import { useState } from 'react';
import { Menu, X, BookOpen, Shield } from 'lucide-react';
import { loginWithGoogle, auth } from '../firebase';

interface HeaderProps {
  onAdminClick: () => void;
  isAdminView: boolean;
}

export default function Header({ onAdminClick, isAdminView }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = async () => {
    if (!auth.currentUser) {
      await loginWithGoogle();
    }
    onAdminClick();
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => !isAdminView && window.scrollTo(0,0)}>
            <div className="bg-primary-500 text-white p-2 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl text-slate-800 tracking-tight">
              Twig <span className="text-primary-500">Services</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          {!isAdminView && (
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-slate-600 hover:text-primary-500 font-medium transition-colors">Home</a>
              <a href="#courses" className="text-slate-600 hover:text-primary-500 font-medium transition-colors">Courses</a>
              <a href="#" className="text-slate-600 hover:text-primary-500 font-medium transition-colors">About Us</a>
              <a href="#" className="text-slate-600 hover:text-primary-500 font-medium transition-colors">Contact</a>
              <button 
                onClick={handleLogin}
                className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <Shield className="w-4 h-4" />
                Admin Login
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
                <a href="#" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">Home</a>
                <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">Courses</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">About Us</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">Contact</a>
                <div className="pt-4">
                  <button 
                    onClick={() => { handleLogin(); setIsMenuOpen(false); }}
                    className="w-full flex justify-center items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-medium shadow-sm"
                  >
                    <Shield className="w-4 h-4" />
                    Admin Login
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
    </header>
  );
}
