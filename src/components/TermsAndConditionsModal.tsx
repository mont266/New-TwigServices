import { X } from 'lucide-react';

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsAndConditionsModal({ isOpen, onClose }: TermsAndConditionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Terms and Conditions</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="text-slate-700 dark:text-slate-300 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_a]:text-primary-600 dark:[&_a]:text-primary-400 hover:[&_a]:text-primary-700 dark:hover:[&_a]:text-primary-300 [&_a]:underline">
            
            <p className="mt-0">Welcome to TWIG SERVICES LIMITED. We provide digital e-learning services exclusively to business customers. By using our website or placing an order, you agree to the terms set out on this page.</p>

            <h2>1. Business-to-Business (B2B) Notice</h2>
            <p>TWIG SERVICES LIMITED supplies services only to businesses, organisations, and professional users.</p>
            <p>Because this is a B2B service:</p>
            <ul>
              <li>Consumer cancellation rights do not apply</li>
              <li>No cooling-off period applies</li>
              <li>Digital content is non-refundable once supplied</li>
              <li>Licences are non-transferable</li>
              <li>The Consumer Contracts Regulations 2013 do not apply</li>
            </ul>
            <p>All purchases are governed by UK B2B commercial law.</p>

            <h2>2. Business Terms & Conditions</h2>
            <p>By placing an order, you agree to the TWIG SERVICES LIMITED Business Terms & Conditions, including:</p>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.1 Contract Formation</p>
            <p>A contract is formed when you accept our quotation or invoice and complete payment or issue a valid purchase order.</p>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.2 Digital Content Delivery</p>
            <p>E-learning licences are delivered electronically and may be activated immediately upon payment.</p>
            <p>Delivery is considered complete once access credentials or licence keys are issued.</p>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.3 No Refunds</p>
            <p>Digital content is non-refundable once supplied. This includes:</p>
            <ul>
              <li>Single licences</li>
              <li>Bulk licences</li>
              <li>PAYG licences</li>
              <li>Subscription licences</li>
            </ul>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.4 Licence Restrictions</p>
            <p>Licences are:</p>
            <ul>
              <li>Non-transferable</li>
              <li>For authorised users only</li>
              <li>Not to be shared, copied, or redistributed</li>
            </ul>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.5 Subscription Auto-Renewal</p>
            <p>Subscription plans renew automatically unless cancelled in writing at least 120 days before the renewal date.</p>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.6 Intellectual Property</p>
            <p>All e-learning content, software, and materials remain the intellectual property of TWIG SERVICES LIMITED.</p>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.7 Reseller Restrictions</p>
            <p>You may not resell, redistribute, or commercially exploit any licences or content without written permission.</p>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.8 Fair Usage</p>
            <p>We may suspend access if licences are misused or shared unlawfully.</p>
            
            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.9 Termination</p>
            <p>We may terminate access if:</p>
            <ul>
              <li>You breach these terms</li>
              <li>Payment is not received for subscription renewals</li>
              <li>Licences are misused</li>
            </ul>

            <h2>3. Privacy & GDPR</h2>
            <p>TWIG SERVICES LIMITED complies with UK GDPR.</p>
            <p>We collect and process data only for:</p>
            <ul>
              <li>Service delivery</li>
              <li>Account management</li>
              <li>Technical support</li>
              <li>Billing and invoicing</li>
            </ul>
            <p>We do not sell or share your data with third parties.</p>
            <p>For full details, please refer to our Privacy Policy.</p>

            <h2>4. Cookie Notice</h2>
            <p>Our website may use cookies to:</p>
            <ul>
              <li>Improve functionality</li>
              <li>Analyse website performance</li>
              <li>Enhance user experience</li>
            </ul>
            <p>You can disable cookies in your browser settings at any time.</p>

            <h2>5. Support Information</h2>
            <p>Our support team is available:</p>
            <ul>
              <li>Monday–Friday, 9am–5pm</li>
              <li>By email and phone</li>
            </ul>
            <p>We’re here to help with onboarding, access issues, and general enquiries.</p>

            <h2>6. Contact Details</h2>
            <p>TWIG SERVICES LIMITED<br />
            Support Hours: Monday–Friday, 9am–5pm<br />
            Support Channels: Email <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a> & Phone 01787 471007</p>

            <h2>7. Governing Law</h2>
            <p>All services and agreements are governed by the laws of England and Wales. Any disputes will be handled exclusively by the courts of England and Wales.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
