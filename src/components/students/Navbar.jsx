import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/images/webdemy-logo.jpg';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const {navigate, isEducator} = useContext(AppContext)
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`w-full flex items-center justify-between px-4 sm:px-8 md:px-14 lg:px-36 py-4 border-b border-gray-300 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/10'
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img onClick={() => navigate('/')}
          src={logo}
          alt="WebDemy Logo"
          className="w-24 lg:w-32 object-contain cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        {user && (
          <>
            <button onClick={() => {navigate('/educator')}} className="hover:text-blue-600 transition-colors duration-200">
              {isEducator ? 'Educator Dashboard' : 'Become Educator' }
            </button>
            <div className="h-5 border-l border-gray-400 mx-2" />
            <Link
              to="/my-enrollments"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              My Enrollments
            </Link>
          </>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-5 py-2 rounded-md shadow-sm"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-3 text-gray-700">
        {user && (
          <>
            <button onClick={() => {navigate('/educator')}} className="hover:text-blue-600 transition-colors duration-200">
              {isEducator ? 'Educator Dashboard' : 'Become Educator' }
            </button>
            <div className="h-5 border-l border-gray-400" />
            <Link
              to="/my-enrollments"
              className="text-sm px-2 py-1 hover:text-blue-600 transition-colors duration-200"
            >
              Enrollments
            </Link>
          </>
        )}

        {
          user ? <UserButton/> :
        <button onClick={() => openSignIn()} className="ml-1">
          <FaUserCircle
            size={24}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          />
        </button>
        }

      </div>
    </div>
  );
};

export default Navbar;
