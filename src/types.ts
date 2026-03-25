export type CourseCategory = 
  | 'Health & Safety' 
  | 'HR & Business Skills' 
  | 'Health and Social Care';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  category: CourseCategory;
  cpdUnits: number;
  totalTime: string;
  price: number;
  purchaseLink: string;
  createdAt?: any; // Timestamp
}
