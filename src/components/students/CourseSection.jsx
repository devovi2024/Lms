import React, { useContext } from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

export default function CourseSection() {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Learn from the best</h2>
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
        Discover our top-rated courses across various categories. From coding and design to
        business and wellness, our courses are crafted to deliver results.
      </p>

      {Array.isArray(allCourses) && allCourses.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allCourses.slice(0, 4).map((course, index) => (
            <CourseCard key={course.id || index} course={course} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-gray-400">No courses found.</p>
      )}

      <div className="mt-10">
        <Link
          to="/course-list"
          className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
}
