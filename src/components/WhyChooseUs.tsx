import { Users, MonitorPlay, PiggyBank, Award } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Users,
    title: "Learning Management System",
    description: "Our Staff Training Platform is user-friendly and engaging software, which is a mixture of interactive animation and real-life online role play videos and NOT a stereotypical 'voice and/or text with an image' based e-Learning platform!"
  },
  {
    icon: MonitorPlay,
    title: "~150 E-Learning Courses",
    description: "We have more than 150 courses on Health & Safety, HR, Business Skills, Food Safety, Childcare and Health & Social Care to choose from which start from just £15.00 per licence!"
  },
  {
    icon: PiggyBank,
    title: "Cost-Effective Pricing",
    description: "We have unique cost effective pricing plans to suit sole traders or organisations with up to and beyond 5,000 employees! Choose 'unlimited use full access', Pay As You Go, or discounted bulk purchases."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm mb-6"
          >
            <Award className="w-4 h-4" />
            Why Choose Twig?
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            What sets Twig Services apart from the rest?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 text-center shadow-sm"
        >
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            All of the following courses that we offer are 'approved' by prestigious organisations such as <strong className="text-slate-700 font-semibold">IATP, CPD, IIRSM, IFE, ILM, IoH</strong> & <strong className="text-slate-700 font-semibold">IOSH</strong> and are owned by VideoTile Learning Ltd and distributed under licence. "Our <strong className="text-slate-700 font-semibold">ETA</strong> and <strong className="text-slate-700 font-semibold">LASER</strong> Qualifications are examined via VideoTile Learning Ltd".
          </p>
        </motion.div>
      </div>
    </section>
  );
}
