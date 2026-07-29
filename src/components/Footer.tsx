import { useState, useEffect } from 'react';
import Logo from './Logo';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsAndConditionsModal from './TermsAndConditionsModal';
import GdprComplianceModal from './GdprComplianceModal';
import { CourseCategory } from '../types';
import { Facebook, Instagram, Twitter, Linkedin, Video } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
  onCategorySelect?: (category: CourseCategory) => void;
}

export default function Footer({ onAdminClick, onCategorySelect }: FooterProps) {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isGdprModalOpen, setIsGdprModalOpen] = useState(false);

  useEffect(() => {
    if (isPrivacyModalOpen || isTermsModalOpen || isGdprModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPrivacyModalOpen, isTermsModalOpen, isGdprModalOpen]);

  const handleAdminLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAdminClick) {
      try {
        const { auth, loginWithGoogle } = await import('../firebase');
        if (!auth.currentUser) {
          await loginWithGoogle();
        }
        onAdminClick();
      } catch (error: any) {
        if (error.code === 'auth/unauthorized-domain') {
          alert('Firebase Auth Error: This domain is not authorized. Please add the app URL to your Firebase Console under Authentication -> Settings -> Authorized domains.');
        } else if (error.code === 'auth/popup-closed-by-user') {
          // Ignore, user just closed it
        } else {
          alert('Failed to sign in: ' + (error.message || 'Unknown error'));
        }
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Your trusted partner for premium e-learning. We provide accredited courses to help your workforce stay compliant, safe, and skilled.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1Gaog5iDvW/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/twig.services?igsh=MWdyNTJ0b2ZzaDB0cQ==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/TwigServicesLtd?t=Bw7Swo79XPRp-tk-e3VIVg&s=09" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/twig-services-ltd/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://vimeo.com/user72522235" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="Vimeo">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); onCategorySelect?.('Health & Safety'); }} className="hover:text-primary-400 transition-colors">Health & Safety</a></li>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); onCategorySelect?.('HR & Business Skills'); }} className="hover:text-primary-400 transition-colors">HR & Business Skills</a></li>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); onCategorySelect?.('Health and Social Care'); }} className="hover:text-primary-400 transition-colors">Health and Social Care</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary-400 transition-colors">Contact</a></li>
              <li>
                <a 
                  href="/course-information.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Course Information PDF
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setIsTermsModalOpen(true)} 
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsPrivacyModalOpen(true)} 
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsGdprModalOpen(true)} 
                  className="hover:text-primary-400 transition-colors"
                >
                  GDPR Compliance
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p 
            onDoubleClick={handleAdminLogin}
            className="cursor-default select-none"
          >
            &copy; {new Date().getFullYear()} Twig Services. All rights reserved.
          </p>
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
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsAndConditionsModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      <GdprComplianceModal 
        isOpen={isGdprModalOpen} 
        onClose={() => setIsGdprModalOpen(false)} 
      />
    </footer>
  );
}
