import React from 'react';
import CourseCard from './CourseCard';
const courses = [
  {
    id: 1,
    title: 'Build Text to Image SaaS App in React JS',
    author: 'Richard James',
    rating: 4.5,
    reviews: 122,
    price: 10.99,
    discount: 20, // 20% discount
    image: '/images/course1.png',
  },
  {
    id: 2,
    title: 'Build AI BG Removal SaaS App in React JS',
    author: 'Richard James',
    rating: 4.5,
    reviews: 122,
    price: 10.99,
    discount: 10,
    image: '/images/course2.png',
  },
  {
    id: 3,
    title: 'React Router Complete Course in One Video',
    author: 'Richard James',
    rating: 4.5,
    reviews: 122,
    price: 10.99,
    discount: 30,
    image: '/images/course3.png',
  },
  {
    id: 4,
    title: 'Build Full Stack E-Commerce App in React JS',
    author: 'Richard James',
    rating: 4.5,
    reviews: 122,
    price: 10.99,
    discount: 15,
    image: '/images/course4.png',
  },
];


export default function CourseSection() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Learn from the best</h2>
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
        Discover our top-rated courses across various categories. From coding and design to
        business and wellness, our courses are crafted to deliver results.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <button className="mt-10 px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
        Show all courses
      </button>
    </div>
  );
}
