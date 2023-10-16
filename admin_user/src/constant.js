import Course1 from "./assets/course1.jpg";
import Course2 from "./assets/course2.jpg";

const SIDEBAR_DATA = [
  { label: "Course", value: "" },
  { label: "User", value: "user" },
  { label: "Report", value: "report" },
];

const COURSES = [
  {
    title: "Web Development Fundamentals",
    description:
      "Learn the basics of web development, including HTML, CSS, and JavaScript.",
    price: 49.99,
    image: Course1,
    published: "2023-01-15",
  },
  {
    title: "JavaScript for Beginners",
    description:
      "A beginner-friendly JavaScript course for aspiring web developers.",
    price: 29.99,
    image: Course2,
    published: "2023-02-20",
  },
  {
    title: "React.js Mastery",
    description:
      "Master the popular React.js library and build modern web applications.",
    price: 79.99,
    image: Course1,
    published: "2023-03-10",
  },
  {
    title: "Node.js Backend Development",
    description: "Learn server-side programming with Node.js and build APIs.",
    price: 69.99,
    image: Course2,
    published: "2023-04-05",
  },
  {
    title: "Python for Data Science",
    description:
      "Explore Python's data science libraries and techniques for data analysis.",
    price: 59.99,
    image: Course1,
    published: "2023-05-12",
  },
  {
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native.",
    price: 89.99,
    image: Course2,
    published: "2023-06-08",
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Get started with machine learning and predictive modeling.",
    price: 99.99,
    image: Course1,
    published: "2023-07-20",
  },
  {
    title: "Graphic Design Basics",
    description:
      "Learn the fundamentals of graphic design and create stunning visuals.",
    price: 39.99,
    image: Course2,
    published: "2023-08-15",
  },
  {
    title: "Digital Marketing Strategies",
    description:
      "Master digital marketing techniques to promote your business online.",
    price: 49.99,
    image: Course1,
    published: "2023-09-25",
  },
  {
    title: "Financial Planning and Investing",
    description:
      "Get started with financial planning and smart investing strategies.",
    price: 59.99,
    image: Course2,
    published: "2023-10-10",
  },
];

export { SIDEBAR_DATA, COURSES };
