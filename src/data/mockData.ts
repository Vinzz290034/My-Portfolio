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
    title: 'Web Development Projects',
    description: 'Built multiple responsive web applications using HTML, CSS, and JavaScript with modern UI/UX practices.',
    techStack: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Vite'],
    imageUrl: 'https://public.youware.com/users-website-assets/prod/edf59860-fd84-4fd0-9a3e-574afee2fa0c/faa6321256b54ff282f57e222b95769b',
  },
  {
    id: '2',
    title: 'Mobile Application Development',
    description: 'Developed cross-platform mobile applications using Flutter and Dart with seamless user experiences.',
    techStack: ['Flutter', 'Dart', 'Mobile Development'],
    imageUrl: 'https://public.youware.com/users-website-assets/prod/edf59860-fd84-4fd0-9a3e-574afee2fa0c/edde6a4f6c454a7aa04f531f63ec6656',
  },
  {
    id: '3',
    title: 'Full Stack Solutions',
    description: 'Created full-stack applications integrating frontend, backend, and database technologies.',
    techStack: ['PHP', 'MySQL', 'Node.js', 'ASP.NET', 'C#'],
    imageUrl: 'https://public.youware.com/users-website-assets/prod/edf59860-fd84-4fd0-9a3e-574afee2fa0c/a3e85fd3d4e744d9a6e77d9a5d42a841',
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
