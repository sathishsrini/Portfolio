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


export const EXPERIENCES = [
  {
    year: "2023",
    role: "Data Analytics Intern",
    company: "Shiash Info Solutions Private Limited",
    description: `Completed a Data Analytics internship, working on real-time data visualization, dashboard creation, and analysis using Power BI and SQL.`,
    technologies: ["Power BI", "SQL", "Data Visualization"],
  },
];

export const PROJECTS = [
  {

    title: "E-Commerce Platform",
    image: ec, // You can use an appropriate image for the e-commerce project
    description:
      "Developed a dynamic, full-stack e-commerce platform designed to manage product listings, user authentication, and order processing with seamless performance and scalability. Implemented a responsive UI with Bootstrap, Spring Boot services for CRUD operations, and MySQL for efficient data handling.",
    technologies: ["Spring Boot", "Bootstrap", "MySQL", "Thymeleaf"],
  },
  {
    title: "Journalist Website",

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

