import { createContext, useEffect, useState } from "react";
import courses from "../assets/dummyCourse";  
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY || '$';
    const navigate = useNavigate();
    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);

    // Load courses from your local dummyCourse.js
    const fetchAllCourses = async () => {
        setAllCourses(courses);
    };

    useEffect(() => {
        fetchAllCourses(); 
    }, []);

    const value = {
        currency,
        allCourses,
        isEducator,
        setIsEducator
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
