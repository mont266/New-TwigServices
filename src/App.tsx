import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from './firebase';

import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { CourseCategory, Course } from './types';
import { Loader2, Search } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('A-Z');
  const [visibleCount, setVisibleCount] = useState(6);
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

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory, searchQuery]);

  const categories: (CourseCategory | 'All')[] = [
    'All',
    'Health & Safety',
    'HR & Business Skills',
    'Health and Social Care'
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'A-Z': return a.title.localeCompare(b.title);
      case 'Z-A': return b.title.localeCompare(a.title);
      case 'Price: Low to High': return a.price - b.price;
      case 'Price: High to Low': return b.price - a.price;
      default: return 0;
    }
  });

  const isSearching = searchQuery.trim().length > 0;
  const displayedCourses = isSearching ? filteredCourses : filteredCourses.slice(0, visibleCount);

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
            <WhyChooseUs />
            
            {/* Courses Section */}
            <section id="courses" className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Course Catalog</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Browse our comprehensive range of accredited e-learning courses designed to meet your organization's training needs.
                  </p>
                </div>

                {/* Search and Sort */}
                <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search courses by title or description..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all shadow-sm"
                    />
                  </div>
                  <div className="sm:w-64 flex-shrink-0 relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="block w-full pl-4 pr-10 py-3 border border-slate-200 rounded-xl leading-5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all shadow-sm cursor-pointer appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                    >
                      <option value="A-Z">Alphabetical (A-Z)</option>
                      <option value="Z-A">Alphabetical (Z-A)</option>
                      <option value="Price: Low to High">Price (Low to High)</option>
                      <option value="Price: High to Low">Price (High to Low)</option>
                    </select>
                  </div>
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
                      {displayedCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                      ))}
                    </div>

                    {!isSearching && filteredCourses.length > visibleCount && (
                      <div className="mt-12 text-center">
                        <button
                          onClick={() => setVisibleCount(prev => prev + 6)}
                          className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:text-primary-600 transition-colors shadow-sm"
                        >
                          Load More Courses
                        </button>
                      </div>
                    )}

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
