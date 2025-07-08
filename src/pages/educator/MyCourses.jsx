import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(allCourses || []);
  }, [allCourses]);

  const calculateEarning = (course) => {
    const discountedPrice = course.price * ((100 - (course.discount || 0)) / 100);
    return discountedPrice * (course.students_enrolled || 0);
  };

  const getPublishedDate = (course) => {
    const daysAgo = course.course_id
      ? parseInt(course.course_id.replace(/\D/g, "")) % 30
      : 0;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date;
  };

  const getStatus = (course) => {
    if (course.daysLeft > 0) return "Active";
    if (course.daysLeft === 0) return "Expired";
    return "Unknown";
  };

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Expired: "bg-red-100 text-red-800",
    Unknown: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">My Courses</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Course
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Earning
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Students
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Published On
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {courses.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-400">
                  No courses found.
                </td>
              </tr>
            ) : (
              courses.map((course) => {
                const status = getStatus(course);
                return (
                  <tr
                    key={course.course_id}
                    className="hover:bg-gray-50 cursor-pointer transition"
                    onClick={() =>
                      window.alert(`Navigate to course: ${course.title}`)
                    }
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.alert(`Navigate to course: ${course.title}`);
                      }
                    }}
                    role="button"
                    aria-label={`View details for course ${course.title}`}
                  >
                    <td className="px-6 py-4 flex items-center space-x-4 min-w-0">
                      <img
                        src={course.image || "/placeholder-course.png"}
                        alt={course.title}
                        className="w-24 h-14 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-gray-900 font-semibold truncate">
                          {course.title}
                        </p>
                        <p className="text-gray-500 text-sm truncate">
                          {course.instructor}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-green-600 font-semibold whitespace-nowrap">
                      {currency}
                      {calculateEarning(course).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700 font-medium whitespace-nowrap">
                      {course.students_enrolled || 0}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-500 text-sm whitespace-nowrap">
                      {getPublishedDate(course).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColors[status]}`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List */}
      <div className="md:hidden space-y-6">
        {courses.length === 0 ? (
          <p className="text-center text-gray-400">No courses found.</p>
        ) : (
          courses.map((course) => {
            const status = getStatus(course);
            return (
              <div
                key={course.course_id}
                className="bg-white rounded-lg shadow p-4 flex space-x-4 cursor-pointer hover:shadow-lg transition"
                onClick={() =>
                  window.alert(`Navigate to course: ${course.title}`)
                }
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.alert(`Navigate to course: ${course.title}`);
                  }
                }}
                role="button"
                aria-label={`View details for course ${course.title}`}
              >
                <img
                  src={course.image || "/placeholder-course.png"}
                  alt={course.title}
                  className="w-28 h-20 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex flex-col flex-grow min-w-0">
                  <h2 className="text-lg font-semibold text-gray-900 truncate">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-sm truncate">
                    {course.instructor}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
                    <span>
                      <strong>Earning:</strong> {currency}
                      {calculateEarning(course).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <span>
                      <strong>Students:</strong> {course.students_enrolled || 0}
                    </span>
                    <span>
                      <strong>Published:</strong>{" "}
                      {getPublishedDate(course).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColors[status]}`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyCourses;
