import { X } from 'lucide-react';

interface GdprComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GdprComplianceModal({ isOpen, onClose }: GdprComplianceModalProps) {
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
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">GDPR Compliance Statement</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="text-slate-700 dark:text-slate-300 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-primary-600 dark:[&_a]:text-primary-400 hover:[&_a]:text-primary-700 dark:hover:[&_a]:text-primary-300 [&_a]:underline">
            
            <p className="mt-0">TWIG SERVICES LIMITED is committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, which together form the UK’s data protection framework. These laws govern how personal data must be collected, used, stored, and protected. <a href="https://www.gov.uk/data-protection" target="_blank" rel="noopener noreferrer">GOV.UK</a></p>
            <p>We take data protection seriously and ensure that all personal data is handled lawfully, fairly, and transparently in accordance with the data protection principles set out by the Information Commissioner’s Office (ICO). <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">ICO.org.uk</a></p>

            <h2>1. Our Commitment to Data Protection</h2>
            <p>We follow the seven core principles of UK GDPR, ensuring that personal data is:</p>
            <ul>
              <li>Used lawfully, fairly, and transparently</li>
              <li>Collected for specific, explicit, and legitimate purposes</li>
              <li>Limited to what is necessary</li>
              <li>Accurate and kept up to date</li>
              <li>Stored only as long as necessary</li>
              <li>Processed securely</li>
              <li>Handled with accountability at all times</li>
            </ul>

            <h2>2. Lawful Basis for Processing</h2>
            <p>We process personal data only where a lawful basis exists, including:</p>
            <ul>
              <li>Contractual necessity — to deliver our e-learning services</li>
              <li>Legitimate interests — to operate and improve our business</li>
              <li>Legal obligations — such as accounting and compliance requirements</li>
            </ul>
            <p>These lawful bases are defined under UK GDPR and ICO guidance.</p>

            <h2>3. Data Subject Rights</h2>
            <p>Under UK GDPR, individuals have the right to:</p>
            <ul>
              <li>Be informed</li>
              <li>Access their data</li>
              <li>Rectify inaccuracies</li>
              <li>Request erasure (where applicable)</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Rights related to automated decision-making and profiling</li>
            </ul>
            <p>These rights are set out in UK GDPR and explained by the ICO. We respond to all valid requests within the statutory timeframe.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect personal data against:</p>
            <ul>
              <li>Unauthorised access</li>
              <li>Loss</li>
              <li>Destruction</li>
              <li>Damage</li>
              <li>Cybersecurity threats</li>
            </ul>
            <p>This aligns with ICO guidance on data security and breach prevention.</p>

            <h2>5. Data Retention</h2>
            <p>We retain personal data only for as long as necessary for:</p>
            <ul>
              <li>Service delivery</li>
              <li>Legal and accounting obligations</li>
              <li>Support and operational purposes</li>
            </ul>
            <p>After this, data is securely deleted in line with UK GDPR storage limitation principles.</p>

            <h2>6. Data Sharing &amp; Third Parties</h2>
            <p>We only share data with trusted third-party providers where necessary to deliver our services (e.g., hosting, payment processing). All third parties are contractually required to comply with UK GDPR.</p>
            <p>We do not sell or trade personal data.</p>

            <h2>7. International Data Transfers</h2>
            <p>If personal data is transferred outside the UK, we ensure appropriate safeguards are in place, such as:</p>
            <ul>
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>UK International Data Transfer Agreements (IDTAs)</li>
            </ul>
            <p>These safeguards are required under UK GDPR.</p>

            <h2>8. Accountability &amp; Governance</h2>
            <p>We maintain internal policies, staff training, and documentation to demonstrate compliance, in line with ICO accountability requirements.</p>

            <h2>9. Contact Information</h2>
            <p>If you have any questions about this GDPR Compliance Statement or how we process personal data, please contact:</p>
            <p>TWIG SERVICES LIMITED<br />
            Support Hours: Monday–Friday, 9am–5pm<br />
            Support Channels: Email <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a> & Phone 01787 471007</p>

          </div>
        </div>
      </div>
    </div>
  );
}
