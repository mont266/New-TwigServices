import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestCallbackModal({ isOpen, onClose }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
              <p className="text-slate-600 mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
              <button 
                onClick={onClose} 
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Callback</h3>
              <p className="text-slate-600 mb-6">Fill out the form below and we'll be in touch to discuss your training needs.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4" name="request-callback" data-netlify="true">
                <input type="hidden" name="form-name" value="request-callback" />
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                    placeholder="john@company.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    name="phone" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                    placeholder="+44 1234 567890" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Number of Employees</label>
                  <select 
                    required 
                    name="employees" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="1-10">1 - 10 employees</option>
                    <option value="11-50">11 - 50 employees</option>
                    <option value="51-200">51 - 200 employees</option>
                    <option value="201-500">201 - 500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                
                <button 
                  disabled={isSubmitting} 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-xl transition-colors mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Request Callback'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
