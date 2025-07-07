import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import SearchBar from '../../components/students/SearchBar';
import CourseCard from '../../components/students/CourseCard';
import { AppContext } from '../../context/AppContext';
import Footer from '../../components/students/Footer';

const ClearIcon = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Clear search"
    className="ml-2 p-1 rounded-full hover:bg-gray-100 transition"
    title="Clear Search"
  >
    <FiX className="h-5 w-5 text-gray-500" />
  </button>
);

const CoursesList = () => {
  const navigate = useNavigate();
  const { allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();
      if (input) {
        setFilteredCourse(
          tempCourses.filter((item) =>
            item.title.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setFilteredCourse(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Heading & Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Available Courses</h1>
            <p className="text-sm text-gray-500 mt-1">
              <span
                onClick={() => navigate('/')}
                className="text-indigo-600 cursor-pointer hover:underline"
              >
                Home
              </span>{' '}
              / <span className="text-gray-400">Course List</span>
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <SearchBar data={input} />
          </div>
        </div>

        {/* Search Filter Info */}
        {input && (
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span>
              Showing results for: <span className="font-semibold text-gray-800">{input}</span>
            </span>
            <ClearIcon onClick={() => navigate('/course-list')} />
          </div>
        )}

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourse.length > 0 ? (
            filteredCourse.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">
              No courses found.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CoursesList;
