// import { createContext, useEffect, useState } from "react";
// import courses from "../assets/dummyCourse";  
// import { useNavigate } from "react-router-dom";

// export const AppContext = createContext();

// export const AppContextProvider = (props) => {
//     const currency = import.meta.env.VITE_CURRENCY || '$';
//     const navigate = useNavigate();
//     const [allCourses, setAllCourses] = useState([]);
//     const [isEducator, setIsEducator] = useState(true);
//     const [enrolledCourses, setEnrolledCourses] = useState([])

//     // Load courses from your local dummyCourse.js
//     const fetchAllCourses = async () => {
//         setAllCourses(courses);
//     };

//     useEffect(() => {
//         fetchAllCourses(); 
//     }, []);

//     const value = {
//         currency,
//         allCourses,
//         isEducator,
//         setIsEducator, 
//         enrolledCourses, setEnrolledCourses
//     };

//     const fetchEnrolledCouyrses = async () =>{
//         setEnrolledCourses()
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     );
// };


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

  // Load all dummy courses
  useEffect(() => {
    setAllCourses(courses);
  }, []);

  // Simulated fetching enrolled courses
  const fetchEnrolledCourses = async () => {
    // For now, assume user enrolled in first two courses
    const enrolled = courses.slice(0, 2);
    setEnrolledCourses(enrolled);
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    isEducator,
    setIsEducator,
    enrolledCourses,
    setEnrolledCourses,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
