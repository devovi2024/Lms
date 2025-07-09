import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';

import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/students/Navbar';
import Loading from './components/students/Loading';

const App = () => {
  const { pathname } = useLocation();
  const isEducatorRoute = pathname.startsWith('/educator');

  const [showLoading, setShowLoading] = useState(pathname === '/');

  useEffect(() => {
    if (pathname === '/') {
      const timer = setTimeout(() => setShowLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-default">
      {showLoading && <Loading />}

      {!isEducatorRoute && <Navbar />}

      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />

        {/* Educator Routes */}
        <Route path="/educator" element={<Educator />}>
          <Route index element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
