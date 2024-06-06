import React from 'react';

const StudentDashboardPage: React.FC = () => {
  // Dummy course data
  const courses = [
    { id: 1, name: 'Mathematics', instructor: 'John Doe' },
    { id: 2, name: 'Science', instructor: 'Jane Smith' },
    { id: 3, name: 'History', instructor: 'Michael Johnson' },
    { id: 4, name: 'English', instructor: 'Emily Brown' },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Blue navbar */}
      <div className="bg-blue-500 text-white py-4 px-8">
        <h1 className="text-lg font-semibold">Student Dashboard</h1>
        <div className="flex justify-end">
          {/* Profile icon */}
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <button className="underline">Logout</button>
        </div>
      </div>
      {/* Main content area */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <ul className="space-y-2">
          {courses.map(course => (
            <li key={course.id} className="border-b py-2">
              <span className="font-semibold">{course.name}</span> - {course.instructor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
