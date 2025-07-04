import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses } = useContext(AppContext);
  const [course, setCourse] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);

  useEffect(() => {
    const foundCourse = allCourses?.find((c) => c.course_id === id);
    setCourse(foundCourse || null);
  }, [allCourses, id]);

  const toggleChapter = (index) => {
    setActiveChapter(activeChapter === index ? null : index);
  };

  const formatDuration = (minutes) => {
    return humanizeDuration(minutes * 60000, {
      units: ["h", "m"],
      round: true,
    });
  };

  const calculateCourseDuration = (course) => {
    let totalMinutes = 0;
    course.chapters?.forEach((chapter) => {
      chapter.chapterContent?.forEach((lecture) => {
        totalMinutes += lecture.lectureDuration || 0;
      });
    });
    return formatDuration(totalMinutes);
  };

  const calculateNoOfLectures = (course) => {
    return course.chapters?.reduce((sum, chapter) => {
      return sum + (chapter.chapterContent?.length || 0);
    }, 0);
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading...
      </div>
    );
  }

  const {
    title,
    instructor,
    image,
    price,
    discount = 0,
    rating,
    students_enrolled,
    daysLeft,
    whatYouLearn = [],
    chapters = [],
  } = course;

  const finalPrice = ((price * (100 - discount)) / 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 max-w-7xl mx-auto">
      
      {/* Left Panel – Curriculum */}
<div className="bg-white p-6 rounded-2xl shadow-xl">
  <h3 className="text-xl font-bold mb-4">Course Curriculum</h3>
  <div className="space-y-4">
    {chapters.map((chapter, index) => {
      const isOpen = activeChapter === index;
      const totalChapterDuration = chapter.chapterContent?.reduce(
        (sum, lec) => sum + (lec.lectureDuration || 0),
        0
      );

      return (
        <div key={index} className="border rounded-lg">
          {/* Chapter Header */}
          <div
            onClick={() => toggleChapter(index)}
            className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
          >
            <div className="font-semibold">{chapter.chapterTitle}</div>
            
            <div className="flex gap-2">
                              {/* Chapter Summary */}
              <div className="  text-sm text-gray-600 italic">
                 {chapter.chapterContent?.length || 0} lectures
              </div>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>{formatDuration(totalChapterDuration)}</span>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            </div>
          </div>

          {/* Lecture List */}
          {isOpen && (
            <div className="divide-y">
              {chapter.chapterContent?.map((lecture, lecIndex) => (
                <div
                  key={lecIndex}
                  className="px-4 py-2 flex justify-between items-center text-sm"
                >
                    
                  {/* Lecture Title */}
                  <span>{lecture.lectureTitle}</span>
                  

                  {/* Duration & Preview Button */}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">
                      {lecture.lectureDuration} min
                    </span>
                    {lecture.isFreePreview && (
                      <button className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-md font-medium">
                        Preview
                      </button>
                    )}
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      );
    })}
  </div>
</div>


      {/* Right Panel – Course Info */}
      <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">By {instructor}</p>

        <div className="text-gray-700 space-y-2 text-sm">
          <div>📅 {daysLeft} days left</div>
          <div>⏰ {calculateCourseDuration(course)}</div>
          <div>📚 {calculateNoOfLectures(course)} lectures</div>
        </div>

        <div className="flex items-center space-x-3">
          {discount > 0 && (
            <>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold">
                {discount}% OFF
              </span>
              <span className="line-through text-gray-400">${price.toFixed(2)}</span>
            </>
          )}
          <span className="text-3xl font-extrabold text-indigo-600">${finalPrice}</span>
        </div>

        <div className="flex items-center space-x-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              color={i < Math.round(rating) ? "#fbbf24" : "#e5e7eb"}
            />
          ))}
          <span className="text-gray-600 font-medium text-sm">
            {rating.toFixed(1)} / 5
          </span>
        </div>

        <p className="text-gray-600 text-sm">
          {students_enrolled.toLocaleString()} students enrolled
        </p>

        <div>
          <h3 className="text-lg font-semibold">What you'll learn</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            {whatYouLearn.length > 0 ? (
              whatYouLearn.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li>Course content coming soon.</li>
            )}
          </ul>
        </div>

        <button className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
