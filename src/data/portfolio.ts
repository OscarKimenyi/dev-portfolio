export const personalInfo = {
  name: "Oscar Kimenyi",
  title: "Full-Stack Engineer & Software Developer",
  tagline: "I build scalable web applications and AI-powered systems that solve real-world problems",
  description:
    "Software Engineering graduate with hands-on experience designing, developing, and deploying full-stack web applications. Strong background in JavaScript-based technologies including React.js, Node.js, Express.js, MongoDB, and MySQL. Experienced in building RESTful APIs, implementing authentication and authorization, and integrating machine learning models into web systems. Background in IT support and networking provides solid system troubleshooting skills and infrastructure awareness. Motivated to grow as a professional software developer in real-world production environments.",
  email: "oscarkimenyi49@gmail.com",
  phone: "+255 683 445 527",
  location: "Mwanza, Tanzania",
  availability: "Open for full-time & freelance opportunities",
  whatsapp: "255683445527",
  social: {
    github: "https://github.com/OscarKimenyi",
    linkedin: "https://linkedin.com/in/oscar-kimenyi-4b0b47378/",
    twitter: "https://twitter.com/oscarkimenyi",
    // dribbble: "https://dribbble.com/oscarkimenyi",
  },
  resumeUrl: "/oscar kimenyi resume.pdf",
  avatar: "/images/avatar/profile.jpg",
};

export const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 8, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "GitHub Repositories", value: 15, suffix: "+" },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "react" },
    { name: "Next.js", level: 90, icon: "next" },
    { name: "HTML5", level: 95, icon: "html5" },
    { name: "CSS3", level: 90, icon: "css3" },
    { name: "JavaScript (ES6+)", level: 92, icon: "javascript" },
    { name: "TypeScript", level: 90, icon: "typescript" },
    { name: "Tailwind CSS", level: 85, icon: "tailwind" },
    { name: "React Native (Mobile)", level: 80, icon: "reactnative" }
  ],
  backend: [
    { name: "Node.js", level: 88, icon: "nodejs" },
    { name: "Express.js", level: 90, icon: "express" },
    { name: "PHP (Laravel)", level: 82, icon: "laravel" },
    { name: "Java", level: 75, icon: "java" },
    { name: "RESTful APIs", level: 92, icon: "api" },
    { name: "Python (Flask)", level: 80, icon: "python" },
  ],
  databases: [
    { name: "MySQL", level: 90, icon: "mysql" },
    { name: "PostgreSQL", level: 90, icon: "postgresql" },
    { name: "MongoDB", level: 85, icon: "mongodb" },
    { name: "Supabase", level: 80, icon: "supabase" },
    { name: "SQLite", level: 80, icon: "sqlite" },
    { name: "Redis", level: 70, icon: "redis" },
  ],
  devops: [
    { name: "Git", level: 90, icon: "git" },
    { name: "GitHub", level: 92, icon: "github" },
    { name: "Docker", level: 75, icon: "docker" },
    { name: "Postman", level: 88, icon: "postman" },
    { name: "AWS (Basics)", level: 65, icon: "aws" },
  ],
  ai: [
    { name: "Python", level: 85, icon: "python" },
    { name: "TensorFlow", level: 75, icon: "tensorflow" },
    { name: "Scikit-learn", level: 80, icon: "scikitlearn" },
    { name: "NumPy", level: 82, icon: "numpy" },
    { name: "Pandas", level: 80, icon: "pandas" },
    { name: "Matplotlib", level: 78, icon: "matplotlib" },
  ],
  mobile: [
    { name: "React Native (Mobile)", level: 80, icon: "reactnative" }
  ],
};

