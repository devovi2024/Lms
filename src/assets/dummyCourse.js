const courses = [
  {
    course_id: "mern101",
    title: "MERN Stack Fundamentals",
    instructor: "Dr. Mohammad Deif",
    image: "/images/mern101.jpg",
    description: `
Master the MERN Stack (MongoDB, Express, React, Node.js) from scratch with a complete, structured, and project-based approach. This course is ideal for absolute beginners and intermediate developers looking to become full-stack JavaScript developers.

🔹 What you'll learn:
- Understand how each part of the MERN stack works individually and together
- Learn how to set up and configure MongoDB, Express.js, React, and Node.js step-by-step
- Build real-world applications using RESTful APIs and modern frontend techniques
- Implement user authentication using JSON Web Tokens (JWT) and sessions
- Use Mongoose for MongoDB schema design and data validation
- Create dynamic and interactive React applications with routing and state management
- Handle file uploads, image storage, and data filtering
- Apply best practices for folder structure, modular code, and deployment strategies
- Learn to debug, test, and optimize full-stack apps

🧠 Who this course is for:
- Aspiring full-stack developers with basic HTML/CSS/JS knowledge
- Backend developers looking to learn React
- Frontend developers wanting to master backend with Node and Express
- Anyone who wants to build and deploy production-grade web apps

🚀 Projects you’ll build:
- Full-featured blog application with login/logout
- REST API server for product listings and user authentication
- Admin dashboard to manage users and data
- To-do app with React frontend and Express backend
- MongoDB data explorer using Mongoose

🛠 Tools & Technologies:
- MongoDB Atlas, Compass
- Express.js, Postman, REST API
- React (Hooks, Router DOM, useState/useEffect)
- Node.js, npm, dotenv, cors
- Mongoose, JWT, bcrypt, multer

📚 Course highlights:
- 10+ hours of HD video content
- Lifetime access and downloadable resources
- Assignments and quizzes for each chapter
- Certificate of completion
- Q&A and instructor support available

By the end of this course, you'll have the confidence and skills to build and deploy full-stack applications using MERN architecture and apply for junior to mid-level full-stack developer roles.
    `,
    price: 59.99,
    discount: 15,
    reviews: 122,
    category: "Web Development",
    language: "English",
    rating: 4.7,
    students_enrolled: 1500,
    chapters: [
      {
        chapter_id: "ch1",
        order: 1,
        title: "Introduction to MERN",
        greeting: "Welcome to the MERN Stack!",
        content: [
          {
            lecture_id: "lec1",
            title: "Course Overview",
            duration: "6:00",
            isFree: true,
            isPreview: true,
            videoUrl: "https://cdn.course.com/mern101/lec1.mp4",
            views: 800,
            tags: ["introduction", "overview"],
          },
        ],
      },
      {
        chapter_id: "ch2",
        order: 2,
        title: "MongoDB Essentials",
        greeting: "Dive into the NoSQL database!",
        content: [
          {
            lecture_id: "lec2",
            title: "MongoDB Collections",
            duration: "7:30",
            isFree: false,
            videoUrl: "https://cdn.course.com/mern101/lec2.mp4",
            views: 650,
            tags: ["mongodb", "collections"],
          },
        ],
      },
      {
        chapter_id: "ch3",
        order: 3,
        title: "Express & API Setup",
        greeting: "Time to build RESTful APIs!",
        content: [
          {
            lecture_id: "lec3",
            title: "Creating Your First Route",
            duration: "9:00",
            isFree: false,
            videoUrl: "https://cdn.course.com/mern101/lec3.mp4",
            views: 700,
            tags: ["express", "routes"],
          },
        ],
      },
    ],
  },
  // ... other courses unchanged
  {
    course_id: "react201",
    title: "Advanced React Patterns",
    instructor: "Jane Smith",
    image: "/images/react201.jpg",
    description: "Master React Hooks, Context, and performance optimization.",
    price: 79.99,
    discount: 20,
    reviews: 210,
    category: "Frontend Development",
    language: "English",
    rating: 4.8,
    students_enrolled: 1800,
    chapters: [
      {
        chapter_id: "ch1",
        order: 1,
        title: "Hooks Deep Dive",
        greeting: "Welcome to Advanced React!",
        content: [
          {
            lecture_id: "lec1",
            title: "Understanding useEffect",
            duration: "8:00",
            isFree: true,
            videoUrl: "https://cdn.course.com/react201/lec1.mp4",
            views: 950,
            tags: ["hooks", "useEffect"],
          },
        ],
      },
      {
        chapter_id: "ch2",
        order: 2,
        title: "Context API",
        greeting: "Avoid prop drilling!",
        content: [
          {
            lecture_id: "lec2",
            title: "React Context Usage",
            duration: "10:00",
            isFree: false,
            videoUrl: "https://cdn.course.com/react201/lec2.mp4",
            views: 870,
            tags: ["context", "global state"],
          },
        ],
      },
      {
        chapter_id: "ch3",
        order: 3,
        title: "Performance Optimization",
        greeting: "Speed up your React apps!",
        content: [
          {
            lecture_id: "lec3",
            title: "Memo & useCallback",
            duration: "9:45",
            isFree: false,
            videoUrl: "https://cdn.course.com/react201/lec3.mp4",
            views: 790,
            tags: ["performance", "memo"],
          },
        ],
      },
    ],
  },
  {
    course_id: "node301",
    title: "Node.js API Development",
    instructor: "Michael Johnson",
    image: "/images/node301.jpg",
    description: "Build RESTful APIs with Express and Node.js.",
    price: 69.99,
    discount: 10,
    reviews: 185,
    category: "Backend Development",
    language: "English",
    rating: 4.6,
    students_enrolled: 1200,
    chapters: [
      {
        chapter_id: "ch1",
        order: 1,
        title: "Intro to Express.js",
        greeting: "Let’s build powerful APIs!",
        content: [
          {
            lecture_id: "lec1",
            title: "Setting Up Express",
            duration: "7:30",
            isFree: false,
            videoUrl: "https://cdn.course.com/node301/lec1.mp4",
            views: 600,
            tags: ["express", "setup"],
          },
        ],
      },
      {
        chapter_id: "ch2",
        order: 2,
        title: "Routing & Middleware",
        greeting: "Control your server flow!",
        content: [
          {
            lecture_id: "lec2",
            title: "Custom Middleware",
            duration: "8:10",
            isFree: false,
            videoUrl: "https://cdn.course.com/node301/lec2.mp4",
            views: 580,
            tags: ["middleware", "routing"],
          },
        ],
      },
      {
        chapter_id: "ch3",
        order: 3,
        title: "CRUD Operations",
        greeting: "Build real-world APIs",
        content: [
          {
            lecture_id: "lec3",
            title: "Update & Delete Endpoints",
            duration: "10:30",
            isFree: false,
            videoUrl: "https://cdn.course.com/node301/lec3.mp4",
            views: 540,
            tags: ["api", "crud"],
          },
        ],
      },
    ],
  },
  {
    course_id: "js101",
    title: "JavaScript Essentials",
    instructor: "Emily Chen",
    image: "/images/js101.jpg",
    description: "Get started with JavaScript fundamentals and problem-solving.",
    price: 39.99,
    discount: 0,
    reviews: 300,
    category: "Programming",
    language: "English",
    rating: 4.5,
    students_enrolled: 3000,
    chapters: [
      {
        chapter_id: "ch1",
        order: 1,
        title: "Variables & Data Types",
        greeting: "Start with the basics!",
        content: [
          {
            lecture_id: "lec1",
            title: "What is JavaScript?",
            duration: "5:45",
            isFree: true,
            videoUrl: "https://cdn.course.com/js101/lec1.mp4",
            views: 1050,
            tags: ["javascript", "basics"],
          },
        ],
      },
      {
        chapter_id: "ch2",
        order: 2,
        title: "Functions & Scope",
        greeting: "Understand how JS works!",
        content: [
          {
            lecture_id: "lec2",
            title: "Function Declarations",
            duration: "7:20",
            isFree: false,
            videoUrl: "https://cdn.course.com/js101/lec2.mp4",
            views: 980,
            tags: ["functions", "scope"],
          },
        ],
      },
      {
        chapter_id: "ch3",
        order: 3,
        title: "Loops & Arrays",
        greeting: "Handle collections efficiently!",
        content: [
          {
            lecture_id: "lec3",
            title: "For Loops in Action",
            duration: "6:50",
            isFree: false,
            videoUrl: "https://cdn.course.com/js101/lec3.mp4",
            views: 890,
            tags: ["loops", "arrays"],
          },
        ],
      },
    ],
  },
  {
    course_id: "db202",
    title: "MongoDB for Developers",
    instructor: "Raj Patel",
    image: "/images/db202.jpg",
    description: "Learn how to model data and use MongoDB in real projects.",
    price: 49.99,
    discount: 5,
    reviews: 134,
    category: "Database",
    language: "English",
    rating: 4.4,
    students_enrolled: 900,
    chapters: [
      {
        chapter_id: "ch1",
        order: 1,
        title: "MongoDB Basics",
        greeting: "Let’s learn MongoDB!",
        content: [
          {
            lecture_id: "lec1",
            title: "NoSQL vs SQL",
            duration: "9:10",
            isFree: true,
            videoUrl: "https://cdn.course.com/db202/lec1.mp4",
            views: 500,
            tags: ["mongodb", "nosql"],
          },
        ],
      },
      {
        chapter_id: "ch2",
        order: 2,
        title: "Schema Design",
        greeting: "Structure your data smartly!",
        content: [
          {
            lecture_id: "lec2",
            title: "Embedding vs Referencing",
            duration: "8:40",
            isFree: false,
            videoUrl: "https://cdn.course.com/db202/lec2.mp4",
            views: 460,
            tags: ["schema", "design"],
          },
        ],
      },
      {
        chapter_id: "ch3",
        order: 3,
        title: "Mongoose Integration",
        greeting: "Use ODM like a pro!",
        content: [
          {
            lecture_id: "lec3",
            title: "Connecting with Mongoose",
            duration: "7:30",
            isFree: false,
            videoUrl: "https://cdn.course.com/db202/lec3.mp4",
            views: 420,
            tags: ["mongoose", "mongodb"],
          },
        ],
      },
    ],
  },
];

export default courses;
