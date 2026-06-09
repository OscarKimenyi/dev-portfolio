export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  stats: Record<string, string>;
  featured: boolean;
}

export interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}
