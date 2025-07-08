import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { dummyDashboardData } from "../../assets/educator/educatorDashboardData";
import {
  FaBookOpen,
  FaUsers,
  FaDollarSign,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDashboardData(dummyDashboardData);
  }, []);

  const filteredStudents = dashboardData?.enrolledStudentsData.filter(
    ({ student, courseTitle }) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        📊 Educator Dashboard <FaChartLine className="text-green-500" />
      </h1>

      {dashboardData ? (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <SummaryCard
              icon={<FaBookOpen className="text-blue-500 text-3xl" />}
              title="Total Courses"
              value={dashboardData.totalCourses}
            />
            <SummaryCard
              icon={<FaUsers className="text-green-500 text-3xl" />}
              title="Total Students"
              value={dashboardData.enrolledStudentsData.length}
            />
            <SummaryCard
              icon={<FaDollarSign className="text-yellow-500 text-3xl" />}
              title="Total Earnings"
              value={`${currency}${dashboardData.totalEarnings.toLocaleString()}`}
            />
          </div>

          {/* Search */}
          <div className="mb-4 flex items-center gap-2 max-w-md">
            <FaSearch className="text-gray-400" />
            <input
              type="search"
              placeholder="Search students or courses..."
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Enrolled Students */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">👥 Latest Enrolled Students</h2>

            {filteredStudents.length === 0 ? (
              <p className="text-center text-gray-500 py-6">No students found.</p>
            ) : (
              <ul className="space-y-4">
                {filteredStudents.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-3 border border-gray-100 rounded-lg hover:bg-blue-50 transition"
                  >
                    {/* Student Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={item.student.imageUrl}
                        alt={item.student.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {item.student.name}
                        </p>
                        <p className="text-xs text-gray-500">ID: {item.student._id}</p>
                      </div>
                    </div>

                    {/* Course Title & Progress */}
                    <div className="flex flex-col sm:items-end items-start gap-1 w-full sm:w-auto">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {item.courseTitle}
                      </span>
                      <ProgressBar progress={item.progress} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </div>
      )}
    </div>
  );
};

// Summary Card
const SummaryCard = ({ icon, title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 flex items-center gap-3">
    {icon}
    <div>
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

// Progress Bar
const ProgressBar = ({ progress }) => (
  <div className="w-full sm:w-32 h-2 bg-gray-200 rounded-full">
    <div
      className="h-2 bg-green-500 rounded-full transition-all"
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default Dashboard;
