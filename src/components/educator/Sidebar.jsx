import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import {
  FaChalkboardTeacher,
  FaPlusCircle,
  FaBookOpen,
  FaUserGraduate,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: <FaChalkboardTeacher /> },
    { name: "Add Course", path: "/educator/add-course", icon: <FaPlusCircle /> },
    { name: "My Courses", path: "/educator/my-courses", icon: <FaBookOpen /> },
    { name: "Students Enrolled", path: "/educator/student-enrolled", icon: <FaUserGraduate /> },
  ];

  if (!isEducator) return null;

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md text-gray-700 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r shadow-md p-6
          transform transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col md:w-64
        `}
        aria-label="Educator Sidebar"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Educator Panel</h2>

        <nav className="flex flex-col space-y-3" role="navigation" aria-label="Educator menu">
          {menuItems.map(({ name, path, icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-colors
                ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
              end
              onClick={() => setIsOpen(false)} // Close sidebar on mobile nav
            >
              <span className="text-lg">{icon}</span>
              <span className="truncate">{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Blur + dim overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleSidebar}
          aria-hidden="true"
          role="presentation"
        />
      )}
    </>
  );
};

export default Sidebar;
