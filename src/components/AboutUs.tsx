import { motion } from 'motion/react';
import { Users } from 'lucide-react';

export default function AboutUs() {
  const team = [
    {
      name: 'Tom West',
      role: 'Managing Director',
      image: '/images/tom.png',
      bio: 'As Managing Director, Tom has found a match made in heaven (yet another cliché!). He takes great pleasure in making customers \'happy bunnies\' through state-of-the-art, interactive video training. With tailor-made discounted packages, he helps companies maximize efficiency and keep training costs low. When he isn\'t reminiscing about the days he could watch his beloved Chelsea play second-division football for a grand total of £1.00, he is ready to help. Tom welcomes enquiries for companies up to 5,000 employees and beyond, provided you can put up with the odd cliché!'
    },
    {
      name: 'Annie Cooper',
      role: 'Operations Director',
      image: '/images/annie.png',
      bio: 'Annie is the steady rock of Twig Services, bringing extensive SME and HR experience to keep everything running in \'ship-shape Bristol Fashion\'. Don\'t let her soft exterior fool you - she rules the office with an \'iron fist\' (even the directors are wary!). If you have issues, Annie will gladly \'crack a whip\' to resolve them, though we\'d advise against asking for discounts if she\'s had a bad morning. Outside work, she\'s an avid cook, summer gardener (she "hibernates like an angry bear" all winter), and a DIY enthusiast who proudly claims she\'s better at it than most!'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-semibold text-sm mb-6"
          >
            <Users className="w-4 h-4" />
            About Us
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Meet the Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Get to know the dedicated professionals behind Twig Services who are committed to your training success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary-50 dark:border-primary-900/30 group-hover:border-primary-500 transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
