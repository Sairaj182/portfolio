export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const projects = [
  {
  title: "Background Job Processing Infrastructure",
  description:
    "Designed and built a pluggable background job processing system using Spring Boot to handle asynchronous and long-running tasks efficiently.",

  tech: ["Spring Boot", "Java", "REST APIs", "Multithreading"],

  details: [
    "Developed a modular architecture to support pluggable job handlers",
    "Implemented asynchronous task execution for improved system performance",
    "Designed scalable job processing with queue-based execution logic",
    "Ensured fault tolerance and retry mechanisms for reliability"
  ],

  github: "https://github.com/Sairaj182/JobInfraPluggable.git",
  // deployed: ""
},
{
  title: "PhotonicR",
  description:"A visually refined and responsive web platform crafted to showcase creative work and digital experiences with a strong focus on clean UI and smooth interactions.",

  tech: ["React","Tailwind CSS"],

  details: [
    "Designed and implemented a modern, responsive UI ensuring seamless experience across devices",
    "Built reusable component-based architecture for scalability and maintainability",
    "Optimized layout and rendering for smooth navigation and fast performance",
    "Focused on clean design principles to enhance user engagement and visual appeal"
  ],
  github: "https://github.com/Sairaj182/PhotonicR.git",
  deployed: "https://photonicr.vercel.app/"
},
{
  title: "Developer Portfolio",
  description:
    "Built a modern, responsive portfolio website to showcase projects, skills, and experience with a focus on performance and clean UI.",

  tech: ["React", "Tailwind CSS"],

  details: [
    "Implemented dynamic theming (light/dark mode)",
    "Designed reusable component-based architecture",
    "Added interactive UI elements like animations and custom cursor",
    "Optimized layout for responsiveness and performance"
  ],

  github: "https://github.com/Sairaj182/portfolio.git"
},
{
  title: "Trade Sathi",
  description:
    "Built a platform to assist users with trading insights and financial decision-making through structured data handling and intuitive UI.",

  tech: ["React", "Flask", "MySQL"],

  details: [
    "Designed full-stack architecture with React frontend and Flask backend",
    "Implemented user authentication and secure data handling",
    "Managed structured financial data using relational databases",
    "Focused on usability and performance for real-time interaction"
  ],

  github: "https://github.com/Sairaj182/PaperTradingHosting.git",
  deployed: "https://paper-trading-hosting.vercel.app/"
},
];

export const experiences = [
  {
    role: "FullStack Developer",
    company: "Web Development Cell, NIT Patna",
    duration: "March'26 - Present",
    description:
      "Worked on building scalable systems with high user traffic along with cost optimization",
    details: [
      "Reduced database load by implementing Redis Caching",
    ]
  },
  {
    role: "Backend Developer Intern",
    company: "Incubation Center, NIT Patna",
    duration: "March'25 - Present",
    description:
      "Worked on backend development and system design for real-world applications, focusing on building scalable APIs and efficient data handling.",
    details: [
      "Designed and developed REST APIs for application features",
      "Worked on database schema design and optimization",
      "Implemented authentication and backend logic for user workflows",
      "Collaborated in a startup-like environment to build production-ready systems"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Eve Healthcare Center",
    duration: "November'26 - February'26",
    description:
      "Built and optimized a production-grade Django healthcare platform with real-time workflows, reduced server load, and efficient service architecture.",
    details: [
      "Built and improved backend functionalities for healthcare workflows",
      "Worked with structured data and ensured secure handling of user information",
      "Focused on performance and reliability in application features",
      "Assisted in developing features for real-world healthcare use cases"
    ]
  },
  {
  role: "Developer Intern",
  company: "PhotonicR",
  duration: "May'25 - July'25",
  description:
    "Developed a modern, responsive web platform focused on showcasing creative work with clean UI and smooth user experience.",
  details: [
    "Designed and implemented a visually engaging and responsive UI using React and Tailwind CSS",
    "Built reusable component-based architecture for scalability and maintainability",
    "Optimized layout and rendering for smooth navigation and performance",
    "Focused on user-centric design principles to enhance usability and engagement"
  ]
}
];

export const testimonials = [
  {
    name: "Ravi Utsav",
    role: "Managing Director at EVE Healthcare",
    image: "/assets/EVEHealthcare.jpeg",
    feedback: "Built and optimized backend workflows on healthcare datasets, turning raw data into meaningful insights while consistently demonstrating ownership, precision and strong problem-solving skills while internship at EVE Healthcare as a Backend Developer.",
  },
  {
    name: "Dr. Subrata Das (NITP)",
    role: "Director PhotonicR Pvt. Ltd.",
    image: "/assets/photonicr.jpeg",
    feedback: "Sairaj's performance was found to be satisfactory and commendable in web development and product design processes while his internship as developer-intern at PhotonicR Pvt. Ltd.",
  },
];

export const socialLinks = [
  {
    name: "github",
    url: "https://github.com/Sairaj182",
    icon: "/icons/github.svg",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/sairaj-raithatha",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "gmail",
    url: "mailto:sairajraithatha.official@gmail.com",
    icon: "/icons/gmail.svg",
  },
  {
    name: "x",
    url: "https://x.com/SairajRaithatha",
    icon: "/icons/x.svg",
  },
];
const dark = 1;

export const tech = [
  // Languages
  { iconlight: "/tech/cpplight.svg", icondark: "/tech/cppdark.svg" , name:"Cpp"},
  { iconlight: "/tech/java.svg", icondark:"/tech/java.svg", name: "Java" },
  { iconlight: "/tech/python.svg",icondark: "/tech/python.svg", name: "Python" },
  { iconlight: "/tech/javascript.svg",icondark: "/tech/javascript.svg", name: "JavaScript" },

  // Backend
  { iconlight: "/tech/nodejslight.svg",icondark: "/tech/nodejsdark.svg", name: "Node.js" },

  // Frontend
  { iconlight: "/tech/reactjs.svg",icondark: "/tech/reactjs.svg", name: "React.js" },
  { iconlight: "/tech/nextjslight.svg",icondark: "/tech/nextjsdark.svg", name: "Next.js" },
  { iconlight: "/tech/tailwindlight.svg",icondark:"/tech/tailwinddark.svg", name: "TailwindCSS" },

  // Database
  { iconlight: "/tech/mysql.svg", icondark: "/tech/mysql.svg", name: "MySQL" },

  // DevOps & Tools
  { iconlight: "/icons/github.svg",icondark: "/icons/github.svg", name: "GitHub" },
  { iconlight: "/tech/docker.svg",icondark: "/tech/docker.svg", name: "Docker" },
  { iconlight: "/tech/awslight.svg",icondark: "/tech/awsdark.svg", name: "AWS" },
  { iconlight: "/tech/vercellight.svg",icondark: "/tech/verceldark.svg", name: "Vercel" },

];