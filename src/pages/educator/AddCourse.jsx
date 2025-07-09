import React, { useRef, useState } from 'react';

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  });
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddChapter = () => {
    const newChapter = {
      id: Date.now(),
      title: `Chapter ${chapters.length + 1}`,
      lectures: [],
    };
    setChapters([...chapters, newChapter]);
  };

  const handleLectureSubmit = () => {
    const updatedChapters = chapters.map((chapter) =>
      chapter.id === currentChapterId
        ? { ...chapter, lectures: [...chapter.lectures, lectureDetails] }
        : chapter
    );
    setChapters(updatedChapters);
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    });
    setShowPopup(false);
  };

  return (
    <div className=" bg-[#f9fafb] ">
      <h1 className="text-3xl font-bol d text-gray-800 mb-8 ">Create a New Course</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section - Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Course Title"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="input"
            />
            <input
              type="number"
              placeholder="Price (৳)"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className="input"
            />
            <input
              type="number"
              placeholder="Discount (%)"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="input"
            />
            <input type="file" onChange={handleImageChange} className="input" />
          </div>

          {/* Chapters Section */}
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Course Curriculum</h2>
              <button
                onClick={handleAddChapter}
                className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                + Add Chapter
              </button>
            </div>

            {chapters.map((chapter) => (
              <div key={chapter.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{chapter.title}</h3>
                  <button
                    onClick={() => {
                      setCurrentChapterId(chapter.id);
                      setShowPopup(true);
                    }}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    + Add Lecture
                  </button>
                </div>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {chapter.lectures.map((lec, index) => (
                    <li key={index}>
                      🎥 {lec.lectureTitle} ({lec.lectureDuration})
                      {lec.isPreviewFree && (
                        <span className="ml-1 text-green-600 font-medium">(Free Preview)</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Course Card Preview */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Course Preview</h2>
          <div className="space-y-4">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Course"
                className="w-full h-40 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                No image uploaded
              </div>
            )}
            <div>
              <p className="text-lg font-medium text-gray-700">{courseTitle || 'Course Title'}</p>
              <p className="text-sm text-gray-500">
                ৳{coursePrice || '0.00'}{' '}
                {discount > 0 && (
                  <span className="ml-2 text-green-600">(-{discount}% OFF)</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup for Lecture */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
            <h3 className="text-xl font-semibold mb-4">Add Lecture</h3>
            <input
              type="text"
              placeholder="Lecture Title"
              value={lectureDetails.lectureTitle}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })
              }
              className="input mb-3"
            />
            <input
              type="text"
              placeholder="Duration (e.g. 10min)"
              value={lectureDetails.lectureDuration}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })
              }
              className="input mb-3"
            />
            <input
              type="text"
              placeholder="Video URL"
              value={lectureDetails.lectureUrl}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })
              }
              className="input mb-3"
            />

            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={lectureDetails.isPreviewFree}
                onChange={(e) =>
                  setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })
                }
              />
              <span className="text-sm text-gray-600">Mark as Free Preview</span>
            </label>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-200 rounded text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleLectureSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Lecture
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
