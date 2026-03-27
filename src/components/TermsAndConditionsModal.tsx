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
      
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-900">Terms and Conditions</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="text-black [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_a]:text-primary-600 hover:[&_a]:text-primary-700 [&_a]:underline">
            
            <p className="mt-0">At Twig Services Limited we believe in transparency and try to set terms out for our services, as clearly and in a ‘jargon-free’ way as possible, however, if you should have any queries, please do not hesitate to contact us at <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a>.</p>

            <ol>
              <li>Terms and Conditions</li>
              <li>Who we are</li>
              <li>Insurance Introduction Services</li>
              <li>The Ordering of Goods or Services Process</li>
              <li>The Delivery of Goods & Services Process</li>
              <li>The Goods and Services</li>
              <li>Downloadable e-Learning Software Licences</li>
              <li>Copyright Information</li>
              <li>Pricing and payment of Goods or Services Process</li>
              <li>Refund Policy</li>
              <li>Liabilities</li>
              <li>Data protection and Personal information</li>
              <li>Debit/Credit Card Payment Processes</li>
              <li>Communicating with Twig Services Limited</li>
              <li>Uncontrollable Events</li>
              <li>e-Learning</li>
              <li>Assignments</li>
              <li>General Terms and Conditions</li>
            </ol>

            <h2>Terminologies</h2>
            <p>You (the “Policyholder”/ “Customer”/ “Client” “you” / “your”) must agree to these terms and conditions (the “Terms”) before ordering from Twig Services Limited (“we” “us” ” Twig Services” “Twig Services Limited”).</p>
            <p>By confirming your order of our e-Learning Services, through PayPal, on our website or through communications with our offices, you are agreeing with all the Terms. By utilising our insurance introduction services, you are agreeing with all the Terms. You should read these Terms and satisfy yourself that you are happy before continuing with placing an order or using our services, as they contain important information that could affect your decision in making a purchase or utilising our services.</p>
            <p>Contract as set out and intended in clause 4.E</p>
            <p>Goods otherwise known as services or goods purchased by you in relation with the contract;</p>
            <p>Website refers to the Twig Services Limited website which can be reached at https://twigservices.co.uk/; and</p>
            <p>Working Day in this instance means a day (other than a Saturday, Sunday, or public holiday) and when banks in UK are normally open for business.</p>

            <h2>1. Terms and Conditions</h2>
            <p>1.A Subject to any differences under clause 1.C the contract (as set-out below) shall be as per these Terms and the Privacy Policy (see separate Privacy Page on our website) and exclusion of all other terms and conditions, including any terms or conditions which you think should apply under any orders which may include the likes of a purchase order, confirmation of order, specification, or other documentation.</p>
            <p>1.B Therefore, no terms or conditions endorsed, delivered, or contained in any orders which may include the likes of your confirmation order, purchase order, or other documentation or specification request shall form part of the Contract simply because of such documentation being referred to as a part of the contract.</p>
            <p>1.C These Terms apply to all Twig Services Limited sales of services or goods to you and any differences to these Terms and any representations about the services or goods will categorically have no effect unless an agreement in writing has been received and signed by a director of Twig Services Limited. You therefore and hereby acknowledge that you have understood and will not rely upon any statement, promise or representation made or given by or on behalf of Twig Services Limited which is not explained in the contract.</p>

            <h2>2. Who we are</h2>
            <p>Twig Services Limited you can contact us as shown by the various methods below; –</p>
            <p>2.A By Post Twig Services Limited,<br/>South Suffolk Business Centre<br/>Alexandra Road<br/>Sudbury<br/>Suffolk CO10 2ZX</p>
            <p>2.B By Telephone 01787 471 007</p>
            <p>2.C You can email us at <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a></p>
            <p>2.D Key contacts -Managing Director – Thomas West</p>

            <h2>3. Insurance Introduction Services</h2>
            <p>3.A By utilising our insurance introduction services, as set out and intended in clauses 3.B, C, D, E, F, you are agreeing with all the Terms.</p>
            <p>3.B Twig Services Limited are non-regulated by the Financial Conduct Authority and are therefore not authorised to give advice on insurance products but are permitted as an Insurance Introduction Company to introduce you to or pass your contact details, upon request and including a verbal agreement or conversation, to regulated experts in the fields of insurance that you require.</p>
            <p>3.C Twig Services Limited will never ask you to pay any monies to us for any of its insurance introductions as the relationship will be exclusively between you the policyholder/client/customer and our recommended agent/intermediary.</p>
            <p>3.D Twig Services Limited will not be held responsible should any discrepancies arise with any of your insurance products that you arrange directly through our recommended agent/intermediary. This is because we are not permitted or trained as an Insurance Introduction Company to give you insurance advice and can only point you in the direction and introduce you to regulated experts in the fields of insurance that you require.</p>
            <p>3.E Our insurance experts that we may introduce to you may have privacy practices that differ from ours. If you submit personal information to any of those third-party companies directly, your information is governed by their privacy policies.</p>
            <p>3.F Any insurance documentation that you inadvertently pass to us and which may have been intended for one of our intermediaries, for instance, for the purposes of obtaining a quotation, we will forward on to the intermediary on your behalf.</p>

            <h2>4. The Ordering of Goods or Services Process</h2>
            <p>4.A Both our privacy and cookies policy (please see our separate “Privacy Policy Page”) displays the terms and conditions on how we may use any personal data that we either collect from you, or that you furnish us with. When you utilise our site, you are consenting to these practices and you confirm that all data and information you provide is accurate and sets out information regarding the use of cookies on our site.</p>
            <p>4.B Any order you wish to place, or acceptance of a quotation provided to you for goods or services from Twig Services Limited shall be deemed as an offer by you to pay for goods or services subject to these conditions.</p>
            <p>4.C Any order you place will be only be deemed to be accepted by Twig Services Limited when a written acknowledgement for the order is dispatched by Twig Services Limited or earlier if Twig Services Limited despatches the goods or services to you.</p>
            <p>4.D You should always ensure that the terms and conditions of your order and any additional specifications are accurate, complete, and to your satisfaction.</p>
            <p>4.E Any written quotations provided by Twig Services Limited are only valid for a 30 days period of its date and subject to Twig Services Limited not previously withdrawing its offer.</p>
            <p>4.F Any written quotations, invoices or commencement of services provided directly by Twig Services Limited will either be confirmed by a ‘durable medium’ format such as by email, PDF or in writing, via the post. Alternatively, it may be provided in a way appropriate to the means of communication, so verbally, for example, if the contract was made by phone. Confirmation of the contract, will be accessible, upon request, if the information wasn’t initially provided in a ‘durable’ form, at the point of sale.</p>
            <p>4.G Your recorded instructions asking us to proceed with the services will suffice to commence with your contract and a ‘durable medium’ statement will be read out to you, of which you will need to agree with, if you need your services to commence within the 14 day ‘cooling off’ period. Alternatively, you will need to print out, sign, date the ‘Durable Medium Declaration’ which is contained within a PDF quotation and return to us by email, fax or via the post along with a copy the quotation that you wish to accept. We will also require a signed and completed ‘MOU’ (Memorandum of Understanding) Agreement which will also be contained within a PDF quotation to commence with any ‘unlimited Use’ (Full access) subscription plan. Scanned or photographed copies of the documentation will be accepted.</p>
            <p>4.H The minimum of 12 months services will apply on early termination of the services for any ‘unlimited Use’ (Full access) subscription plans. and any ‘cooling off’ rights will be forfeited, once the e-Learning software has been downloaded. The contract does not cover usage by any subsidiary company or resale of the courses unless authorised by Twig Services Limited and should Twig Services Limited not receive written cancellation within 9 months of the agreement, the contract will roll over for a further 12 month term on the same terms and will continue to roll over in this manner. This will be reviewed every 12 months from the system delivery date and will also apply to early termination of the agreement. For 3 and 5 year ‘unlimited Use’ (Full access) subscription plans different rollover and review time frames will be shown within the ‘MOU’ (Memorandum of Understanding) Agreement</p>

            <h2>5. The Delivery of Goods or services</h2>
            <p>5.A Unless a specific and special agreement has been set-up, the following delivery terms apply: For any orders that we receive before 18:00 weekdays (Monday-Friday), the requested Goods or Services will normally be set-up by the end of the next Working Day (18:00 hours). If you have not received the email notification from Twig Services Limited regarding the setting up or completed set-up of your goods and services within 3 Working Days, please get in contact with us.</p>
            <p>5.B If you have requested a specific and special delivery arrangement which may differ from above, you will be notified at the time of placing your order, or at a proximity, close to the time of you placing your order.</p>
            <p>5.C You have consumer rights to cancel your order without quibbles, payment, or obligation, at any given time prior to your order being dispatched to you.</p>
            <p>5.D If you wish to proceed with our quotation and need the services to commence within the 14 day ‘cooling off’ period, we will require payment along with confirmation that you are happy to waiver your rights to cancel your contract within this period. Your services will commence automatically after the 14 ‘cooling off’ period has elapsed, if you do not need the services to start during this time. The 14 day ‘cooling off’ period starts from when you made your payment to us to place your order or from when you receive your goods or services. Your goods or services will be supplied to you on or around the date that you instruct us to commence with your contract.</p>
            <p>5.E Upon receipt of your payment by debit/credit card payments over the phone or BACS to proceed with our goods and services, as outlined within this contract, you will be authorised to allocate the Licences to your staff from your administration portal, which will be created for you.</p>

            <h2>6. The Goods and Services</h2>
            <p>6.A Goods or services are always subject to availability and because of continuous improvements and updating of products, specifications or designs the content of the services may vary from that displayed.</p>
            <p>6.B The onus is on you to ensure that the suitability of the goods and Services being offered is satisfactory for your purposes prior to making the purchase the goods or services.</p>
            <p>6.C Twig Services Limited will provide a fully functioning version of the online learning materials for its clients to give licences to its employees for the use of the course material based on the commercial model set out below.</p>
            <p>6.D Twig Services Limited will provide and maintain with timely updates the intellectual content of the courses. This will include all narrative and written content and approval of all audio/visual content.</p>
            <p>6.E Twig Services Limited will provide the production, licensing, customisation, production of content updates, video hosting and technical support.</p>

            <h2>7. Downloadable e-Learning Software Licences</h2>
            <p>7.A The content of our Downloadable e-Learning Software Licences should not constitute advice and may not be relied upon when you make or refrain from making any decisions.</p>
            <p>7.B Subject to clause 12.C, Twig Services Limited will be held liable or accountable to you for any of the following losses which may include; an economic loss, a loss of profit, a loss of business, a loss of revenue, a loss of data or detriment of goodwill or otherwise, whether directly, indirectly or consequentially and including or any additional claims for consequential compensation , which may arise out of, or in connection with the content, purchase and/or download by you of our:</p>
            <ul>
              <li>7.B.1 Downloadable e-Learning Software Licences; and/or</li>
              <li>7.B.2 materials the same as or like the Software e-Learning Downloadable Licences that are not provided or created by Twig Services Limited.</li>
            </ul>

            <h2>8. Copyright Information</h2>
            <p>8.A You hereby also acknowledge and agree that Twig Services Limited and/or its licensors own all intellectual property rights in the goods or services. Except as expressly stated herein, the contract does not grant you any rights to, or in, patents, copyright, database right, trade secrets, trade names, trademarks (whether registered or unregistered), or any other rights or licences in respect of the goods or services.</p>
            <p>8.B Subject to clause 9.B no part of any publication, training materials, Downloadable e-Learning Software Licences, video production or any of Twig Services Limited’s works may be copied, duplicated, or reproduced by you. Furthermore, these works may not be stored in a retrieval or reclamation system or transmitted or conveyed in any form or means such as electronic, photocopying, recording or otherwise without obtaining prior written authorisation and consent from Twig Services Limited.</p>
            <p>8.C Notwithstanding clause 8.B if the goods or services you purchase from us include a Software e-Learning Downloadable Licence trial you shall be permitted to download and use the Downloadable e-Learning Software Licences trial from the Website. All intellectual property rights in such Downloadable e-Learning Software Licences trials, between you and us, shall be owned by us both before and after purchase by you of the Downloadable e-Learning Software Licences trial.</p>
            <p>8.D Any goods or services provided to you to trial are on a preview only basis and must therefore not be used for training purposes and until you purchase such goods or services, and/or they also not permitted to be provided to and/or made accessible to any third party.</p>

            <h2>9. Pricing and Payment of Goods or Services</h2>
            <p>9.A Any goods or services should always be paid for at the point of sale and when you are purchasing the goods or services either via our website or through communications with our offices. Any price that you will asked to pay for the goods or services will always be confirmed prior to you making your purchase the goods or services.</p>
            <p>9.B Any prices for the purchase of our Downloadable e-Learning Software Licences that may be displayed in our emails, newsletters, catalogues, leaflets, and website are in GBP currency, and delivery services are correct at this time of writing. We reserve the right to alter or change the displayed price before any order is placed. Any changing of pricing will be notified to you, always, before you purchase goods or services.</p>
            <p>9.C Goods or services will always remain the property of Twig Services Limited until such times when the payment has been received by Twig Services Limited from you in full and the funds are cleared through our banking system.</p>
            <p>9.D Should you fail to pay Twig Services Limited any payment due to under the contract by a due date for payment, Twig Services Limited reserve the right to charge interest at the higher of either 3% above Barclays Bank plc base rate or the rate as set out in the commercial debts & late payments regulations. Any interest accrued will be on a daily basis from the due date until such times as that the actual payments of overdue amounts settled and are shown as ‘cleared funds’ in our banking system, irrelevant of if before or after judgment. You will pay the interest together with the overdue amount.</p>
            <p>9.E Single or Monthly direct debit payments can be arranged through GoCardless, who are a third party payment collection company. Instalment payments must be maintained to avoid any services provided by Twig Services, from being cancelled. Any default in payments will be notified by email and/or in writing.</p>

            <h2>10. Refund Policy</h2>
            <p>10.A Twig Services Limited refund policies, comply with the ‘consumer contracts regulations’ which came into force on 13/06/2014 and implements the ‘consumers rights directive’ to help protect customers, who make online purchases. The EU Distance Selling Directive (2000) which was a part of UK law, that related to distance selling, previously, under the Consumer Protection Regulations (2000) was abolished on 12/06/2014.</p>
            <p>10.B Consumer Rights, in accordance with the above law, entitles you to cancel your purchase within the 14 day ‘cooling off’ period and during this time, you don’t have to give a reason to cancel your purchase in order receive a refund. If you wish to exercise your rights under the Consumer Contract Regulations, you can do so by informing us of your intentions in writing or by completing the model cancellation form, which can be dispatched to you upon request. Please see section 2. ‘Who we are’ for ways to contact us, which include by email to <a href="mailto:info@twigservices.co.uk">info@twigservices.co.uk</a>. Any refund will be limited to the cost of the Goods purchased.</p>
            <p>10.BB Cancelling Digital Downloads – By downloading our digital e-Learning software Licences, you are acknowledging that you will be immediately forfeiting your rights to cancel your contract for any of the following scenarios;-</p>
            <ul>
              <li>Within a ‘cooling off’ period to purchase our Downloadable e-Learning Software Licences</li>
              <li>When making a Single or Bulk Purchase of our Downloadable e-Learning Software Licences</li>
              <li>When entering into any contractual term to purchase our Downloadable e-Learning Software Licences</li>
            </ul>
            <p>10.C E-Learning Refund & Cancellation Policy If technical problems stop you from accessing the content you have purchased our support team will be trying to help you resolve the problem. You are required to have a functioning internet connection and equipment to enable you to view video files delivered over the internet.</p>
            <p>10.D Refund Conditions All access to the Twig Services e learning website is governed by a unique username and password. The username and password is part of a system which protects the security of the resource and enables Twig Services Limited to monitor usage by any individual. When a refund request is received, Twig Services Limited reserves the right to track the usage by an individual (through his/her username and password) of:</p>
            <ul>
              <li>Specific pages viewed</li>
              <li>Frequency of use</li>
              <li>Time period of use</li>
              <li>Certificates issued</li>
              <li>IP address used</li>
            </ul>
            <p>10.E Twig Services Limited reserves the right not to issue a refund if, upon inspection, the goods or services were found to have been used outside of the contractual terms in any way. No refund will be granted if Twig Services Limited has reason to believe that an individual has viewed any of the information inappropriately, that they purchased. This does not affect your statutory rights.</p>
            <p>10.F Twig Services Limited reserves the right to charge a handling fee (15% of the original fee)</p>

            <h2>11. Liabilities</h2>
            <p>11.A This clause is designed and set-out to confirm Twig Services Limited whole liability to you.</p>
            <p>11.B All of these conditions, warranties and other terms implied by statute or common law (save for the conditions implied by section 12 of the Sale of Goods Act 1979) are, fully endorsed and permitted by law, excluded from the contract.</p>
            <p>11.C Nothing in the following conditions limits or excludes our liability:</p>
            <ul>
              <li>(a) personal injury or death as a result of, or caused by our negligence; or</li>
              <li>(b) if relevant under section 2(3), Consumer Protection Act 1987 or</li>
              <li>(c) for any matter which it would be illegal and unlawful for Twig Services Limited to exclude or attempt to exclude its liability; or</li>
              <li>(d) for fraud or fraudulent misrepresentation.</li>
            </ul>
            <p>11.D Subject to conditions 12.B and 12.C</p>
            <p>11.E Twig Services Limited entire liabilities in contract (including pursuant to an indemnity) wrong doing (including breach of statutory duty or negligence), misrepresentation, reimbursement or otherwise, that may arise in concerning the performance or expected performance of the contract shall be restricted and limited to a maximum sum equivalent to the price paid by you for the goods or services; and</p>
            <p>11.F Twig Services Limited will not be will be held liable or accountable to you for any of the following losses which may include; an economic loss, a loss of profit, a loss of business, a loss of revenue, a loss of data or detriment of goodwill or otherwise, whether directly, indirectly or consequentially and including or any additional claims for consequential compensation or otherwise, in each case whether direct, indirect or consequential, or any claims for consequential compensation whatsoever (however caused) which arise out of or in connection with the Contract.</p>

            <h2>12. Data Protection and Personal Information</h2>
            <p>12.A Please see our separate ‘Privacy Policy page for more clarity on how we use your information and data that we have about you.</p>
            <p>12.B By accepting these terms and conditions, you consent to us holding your personal details. See our separate Privacy Policy page for more information on how we handle your data.</p>
            <p>12.C Any debit or credit card details that we take from you will only be kept for the duration of the transaction for which the card was being supplied and used for only. Once the transaction has been completed to our satisfaction, your debit/credit card information will be deleted and no records of them will be stored or retained electronically or elsewhere.</p>

            <h2>13. Debit/Credit Card Payment Processes</h2>
            <p>13.A PayPal have provided us with the secure debit/credit card processing services platform for this site. PayPal may therefore, have your details transferred to them but will only process any transactions solely for the purposes, you will have instructed.</p>
            <p>13.B Your credit/debit card details will never be passed on, sold, or loaned to any third party, under no circumstances. Any debit/credit card details we receive will only be kept for the duration of the transaction in being processed. Alternatively, if you prefer to not make your payment via this procedure, we will be happy to accept or take your debit/credit card payments over the phone or you can pay by BACS.</p>
            <p>13.C Whenever you attempt to supply any debit/credit card information online, you should ensure firstly, that you have established a secure connection. Please see your browser information including any documentation, which may more information on how to ensure if you are viewing a secure and trustworthy or non-secure and unreliable site.</p>

            <h2>14. Communicating with Twig Services Limited</h2>
            <p>14.A All Contract communications between each party shall be in writing, including by email notification, sent by first-class paid post or by fax or delivered by hand.</p>
            <ul>
              <li>(a) (When communicating with Twig Services Limited) it should always be with its registered office or Twig Services Limited will advise the Customer if the previous stated address has been changed; or</li>
              <li>(b) When Twig Services Limited is communicating with a customer, either to the addressee or registered office of, (if liaising with a company) or (in any other cases) to any address of the customer requested and set out in any documentation which may form a part of the contract or other stated addresses notified to Twig Services Limited by the customer.</li>
            </ul>
            <p>14.B Any communications to Twig Services Limited will normally be considered to be safely received:</p>
            <ul>
              <li>(a) if dispatched by first class paid post, at least two days (excluding Saturdays, Sundays and bank and public holidays) after being posted (based on the day of posting); or</li>
              <li>(b) if delivered by hand to our registered offices, on the day of delivery; or</li>
              <li>(c) if transmitted by fax on a ‘working day’ prior to a 3.00 pm transmission time or otherwise on the next ‘working day’.</li>
            </ul>

            <h2>15. Uncontrollable Events</h2>
            <p>15.A Twig Services Limited reserves the right, if it is prevented from or delayed in the carrying out its business, due to circumstances beyond the reasonable control, to either cancel or defer the date of delivery the Contract or reduce the amount of the Goods or services ordered by you (without any liability to you) Reasons can include, but are not limited to, governmental actions, war or national emergencies, acts of terrorism, acts of God, protests, riots, civil commotions, fire, explosions, flood, epidemics, lock-outs and strikes or other labour disputes (irrelevant if relating to either party’s workforce), or restraints or delays affecting carriers, or an inability or delay in procuring adequate supplies or suitable materials. If the incident in question lasts for a continued period of more than 180 days, you shall be permitted and entitled to give Twig Services Limited notice in writing to terminate the Contract</p>

            <h2>16. e-Learning</h2>
            <p>16.A To utilise and/or access our Downloadable e-Learning Software Licences that Twig Services Limited has agreed to licence to you, you may either;</p>
            <p>16.A.1 Follow the online procedure or our email or written instructions to set up a free trial of the software by completing a registration process and where you will be authorised to ‘test drive’ module 1 from any of the courses on our website for free.</p>
            <p>16.B Any Downloadable e-Learning Software Licences will commence from the date as notified to you by Twig Services Limited and will expire after a 12-month period, once they have been utilised, from when the Downloadable e-Learning Software Licences were issued to you. After this 12-month period has elapsed, you will no longer be able to access the software. If you would like to repurchase any Downloadable e-Learning Software Licences following and expiry of this 12-month period, please contact Twig Services Limited to discuss the repurchase of the Downloadable e-Learning Software Licences which will be at Twig Services Limited sole discretion. Unused Licences do not have expiry date.</p>
            <p>16.C Prior to you contacting Twig Services Limited to purchase our Downloadable e-Learning Software Licences you should always ensure that you are capable and ready to register and install the software.</p>
            <p>16.D All Downloadable e-Learning Software Licences are authorised and permitted for single machine use only unless stated otherwise. If you need more licences for additional machines or users, please contact Twig Services Limited.</p>
            <p>16.E It will be considered a breach of licencing conditions, to attempt, for example to install a single Downloadable e-Learning Software Licences on multiple machines or to fraudulently try to extend any Downloadable e-Learning Software Licences duration which could be construed and considered as a serious copyright infringement.</p>
            <p>16.F Downloadable e-Learning Software Licences can be switched to another category topic, upon Twig Services discretion, if for example, too many of a certain type were purchased. An additional premium may be payable, in these circumstances, if the new Licenses being purchased, were more expensive than the ones being swapped. If Downloadable e-Learning Software Licences are issued for a new employees, who for example, did not commence employment, upon Twig Services discretion, you will be able to reallocate the Licence to a different candidates, so long as no test answers were submitted.</p>

            <h2>17. Assignments</h2>
            <p>17.A Twig Services Limited can assign any part of/or the whole Contract itself to any firm, company, or person.</p>
            <p>17.B You shall not be permitted to assign any part of/or the whole Contract itself to any firm, company, or person prior written consent from Twig Services Limited.</p>

            <h2>18. General Terms & Conditions</h2>
            <p>18.A Each and every right or remedy of Twig Services Limited within the contract is non-prejudicial to any other right or remedy of Twig Services Limited irrelevant if stated under the Contract or not.</p>
            <p>18.B Should any court, tribunal or administrative body of competent jurisdiction find any provision of the contract to be wholly or partly illegal, void, voidable, invalid, unenforceable or unreasonable it shall be interpreted that such illegality, invalidity, void-ness, voidability, unenforceability or unreasonableness be deemed and considered as severable and any remaining contract provisions and the rest of such contract provisions will continue in full force and effect.</p>
            <p>18.C Should Twig Services Limited fail or delay in enforcing or partially enforcing any its contract provisions it should not be interpreted as an abandonment or waiver of any of its contractual rights.</p>
            <p>18.D Should Twig Services Limited waiver by/of any breach of, or any default under, any contract provisions by the customer shall not be deemed as a waiver of any consequent default or breach should categorically not affect the other terms or conditions of the contract.</p>
            <p>18.E Any parties to the contract shall not intend that any term of the contract be enforceable by the contracts (Rights of Third Parties) Act 1999 by any person or persons who are not a party to it.</p>
            <p>18.F This contract shall be governed by English law and the all parties involved shall submit and adhere to the formation, existence, construction, performance, validity, and all aspects of the exclusive jurisdiction of the English courts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
