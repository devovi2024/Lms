import React from 'react';
import { Outlet } from 'react-router-dom';
import EducatorNavbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';
import Footer from '../../components/educator/Footer';

const Educator = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 bg-white z-50 shadow-md">
        <EducatorNavbar />
      </header>

      <div className="flex flex-1">
        <div className="hidden md:block w-64 border-r bg-white shadow-sm">
          <Sidebar />
        </div>

        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      <Footer/>
    </div>
  );
};

export default Educator;
