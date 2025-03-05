<<<<<<< HEAD
import project1 from "../assets/inv.png";
import project2 from "../assets/tm.webp";
import project3 from "../assets/sp.jpg";
import intern from "../assets/wd.png";
import powerbi from "../assets/power.jpg";
import python from "../assets/python.webp";
import pass from "../assets/komathi_pic.jpg";
import cloud from "../assets/ce.jpg";

export const HERO_CONTENT = `I'm an enthusiastic and ambitious Python developer, eager to kickstart my career in the tech industry. With a strong foundation in programming and a passion for building innovative solutions, I've been actively working on various projects to hone my skills in Python, web development, and AI-based applications. My portfolio showcases my journey so far, featuring projects that demonstrate my expertise in Python, Django, OpenCV, and data analysis using tools like PowerBI. I'm excited to contribute to impactful projects and continue growing as a developer.`;

export const ABOUT_TEXT = `I'm an aspiring Python developer with a solid foundation in programming and a passion for building efficient and scalable solutions. My journey in software development began with a deep curiosity for problem-solving, and I've since developed expertise in Python, web development frameworks like Django, and AI-based applications using OpenCV. I enjoy working on projects that challenge me to think critically and creatively, whether it's developing web applications, automating processes, or building AI-driven solutions. Outside of coding, I enjoy staying updated with the latest technologies, contributing to open-source projects, and continuously improving my skills.`;
=======
import project1 from "../assets/drone.jpg";
import project2 from "../assets/dashboard.png";
import project3 from "../assets/agri.png";
import project4 from "../assets/portfolio.jpg";
import intern from "../assets/intern.jpg";
import powerbi from "../assets/power.jpg";
import python from "../assets/python.webp";
import pass from "../assets/passport.jpg";
import jfs from "../assets/Java-Full-Stack.png"
import ec from "../assets/ec1.jpg"

export const HERO_CONTENT = `I'm a passionate Java Full Stack Developer with a strong foundation in web development, database management, and software version control. Proficient in Java, React.js, Spring Boot, and modern technologies, I specialize in building scalable and high-performance web applications. My portfolio showcases projects that demonstrate my expertise in both front-end and back-end development, including e-commerce platforms and AI-powered solutions. Eager to collaborate and contribute to innovative projects, I continuously explore new technologies to enhance my skills and create impactful applications.`;
export const ABOUT_TEXT = `I'm a dedicated Full Stack Developer with hands-on experience in Java, React.js, and Spring Boot. My journey in web development started with a deep curiosity about how applications work, leading me to develop dynamic and scalable web solutions. I have experience building full-stack applications, including e-commerce platforms and AI-powered tools, integrating technologies such as MySQL, Firebase authentication, and REST APIs. 

I am passionate about solving complex problems, writing clean and efficient code, and continuously learning new technologies. My expertise spans front-end development using React and Bootstrap, as well as back-end development with Spring Boot (MVC) and MySQL for database management. I thrive in collaborative environments and enjoy contributing to high-impact projects that enhance user experiences. Outside of coding, I explore new advancements in AI, work on open-source projects, and stay active in the developer community.`;
>>>>>>> master

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Web Developer Intern",
    company: "ELEWAYTE - WIPRO",
    description: `Web development for creating a website on an online platform. Managed a high-performing marketing team, fostering a collaborative and results-driven work environment. Monitored brand consistency across marketing channels and materials.`,
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    year: "2024",
    role: "Web Developer Intern",
    company: "ZIDIO INFO TECH",
    description: `Web development for real-time chat application creation using MERN Stack Technology.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const PROJECTS = [
  {
<<<<<<< HEAD
    title: "Inventory Management System",
=======
    title: "E-Commerce Platform",
    image: ec, // You can use an appropriate image for the e-commerce project
    description:
      "Developed a dynamic, full-stack e-commerce platform designed to manage product listings, user authentication, and order processing with seamless performance and scalability. Implemented a responsive UI with Bootstrap, Spring Boot services for CRUD operations, and MySQL for efficient data handling.",
    technologies: ["Spring Boot", "Bootstrap", "MySQL", "Thymeleaf"],
  },
  {
    title: "Journalist Website",
>>>>>>> master
    image: project1,
    description: `Developed an Inventory Management System for retailer and wholesaler processes, managing stored items and transactions efficiently.`,
    technologies: ["PHP", "MySQL"],
  },
  {
    title: "AI Based Virtual Clinic for Rural India",
    image: project2,
    description: `Developed an AI-assisted telemedicine kiosk for rural India, providing access to doctors via biometric ID and the e-Sanjeevani App for timely medication delivery.`,
    technologies: ["HTML", "CSS", "Django", "Gen AI"],
  },
  {
    title: "AI Enabled Car Parking Using OpenCV",
    image: project3,
<<<<<<< HEAD
    description: `A computer vision-based project that aims to automate the car parking process in busy urban areas using OpenCV.`,
    technologies: ["OpenCV", "Python"],
=======
    description:
      "Developed an Agriculture Management System using Angular and Python, which included a website with voice search functionality for agriculture queries. NLTK (Natural Language Toolkit) was utilized to build the voice search feature.",
    technologies: ["Angular", "Firebase", "Mysql"],
  },
  {
    title: "Personal Portfolio Webpage",
    image: project4,
    description:
      "A showcase of my skills and experiences, built with React and Vite. This portfolio webpage features a responsive design, interactive components, and a clean user interface. It's a demonstration of my ability to design and develop a modern web application using cutting-edge technologies.",
    technologies: ["React", "Vite"],
>>>>>>> master
  },
];

export const CONTACT = {
<<<<<<< HEAD
  name: "Komathi M",
  image: pass,
  address: "Chennai, Tamil Nadu",
  phoneNo: "+91 9943248995",
  email: "komathilakshmi08@gmail.com",
  github: "https://github.com/Komathi08",
  linkedIn: "https://www.linkedin.com/in/komathi-m-76417424a/",
=======
  name: "Sathish S",
  image: pass,
  address: "5/317, Gandiji Street, Nagathamman Nagar, Thiruninravur - 602024",
  phoneNo: "+91 9962242351 ",
  email: "sathishsrini499@gmail.com",
>>>>>>> master
};

export const COURSES = [
  {
<<<<<<< HEAD
    title: "Python Course",
    description: "Completed the Python course from IBM.",
    image: python,
    issuedBy: "IBM",
    date: "N/A",
  },
  {
    title: "Web Development",
    description: "Completed the Web Development course from Zidio Technology.",
    image: intern,
    issuedBy: "Zidio Technology",
    date: "N/A",
  },
  {
    title: "Cloud Essentials",
    description: "Completed the Cloud Essentials course from IBM.",
    image: cloud,
    issuedBy: "IBM",
    date: "N/A",
  },
  {
    title: "Web Development",
    description: "Completed the Web Development course from Elewayte.",
    image: intern,
    issuedBy: "Elewayte",
    date: "N/A",
  },
  {
    title: "Power BI",
    description: "Completed the Power BI course from Atos Pray-as Foundation.",
    image: powerbi,
    issuedBy: "Atos Pray-as Foundation",
    date: "N/A",
  },
];
=======
    title: "Java Full Stack Development Course",
    description: "Completed a comprehensive Java Full Stack Development course, gaining expertise in Java, Spring Boot, React.js, and MySQL for building scalable and responsive web applications.",
    image: jfs, // You can add an image URL here if needed
    issuedBy: "Oranium Tech Institute",
    date: "Oct 2024 - Dec 2024",
  },
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
>>>>>>> master
