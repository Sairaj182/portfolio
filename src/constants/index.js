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

  github: "https://github.com/Sairaj182/JobInfraPluggable.git"
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

  github: "https://github.com/Sairaj182/PaperTradingHosting.git"
},
{
  title: "Developer Portfolio Website",
  description:
    "Built a modern, responsive portfolio website to showcase projects, skills, and experience with a focus on performance and clean UI.",

  tech: ["React", "Tailwind CSS"],

  details: [
    "Implemented dynamic theming (light/dark mode)",
    "Designed reusable component-based architecture",
    "Added interactive UI elements like animations and custom cursor",
    "Optimized layout for responsiveness and performance"
  ],

  github: "#"
}
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
      "Contributed to developing healthcare-related software solutions with a focus on reliability, data handling, and usability.",
    details: [
      "Built and improved backend functionalities for healthcare workflows",
      "Worked with structured data and ensured secure handling of user information",
      "Focused on performance and reliability in application features",
      "Assisted in developing features for real-world healthcare use cases"
    ]
  }
];

export const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/100?img=1",
    feedback: "Sairaj is a great backend developer. His API design is clean and scalable.",
  },
  {
    name: "Ankit Verma",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=2",
    feedback: "Very reliable and strong in problem solving.",
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