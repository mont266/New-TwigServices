import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from './firebase';

import Header from './components/Header';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { CourseCategory, Course } from './types';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'All'>('All');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdminView, setIsAdminView] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setIsAdminView(false);
      }
    });

    const q = query(collection(db, 'courses'), orderBy('createdAt', 'desc'));
    const unsubscribeDB = onSnapshot(q, (snapshot) => {
      const coursesData: Course[] = [];
      snapshot.forEach((doc) => {
        coursesData.push({ id: doc.id, ...doc.data() } as Course);
      });
      setCourses(coursesData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching courses: ", error);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeDB();
    };
  }, []);

  const categories: (CourseCategory | 'All')[] = [
    'All',
    'Health & Safety',
    'HR & Business Skills',
    'Health and Social Care'
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        isAdminView={isAdminView} 
        onAdminClick={() => setIsAdminView(!isAdminView)} 
      />
      
      <main className="flex-grow">
        {isAdminView ? (
          <AdminDashboard courses={courses} />
        ) : (
          <>
            <Hero />
            
            {/* Courses Section */}
            <section id="courses" className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Course Catalog</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Browse our comprehensive range of accredited e-learning courses designed to meet your organization's training needs.
                  </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                        activeCategory === category
                          ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                          : 'bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-600 border border-slate-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Course Grid */}
                {loading ? (
                  <div className="flex justify-center items-center py-20">
                    <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                      ))}
                    </div>

                    {filteredCourses.length === 0 && (
                      <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No courses found in this category.</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
