import React from 'react';

const InstructorDashboardPage: React.FC = () => {
  // Dummy course data
  const courses = [
    { id: 1, name: 'Mathematics', students: ['John Doe', 'Alice Smith'] },
    { id: 2, name: 'Science', students: ['Bob Johnson', 'Emily Brown'] },
    { id: 3, name: 'History', students: ['Michael Davis', 'Sophia Wilson'] },
    { id: 4, name: 'English', students: ['David Martin', 'Olivia Jones'] },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-center mb-8">Instructor Dashboard</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Courses Taught</h3>
          <ul className="space-y-2">
            {courses.map(course => (
              <li key={course.id} className="border-b py-2">
                <span className="font-semibold">{course.name}</span> - {course.students.join(', ')}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Create New Course</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-200 ease-in-out transform hover:scale-105"
              >
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardPage;
