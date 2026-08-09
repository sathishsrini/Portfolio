import project1 from '../assets/drone.jpg';
import project2 from '../assets/dashboard.png';
import project3 from '../assets/agri.png';
import project4 from '../assets/portfolio.jpg';
import intern from '../assets/intern.jpg';
import powerbi from '../assets/power.jpg';
import python from '../assets/python.webp';
import pass from '../assets/passport.jpg';
import jfs from '../assets/Java-Full-Stack.png';
import ec from '../assets/ec1.jpg';

export const HERO_CONTENT = `I'm a Java Backend Developer at GGSH & Co LLP specialising in Java (Spring Boot), Node.js, and Python (Django/Flask). I focus on REST API architecture and large-scale system refactoring — from modularising a 700+ endpoint monolith into a clean controller-service architecture to building ERP data pipelines with JWT/RBAC security. Improved ERP-to-accounting data sync performance from 30 minutes to 12 minutes for 3,000 records through batching, server-side transformation, and blob storage.`;

export const ABOUT_TEXT = `At GGSH & Co LLP, I work as a Backend Developer building and refactoring scalable server-side systems:
• Refactored a 700+ endpoint Node.js/Express monolith into module-wise routers with dedicated middleware and rate limiting
• Led development of Django REST APIs for ERP tool integrations, transforming and validating data from third-party accounting APIs
• Replaced costly SQL joins with server-side hashmap lookups and pivot-table structures for high-frequency financial audit workflows
• Implemented JWT access/refresh token authentication and CSRF protection with partial Role-Based Access Control (RBAC)
• Improved ERP-to-accounting sync performance from 30 min to 12 min for 3,000 records via batching, server-side transformation, and blob storage

Technical Stack:
⎔ Core: Java (Spring Boot), Node.js (Express), Python (Django/Flask)
⎔ Security: JWT / Refresh Tokens, CSRF Protection, Spring Security, RBAC
⎔ Databases: MySQL, PostgreSQL, JPA/Hibernate, Firebase
⎔ Tools: Git, Power BI, Docker, Electron, TallyPrime integration`;

export const EXPERIENCES = [
	{
		year: '2025',
		role: 'Junior Software Developer',
		company: 'GGSH & Co LLP - Kodambakkam, Chennai',
		description: `Refactored a 700+ endpoint Node.js/Express monolith into module-wise routers with middleware and rate limiting; led Django REST API development for ERP integrations; implemented JWT/CSRF authentication with partial RBAC; improved ERP-to-accounting sync performance from 30 min to 12 min for 3,000 records via batching and blob storage.`,
		technologies: ['Node.js', 'Express', 'Django', 'REST API', 'JWT'],
	},
	{
		year: '2025',
		role: 'Software Developer Intern',
		company: 'GGSH & Co LLP - Kodambakkam, Chennai',
		description: `Built 3+ Python backend modules automating internal auditing processes, packaged as secure executables using Nuitka for enterprise distribution.`,
		technologies: ['Python', 'Nuitka'],
	},
	{
		year: '2024',
		role: 'Data Analytics Intern',
		company: 'Shiash Info Solution',
		description: `Performed ETL operations on large datasets using Python and Power BI; improved reporting data visibility by 20%.`,
		technologies: ['Python', 'Power BI', 'ETL'],
	},
];

export const PROJECTS = [
	{
		title: 'E-Commerce Platform',
		image: ec, // You can use an appropriate image for the e-commerce project
		description:
			'Built a full-stack e-commerce backend with product catalog, order management, and secure Spring Security authentication. Implemented Spring Data JPA repositories with custom JPQL queries and designed a normalised MySQL schema for scalable data access.',
		technologies: ['Java', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'Thymeleaf', 'Bootstrap'],
	},
	{
		title: 'AI Object Detection API',

		image: project1,
		description: `Designed a RESTful Flask API serving real-time YOLOv8 object detection results, integrated with Firebase Auth and MySQL persistence. Published as a peer-reviewed journal paper.`,
		technologies: ['Python', 'Flask', 'YOLOv8', 'Firebase', 'MySQL', 'React.js'],
	},
	{
		title: 'AI Based Virtual Clinic for Rural India',
		image: project2,
		description: `Developed an AI-assisted telemedicine kiosk for rural India, providing access to doctors via biometric ID and the e-Sanjeevani App for timely medication delivery.`,
		technologies: ['HTML', 'CSS', 'Django', 'Gen AI'],
	},
	{
		title: 'AI Enabled Car Parking Using OpenCV',
		image: project3,

		description:
			'Developed an AI-enabled car parking system using OpenCV and YOLOv8 to detect available parking slots in real time and guide vehicles to empty spaces.',
		technologies: ['Python', 'OpenCV', 'YOLOv8'],
	},
	{
		title: 'Personal Portfolio Webpage',
		image: project4,
		description:
			"A showcase of my skills and experiences, built with React and Vite. This portfolio webpage features a responsive design, interactive components, and a clean user interface. It's a demonstration of my ability to design and develop a modern web application using cutting-edge technologies.",
		technologies: ['React', 'Vite'],
	},
];

export const CONTACT = {
	name: 'Sathish S',
	image: pass,
	address: '5/317, Gandiji Street, Nagathamman Nagar, Thiruninravur - 602024',
	phoneNo: '+91 9962242351 ',
	email: 'sathish22.sb@gmail.com',
};

export const COURSES = [
	{
		title: 'Java Full Stack Development Course',
		description:
			'Completed a comprehensive Java Full Stack Development course, gaining expertise in Java, Spring Boot, React.js, and MySQL for building scalable and responsive web applications.',
		image: jfs, // You can add an image URL here if needed
		issuedBy: 'Oranium Tech Institute',
		date: 'Oct 2024 - Dec 2024',
	},
	{
		title: 'Data Analytics Internship',
		description:
			'Successfully completed the Internship Data Analytics platform from December 2023 to March 2024. Exposed to different processes and found to be Punctual, Hard Working and Inquisitive.',
		image: intern, // You can add an image URL here if needed
		issuedBy: 'Shiash Info Solutions Private Limited',
		date: '2023-12-01 - 2024-03-01',
	},
	{
		title: 'Data Analytics Certificate',
		description:
			'Built multiple dashboards with Power BI. Learned how to work with large datasets. Built and visualized data using Power BI.',
		image: powerbi,
		issuedBy: 'Atos Prayas Foundation',
		date: '2023-08-16 - 2023-09-08',
	},
	{
		title: 'Python Certificate',
		description:
			'Learned Python programming language Built several mini projects to demonstrate proficiency',
		image: python,
		issuedBy: 'SkillVertex',
		date: '2023-08-16 - 2023-09-08',
	},
];
