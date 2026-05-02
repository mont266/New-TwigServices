import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Privacy Policy</h2>
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
            
            <p className="mt-0">TWIG SERVICES LIMITED (“we”, “us”, “our”) is committed to protecting the privacy of our business customers and users. This Privacy Policy explains how we collect, use, store, and protect personal data in accordance with UK GDPR and the Data Protection Act 2018.</p>
            <p>We provide e-learning services exclusively to business customers, and all data processing is carried out for legitimate business purposes.</p>

            <h2>1. Who We Are</h2>
            <p>TWIG SERVICES LIMITED<br />
            South Suffolk Business Centre, Alexandra Road, Sudbury, Suffolk CO10 2ZX<br />
            Support Hours: Monday–Friday, 9am–5pm<br />
            Support Channels: Email <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a> & Phone 01787 471007</p>
            <p>We act as the Data Controller for the personal data we collect.</p>

            <h2>2. What Personal Data We Collect</h2>
            <p>We only collect the information necessary to deliver our services effectively. This may include:</p>

            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.1 Business Contact Information</p>
            <ul>
              <li>Name</li>
              <li>Job title</li>
              <li>Business email address</li>
              <li>Business phone number</li>
              <li>Company name</li>
              <li>Company address</li>
            </ul>

            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.2 Account & Licence Information</p>
            <ul>
              <li>Usernames</li>
              <li>Login activity</li>
              <li>Licence allocations</li>
              <li>Course progress (if applicable)</li>
            </ul>

            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.3 Billing Information</p>
            <ul>
              <li>Purchase orders</li>
              <li>Invoices</li>
              <li>Payment confirmations</li>
            </ul>

            <p className="font-semibold text-slate-900 dark:text-white mt-6">2.4 Technical Information</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage logs (for security and fair-usage monitoring)</li>
            </ul>
            <p>We do not collect unnecessary personal data.</p>

            <h2>3. How We Use Your Data</h2>
            <p>We process data only for legitimate business purposes, including:</p>
            <ul>
              <li>Providing access to e-learning licences</li>
              <li>Managing customer accounts</li>
              <li>Delivering support</li>
              <li>Processing payments and invoices</li>
              <li>Monitoring fair usage</li>
              <li>Improving our services</li>
              <li>Communicating important service updates</li>
            </ul>
            <p>We do not use your data for marketing unless you explicitly opt in.</p>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process data under the following lawful bases:</p>
            <ul>
              <li>Contractual necessity — to deliver the services you purchase</li>
              <li>Legitimate interests — to operate and improve our business</li>
              <li>Legal obligation — for accounting and compliance purposes</li>
            </ul>
            <p>We do not rely on consent for core service delivery.</p>

            <h2>5. How We Store & Protect Your Data</h2>
            <p>We take data security seriously. Measures include:</p>
            <ul>
              <li>Secure servers</li>
              <li>Encrypted data transmission</li>
              <li>Access controls</li>
              <li>Regular security monitoring</li>
              <li>Staff confidentiality obligations</li>
            </ul>
            <p>We never sell or trade your data.</p>

            <h2>6. Sharing Your Data</h2>
            <p>We only share data when necessary to deliver our services, such as:</p>
            <ul>
              <li>Secure hosting providers</li>
              <li>Payment processors</li>
              <li>IT support partners</li>
            </ul>
            <p>All third-party providers are GDPR-compliant and only process data under our instruction.</p>
            <p>We do not share data with advertisers or unrelated third parties.</p>

            <h2>7. International Transfers</h2>
            <p>If data is transferred outside the UK, we ensure appropriate safeguards are in place, such as:</p>
            <ul>
              <li>UK GDPR-approved Standard Contractual Clauses</li>
              <li>Adequacy decisions</li>
            </ul>

            <h2>8. Data Retention</h2>
            <p>We retain data only for as long as necessary:</p>
            <ul>
              <li>Account and licence data: while your business account is active</li>
              <li>Billing records: 6 years (legal requirement)</li>
              <li>Support communications: up to 24 months</li>
            </ul>
            <p>After this, data is securely deleted.</p>

            <h2>9. Your Rights Under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion (where applicable)</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
            </ul>
            <p>To exercise any rights, contact us using the details at the bottom of this page.</p>

            <h2>10. Cookies</h2>
            <p>Our website may use cookies to:</p>
            <ul>
              <li>Improve functionality</li>
              <li>Analyse performance</li>
              <li>Enhance user experience</li>
            </ul>
            <p>You can disable cookies in your browser settings at any time.</p>

            <h2>11. Children’s Data</h2>
            <p>We do not provide services to consumers or children. We do not knowingly collect data relating to individuals under 18.</p>

            <h2>12. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The latest version will always be available on our website.</p>

            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle data, please contact:</p>
            <p>TWIG SERVICES LIMITED<br />
            Support Hours: Monday–Friday, 9am–5pm<br />
            Support Channels: Email <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a> & Phone 01787 471007</p>
          </div>
        </div>
      </div>
    </div>
  );
}
