import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/dummyStudentEnrolled';

const StudentsEnrolled = () => {
  const [enrolledStudent, setEnrolledStudent] = useState([]);

  useEffect(() => {
    const fetchEnrolledStudent = async () => {
      setEnrolledStudent(dummyStudentEnrolled);
    };
    fetchEnrolledStudent();
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-5  text-gray-800">🎓 Enrolled Students</h1>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Course Title</th>
                <th className="px-6 py-4">Enrollment Date</th>
              </tr>
            </thead>
            <tbody>
              {enrolledStudent.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 font-semibold">{index + 1}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={item.student.imageUrl}
                      alt={item.student.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-indigo-200"
                    />
                    <span className="font-medium">{item.student.name}</span>
                  </td>
                  <td className="px-6 py-4">{item.courseTitle}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(item.purchaseDate).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsEnrolled;
