import React from 'react';
import { Outlet } from 'react-router-dom';
import EducatorNavbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';
import Footer from '../../components/educator/Footer';

const Educator = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar always sticky on top */}
      <header className="sticky top-0 bg-white z-50 shadow-md">
        <EducatorNavbar />
      </header>

      {/* Content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar handles its own responsive visibility and positioning */}
        <Sidebar />

        {/* Main content: grow to fill available space */}
        <main className="flex-1 overflow-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Educator;
