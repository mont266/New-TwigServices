import { useState } from 'react';
import { Course } from '../types';
import { Clock, Award, ArrowRight, X, Play, CheckCircle2, MonitorPlay, FileText, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getEmbedUrl } from '../lib/videoUtils';

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const embedUrl = getEmbedUrl(course.videoUrl);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          {course.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-primary-600 ml-1" />
              </div>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              {course.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {course.title}
          </h3>
          
          <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
            {course.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
              <Award className="w-4 h-4 text-primary-500" />
              <span>{course.cpdUnits} CPD</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-primary-500" />
              <span>{course.totalTime}</span>
            </div>
          </div>

          {/* Footer / Price */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Price</span>
              <span className="text-2xl font-extrabold text-slate-900">£{course.price.toFixed(2)}</span>
            </div>
            
            <div 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors"
              aria-label={`View ${course.title}`}
            >
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Media Section */}
                <div className="w-full bg-slate-100 relative">
                  {embedUrl ? (
                    <div className="relative pt-[56.25%] w-full">
                      <iframe 
                        src={embedUrl}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 sm:h-80 relative">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary-50 text-primary-600 text-sm font-bold px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                    {course.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2">
                      <div className="prose prose-slate max-w-none mb-8">
                        <h3 className="text-lg font-bold text-slate-900 mb-3">About this course</h3>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-wrap space-y-4">
                          {course.description.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar / Features */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-fit">
                      <h3 className="text-base font-bold text-slate-900 mb-4">Course Features</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-slate-900">CPD Certified</p>
                            <p className="text-xs text-slate-500">{course.cpdUnits} CPD Units</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-slate-900">Duration</p>
                            <p className="text-xs text-slate-500">{course.totalTime}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MonitorPlay className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-slate-900">100% Online</p>
                            <p className="text-xs text-slate-500">Learn at your own pace</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Trophy className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-slate-900">Certificate</p>
                            <p className="text-xs text-slate-500">Included upon completion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Footer */}
              <div className="p-6 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col w-full sm:w-auto text-center sm:text-left">
                  <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Course Price</span>
                  <span className="text-3xl font-extrabold text-slate-900">£{course.price.toFixed(2)}</span>
                </div>
                
                <a 
                  href={course.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-colors shadow-sm hover:shadow-md"
                >
                  Purchase Course
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
