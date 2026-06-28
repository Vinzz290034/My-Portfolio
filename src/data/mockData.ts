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
  category: 'languages' | 'frameworks' | 'platforms' | 'practices';
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
  description?: string;
  credentialId?: string;
  fileUrl?: string;
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
  bio: 'I am a passionate Full Stack Developer who recently graduated with a Bachelor of Science in Information Technology from the University of Cebu Main Campus. I love building modern web applications and solving complex problems with clean, efficient code.',
  email: 'hanssantoya@gmail.com',
  location: 'Avocado St. Mambaling, Cebu City',
  resumeUrl: '/Resume.pdf',
};

// Projects Showcase
export const projects: Project[] = [
  {
    id: '1',
    title: 'UC METC SILMS',
    description: 'A full-stack web management system for UC METC Cooperative that handles sales, inventory, locker rentals, memberships, billing, and real-time notifications.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'Socket.io', 'Tailwind CSS', 'Zustand', 'JWT'],
    imageUrl: 'https://res.cloudinary.com/doas4qcdo/image/upload/v1782621697/cover2_iwhcjd.png',
    liveUrl: 'https://uc-metc-coop.vercel.app/',
    githubUrl: 'https://github.com/Vinzz290034/UC-METC-Coop-Alpha.git',
  },
  {
    id: '2',
    title: 'CHRONONAV',
    description: 'A PHP-based campus navigation and scheduling app with OCR schedule import, smart calendar, reminders, and turn-by-turn campus directions with offline support.',
    techStack: ['PHP', 'MySQL', 'Node.js', 'React', 'JavaScript'],
    imageUrl: 'https://www.telstra.com.au/content/dam/shared-component-assets/tecom/case-studies/unimap/hero-unimap-1128x650.jpg',
  },
];

// Skills
export const skills: Skill[] = [
  // ── Languages ──────────────────────────────────────────────────────────────
  { name: 'JavaScript', category: 'languages', proficiency: 85 },
  { name: 'TypeScript', category: 'languages', proficiency: 85 },
  { name: 'PHP',        category: 'languages', proficiency: 85 },
  { name: 'C#',         category: 'languages', proficiency: 75 },
  { name: 'Python',     category: 'languages', proficiency: 75 },
  { name: 'SQL',        category: 'languages', proficiency: 80 },
  { name: 'HTML/CSS',   category: 'languages', proficiency: 90 },

  // ── Frameworks ─────────────────────────────────────────────────────────────
  { name: 'ASP.NET Core Web API', category: 'frameworks', proficiency: 75 },
  { name: 'FastAPI',              category: 'frameworks', proficiency: 70 },
  { name: 'Django',               category: 'frameworks', proficiency: 70 },
  { name: 'NextJS',               category: 'frameworks', proficiency: 75 },
  { name: 'Angular',              category: 'frameworks', proficiency: 70 },
  { name: 'React',                category: 'frameworks', proficiency: 85 },

  // ── Platforms ──────────────────────────────────────────────────────────────
  { name: 'Git',            category: 'platforms', proficiency: 90 },
  { name: 'GitHub Actions', category: 'platforms', proficiency: 85 },
  { name: 'Docker',         category: 'platforms', proficiency: 70 },
  { name: 'Vercel',         category: 'platforms', proficiency: 80 },
  { name: 'Bitbucket',      category: 'platforms', proficiency: 75 },
  { name: 'Postman',        category: 'platforms', proficiency: 80 },
  { name: 'Linux',          category: 'platforms', proficiency: 97 },

  // ── Practices ──────────────────────────────────────────────────────────────
  { name: 'Object-Oriented Design', category: 'practices', proficiency: 85 },
  { name: 'CyberSecurity',          category: 'practices', proficiency: 90 },
  { name: 'NLP',                    category: 'practices', proficiency: 70 },
  { name: 'IoT',                    category: 'practices', proficiency: 70 },
  { name: 'Agile/Scrum',            category: 'practices', proficiency: 85 },
];

// Education
export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Cebu Main Campus',
    period: '2022 - 2026',
    status: 'completed',
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
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'March 18, 2025',
    description: 'Completed through the University of Cebu, this 6-hour course explored foundational cybersecurity concepts, threats, and career pathways in information assurance and security.',
    fileUrl: '/Intro to Cybersec.pdf',
  },
  {
    name: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'January 2, 2025',
    description: 'Completed through the Cisco Networking Academy program, this course covered foundational networking concepts including switching, routing protocols, wireless technologies, and network security essentials.',
    fileUrl: '/CCNA Switching Routing.pdf',
  },
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
- ${education.map(e => `${e.degree} at ${e.institution} (${e.status === 'completed' ? 'Completed' : 'In Progress'}) - ${e.period}`).join('\n- ')}

Note: Vince graduated on June 9, 2026 with a BSIT degree from the University of Cebu Main Campus.

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