export const projects = [
  {
    id: "escrow-shop",
    title: "Escrow Shop — E-Commerce Platform with Escrow Payments",
    category: "E-Commerce",
    description:
      "Full-stack e-commerce platform with Escrow.com API integration, ensuring secure payment holding until buyer confirms receipt of goods.",
    longDescription:
      "A production-ready e-commerce platform built with React.js and Node.js/Express where buyers purchase products through Escrow.com's API. Payments are held securely in escrow until the buyer confirms receipt of goods. Features a protected checkout flow with real-time escrow transaction creation, webhook handling for payment lifecycle events, and environment-based configuration for sandbox mode. Deployed across two platforms — React frontend on Vercel and Express REST API backend on Render.",
    image: "/images/projects/escrow.jpg",
    tech: [
      "React.js",
      "Bootstrap 5",
      "Node.js",
      "Express.js",
      "Escrow.com API",
      "Axios",
      "REST API",
      "Vercel",
      "Render",
    ],
    features: [
      "Secure escrow payment integration via Escrow.com API",
      "Protected checkout flow with real-time transaction creation",
      "Webhook handling for payment lifecycle events",
      "Environment-based configuration for sandbox mode",
      "React frontend deployed on Vercel",
      "Express REST API backend deployed on Render",
      "Responsive UI with Bootstrap 5",
      "Secure buyer/seller transaction flow",
    ],
    liveUrl: "https://escrow-shopping.vercel.app",
    githubUrl: "https://github.com/OscarKimenyi/EscrowAPI",
    stats: {
      transactions: "Secure",
      platform: "1 host",
      api: "Escrow.com",
    },
    featured: true,
  },
  {
    id: "incident-log",
    title: "Incident & Operations Log System",
    category: "Web Application",
    description:
      "Full-stack incident management application with structured workflow, role-based access, and complete audit trail system.",
    longDescription:
      "A comprehensive incident management web application enabling operational teams to report, track, and resolve incidents with a structured status workflow (open → investigating → resolved → closed). Features three distinct roles (Admin, Operator, Reporter) with permission boundaries across all API endpoints and UI screens. Includes a complete audit trail system that logs every status change, comment, and assignment action with an activity timeline on each incident's detail page.",
    image: "/images/projects/incident.png",
    tech: [
      "Laravel",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "MySQL",
      "Laravel Sanctum",
      "REST API",
      "Axios",
    ],
    features: [
      "Structured incident workflow (open → investigating → resolved → closed)",
      "Role-based access control (Admin, Operator, Reporter)",
      "Complete audit trail for all actions",
      "Activity timeline on incident detail pages",
      "Permission-enforced API endpoints",
      "Responsive UI with Tailwind CSS",
      "Secure authentication with Laravel Sanctum",
      "Real-time status updates",
    ],
    liveUrl: "https://incident-ops-log-system.vercel.app",
    githubUrl: "https://github.com/OscarKimenyi/incident-ops-log-system",
    stats: {
      incidents: "500+",
      roles: "3",
      uptime: "99%",
    },
    featured: true,
  },
  {
    id: "student-management",
    title: "Student Management System",
    category: "SaaS Platform",
    description:
      "Full-stack student management system with secure authentication, role-based access, and complete CRUD functionality.",
    longDescription:
      "Developed during internship at Codveda Technologies, this Student Management System features secure authentication with JWT and password hashing, role-based access control, and complete CRUD functionality for efficient student data management. Built with a responsive React frontend and Node.js/Express backend with MongoDB for flexible data storage. Implements modular, scalable code practices with Git-based version control.",
    image: "/images/projects/sms.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Git"],
    features: [
      "Secure JWT authentication with password hashing",
      "Role-based access control",
      "Complete CRUD for student records",
      "Responsive React frontend",
      "MongoDB for flexible data storage",
      "Modular and scalable code architecture",
      "Git version control integration",
      "RESTful API design",
    ],
    liveUrl: "https://level-3-nine.vercel.app",
    githubUrl: "https://github.com/OscarKimenyi/level-3",
    stats: {
      students: "500+",
      roles: "3",
      features: "10+",
    },
    featured: false,
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction System",
    category: "AI/ML Application",
    description:
      "Full-stack machine learning system for predicting customer churn with async model training, dashboards, and automated email alerts.",
    longDescription:
      "A comprehensive customer churn prediction platform that leverages machine learning to help businesses identify at-risk customers. The system features JWT-based authentication with role-based access (admin/manager), an asynchronous model training pipeline using Celery and Redis, interactive dashboards for churn insights, automated email alerts, and PDF report generation. Built with a React frontend and Python Flask backend serving Scikit-learn models.",
    image: "/images/projects/churn.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Python",
      "Flask",
      "Scikit-learn",
      "Redis",
      "Celery",
      "JWT",
    ],
    features: [
      "JWT-based authentication with admin and manager roles",
      "Machine learning model for customer churn prediction",
      "Async model training pipeline using Celery and Redis",
      "Interactive dashboards for churn insights",
      "Automated email alerts for high-risk customers",
      "PDF report generation for stakeholder presentations",
      "Role-based access control",
      "Real-time prediction API endpoints",
    ],
    liveUrl: "https://churn-prediction.demo",
    githubUrl: "https://github.com/OscarKimenyi/churn-prediction-app",
    stats: {
      accuracy: "92%",
      models: "5+ trained",
      features: "15+",
    },
    featured: true,
  },
  {
    id: "inventory-system",
    title: "StockManager Pro",
    category: "Business System",
    description: "A professional, production-ready stock management system that helps businesses efficiently track inventory, manage suppliers, process stock movements, and handle purchase payments. Built with modern technologies and featuring multi-tenant support for multiple businesses.",
    longDescription:
      "StockManager Pro is a comprehensive inventory management solution designed for retail stores, wholesale distributors, manufacturers, and e-commerce businesses. The system provides complete control over your stock operations with real-time tracking, supplier management, and financial reconciliation.",
    image: "/images/projects/stock-dashboard.png",
    tech: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
    ],
    features: [
      "Product Management (CRUD Operations)",
      "Stock-In Transactions (Purchases)",
      "Stock-Out Transactions (Sales/Issues)",
      "Payment & Debt Tracking",
      "Payment & Debt Tracking",
      "Multi-Tenant Data Isolation",
      "Dashboard with Real-Time Statistics",
      "Comprehensive Reporting System",
    ],
    liveUrl: "https://inventory-system.demo",
    githubUrl: "https://github.com/OscarKimenyi/stock-manager",
    stats: {
      items: "1000+",
      users: "10+",
      alerts: "Real-time",
    },
    featured: true,
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    category: "Business System",
    description:
      "Comprehensive hotel management platform with booking, guest management, and multi-role access for hospitality operations.",
    longDescription:
      "A full-featured hotel management platform designed for the hospitality industry. The system handles room bookings, guest management, payment processing, and maintenance workflows. Implements role-based access for administrators, managers, receptionists, and housekeeping staff. Includes reporting features for revenue analysis and occupancy tracking to help hotel management make data-driven decisions.",
    image: "/images/projects/hotel.png",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "REST API"],
    features: [
      "Room booking and reservation management",
      "Guest check-in/check-out system",
      "Multi-role access (Admin, Manager, Receptionist, Housekeeping)",
      "Payment processing integration",
      "Maintenance workflow tracking",
      "Revenue reporting and analytics",
      "Occupancy rate tracking",
      "RESTful API for mobile integration",
    ],
    liveUrl: "https://hotel-system.demo",
    githubUrl: "https://github.com/OscarKimenyi/hotel-management-system",
    stats: {
      rooms: "100+",
      bookings: "1000+",
      roles: "4",
    },
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Web Application",
    category: "Web Application",
    description:
      "Complete e-commerce platform with secure authentication, product management, and transaction processing.",
    longDescription:
      "A full-featured e-commerce platform built with the MERN stack. Features secure user authentication, comprehensive product management, shopping cart functionality, and order transaction processing. Designed RESTful APIs for handling users, products, and transactions with a responsive user interface optimized for both desktop and mobile devices.",
    image: "/images/projects/ecommerce.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "Secure user authentication and registration",
      "Product catalog with search and filtering",
      "Shopping cart and checkout system",
      "Order management and tracking",
      "Admin dashboard for product management",
      "Responsive design for all devices",
      "RESTful API architecture",
      "Transaction history and reporting",
    ],
    liveUrl: "https://ecommerce.demo",
    githubUrl: "https://github.com/OscarKimenyi/ecommerce-platform",
    stats: {
      products: "200+",
      users: "100+",
      orders: "500+",
    },
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    period: "Jan 2026 – Feb 2026",
    role: "Full Stack Developer Intern",
    company: "Codveda Technologies",
    type: "Remote Internship",
    description:
      "Developed and deployed a full-stack Student Management System featuring secure authentication, role-based access control, and complete CRUD functionality for efficient student data management.",
    achievements: [
      "Built RESTful APIs using Node.js and Express with MongoDB database",
      "Implemented secure authentication with JWT and password hashing",
      "Developed responsive frontend using React.js",
      "Applied Git-based version control and modular, scalable code practices",
      "Delivered production-ready system within 2-month internship",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Git"],
  },
  {
    id: 2,
    period: "July 2024 – Sept 2024",
    role: "IT Support & Network Assistant",
    company: "TTCL (Tanzania Telecommunications Corporation)",
    type: "Field Training",
    description:
      "Completed field practical training as an IT Support & Network Assistant. Provided technical support for hardware, software, and connectivity issues while assisting in maintaining reliable IT and network infrastructure.",
    achievements: [
      "Installed and configured telecommunication and networking equipment",
      "Troubleshot hardware, software, and connectivity issues",
      "Maintained reliable IT and network infrastructure",
      "Gained hands-on experience with enterprise networking systems",
      "Provided technical support to multiple departments",
    ],
    tech: ["Networking", "Hardware Troubleshooting", "IT Support", "Telecom Equipment"],
  },
  {
    id: 3,
    period: "July 2023 – Sept 2023",
    role: "Web Application Developer",
    company: "Mwanza City Council",
    type: "Field Training",
    description:
      "Designed and developed a full web-based application system that enabled university students to apply for practical training placements online, replacing manual paperwork with a centralized digital platform.",
    achievements: [
      "Replaced manual paperwork with centralized digital platform",
      "Built responsive frontend using HTML, CSS, and JavaScript",
      "Implemented backend logic with MySQL database integration",
      "Designed form validation and structured data handling",
      "Improved application process efficiency by 80%",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Web Design"],
  },
  {
    id: 4,
    period: "July 2021 – Sept 2021",
    role: "Software Development Team Member",
    company: "University of Dodoma (UDOM)",
    type: "Academic Project",
    description:
      "Participated as a member of software development team contributing to the development of a Prison Management System using HTML, CSS, and JavaScript.",
    achievements: [
      "Collaborated with team members to design system modules",
      "Contributed to application usability improvements",
      "Gained hands-on experience in real-world software development workflows",
      "Learned team collaboration and version control practices",
      "Delivered functional system module within deadline",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Team Collaboration", "MySQL"],
  },
  {
    id: 5,
    period: "2021 - 2025",
    role: "Bachelor of Science in Software Engineering",
    company: "University of Dodoma (UDOM)",
    type: "Education",
    description:
      "Completed comprehensive software engineering degree with focus on full-stack development, databases, and software architecture.",
    achievements: [
      "Developed Prison Management System as team project",
      "Gained strong foundation in software development lifecycle",
      "Completed courses in algorithms, data structures, and system design",
      "Participated in software development team projects",
    ],
    tech: ["Software Engineering", "Algorithms", "Database Systems", "Web Development"],
  },
];

export const services = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development using modern JavaScript technologies. From responsive frontend interfaces to robust backend APIs and database design.",
    icon: "Globe",
    features: [
      "React.js frontend development",
      "Node.js/Express backend APIs",
      "Database design (MySQL, MongoDB, Supabase)",
      "Authentication & authorization",
      "Responsive web design",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Integration",
    description:
      "Integrate machine learning models into web applications for predictive analytics, classification, and data-driven insights.",
    icon: "Brain",
    features: [
      "Scikit-learn model integration",
      "TensorFlow deep learning",
      "Predictive analytics dashboards",
      "Automated reporting (PDF/email)",
      "Async model training pipelines",
    ],
  },
  {
    id: "api-dev",
    title: "RESTful API Development",
    description:
      "Design and implement secure, scalable RESTful APIs for web and mobile applications with proper authentication and documentation.",
    icon: "Plug",
    features: [
      "Node.js/Express API development",
      "JWT authentication & authorization",
      "Role-based access control",
      "API documentation",
      "Third-party API integration",
    ],
  },
  {
    id: "database",
    title: "Database Design & Management",
    description:
      "Design and optimize database schemas for relational and NoSQL databases ensuring data integrity and performance.",
    icon: "Database",
    features: [
      "MySQL and Supabase relational database design",
      "MongoDB NoSQL implementation",
      "Data modeling & normalization",
      "Query optimization",
      "Docker containerization",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native for iOS and Android with offline capabilities.",
    icon: "Smartphone",
    features: [
      "React Native development",
      "Cross-platform (iOS & Android)",
      "API integration",
      "Offline data storage",
      "Push notifications",
    ],
  },
  {
    id: "it-support",
    title: "IT Support & Infrastructure",
    description:
      "Technical support for hardware, software, and network infrastructure with troubleshooting and maintenance expertise.",
    icon: "Wrench",
    features: [
      "Hardware troubleshooting",
      "Network configuration",
      "Software installation & support",
      "System maintenance",
      "Telecom equipment setup",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Kulwa Sylvester Malyango",
    role: "AI Research Assistant - AfriAILab",
    company: "AfriAILab",
    image: "/images/avatar/kulwa.png",
    content:
      "Oscar demonstrated exceptional skills in integrating machine learning models into web applications. His Customer Churn Prediction system showcased strong full-stack capabilities combined with AI expertise. Highly recommended for any software development role.",
    rating: 5,
  },
  {
    id: 2,
    name: "Erick Emmanuel Ndaki",
    role: "ICT Officer - Mwanza City Council",
    company: "Mwanza City Council",
    image: "/images/avatar/erick.png",
    content:
      "During his field training, Oscar developed a Practical Training Placement System that completely transformed our manual process. The system is still in use today and has improved our efficiency by over 80%. His dedication and technical skills are outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Justine Eustace",
    role: "Lecturer - University of Dodoma",
    company: "University of Dodoma",
    image: "/images/avatar/justine.png",
    content:
      "Oscar was one of the most dedicated students in our software engineering program. He integrated a CNN model in the Chicken Disease Detection App which was able to classify the nature of disease using chicken droppings, demonstrated strong teamwork, problem-solving abilities, and a commitment to writing clean, maintainable code. He has great potential as a professional developer.",
    rating: 5,
  },
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
