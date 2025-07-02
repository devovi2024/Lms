import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/webdemy-logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/10'
      }`}
    >
      <div>
        <Link to="/">
          <img className="w-24 lg:w-32 cursor-pointer" src={logo} alt="WebDemy Logo" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-5 text-gray-700 font-medium">
        <div className="flex items-center gap-4">
          <Link to="/educator/dashboard" className="hover:text-blue-600">Become Educator</Link>
          <Link to="/my-enrollments" className="hover:text-blue-600">My Enrollments</Link>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
