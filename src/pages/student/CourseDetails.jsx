import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import humanizeDuration from "humanize-duration";

// Utility to extract YouTube video ID
const extractVideoId = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  } catch {
    return null;
  }
};

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses } = useContext(AppContext);
  const [course, setCourse] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(true);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const foundCourse = allCourses?.find((c) => c.course_id === id);
    setCourse(foundCourse || null);
  }, [allCourses, id]);

  const toggleChapter = (index) => {
    setActiveChapter(activeChapter === index ? null : index);
  };

  const formatDuration = (minutes) =>
    humanizeDuration(minutes * 60000, { units: ["h", "m"], round: true });

  const calculateCourseDuration = (course) =>
    formatDuration(
      course.chapters?.reduce(
        (total, ch) =>
          total +
          (ch.chapterContent?.reduce(
            (sum, lec) => sum + (lec.lectureDuration || 0),
            0
          ) || 0),
        0
      )
    );

  const calculateNoOfLectures = (course) =>
    course.chapters?.reduce(
      (sum, ch) => sum + (ch.chapterContent?.length || 0),
      0
    );

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading course details...
      </div>
    );
  }

  const {
    title,
    instructor,
    thumbnail,
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
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: Curriculum */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-5 text-gray-800">Course Curriculum</h3>
        <div className="space-y-4">
          {chapters.map((chapter, index) => {
            const isOpen = activeChapter === index;
            const chapterDuration = chapter.chapterContent?.reduce(
              (sum, lec) => sum + (lec.lectureDuration || 0),
              0
            );

            return (
              <div key={index} className="border rounded-xl">
                <div
                  onClick={() => toggleChapter(index)}
                  className="flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-t-xl"
                >
                  <div className="font-semibold text-gray-700">{chapter.chapterTitle}</div>
                  <div className="flex gap-3 text-sm text-gray-500 items-center">
                    <span>{chapter.chapterContent?.length || 0} lectures</span>
                    <span>{formatDuration(chapterDuration)}</span>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {isOpen && (
                  <div className="divide-y">
                    {chapter.chapterContent?.map((lecture, lecIndex) => (
                      <div
                        key={lecIndex}
                        className="flex justify-between items-center px-4 py-2 text-sm"
                      >
                        <span className="text-gray-800">{lecture.lectureTitle}</span>
                        <div className="flex gap-2 items-center">
                          <span className="text-gray-500">
                            {lecture.lectureDuration} min
                          </span>
                          {lecture.isFreePreview && (
                            <button
                              onClick={() =>
                                setPlayerData({
                                  videoId: extractVideoId(lecture.videoUrl),
                                  title: lecture.lectureTitle,
                                })
                              }
                              className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded font-medium"
                            >
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

      {/* Right: Course Info */}
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Video/Thumbnail */}
        <div className="rounded-xl overflow-hidden shadow-md">
          {playerData?.videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${playerData.videoId}`}
              className="w-full h-64 rounded-xl"
              title="Lecture Preview"
              allowFullScreen
            />
          ) : (
            <img
              src={thumbnail || "https://via.placeholder.com/600x300"}
              alt={title}
              className="w-full h-64 object-cover rounded-xl"
            />
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">Instructor: {instructor}</p>

        <div className="text-sm text-gray-700 space-y-1">
          <div>📅 {daysLeft} days left</div>
          <div>⏰ {calculateCourseDuration(course)}</div>
          <div>📚 {calculateNoOfLectures(course)} lectures</div>
        </div>

        <div className="flex items-center space-x-3">
          {discount > 0 && (
            <>
              <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded font-bold">
                {discount}% OFF
              </span>
              <span className="line-through text-gray-400 text-sm">
                ${price.toFixed(2)}
              </span>
            </>
          )}
          <span className="text-3xl font-extrabold text-indigo-600">${finalPrice}</span>
        </div>

        <div className="flex items-center gap-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < Math.round(rating) ? "#fbbf24" : "#e5e7eb"} />
          ))}
          <span className="text-sm text-gray-600 font-medium">{rating.toFixed(1)} / 5</span>
        </div>

        <p className="text-sm text-gray-500">
          {students_enrolled.toLocaleString()} students enrolled
        </p>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">What you'll learn</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            {whatYouLearn.length > 0 ? (
              whatYouLearn.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li>Course content coming soon.</li>
            )}
          </ul>
        </div>

        <button className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition">
          {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
