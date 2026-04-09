import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Verified Customer",
    title: "Great value e-learning service...",
    text: "Great value e-learning service for our company. The courses are comprehensive and the platform is very user-friendly.",
  },
  {
    id: 2,
    author: "Verified Customer",
    title: "Great company to deal with",
    text: "Great company to deal with. The whole process from onboarding to getting our staff trained was seamless.",
  },
  {
    id: 3,
    author: "Verified Customer",
    title: "Tom is always a pleasure...",
    text: "Tom is always a pleasure to deal with. Excellent customer service and always quick to respond to any questions.",
  }
];

export default function TrustpilotReviews() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <span className="text-2xl font-bold text-slate-900">Great</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className={`${star <= 4 ? 'bg-[#00b67a]' : 'bg-[#dcdce6]'} p-1 rounded-sm`}>
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 flex items-center justify-center gap-1"
          >
            Based on reviews on <span className="font-bold text-slate-900 flex items-center gap-1 ml-1"><Star className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" /> Trustpilot</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="bg-[#00b67a] p-0.5 rounded-sm">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg leading-tight">"{review.title}"</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {review.text}
              </p>
              <div className="font-medium text-slate-900 text-sm">
                {review.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
