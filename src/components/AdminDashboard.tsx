import { useState, useEffect, useRef } from 'react';
import { collection, addDoc, deleteDoc, doc, serverTimestamp, getDocFromServer, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, logout, storage } from '../firebase';
import { Course, CourseCategory } from '../types';
import { Trash2, Plus, LogOut, ShieldAlert, Database, Video, CheckCircle2, AlertCircle, Edit } from 'lucide-react';
import { COURSES } from '../data';

interface AdminDashboardProps {
  courses: Course[];
}

export default function AdminDashboard({ courses }: AdminDashboardProps) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [connectionWarning, setConnectionWarning] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
    videoUrl: '',
    category: 'Health & Safety' as CourseCategory,
    cpdUnits: 1,
    totalTime: '1 Hour',
    price: 0,
    purchaseLink: ''
  });

  useEffect(() => {
    // Basic check if user is the designated admin
    if (auth.currentUser?.email === 'scottmontford@gmail.com') {
      setIsAdmin(true);
    }

    // Test Firestore connection
    const testConnection = async () => {
      try {
        // Try to fetch a dummy document to force a server connection
        await getDocFromServer(doc(db, 'connection_test', 'test'));
      } catch (err: any) {
        if (err.message?.includes('offline') || err.message?.includes('Failed to get document because the client is offline')) {
          setConnectionWarning('Cannot connect to Firestore. If you created a named database instead of the "(default)" one, you need to specify it in your firebase.ts file.');
        } else if (err.code === 'permission-denied') {
          // This is fine, it means we connected but were rejected by rules
        } else {
          console.error("Connection test error:", err);
        }
      }
    };
    testConnection();
  }, []);

  const handleSubmitCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      let thumbnailUrl = formData.thumbnail;

      // Upload file to Firebase Storage if selected
      if (thumbnailFile) {
        const fileRef = ref(storage, `thumbnails/${Date.now()}_${thumbnailFile.name}`);
        const snapshot = await uploadBytes(fileRef, thumbnailFile);
        thumbnailUrl = await getDownloadURL(snapshot.ref);
      }

      if (!thumbnailUrl) {
        throw new Error("Please upload a thumbnail image or provide a URL.");
      }

      const courseData: any = {
        ...formData,
        thumbnail: thumbnailUrl,
        cpdUnits: Number(formData.cpdUnits),
        price: Number(formData.price),
      };
      
      if (!courseData.videoUrl) {
        delete courseData.videoUrl;
      }

      if (editingCourseId) {
        await updateDoc(doc(db, 'courses', editingCourseId), courseData);
        setSuccess('Course updated successfully!');
      } else {
        courseData.createdAt = serverTimestamp();
        await addDoc(collection(db, 'courses'), courseData);
        setSuccess('Course added successfully!');
      }
      
      cancelEdit();
      setTimeout(() => setSuccess(''), 4000);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to save course. Ensure you have admin rights.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (course: Course) => {
    setEditingCourseId(course.id);
    setFormData({
      title: course.title,
      description: course.description,
      thumbnail: course.thumbnail,
      videoUrl: course.videoUrl || '',
      category: course.category,
      cpdUnits: course.cpdUnits,
      totalTime: course.totalTime,
      price: course.price,
      purchaseLink: course.purchaseLink
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingCourseId(null);
    setThumbnailFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setFormData({
      title: '',
      description: '',
      thumbnail: '',
      videoUrl: '',
      category: 'Health & Safety',
      cpdUnits: 1,
      totalTime: '1 Hour',
      price: 0,
      purchaseLink: ''
    });
  };

  const handleSeedData = async () => {
    if (!window.confirm('This will add the default courses to the database. Continue?')) return;
    setLoading(true);
    try {
      for (const course of COURSES) {
        const { id, ...courseData } = course;
        await addDoc(collection(db, 'courses'), {
          ...courseData,
          createdAt: serverTimestamp()
        });
      }
    } catch (err: any) {
      console.error(err);
      alert('Failed to seed data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await deleteDoc(doc(db, 'courses', id));
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Failed to delete course.');
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md w-full text-center">
          <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Access Denied</h2>
          <p className="text-slate-600 mb-6">You do not have permission to view the admin dashboard. Please log in with the admin email.</p>
          <button onClick={logout} className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600 mt-1">Manage your courses</p>
          </div>
          <button onClick={logout} className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add Course Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              {connectionWarning && (
                <div className="mb-6 p-4 bg-amber-50 text-amber-800 rounded-xl border border-amber-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Database Connection Issue</h3>
                    <p className="text-sm">{connectionWarning}</p>
                  </div>
                </div>
              )}

              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                {editingCourseId ? <Edit className="w-5 h-5 text-primary-500" /> : <Plus className="w-5 h-5 text-primary-500" />}
                {editingCourseId ? 'Edit Course' : 'Add New Course'}
              </h2>
              
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmitCourse} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                  <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                  <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Thumbnail Image</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef}
                    onChange={e => setThumbnailFile(e.target.files?.[0] || null)} 
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100" 
                  />
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium uppercase">OR paste URL:</span>
                    <input 
                      type="url" 
                      placeholder="https://..." 
                      value={formData.thumbnail} 
                      onChange={e => setFormData({...formData, thumbnail: e.target.value})} 
                      className="flex-1 px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all disabled:opacity-50 disabled:bg-slate-50" 
                      disabled={!!thumbnailFile}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Video URL (Optional)</label>
                  <input type="url" placeholder="YouTube, Vimeo, or Dailymotion link" value={formData.videoUrl} onChange={e => setFormData({...formData, videoUrl: e.target.value})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                  <p className="text-xs text-slate-500 mt-1">Will be embedded on the course info page.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as CourseCategory})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all">
                    <option value="Health & Safety">Health & Safety</option>
                    <option value="HR & Business Skills">HR & Business Skills</option>
                    <option value="Health and Social Care">Health and Social Care</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">CPD Units</label>
                    <input required type="number" step="0.5" min="0" value={formData.cpdUnits} onChange={e => setFormData({...formData, cpdUnits: Number(e.target.value)})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Price (£)</label>
                    <input required type="number" step="0.01" min="0" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Total Time</label>
                  <input required type="text" placeholder="e.g. 2 Hours" value={formData.totalTime} onChange={e => setFormData({...formData, totalTime: e.target.value})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Link</label>
                  <input required type="url" placeholder="https://..." value={formData.purchaseLink} onChange={e => setFormData({...formData, purchaseLink: e.target.value})} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                </div>

                <div className="flex gap-3 pt-2">
                  <button disabled={loading} type="submit" className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 rounded-lg transition-colors disabled:opacity-70">
                    {loading ? (editingCourseId ? 'Updating...' : 'Adding...') : (editingCourseId ? 'Update Course' : 'Add Course')}
                  </button>
                  {editingCourseId && (
                    <button type="button" onClick={cancelEdit} disabled={loading} className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors disabled:opacity-70">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Course List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-900">Existing Courses ({courses.length})</h2>
                {courses.length === 0 && (
                  <button 
                    onClick={handleSeedData}
                    disabled={loading}
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                  >
                    <Database className="w-4 h-4" />
                    Load Demo Data
                  </button>
                )}
              </div>
              <div className="divide-y divide-slate-100 max-h-[800px] overflow-y-auto">
                {courses.length === 0 ? (
                  <div className="p-8 text-center text-slate-500">No courses found. Add one to get started.</div>
                ) : (
                  courses.map(course => (
                    <div key={course.id} className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                      <div className="relative w-24 h-16 flex-shrink-0">
                        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover rounded-lg border border-slate-200" referrerPolicy="no-referrer" />
                        {course.videoUrl && (
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
                            <Video className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-slate-900">{course.title}</h3>
                        <p className="text-sm text-slate-500 mb-2">{course.category} • £{course.price.toFixed(2)}</p>
                        <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button 
                          onClick={() => handleEditClick(course)}
                          className="p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                          title="Edit Course"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteCourse(course.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Course"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
