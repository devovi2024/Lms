import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams, useNavigate } from "react-router-dom";
import { FaChevronUp, FaChevronDown, FaCheckCircle } from "react-icons/fa";
import Ratting from "../../components/students/Ratting";

const Player = () => {
  const { enrolledCourses } = useContext(AppContext);
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [completedLectures, setCompletedLectures] = useState([]);

  useEffect(() => {
    const found = enrolledCourses.find(
      (course) => String(course._id) === String(courseId)
    );
    setCourseData(found || null);
    setPlayerData(null);
    setActiveChapter(null);
    setCompletedLectures([]);
  }, [courseId, enrolledCourses]);

  const toggleChapter = (index) => {
    setActiveChapter((prev) => (prev === index ? null : index));
  };

  const formatDuration = (duration) => {
    if (!duration) return "0 min";
    const hrs = Math.floor(duration / 60);
    const mins = duration % 60;
    return `${hrs > 0 ? hrs + " hr " : ""}${mins} min`;
  };

  const extractVideoId = (url) => {
    if (!url) return null;

    // For YouTube URL with watch?v=ID
    const youtubeMatch = url.match(/v=([^&]+)/);
    if (youtubeMatch) return youtubeMatch[1];

    // For short YouTube URL like youtu.be/ID
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) return shortMatch[1];

    return null;
  };

  const markAsDone = (chapterIndex, lecIndex) => {
    const key = `${chapterIndex}-${lecIndex}`;
    if (!completedLectures.includes(key)) {
      setCompletedLectures((prev) => [...prev, key]);
    }
  };

  const getTotalLectures = () =>
    courseData?.chapters?.reduce(
      (sum, ch) => sum + ch.chapterContent.length,
      0
    );

  const getCompletedCount = () => completedLectures.length;

  if (!courseData) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading course data...
      </div>
    );
  }

  const chapters = courseData.chapters || [];
  const totalLectures = getTotalLectures();
  const completedCount = getCompletedCount();
  const progressPercent = totalLectures
    ? Math.round((completedCount / totalLectures) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6">
      {/* Left Column: Curriculum */}
      <div className="lg:w-1/2 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {courseData.title}
            </h2>
            <p
              className="text-sm text-indigo-600 hover:underline cursor-pointer mt-1"
              onClick={() => navigate("/my-enrollments")}
            >
              ← Back to My Enrollments
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="mb-4">
            <div className="flex justify-between mb-1 text-sm text-gray-600 font-medium">
              <span>Progress</span>
              <span>
                {completedCount}/{totalLectures} completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Course Curriculum
          </h3>
          <div className="space-y-4">
            {chapters.map((chapter, index) => {
              const isOpen = activeChapter === index;
              const totalTime = chapter.chapterContent?.reduce(
                (sum, lec) => sum + (lec.lectureDuration || 0),
                0
              );

              return (
                <div key={index} className="border rounded-lg">
                  <div
                    onClick={() => toggleChapter(index)}
                    className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 px-4 py-3 cursor-pointer transition"
                  >
                    <span className="font-medium text-gray-800">
                      {chapter.chapterTitle}
                    </span>
                    <div className="text-sm text-gray-600 flex items-center gap-3">
                      <span>{chapter.chapterContent.length} lectures</span>
                      <span>{formatDuration(totalTime)}</span>
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="divide-y divide-gray-200">
                      {chapter.chapterContent.map((lec, lecIndex) => {
                        const key = `${index}-${lecIndex}`;
                        const isDone = completedLectures.includes(key);

                        return (
                          <div
                            key={lecIndex}
                            className="px-4 py-2 flex justify-between items-center text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`${
                                  isDone ? "line-through text-gray-400" : ""
                                }`}
                              >
                                {lec.lectureTitle}
                              </span>
                              {isDone && (
                                <FaCheckCircle className="text-green-500" />
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{lec.lectureDuration} min</span>

                              {lec.isFreePreview && (
                                <button
                                  onClick={() =>
                                    setPlayerData({
                                      videoId: extractVideoId(lec.videoUrl),
                                      title: lec.lectureTitle,
                                    })
                                  }
                                  className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md font-medium hover:bg-indigo-200 transition"
                                >
                                  Preview
                                </button>
                              )}

                              <button
                                onClick={() => markAsDone(index, lecIndex)}
                                className={`px-2 py-1 rounded-md transition ${
                                  isDone
                                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                    : "bg-green-100 text-green-700 hover:bg-green-200"
                                }`}
                                disabled={isDone}
                              >
                                {isDone ? "Done" : "Mark Done"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Rating Section */}
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">
              Rate this course
            </h4>
            <Ratting initialRating={3} />
          </div>
        </div>
      </div>

      {/* Right Column: Video Player */}
      <div className="lg:w-1/2 bg-gray-900 rounded-xl shadow-md overflow-hidden sticky top-4 h-fit">
        {playerData ? (
          <div className="p-4">
            <h2 className="text-white text-xl font-semibold mb-4">
              {playerData.title}
            </h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${playerData.videoId}`}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-gray-400 text-lg">
            Select a lecture to start watching
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
