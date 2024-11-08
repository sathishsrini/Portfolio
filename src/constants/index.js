import project1 from "../assets/drone.jpg";
import project2 from "../assets/dashboard.png";
import project3 from "../assets/agri.png";
import project4 from "../assets/portfolio.jpg";
import intern from "../assets/intern.jpg";
import powerbi from "../assets/power.jpg";
import python from "../assets/python.webp";
import pass from "../assets/passport.jpg";

export const HERO_CONTENT = `I'm an enthusiastic and ambitious developer, eager to kickstart my career in the tech industry. With a strong foundation in computer science and a passion for building innovative solutions, I've been actively working on various projects to hone my skills. My portfolio showcases my journey so far, featuring projects that demonstrate my understanding of front-end technologies like React and my ability to work with modern tools like Vite. I'm excited to continue learning and growing as a developer, and I'm looking forward to collaborating with others to create impactful and user-friendly applications.`;

export const ABOUT_TEXT = `I'm an aspiring full stack developer, eager to start my career in the tech industry. With a solid foundation in computer science and a passion for building web applications, I've been actively working on various projects to develop my skills and showcase my creativity. My journey in web development began with a deep curiosity for how things work, and I'm excited to continue learning and growing as a developer. I enjoy solving complex problems, collaborating with others, and delivering high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Journalist website",
    image: project1,
    description:
      "Developed an AI-powered system using a DJI Tello Drone for real-time object detection and tracking of a specific person (journalist) using a custom-trained YOLOv8 model. The system includes a user-friendly website built with React for drone control and footage management, integrating Firebase authentication for user login/register and MySQL database for local storage of drone footage.",
    technologies: ["React", "Firebase", "Flask", "MySQL"],
  },
  {
    title: "Dashboard Creation",
    image: project2,
    description:
      "Developed a comprehensive dashboard and reports for analyzing store data as part of the data analytics certification program under Atos Prayas Foundation. Utilized various analytical techniques and tools, including Microsoft Power BI, to extract insights and present actionable recommendations.",
    technologies: ["Microsoft Power BI"],
  },
  {
    title: "Agriculture Management System",
    image: project3,
    description:
      "Developed an Agriculture Management System using Angular and Python, which included a website with voice search functionality for agriculture queries.NLTK (Natural Language Toolkit) was utilized to build the voice search feature. ",
    technologies: ["Angular", "Firebase", "Mysql"],
  },
  {
    title: "Personal Portfolio Webpage",
    image: project4,
    description:
      "A showcase of my skills and experiences, built with React and Vite. This portfolio webpage features a responsive design, interactive components, and a clean user interface. It's a demonstration of my ability to design and develop a modern web application using cutting-edge technologies.",
    technologies: ["React", "Vite"],
  },
];

export const CONTACT = {
  name: "Sathish S",
  image: pass,
  address: "5/317, Gandiji Street, Nagathamman Nagar, Thiruninravur - 602024",
  phoneNo: "+91 9962242351 ",
  email: "sathishsrini499@gmail.com",
};

export const COURSES = [
  {
    title: "Data Analytics Internship",
    description:
      "Successfully completed the Internship Data Analytics platform from December 2023 to March 2024. Exposed to different processes and found to be Punctual, Hard Working and Inquisitive.",
    image: intern, // You can add an image URL here if needed
    issuedBy: "Shiash Info Solutions Private Limited",
    date: "2023-12-01 - 2024-03-01",
  },
  {
    title: "Data Analytics Certificate",
    description:
      "Built multiple dashboards with Power BI. Learned how to work with large datasets. Built and visualized data using Power BI.",
    image: powerbi,
    issuedBy: "Atos Prayas Foundation",
    date: "2023-08-16 - 2023-09-08",
  },
  {
    title: "Python Certificate",
    description:
      "Learned Python programming language Built several mini projects to demonstrate proficiency",
    image: python,
    issuedBy: "SkillVertex",
    date: "2023-08-16 - 2023-09-08",
  },
];