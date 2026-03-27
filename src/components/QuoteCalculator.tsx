import { useState } from 'react';
import { Calculator, Users, CreditCard, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const pricingTiers: Record<string, { base: number, max: number }> = {
  "0-10": { base: 1800, max: 10 },
  "11-25": { base: 3000, max: 25 },
  "26-50": { base: 4200, max: 50 },
  "51-100": { base: 5400, max: 100 },
  "101-150": { base: 7200, max: 150 },
  "151-250": { base: 9600, max: 250 },
  "251-500": { base: 14400, max: 500 },
  "501-750": { base: 18000, max: 750 },
  "751-875": { base: 21000, max: 875 },
  "876-1000": { base: 22800, max: 1000 },
  "1001-1500": { base: 26800, max: 1500 },
  "1501-2000": { base: 32000, max: 2000 },
  "2001-2500": { base: 40800, max: 2500 },
  "2501-3000": { base: 44000, max: 3000 },
  "3001-3500": { base: 46000, max: 3500 },
  "3501-4000": { base: 48000, max: 4000 },
  "4001-4500": { base: 51000, max: 4500 },
  "4501-5000": { base: 54000, max: 5000 },
};

export default function QuoteCalculator() {
  const [employees, setEmployees] = useState<string>("0-10");

  const tier = pricingTiers[employees];
  const totalCost = tier.base;
  const costPerEmployee = (totalCost / 12) / tier.max;
  const deposit = totalCost / 2;
  const monthlyPayment = deposit / 11;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(val);

  const handleGetStarted = () => {
    window.dispatchEvent(new CustomEvent('open-callback-modal'));
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"
          >
            <Calculator className="w-4 h-4" />
            Instant Quote
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Calculate Your Training Costs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Get an instant estimate for your organization. We offer flexible pricing plans for teams of all sizes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Your Requirements</h3>
            
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                  <Users className="w-4 h-4 text-primary-500" />
                  Number of Employees
                </label>
                <select 
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                >
                  {Object.keys(pricingTiers).map(range => (
                    <option key={range} value={range}>{range} Employees</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden flex flex-col"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="text-xl font-bold text-white mb-8 relative z-10">Estimated Quote</h3>
            
            <div className="space-y-6 relative z-10 flex-grow">
              <div className="flex justify-between items-end border-b border-slate-700 pb-6">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Total Cost</p>
                  <p className="text-4xl font-extrabold text-white">{formatCurrency(totalCost)}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-slate-300 font-medium">Cost Per Employee / Month</p>
                </div>
                <p className="text-xl font-bold text-white">{formatCurrency(costPerEmployee)}</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-slate-300 font-medium">Initial Deposit</p>
                </div>
                <p className="text-xl font-bold text-white">{formatCurrency(deposit)}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-slate-300 font-medium">11 Monthly Installments</p>
                </div>
                <p className="text-xl font-bold text-white">{formatCurrency(monthlyPayment)}</p>
              </div>
            </div>

            <button 
              onClick={handleGetStarted}
              className="mt-8 w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group relative z-10"
            >
              Request Callback to Proceed
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
