// ==================== IMPORTS ====================

// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Project Logos
import webverLogo from './assets/work_logo/web_dig.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import cmLogo from './assets/work_logo/cm.png';
import npmLogo from './assets/work_logo/npm.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import githubdetLogo from './assets/work_logo/github_det.png';

// ==================== SKILLS ====================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

// ==================== EXPERIENCE ====================
export const experiences = [
  {
    id: 0,
    role: "Founder",
    company: "ZAM LearningHub",
    date: "2024 - Present",
    desc: "Founded and manage an online learning platform, providing tutorials and workshops on programming and web development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
    ],
  },
  {
    id: 1,
    role: "Hackathon Participant & Organizer",
    company: "OPENHACK25 Hackathon, MUET SZAB Campus",
    date: "2025",
    desc: "Participated as a team member, contributing to idea development, coding, and project presentation. Also helped organize the event by coordinating activities, guiding teams, and managing logistics.",
    skills: ["Teamwork", "Event Management", "Coding", "Project Presentation"],
    holopin: "https://www.holopin.io/@zahidalidev",
    github: "https://github.com/zahidali-dev/Open-Source-Playground"
  }
];


// ==================== EDUCATION (4 items) ====================
export const education = [
  {
    id: 1,
    school: "Good Luck Grammer High School Kazi Ahmed Nawabshah",
    degree: "Matric",
    date: "2018-2020",
    grade: "A",
    desc: "Completed Matriculation with a focus on science subjects. Built a strong foundation in Mathematics, Physics, Chemistry, and Computer Basics, while participating in extracurricular activities and school competitions.",
    color: "bg-red-500"
  },
  {
    id: 2,
    school: "Dr Abdul Qadeer Khan School & College Ibraheem Campus, Islamabad",
    degree: "Intermediate",
    date: "2020-2022",
    grade: "A",
    desc: "Focused on science and mathematics subjects, with extracurricular activities in coding clubs.",
    color: "bg-purple-500"
  },
  {
    id: 3,
    school: "Mehran University of Engineering and Technology",
    degree: "Bachelor of Software Engineering",
    date: "2024-2028",
    grade: "3.5 GPA",
    desc: "Currently studying core concepts of software engineering, including software development, algorithms, and databases.",
    color: "bg-blue-500"
  },
  {
    id: 4,
    school: "IBA IET Khairpur Campus",
    degree: "Full Stack Web Development",
    date: "12-12-2024",
    desc: "Completed a 2-month web development course, building projects like portfolio websites and interactive web apps.",
    color: "bg-green-500"
  }
];

// ==================== PROJECTS ====================
export const projects = [
  {
    id: 0,
    title: "Asif Pizza – Online Pizza Ordering Website",
    description: "A responsive pizza ordering website with dynamic menu and cart functionality. Built using HTML, CSS & JavaScript.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahidali-dev/Asif-Pizza",
    webapp: "https://zahidali-dev.github.io/Asif-Pizza/",
  },
  {
    id: 1,
    title: "Login & Dashboard System",
    description: "A clean login and dashboard UI with JavaScript-based form validation. Fully responsive HTML/CSS/JS front-end project.",
    image: taskremLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahidali-dev/login-dashboard-project",
    webapp: "https://zahidali-dev.github.io/login-dashboard-project/",
  },
  {
    id: 2,
    title: "LogicLegends",
    description: "A web-based platform to improve logical thinking through interactive programming challenges and quizzes using React.js, HTML, CSS, JavaScript, and Firebase.",
    image: cmLogo,
    tags: ["React JS", "Firebase", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/zahidali-dev/LogicLegends",
    webapp: "",
  },
  {
    id: 3,
    title: "Hotel Management System",
    description: "Java-based desktop application for managing hotel bookings, billing, and customer records with MySQL and JDBC.",
    image: npmLogo,
    tags: ["Java", "MySQL", "Desktop App"],
    github: "https://github.com/zahidalidev/HotelManagement-Java",
    webapp: "",
  },
  {
    id: 4,
    title: "Student Management System (DSA Project)",
    description: "Java desktop application using linked lists to manage student records. Features include Add, Delete, Update, Search, and Export to CSV through a Swing GUI.",
    image: csprepLogo,
    tags: ["Java", "Data Structures", "Swing", "CSV"],
    github: "https://github.com/zahidalidev/Student-Management-System-DSA.git",
    webapp: "",
  },
  {
    id: 5,
    title: "OPENHACK25 Hackathon",
    description: "Collaborated in a 3-member team for OPENHACK25 Hackathon — idea, implementation, and presentation.",
    image: githubdetLogo,
    tags: ["Team Project", "Hackathon", "Fullstack"],
    github: "https://github.com/zahidali-dev/Open-Source-Playground",
    webapp: "https://www.holopin.io/@zahidalidev",
  },
];
