import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import {
  FaChalkboardTeacher,
  FaPlusCircle,
  FaBookOpen,
  FaUserGraduate,
} from 'react-icons/fa';

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: <FaChalkboardTeacher /> },
    { name: 'Add Course', path: '/educator/add-course', icon: <FaPlusCircle /> },
    { name: 'My Courses', path: '/educator/my-course', icon: <FaBookOpen /> },
    { name: 'Students Enrolled', path: '/educator/student-enrolled', icon: <FaUserGraduate /> },
  ];

  return isEducator ? (
    <aside className="w-full md:w-64 bg-white h-screen border-r shadow-sm p-4">
      <h2 className="text-xl font-bold text-gray-700 mb-6">Educator Panel</h2>

      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  ) : null;
};

export default Sidebar;
