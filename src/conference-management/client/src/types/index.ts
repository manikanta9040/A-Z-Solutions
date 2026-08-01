export interface Conference {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image: string;
  featured: boolean;
  registrationDeadline?: string;
  price?: string;
  status?: 'upcoming' | 'past' | 'featured';
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  country: string;
  image: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  institution: string;
  country: string;
  image: string;
}

export interface CategoryItem {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  link?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
