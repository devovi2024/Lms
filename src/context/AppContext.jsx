import { createContext, useEffect, useState } from "react";
import courses from "../assets/dummyCourse";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Load all dummy courses once on mount
  useEffect(() => {
    setAllCourses(courses);
  }, []);

  // Enroll all courses for demo
  useEffect(() => {
    setEnrolledCourses(courses);
  }, []);

  // Calculate total duration (in minutes) for all chapters in a course
  const calculateChaptertime = (course) => {
    if (!course?.chapters) return 0;

    return course.chapters.reduce((courseSum, chapter) => {
      const chapterSum = chapter.chapterContent?.reduce(
        (lecSum, lecture) => lecSum + (lecture.lectureDuration || 0),
        0
      );
      return courseSum + (chapterSum || 0);
    }, 0);
  };

  const value = {
    currency,
    allCourses,
    isEducator,
    setIsEducator,
    enrolledCourses,
    setEnrolledCourses,
    calculateChaptertime,
    navigate,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
