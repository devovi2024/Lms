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
    className="ml-3 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    title="Clear Search"
  >
    <FiX className="h-6 w-6 text-gray-600 cursor-pointer" />
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Course List</h1>
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

      {input && (
        <div className="flex items-center text-gray-700 mb-6">
          <p className="text-sm font-medium">
            Showing results for: <span className="font-semibold">{input}</span>
          </p>
          <ClearIcon onClick={() => navigate('/course-list')} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourse.length > 0 ? (
          filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No courses found.</p>
        )}
      </div>

    </div>


    <Footer/>
    </>

  );
};

export default CoursesList;
