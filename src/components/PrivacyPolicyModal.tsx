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
            
            <h2 className="mt-0">Transparency</h2>
            <p>We believe in transparency around our services and are always endeavouring to try and ensure that our website is as transparent compliant, helpful, user-friendly, responsive and as jargon-free as possible.</p>
            
            <h2>What Does ‘Twig Services Limited’ Do You with My Data?</h2>
            <p>Twig Services Limited respect your privacy and take protecting it seriously.</p>
            <p>We will always hold your information securely and to prevent unauthorised disclosure or access to your information, we have implemented strong physical and electronic security safeguards. We also follow stringent procedures to ensure we work with all personal data in line with the Data Protection Act 1998.</p>
            <p>This Privacy Policy covers our collection, use and disclosure of information that we collate through our website Twig Services Limited and other modes of communication, owned and operated by Twig Services Limited.</p>
            <p>It also describes the choices available to you regarding our use of your personal data and how you can access and update this information.</p>
            <p>The use of information collected through our services shall be limited to the purpose of providing the services for which our clients have engaged us. Collecting this data helps us understand what you are looking from the company, enabling us to deliver improved products and services.</p>
            
            <p>Specifically, we may use data:</p>
            <ul>
              <li>To improve the products and services that Twig Services and Our Partners provide.</li>
              <li>To contact you in response to a specific enquiry.</li>
              <li>To customise our website for you.</li>
              <li>To send you promotional emails or newsletters about products, services, offers and other things that we think might be relevant to you.</li>
              <li>To call you about products, services, offers and other things we think might be relevant to you.</li>
              <li>To contact you via email, telephone or mail for market research reasons.</li>
            </ul>

            <p>Your email address, name, and any other information you provide, such as address and phone number you provide, are held in strictest confidence.</p>
            <p>We do not sell your information to anyone else, but we may transfer personal information to a select few third-party companies that help us provide our services. Transfers to subsequent third parties are covered by the provisions in our Policy.</p>
            <p>We acknowledge that you have the right to access your personal information. An individual who seeks access, or who seeks to correct, amend, or delete inaccurate data, should direct his or her query to our us (the data controller).</p>
            <p>If our client requests that we remove the data, we will respond to their request within 30 business days. If you have any questions about this policy, please email: <a href="mailto:tom@twigservices.co.uk">tom@twigservices.co.uk</a></p>
            <p>Here’s what we do, or more importantly, what we don’t do, with any information you provide to us.</p>

            <h2>Legitimate Interests – GDPR Regulations</h2>
            <p>We have conducted a legitimate interests assessment (LIA) under GDPR regulations and only make contact for legitimate commercial interests only.</p>
            <p>For example, our e-Learning services may help companies and individuals become more compliant with their Health and Safety or HR policies in place or by dealing with our FCA regulated experts that we may introduce for insurances, our clients may enjoy improved terms.</p>

            <h2>Recording Calls</h2>
            <p>Please note that calls may be monitored or recorded for your own protection as well as ours and including, for some of the following reasons; –</p>
            <ul>
              <li>Training purposes</li>
              <li>Quality Monitoring</li>
              <li>Fact verification</li>
              <li>Provide evidence of a business transaction</li>
              <li>Ensure that a business complies with industry standards and regulatory procedures</li>
              <li>See that quality standards or targets are being met</li>
              <li>Protect national security</li>
              <li>Prevent or detect crime</li>
              <li>Investigate the unauthorised use of a telecommunications system, or</li>
              <li>Secure the effective operation of the telecommunications system.</li>
            </ul>
            <p>Under the Data Protection Act, there is a standard right to apply to organisations which hold personal information about you.</p>
            <p>This is known as a ‘subject access request’ (i.e. you’re asking to be sent information about yourself), and it applies to private companies as well as public organisations.</p>

            <h2>Email Introductions or Newsletters from ‘Twig Services Limited’</h2>
            <p>If you wish to subscribe to our newsletter(s) or email introductions, we will use your name and email address to send our newsletters and email introductions, to you.</p>
            <p>If you no longer wish to receive our newsletters, you may follow the unsubscribe instructions contained in each of the communications you receive.</p>

            <h2>Service Emails Relating To ‘Twig Service Limited’</h2>
            <p>We may also send you service related email announcements on rare occasions when it is necessary to do so.</p>
            <p>For instance, if our service is suspended for maintenance, we might send you an email. You do not have an option to opt out of these emails, which are not promotional in nature.</p>

            <h2>For ‘Twig Service Limited’ Customers</h2>
            <p>All account information for our Clients are held in strict confidence. We will only share your personal information with third parties in the ways that are described in this privacy policy.</p>
            <p>We do not sell or share your information with anyone else. We only collect information like your name, email address, mailing address, phone number, and billing information so we can provide the services as described on our website Twig Services Limited.</p>

            <h2>Third Party Service Providers</h2>
            <p>We use other third parties, such as software providers for our e-Learning products & CRM database, insurance intermediaries, Telephone system (VoIP) providers, employment law & fire security firms and direct debit collection or credit card processing companies, to bill you for services or to assist you with the purchasing of goods or services.</p>
            <p>If you have any an enquiry or query about our website, or regarding an order, please email: <a href="mailto:tom@twigservices.co.uk">tom@twigservices.co.uk</a>.</p>
            <p>You can be rest assured that when you sign up for our services, we will only share your personal information, when necessary and only for the purpose for the third party to provide that service.</p>

            <h2>Legal Disclaimer</h2>
            <p>We reserve the right to disclose your personal information as required by law, such as to comply with a subpoena, bankruptcy proceedings or similar legal process, and when we believe that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud and/or to comply with a judicial proceeding, court order, or legal process served on our website.</p>
            <p>In the event we go through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, your personal information will likely be among the assets transferred. You will be notified via email of any such change in ownership or control of your personal information.</p>

            <h2>Personal Information Access Applications</h2>
            <p>Upon request, we will provide you with information about whether we hold any of your personal information.</p>
            <p>If your personal information changes, or if you no longer desire our service, you may correct, update, delete or deactivate it by contacting us at <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a> and we will respond to your request within 30 days.</p>
            <p>We will retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>

            <h2>Security Measures & Provisions</h2>
            <p>The security of your personal information and our Clients’ information is important to us.</p>
            <p>We follow generally accepted standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, we cannot guarantee its absolute security.</p>
            <p>If you have any questions about security on our website, you can contact <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a></p>
            <p>We will never send you an email attachment unless you have specifically requested it and therefore you should not open it, even if it says it has been sent by us (Twig Services Limited) as it may not have been sent by us. We will also never ask you to confirm any of your details by email.</p>

            <h2>The Use of Cookies and Other Tracking Technologies</h2>
            <p>We and our partners, affiliates, or analytics or services providers use technologies, such as cookies, beacons, tags, and scripts, to analyse trends, administer our website, tracking users’ movements around the website, and to gather demographic information about our user base.</p>
            <p>We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis.</p>
            <p>We use cookies for our shopping cart, to remember your settings (e.g., language preference), and for authentication. You can control the use of cookies at the individual browser level. If you reject cookies, you may still use our website, but your ability to use some features or areas of our website may be limited.</p>

            <h2>Usage of HTML 5 & WordPress</h2>
            <p>We use Local Storage such as HTML5 & WordPress to store content information and preferences.</p>
            <p>Third Parties with whom we collaborate to provide certain features on our website or to display advertising based upon your web browsing activity also use HTML 5 and WordPress cookies, to collect and store information. Various browsers may offer their own management tools for removing HTML5 and WordPress cookies.</p>

            <h2>Usage of Log Files</h2>
            <p>As is true of most websites, we gather certain information automatically and store it in log files.</p>
            <p>This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, the files viewed on our site (e.g., HTML pages, graphics, etc.), operating system, date/time stamp, and clickstream data.</p>
            <p>We use this information to analyse trends, administer our website, track visitors’ movements around our website, and gather demographic information about our visitors. We do link this automatically collected data to other information we collect about our website visitors.</p>

            <h2>Client Testimonials</h2>
            <p>We post customer testimonials on our website, which may contain personal information.</p>
            <p>We do obtain our Clients’ consent to post their name along with their testimonial via email prior to posting the testimonial on our website. However, if you wish to request the removal of your testimonial, please email <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a></p>

            <h2>Social Media Tabs & Features</h2>
            <p>Our website includes social media features, such as the Twitter, Vimeo & LinkedIn buttons. These features may collect your IP address and the page you are visiting on our website.</p>
            <p>It may also set a cookie to enable the features to function properly. Social media features are either hosted by a third party or hosted directly on our website. Your interactions with these features are governed by the privacy policy of the company providing it.</p>

            <h2>Connecting with Twig Services Limited Via Social Media Platforms</h2>
            <p>You can connect your account to social media websites using services like Facebook Connect.</p>
            <p>These services will authenticate your identity and provide you the option to share certain personal information with us, such as your name and email address, so you can share messages on these websites.</p>
            <p>Services like Facebook Connect give you the option to post information about your activities on this website to your profile page, allowing you to share with others within your network.</p>

            <h2>Privacy Policy Notification Changes</h2>
            <p>We may update our privacy policy to reflect changes to our information practices.</p>
            <p>If we make any material changes, we will notify you or our client by email (sent to the email address specified in your account) or by means of a notice on our website prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.</p>

            <h2>Links to Other Third-Party Sites</h2>
            <p>Our website may include links to other websites whose privacy practices may differ from ours.</p>
            <p>If you submit personal information to any of those websites, your information is governed by their privacy policies. We encourage you to carefully read the privacy policy of any website you visit. This privacy policy applies only to information collected by our website.</p>

            <h2>Accessible Public Forums & Feedback Buttons</h2>
            <p>Our website offers publicly accessible blogs or community forums. You should be aware that any information you provide in these areas may be read, collected, and used by others who access them.</p>
            <p>To request removal of your personal information from our blog or community forum, <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a>. In some cases, we may not be able to remove your personal information, in which case we will let you know if we are unable to do so and why.</p>
            <p>Our ‘Feedback’ buttons for making service enquiries are only accessed by ‘Twig Service Limited’ staff and are for our own internal use to help improve services.</p>

            <h2>Contacting ‘Twig Service Limited’</h2>
            <p>If you have any questions or suggestions regarding our privacy policy, please contact us via email at <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a> or you can write to Twig Services Limited, South Suffolk Business Centre, Alexandra Road, Sudbury, Suffolk CO10 2ZX.</p>
            
            <p className="text-sm text-slate-500 mt-8">This website privacy policy was updated: 06/03/2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}
