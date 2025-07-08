import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { dummyDashboardData } from "../../assets/educator/educatorDashboardData";
import { FaBookOpen, FaUsers, FaDollarSign, FaSearch, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDashboardData(dummyDashboardData);
  }, []);

  // Filter students by search term
  const filteredStudents = dashboardData?.enrolledStudentsData.filter(({ student, courseTitle }) => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        📊 Educator Dashboard
        <FaChartLine className="text-green-500" />
      </h1>

      {dashboardData ? (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <SummaryCard
              icon={<FaBookOpen className="text-blue-500 text-4xl" />}
              title="Total Courses"
              value={dashboardData.totalCourses}
            />
            <SummaryCard
              icon={<FaUsers className="text-green-500 text-4xl" />}
              title="Total Students"
              value={dashboardData.enrolledStudentsData.length}
            />
            <SummaryCard
              icon={<FaDollarSign className="text-yellow-500 text-4xl" />}
              title="Total Earnings"
              value={`${currency}${dashboardData.totalEarnings.toLocaleString()}`}
            />
          </div>

          {/* Earnings by Course */}
          <EarningsByCourse earnings={dashboardData.earningsByCourse} currency={currency} />

          {/* Search Bar for Students */}
          <div className="mb-6 flex items-center gap-2 max-w-md mx-auto">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search students or courses..."
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Latest Enrolled Students */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">👥 Latest Enrolled Students</h2>

            {filteredStudents.length === 0 ? (
              <p className="text-center text-gray-500 py-6">No students found.</p>
            ) : (
              filteredStudents.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-t py-3 hover:bg-blue-50 rounded transition"
                >
                  {/* Student Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.student.imageUrl}
                      alt={item.student.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.student.name}</p>
                      <p className="text-xs text-gray-500">ID: {item.student._id}</p>
                    </div>
                  </div>

                  {/* Course Title and Progress */}
                  <div className="flex flex-col items-end">
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded">
                      {item.courseTitle}
                    </span>
                    <ProgressBar progress={item.progress} />
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <div className="text-center mt-20">
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </div>
      )}
    </div>
  );
};

const SummaryCard = ({ icon, title, value }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer">
    {icon}
    <div>
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-900 text-lg font-medium">{value}</p>
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-32 h-3 bg-gray-200 rounded-full mt-1">
    <div
      className="h-3 rounded-full bg-green-500 transition-all"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const EarningsByCourse = ({ earnings, currency }) => {
  if (!earnings || earnings.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-12 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">💰 Earnings by Course</h2>
      <ul className="divide-y divide-gray-200">
        {earnings.map((item, idx) => (
          <li key={idx} className="flex justify-between py-3">
            <span className="font-medium text-gray-700">{item.courseTitle}</span>
            <span className="font-semibold text-yellow-600">
              {currency}
              {item.earning.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
