// Portfolio Mock Data
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // 0-100
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: 'in-progress' | 'completed';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  location: string;
  resumeUrl: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Vince Andrew D. Santoya',
  role: 'Full Stack Developer',
  bio: 'I am a 4th year BSIT Student that is passionate about creating modern web applications and solving complex problems with clean, efficient code.',
  email: 'hanssantoya@gmail.com',
  location: 'Avocado St. Mambaling, Cebu City',
  resumeUrl: '/CURRICULUM VITAE.pdf',
};

// Projects Showcase
export const projects: Project[] = [
  {
    id: '1',
    title: 'Fleur de Gâteau',
    description: 'A beautiful e-commerce cake shop website featuring handcrafted cake designs with floral artistry. Fully responsive interface with product showcase, custom order system, and smooth user experience for Cebu-based bakery.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'JavaScript'],
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.NGJepoMHJFGF2Pt7Tz5qRwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3',
    liveUrl: 'https://fleurdegateau.vercel.app/',
    githubUrl: 'https://github.com/Vinzz290034/Fleur-de-G-teau.git',
  },
  {
    id: '2',
    title: 'AccounTech - Smart Ledger System',
    description: 'A comprehensive smart ledger accounting system for managing transactions, accounts, and financial records. Features include CSV import/export, transaction management, general ledger, balance sheet reports, and real-time financial calculations.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'JavaScript'],
    imageUrl: 'https://s3.amazonaws.com/a.storyblok.com/f/102628/785fa96b53/business-templates_basic-business-templates_general-ledger-template.jpg',
    liveUrl: 'https://accountech-wheat.vercel.app/',
    githubUrl: 'https://github.com/Vinzz290034/AccounTech.git',
  },
  {
    id: '3',
    title: 'CHRONONAV',
    description: 'ChronoNav is a PHP-based web application and landing site for a campus navigation and scheduling system. The project aims to help students import their class schedules (using OCR), view them in a smart calendar, receive reminders, and get turn-by-turn navigation across campus (including offline access).',
    techStack: ['PHP', 'MySQL', 'Node.js', 'React', 'JavaScript'],
    imageUrl: 'https://www.telstra.com.au/content/dam/shared-component-assets/tecom/case-studies/unimap/hero-unimap-1128x650.jpg',
  },
];

// Skills
export const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', category: 'frontend', proficiency: 90 },
  { name: 'JavaScript', category: 'frontend', proficiency: 85 },
  { name: 'TypeScript', category: 'frontend', proficiency: 85 },
  { name: 'React', category: 'frontend', proficiency: 85 },
  { name: 'Vite', category: 'frontend', proficiency: 80 },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 80 },
  { name: 'PHP', category: 'backend', proficiency: 85 },
  { name: 'ASP.NET', category: 'backend', proficiency: 75 },
  
  // Database
  { name: 'MySQL', category: 'database', proficiency: 85 },
  
  // Mobile
  { name: 'Flutter/Dart', category: 'tools', proficiency: 80 },
  
  // Languages
  { name: 'C#', category: 'tools', proficiency: 75 },
  
  // Tools
  { name: 'Canva', category: 'tools', proficiency: 90 },
  { name: 'Figma', category: 'tools', proficiency: 85 },
  { name: 'Data Analysis', category: 'tools', proficiency: 80 },
];

// Education
export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Cebu Main Campus',
    period: '2022 - Present',
    status: 'in-progress',
  },
  {
    degree: 'Senior High School',
    institution: 'College of Technological Sciences Cebu',
    period: '2021 - 2022',
    status: 'completed',
  },
  {
    degree: 'Senior High School',
    institution: 'Mambaling National High School',
    period: '2020 - 2021',
    status: 'completed',
  },
  {
    degree: 'Junior High School',
    institution: 'University of Cebu METC',
    period: '2018 - 2020',
    status: 'completed',
  },
];

// Certifications
export const certifications: Certification[] = [
  // Add certifications as they are earned
];

// AI Assistant Context - Portfolio-specific knowledge base
export const aiContext = `
You are a portfolio assistant for ${personalInfo.name}, a ${personalInfo.role}.

About:
${personalInfo.bio}

Contact:
- Email: ${personalInfo.email}
- Phone: 09695345084
- Location: ${personalInfo.location}

Education:
- ${education.map(e => `${e.degree} at ${e.institution} (${e.status === 'in-progress' ? 'Currently pursuing' : 'Completed'}) - ${e.period}`).join('\n- ')}

Technical Skills:
${skills.map(s => `- ${s.name} (${s.category})`).join('\n')}

Soft Skills:
- Communication Skills
- Leadership Experience
- Creative & Innovative Thinking
- Learning/Adaptability Skills

Featured Projects:
${projects.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

Please only answer questions related to this portfolio. For any general questions outside this scope, politely redirect users to ask about the portfolio, skills, projects, education, or professional experience.
`;
