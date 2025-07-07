import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FaCheckCircle } from "react-icons/fa";

const MyEnrollments = () => {
  const { enrolledCourses } = useContext(AppContext);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Enrollments</h1>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600">You have not enrolled in any course yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 text-left">
              <tr>
                <th className="px-4 py-3 border-b">Course</th>
                <th className="px-4 py-3 border-b">Duration</th>
                <th className="px-4 py-3 border-b">Completed</th>
                <th className="px-4 py-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {/* Flex container inside TD */}
                    <div className="flex items-center gap-4">
                      {course.thumbnail ? (
                        <img
                          src={course.thumbnail}
                          alt={`${course.title} thumbnail`}
                          className="w-20 h-12 object-cover rounded"
                        />
                      ) : (
                        <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                          No Image
                        </div>
                      )}
                      <span className="font-semibold">{course.title}</span>
                    </div>
                  </td>

                  <td className="px-4 py-3">{course.duration || "N/A"}</td>
                  <td className="px-4 py-3">0%</td>
                  <td className="px-4 py-3 text-green-600 font-semibold flex items-center gap-2">
                    <FaCheckCircle /> Enrolled
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyEnrollments;
