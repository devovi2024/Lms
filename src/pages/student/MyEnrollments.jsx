import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Progress bar component
const ProgressBar = ({ completed, total }) => {
  const progress = total > 0 ? (completed / total) * 100 : 0;
  const validProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="space-y-1">
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-700 ease-in-out"
          style={{
            width: `${validProgress}%`,
            background: "linear-gradient(90deg, #4ade80, #16a34a)",
          }}
        ></div>
      </div>
      <p className="text-xs text-center text-gray-600 font-medium">
        {completed} / {total} lectures
      </p>
    </div>
  );
};

const MyEnrollments = () => {
  const { enrolledCourses } = useContext(AppContext);
  const navigate = useNavigate();

  const [progressArray] = useState([
    { lectureComplete: 2, totalLectures: 4 },
    { lectureComplete: 5, totalLectures: 10 },
    { lectureComplete: 3, totalLectures: 6 },
    { lectureComplete: 1, totalLectures: 5 },
    { lectureComplete: 7, totalLectures: 7 },
    { lectureComplete: 0, totalLectures: 8 },
    { lectureComplete: 4, totalLectures: 9 },
    { lectureComplete: 6, totalLectures: 12 },
    { lectureComplete: 2, totalLectures: 3 },
    { lectureComplete: 8, totalLectures: 10 },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        My Enrollments
      </h1>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600 text-sm">
          You have not enrolled in any course yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-100 text-gray-700 text-left text-sm">
              <tr>
                <th className="px-4 py-3 border-b">Course</th>
                <th className="px-4 py-3 border-b">Duration</th>
                <th className="px-4 py-3 border-b">Progress</th>
                <th className="px-4 py-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course, index) => {
                const progress = progressArray[index] || {
                  lectureComplete: 0,
                  totalLectures: 1,
                };

                return (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    {/* Course Info */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        {course.thumbnail ? (
                          <img
                            src={course.thumbnail}
                            alt="Course"
                            className="w-20 h-14 rounded-lg object-cover shadow-sm"
                          />
                        ) : (
                          <div className="w-20 h-14 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}
                        <span className="font-semibold text-gray-800">
                          {course.title}
                        </span>
                      </div>
                    </td>

                    {/* Duration */}
                    <td className="px-4 py-4 text-gray-600">
                      {course.duration || "N/A"}
                    </td>

                    {/* Progress bar */}
                    <td className="px-4 py-4 w-48">
                      <ProgressBar
                        completed={progress.lectureComplete}
                        total={progress.totalLectures}
                      />
                    </td>

                    {/* Status Button */}
                    <td className="px-4 py-4">
                      <button
                        onClick={() => navigate(`/player/${course.id}`)}
                        className={`flex items-center gap-2 font-semibold text-sm px-3 py-1.5 rounded-lg shadow-sm
                          ${
                            progress.lectureComplete ===
                            progress.totalLectures
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                          }
                          transition duration-300
                        `}
                      >
                        {progress.lectureComplete === progress.totalLectures ? (
                          <>
                            <FaCheckCircle /> Completed
                          </>
                        ) : (
                          "Continue"
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyEnrollments;
